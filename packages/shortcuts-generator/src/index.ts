import { exec } from "child_process";
import { promises as fs } from "fs";
import os from "os";
import path from "path";

import apps from "../../../public/apps.json";

const templateDir = path.join(__dirname, "../../../public/shortcut.template.plist");
const shortcutDir = path.join(__dirname, "../../../public/shortcuts");

const generateShortcuts = async () => {
  const templatePlist = await fs.readFile(templateDir, "utf-8");
  // must be recursive because parallel execution is not supported
  for (const app of apps) {
    console.log(`Generating shortcut for ${app.name}`);
    const shortcut = templatePlist.replace("{{appName}}", app.name);
    console.log(`Writing shortcut for ${app.name}`);
    await fs.writeFile(path.join(shortcutDir, `/${app.name} Digital Break.shortcut`), shortcut);
    console.log(`Signing shortcut for ${app.name}`);
    await execShellCommand(
      `shortcuts sign -m anyone -i ${path.join(
        shortcutDir,
        `/${app.name} Digital Break.shortcut`.replace(/(\s+)/g, "\\$1")
      )} -o ${path.join(shortcutDir, `/${app.name} Digital Break.shortcut`).replace(/(\s+)/g, "\\$1")}`
    ).then(() => console.log(`Signed shortcut for ${app.name}`));
  }
};

if (os.platform() !== "darwin") {
  console.error("ERROR: shortcut generation stopped because you are not on macOS. Signing shortcuts requires macOS.");
  process.exit(0);
}

const time = new Date().getTime();

void generateShortcuts().then(() => {
  console.log(`took ${new Date().getTime() - time}ms`);
});

const execShellCommand = (cmd: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    exec(cmd, (error: any, stdout: string | PromiseLike<string>, stderr: string | PromiseLike<string>) => {
      if (error) {
        console.warn(error);
        reject(error);
      }
      resolve(stdout ? stdout : stderr);
    });
  });
};
