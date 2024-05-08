#!/usr/bin/env node
import ora from "ora";
import path from "path";
import fs from "fs";
import axios from "axios";
import inquirer from "inquirer";

const components = ["Select"];
const tailwindCSSSetupLink =
  "https://ui.hextastudio.in/docs/resources/install-tailwind";
const frameworks = ["Next.js", "Vue", "React"];

if (process.argv[2] === "add") {
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
        message: "Which component do you want to download?",
        choices: components,
      },
    ])
    .then((answers) => {
      const url = `https://raw.githubusercontent.com/HextaStudio/HextaUI/main/cli/components/${answers.component}.js`;
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
          const componentsDir = path.join(srcDir, "components");
          fs.mkdirSync(componentsDir, { recursive: true });
          const filePath = path.join(componentsDir, `${answers.component}.js`);
          response.data.pipe(fs.createWriteStream(filePath));
          componentLoader.succeed(
            `${answers.component} component was added successfully`
          );

          updateTailwindConfig(componentLoader, answers.framework);
        })
        .catch(function (error) {
          componentLoader.fail(
            `Error adding ${answers.component} component: ${error.message}`
          );
        });
    });
} else {
  console.log("Invalid command: did you mean `npx hexta-ui add`?");
}

function updateTailwindConfig(componentLoader, framework) {
  const tailwindConfigFiles = {
    "Next.js": ["tailwind.config.js", "tailwind.config.cjs"],
    Vue: ["tailwind.config.js"],
    React: ["tailwind.config.js"],
  };

  const configFiles = tailwindConfigFiles[framework];

  for (const configFile of configFiles) {
    const configFilePath = path.join(process.cwd(), configFile);
    if (fs.existsSync(configFilePath)) {
      updateConfigFile(configFilePath, componentLoader);
      return;
    }
  }

  componentLoader.warn(
    `Tailwind CSS configuration not found for ${framework}. Please set up Tailwind CSS: ${tailwindCSSSetupLink}`
  );
}

function updateConfigFile(configFilePath, componentLoader) {
  const configContent = fs.readFileSync(configFilePath, "utf-8");
  const updatedContent = configContent.replace(
    /content:\s*\[([\s\S]*?)\]/,
    (match, contentArray) => {
      const trimmedArray = contentArray.trim();
      const newContentArray = trimmedArray
        ? `${trimmedArray} "./src/components/**/*.{js,ts,jsx,tsx,mdx}"`
        : '"./src/components/**/*.{js,ts,jsx,tsx,mdx}",';
      return `content: [${newContentArray}]`;
    }
  );

  if (updatedContent !== configContent) {
    fs.writeFileSync(configFilePath, updatedContent);
    componentLoader.succeed("Tailwind CSS configuration updated successfully");
  } else {
    componentLoader.warn("Tailwind CSS configuration already up-to-date");
  }
}
