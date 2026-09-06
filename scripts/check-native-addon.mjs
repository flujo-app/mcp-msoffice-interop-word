import { createRequire } from "node:module";
if (process.platform === "win32") {
  try {
    createRequire(import.meta.url)("winax");
  } catch {
    console.error("Word native addon did not install. Use npm 11 or newer, Python, and Visual Studio Desktop development with C++; reinstall with --foreground-scripts to see native build failures. Linux discovery does not require winax.");
    process.exitCode = 1;
  }
}
