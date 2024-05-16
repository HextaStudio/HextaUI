#!/usr/bin/env node

import { createRequire } from "module";
const require = createRequire(import.meta.url);

import ora from "ora";
import path from "path";
import fs from "fs";
import axios from "axios";
import semver from "semver";
import { exec } from "child_process";
import process from "process";
import chalk from "chalk";

const components = [
  "AlertDialog",
  "Avatar",
  "Badge",
  "Breadcrumb",
  "Button",
  "Card",
  "Checkbox",
  "Datepicker",
  "DragAndDrop",
  "FileUpload",
  "Hero",
  "Input",
  "Loader",
  "Menu",
  "ProgressBar",
  "Select",
  "Slider",
  "Stepper",
  "Table",
  "Tabs",
  "Toast",
  "Toggle",
  "Tooltip",
  "Footer",
  "Navbar",
  "InputOTP",
].sort();

const help = () => {
  console.log("Usage: npx hexta-ui <command>");
  console.log("");
  console.log("Commands:");
  console.log("  add <component_name>   Add a component to your project");
  console.log("  list                   List all available components");
  console.log("  help                   Show this help message");
};

const listComponents = () => {
  console.log("Available components:");
  components.forEach((component) => {
    console.log(`- ${component}`);
  });
};

const getLatestVersion = () => {
  return new Promise((resolve, reject) => {
    exec("npm view @hextastudio/ui version", (error, stdout, stderr) => {
      if (error) {
        reject(error);
      } else {
        resolve(stdout.trim());
      }
    });
  });
};

const getInstalledVersion = () => {
  try {
    const packageJson = require(path.join(
      process.cwd(),
      "node_modules",
      "@hextastudio/ui",
      "package.json"
    ));
    return packageJson.version;
  } catch (error) {
    return null;
  }
};

const handleAdd = (componentName) => {
  const installedVersion = getInstalledVersion();
  if (!installedVersion) {
    console.log(
      "Error: @hextastudio/ui package not found. Please install it first."
    );
    return;
  }

  getLatestVersion()
    .then((latestVersion) => {
      if (semver.lt(installedVersion, latestVersion)) {
        console.log(
          chalk.red(
            `Warning: Your installed version of @hextastudio/ui (${installedVersion}) is outdated. Please update to the latest version (${latestVersion}) for the best experience.`
          )
        );
      }

      const normalizedComponentName = componentName.toLowerCase();
      const validComponentName = components.find(
        (component) => component.toLowerCase() === normalizedComponentName
      );

      if (!validComponentName) {
        console.log(
          chalk.red(`Error: Invalid component name "${componentName}".`)
        );
        return;
      }

      const url = `https://raw.githubusercontent.com/HextaStudio/HextaUI/main/src/components/hexta-ui/${validComponentName}.tsx`;
      console.log(url);
      const componentLoader = ora(
        `Downloading ${validComponentName} component`
      ).start();
      axios({
        method: "get",
        url: url,
        responseType: "stream",
      })
        .then(function (response) {
          const srcDir = path.join(process.cwd(), "src");
          const componentsDir = path.join(srcDir, "components", "hexta-ui");
          fs.mkdirSync(componentsDir, { recursive: true });
          const filePath = path.join(
            componentsDir,
            `${validComponentName}.tsx`
          );
          response.data.pipe(fs.createWriteStream(filePath));
          componentLoader.succeed(
            chalk.green(
              `${validComponentName} component was added successfully — Guide to use ${validComponentName}, https://ui.hextastudio.in/docs/components/layout/${validComponentName}`
            )
          );
        })
        .catch(function (error) {
          componentLoader.fail(
            chalk.red(
              `Error adding ${validComponentName} component: ${error.message}`
            )
          );
        });
    })
    .catch((error) => {
      console.error(chalk.red("Error fetching latest version:", error));
    });
};

if (process.argv.length >= 4 && process.argv[2] === "add") {
  const componentName = process.argv[3];
  handleAdd(componentName);
} else {
  console.log(
    chalk.red(
      "Invalid command: did you mean `npx hexta-ui add component_name`?"
    )
  );
}

if (process.argv.length >= 3) {
  const command = process.argv[2];

  switch (command) {
    case "add":
      if (process.argv.length >= 4) {
        const componentName = process.argv[3];
        handleAdd(componentName);
      } else {
        console.log("Error: Missing component name");
        help();
      }
      break;
    case "list":
      listComponents();
      break;
    case "help":
      help();
      break;
    default:
      console.log(`Invalid command: ${command}`);
      help();
      break;
  }
} else {
  help();
}
