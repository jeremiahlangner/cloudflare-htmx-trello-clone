import { build } from 'esbuild';
import { readFileSync, writeFileSync } from "fs";

try {
  await build({
    entryPoints: [
      './assets/styles.css'
    ],
    outfile: 'styles.min.css',
    minify: true,
    bundle: true,
  });

  await build({
    entryPoints: [
      './src/sw.ts'
    ],
    outfile: './assets/sw.js',
    format: 'esm',
    minify: true,
    bundle: true,
  });

  const styles = readFileSync("assets/styles.min.css", { encoding: "utf8" });
  writeFileSync("src/templates/styles.json", JSON.stringify({ styles }), {
    encoding: "utf8",
  });

  const sw = readFileSync('assets/sw.js', { encoding: 'utf8' });
  writeFileSync("src/templates/sw.json", JSON.stringify({ sw }), {
    encoding: "utf8",
  });
  
  await build({
    entryPoints: [
      './src/worker.ts'
    ],
    outfile: './build/worker.js',
    minify: true,
    format: 'esm',
    bundle: true,
  });
} catch (e) {
  console.error(e);
  process.exit(1);
}
