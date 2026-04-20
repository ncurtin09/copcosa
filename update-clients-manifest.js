const fs = require("fs");
const path = require("path");

const clientDir = path.join(__dirname, "clients");
const manifestPath = path.join(clientDir, "manifest.js");
const imageExtensions = new Set([".avif", ".gif", ".jpeg", ".jpg", ".png", ".svg", ".webp"]);

const images = fs
  .readdirSync(clientDir, { withFileTypes: true })
  .filter((entry) => entry.isFile() && imageExtensions.has(path.extname(entry.name).toLowerCase()))
  .map((entry) => `clients/${entry.name}`)
  .sort((a, b) => a.localeCompare(b));

fs.writeFileSync(manifestPath, `window.clientImages = ${JSON.stringify(images, null, 2)};\n`);
console.log(`Updated ${path.relative(__dirname, manifestPath)} with ${images.length} image(s).`);
