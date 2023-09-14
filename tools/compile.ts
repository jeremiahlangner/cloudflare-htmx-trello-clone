import { readFileSync, writeFileSync } from "fs";

const styles = readFileSync("assets/styles.min.css", { encoding: "utf8" });
writeFileSync("src/templates/styles.json", JSON.stringify({ styles }), {
  encoding: "utf8",
});

