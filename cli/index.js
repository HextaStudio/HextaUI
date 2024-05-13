#!/usr/bin/env node

import { createRequire } from "module";
const require = createRequire(import.meta.url);

import ora from "ora";
import path from "path";
import fs from "fs";
import axios from "axios";
import inquirer from "inquirer";
import semver from "semver";
import { exec } from "child_process";

const components = [
  "AlertDialog",
  "Avatar",
  "Badge",
  "Breadcrumb",
  "Button",
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
].sort();

const tailwindCSSSetupLink =
  "https://ui.hextastudio.in/docs/resources/install-tailwind";
const frameworks = ["Next.js", "React"];

function getLatestVersion() {
  return new Promise((resolve, reject) => {
    exec("npm view @hextastudio/ui version", (error, stdout, stderr) => {
      if (error) {
        reject(error);
      } else {
        resolve(stdout.trim());
      }
    });
  });
}

function getInstalledVersion() {
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
}
function handleAdd() {
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
          `Warning: Your installed version of @hextastudio/ui (${installedVersion}) is outdated. Please update to the latest version (${latestVersion}) for the best experience.`
        );
      }

      inquirer
        .prompt([
          {
            type: "list",
            name: "framework",
            message: "Which framework are you using?",
            choices: frameworks,
          },
          {
            type: "list",
            name: "component",
            message: "Which component would you like to install?",
            choices: components,
          },
        ])
        .then((answers) => {
          const url = `https://raw.githubusercontent.com/HextaStudio/HextaUI/main/src/components/hexta-ui/${answers.component}.tsx`;
          console.log(url);
          const componentLoader = ora(
            `Downloading ${answers.component} component`
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
                `${answers.component}.tsx`
              );
              response.data.pipe(fs.createWriteStream(filePath));
              componentLoader.succeed(
                `${answers.component} component was added successfully — Guide to use ${answers.component}, https://ui.hextastudio.in/docs/components/layout/${answers.component}`
              );
            })
            .catch(function (error) {
              componentLoader.fail(
                `Error adding ${answers.component} component: ${error.message}`
              );
            });
        });
    })
    .catch((error) => {
      console.error("Error fetching latest version:", error);
    });
}

if (process.argv[2] === "add") {
  handleAdd();
} else {
  console.log("Invalid command: did you mean `npx hexta-ui add`?");
}
