#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const https = require("https");

const componentName = process.argv[2];
if (!componentName) {
  console.error("Please provide a component name to install.");
  process.exit(1);
}

const componentUrl = `https://example.com/components/${componentName}.js`;

const outputPath = path.join(process.cwd(), `${componentName}.js`);

const file = fs.createWriteStream(outputPath);
https
  .get(componentUrl, (response) => {
    response.pipe(file);
    file.on("finish", () => {
      file.close();
      console.log(`${componentName} component installed successfully!`);
    });
  })
  .on("error", (err) => {
    fs.unlink(outputPath);
    console.error(
      `Error installing ${componentName} component: ${err.message}`
    );
  });
