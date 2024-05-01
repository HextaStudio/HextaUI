#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const componentName = process.argv[2];
const componentDir = path.join(__dirname, "components", componentName);
console.log(componentDir);

if (!fs.existsSync(componentDir)) {
  console.error(`Component '${componentName}' not found.`);
  process.exit(1);
}

const destinationDir = path.join(
  process.cwd(),
  "ui",
  "components",
  componentName
);
if (!fs.existsSync(destinationDir)) {
  fs.mkdirSync(destinationDir, { recursive: true });
}

const componentFiles = fs.readdirSync(componentDir);

for (const file of componentFiles) {
  const sourcePath = path.join(componentDir, file);
  const destinationPath = path.join(destinationDir, `${componentName}.tsx`);

  fs.copyFileSync(sourcePath, destinationPath);
  console.log(`Copied ${file} to ${destinationPath}`);
}
