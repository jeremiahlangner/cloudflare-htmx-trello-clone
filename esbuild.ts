import { build } from "esbuild";
import { readFileSync, writeFileSync } from "fs";
async function Build() {
  try {
    // build styles first to minify and implement into dist worker
    await build({
      entryPoints: ["./assets/styles.css"], // TODO: convert to SCSS
      outfile: "./assets/styles.min.css",
      minify: true,
      bundle: true,
    });

    // build service worker file to integrate in bundle as servable text file
    await build({
      entryPoints: ["./src/sw.ts"],
      outfile: "./assets/sw.js",
      format: "esm",
      minify: true,
      bundle: true,
      treeShaking: true,
    });

    // add styles to build
    const styles = readFileSync("assets/styles.min.css", { encoding: "utf8" });
    writeFileSync("src/templates/styles.json", JSON.stringify({ styles }), {
      encoding: "utf8",
    });

    // add service worker to build
    const sw = readFileSync("assets/sw.js", { encoding: "utf8" });
    writeFileSync("src/templates/sw.json", JSON.stringify({ sw }), {
      encoding: "utf8",
    });

    // build with all imports
    await build({
      entryPoints: ["./src/worker.ts"],
      outfile: "./build/worker.js",
      minify: true,
      format: "esm",
      bundle: true,
      treeShaking: true,
    });
  } catch (e) {
    console.error(e); // I prefer this to debug for something this simple.
    process.exit(1);
  }
}
Build().then(() => process.exit(0));
