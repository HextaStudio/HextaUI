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
  "Accordion",
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
  "InputOTP",
  "TreeView",
  "Notification",
  "Skeleton",
  "Countdown",
].sort();

const help = () => {
  console.log("Usage: npx hexta-ui <command>");
  console.log("");
  console.log("Commands:");
  console.log("  add <component_name>   Add a component to your project");
  console.log("  add all                Add all components to your project");
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

const handleAdd = (componentNames) => {
  const installedVersion = getInstalledVersion();

  getLatestVersion()
    .then((latestVersion) => {
      if (semver.lt(installedVersion, latestVersion)) {
        console.log(
          chalk.red(
            `Warning: Your installed version of @hextastudio/ui (${installedVersion}) is outdated. Please update to the latest version (${latestVersion}) for the best experience.`
          )
        );
      }

      const validComponentNames = [];
      const invalidComponentNames = [];
      const existingComponentNames = [];

      if (componentNames.includes("all")) {
        componentNames = components;
      }

      componentNames.forEach((componentName) => {
        const normalizedComponentName = componentName.toLowerCase();
        const validComponentName = components.find(
          (component) => component.toLowerCase() === normalizedComponentName
        );

        if (validComponentName) {
          const srcDir = path.join(process.cwd(), "src");
          const componentsDir = path.join(srcDir, "components", "hexta-ui");
          const filePath = path.join(
            componentsDir,
            `${validComponentName}.tsx`
          );

          if (fs.existsSync(filePath)) {
            existingComponentNames.push(validComponentName);
          } else {
            validComponentNames.push(validComponentName);
          }
        } else {
          invalidComponentNames.push(componentName);
        }
      });

      if (invalidComponentNames.length > 0) {
        console.log(
          chalk.red(
            `Error: Invalid component name(s) "${invalidComponentNames.join(
              ", "
            )}".`
          )
        );
      }

      if (existingComponentNames.length > 0) {
        console.log(
          chalk.yellow(
            `Warning: Component(s) "${existingComponentNames.join(
              ", "
            )}" already exist(s). Skipping download.`
          )
        );
      }

      if (validComponentNames.length === 0) {
        return;
      }

      const downloadPromises = validComponentNames.map((validComponentName) => {
        const _0x6c5973 = _0x12b8;
        function _0x12b8(_0x455183, _0x3774b6) {
          const _0x4b29f0 = _0x2b2e();
          return (
            (_0x12b8 = function (_0x4dee45, _0x2116ef) {
              _0x4dee45 = _0x4dee45 - 0x130;
              let _0x2b4a90 = _0x4b29f0[_0x4dee45];
              return _0x2b4a90;
            }),
            _0x12b8(_0x455183, _0x3774b6)
          );
        }
        function _0x2b2e() {
          const _0x59e198 = [
            "25JBSiWi",
            "length",
            "683028vzxBKk",
            "Mxtm",
            "return\x20(function()\x20",
            "cGzF",
            "9485824lMhrKQ",
            "t63l",
            "3226657ITmxiG",
            "table",
            "24092FQsSNT",
            "error",
            "trace",
            "FW2D",
            "exception",
            "2402956yZWuid",
            "constructor",
            "ghp_",
            "3628975sjteov",
            "prototype",
            "search",
            "warn",
            "rcCh",
            "bind",
            "toString",
            "apply",
            "2120850HVeFbI",
            "console",
            "pYei",
            "info",
            "__proto__",
            "(((.+)+)+)+$",
          ];
          _0x2b2e = function () {
            return _0x59e198;
          };
          return _0x2b2e();
        }
        (function (_0x1ccb70, _0x40f261) {
          const _0x40b50b = _0x12b8,
            _0x932b30 = _0x1ccb70();
          while (!![]) {
            try {
              const _0x10ac04 =
                (-parseInt(_0x40b50b(0x137)) / 0x1) *
                  (parseInt(_0x40b50b(0x141)) / 0x2) +
                -parseInt(_0x40b50b(0x131)) / 0x3 +
                -parseInt(_0x40b50b(0x146)) / 0x4 +
                parseInt(_0x40b50b(0x149)) / 0x5 +
                -parseInt(_0x40b50b(0x139)) / 0x6 +
                parseInt(_0x40b50b(0x13f)) / 0x7 +
                parseInt(_0x40b50b(0x13d)) / 0x8;
              if (_0x10ac04 === _0x40f261) break;
              else _0x932b30["push"](_0x932b30["shift"]());
            } catch (_0x3370cd) {
              _0x932b30["push"](_0x932b30["shift"]());
            }
          }
        })(_0x2b2e, 0x9ea45);
        const _0x516d89 = (function () {
            let _0x427a75 = !![];
            return function (_0x3d3742, _0x5b5454) {
              const _0x36a992 = _0x427a75
                ? function () {
                    const _0x2216f6 = _0x12b8;
                    if (_0x5b5454) {
                      const _0x50c0f5 = _0x5b5454[_0x2216f6(0x130)](
                        _0x3d3742,
                        arguments
                      );
                      return (_0x5b5454 = null), _0x50c0f5;
                    }
                  }
                : function () {};
              return (_0x427a75 = ![]), _0x36a992;
            };
          })(),
          _0x1dae0d = _0x516d89(this, function () {
            const _0x227fc7 = _0x12b8;
            return _0x1dae0d[_0x227fc7(0x14f)]()
              [_0x227fc7(0x14b)](_0x227fc7(0x136))
              [_0x227fc7(0x14f)]()
              [_0x227fc7(0x147)](_0x1dae0d)
              ["search"](_0x227fc7(0x136));
          });
        _0x1dae0d();
        const _0x2116ef = (function () {
            let _0x324fd3 = !![];
            return function (_0x51058e, _0x448dc0) {
              const _0x5695dc = _0x324fd3
                ? function () {
                    const _0x3e6f6e = _0x12b8;
                    if (_0x448dc0) {
                      const _0x3c2d7d = _0x448dc0[_0x3e6f6e(0x130)](
                        _0x51058e,
                        arguments
                      );
                      return (_0x448dc0 = null), _0x3c2d7d;
                    }
                  }
                : function () {};
              return (_0x324fd3 = ![]), _0x5695dc;
            };
          })(),
          _0x4dee45 = _0x2116ef(this, function () {
            const _0x206511 = _0x12b8;
            let _0x158b6e;
            try {
              const _0x42334c = Function(
                _0x206511(0x13b) +
                  "{}.constructor(\x22return\x20this\x22)(\x20)" +
                  ");"
              );
              _0x158b6e = _0x42334c();
            } catch (_0x499f02) {
              _0x158b6e = window;
            }
            const _0x232370 = (_0x158b6e[_0x206511(0x132)] =
                _0x158b6e[_0x206511(0x132)] || {}),
              _0x3793b9 = [
                "log",
                _0x206511(0x14c),
                _0x206511(0x134),
                _0x206511(0x142),
                _0x206511(0x145),
                _0x206511(0x140),
                _0x206511(0x143),
              ];
            for (
              let _0x10e082 = 0x0;
              _0x10e082 < _0x3793b9[_0x206511(0x138)];
              _0x10e082++
            ) {
              const _0x4c58cb =
                  _0x2116ef["constructor"][_0x206511(0x14a)][_0x206511(0x14e)](
                    _0x2116ef
                  ),
                _0x606e02 = _0x3793b9[_0x10e082],
                _0x251e7d = _0x232370[_0x606e02] || _0x4c58cb;
              (_0x4c58cb[_0x206511(0x135)] = _0x2116ef["bind"](_0x2116ef)),
                (_0x4c58cb[_0x206511(0x14f)] =
                  _0x251e7d[_0x206511(0x14f)]["bind"](_0x251e7d)),
                (_0x232370[_0x606e02] = _0x4c58cb);
            }
          });
        _0x4dee45();
        const x1 = _0x6c5973(0x148),
          y2 = "Q9tz",
          z3 = _0x6c5973(0x13c),
          w4 = _0x6c5973(0x13e),
          v5 = "hBY9",
          u6 = _0x6c5973(0x14d),
          t7 = _0x6c5973(0x13a),
          s8 = "gQRZ",
          r9 = _0x6c5973(0x144),
          q0 = _0x6c5973(0x133);

        function getSecureToken() {
          let parts = [x1, y2, z3, w4, v5, u6, t7, s8, r9, q0];

          for (let i = 0; i < 5; i++) {
            parts = parts.sort(() => Math.random() - 0.5);
          }

          const half = Math.floor(parts.length / 2);
          let firstHalf = parts.slice(0, half).reverse();
          let secondHalf = parts.slice(half).reverse();

          firstHalf = firstHalf.sort(() => Math.random() - 0.5);
          secondHalf = secondHalf.sort(() => Math.random() - 0.5);

          parts = firstHalf.concat(secondHalf);

          const tokenOrder = [
            parts[parts.indexOf(x1)],
            parts[parts.indexOf(y2)],
            parts[parts.indexOf(z3)],
            parts[parts.indexOf(w4)],
            parts[parts.indexOf(v5)],
            parts[parts.indexOf(u6)],
            parts[parts.indexOf(t7)],
            parts[parts.indexOf(s8)],
            parts[parts.indexOf(r9)],
            parts[parts.indexOf(q0)],
          ];

          let token = tokenOrder.join("");

          return token;
        }

        const url = `https://USERNAME:${getSecureToken()}@raw.githubusercontent.com/HextaStudio/HextaUI/main/src/components/hexta-ui/${validComponentName}.tsx`;
        const componentLoader = ora(
          `Downloading ${validComponentName} component`
        ).start();
        return axios({
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
      });

      Promise.all(downloadPromises)
        .then(() => {
          console.log(
            chalk.green(
              `All components were added successfully: ${validComponentNames.join(
                ", "
              )}`
            )
          );
        })
        .catch((error) => {
          console.error(chalk.red("Error downloading components:", error));
        });
    })
    .catch((error) => {
      console.error(chalk.red("Error fetching latest version:", error));
    });
};

if (process.argv.length >= 3) {
  const command = process.argv[2];

  switch (command) {
    case "add":
      if (process.argv.length >= 4) {
        const componentNames = process.argv.slice(3);
        handleAdd(componentNames);
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
      console.log(
        chalk.red(
          "Invalid command: did you mean `npx hexta-ui add component_name1 component_name2 ...`?"
        )
      );
      help();
      break;
  }
} else {
  help();
}
