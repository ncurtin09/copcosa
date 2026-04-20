const fs = require("fs");
const path = require("path");

const sourcePath = path.join(__dirname, "services.txt");
const outputPath = path.join(__dirname, "services-data.js");

const categoryKeys = {
  "Gerencia De Proyectos": "proyectos",
  "Gestion Logistica": "logistica",
  HSEQ: "hseq",
  Ingenieria: "ingenieria",
  Interventoria: "interventoria",
  "Otros Servicios": "otros",
};

const text = fs.readFileSync(sourcePath, "utf8");
const services = [];
let current = null;
let multilineKey = null;
let multilineValue = [];

for (const rawLine of text.split(/\r?\n/)) {
  const trimmedLine = rawLine.trim();

  if (multilineKey) {
    if (trimmedLine === '"""') {
      current[multilineKey] = multilineValue.join("\n").trim();
      multilineKey = null;
      multilineValue = [];
    } else {
      multilineValue.push(rawLine);
    }
    continue;
  }

  const line = trimmedLine;
  if (!line || line.startsWith("#")) continue;

  const section = line.match(/^\[([a-z0-9-]+)\]$/i);
  if (section) {
    if (current) services.push(current);
    current = { id: section[1] };
    continue;
  }

  if (!current) continue;
  const equalsIndex = line.indexOf("=");
  if (equalsIndex === -1) continue;

  const key = line.slice(0, equalsIndex).trim();
  const value = line.slice(equalsIndex + 1).trim();

  if (value === '"""') {
    multilineKey = key;
    multilineValue = [];
    continue;
  }

  current[key] = value;
}

if (current) services.push(current);

for (const service of services) {
  if (!service.title || !service.category || !service.description) {
    throw new Error(`Missing required fields for service: ${service.id}`);
  }

  service.categoryKey = categoryKeys[service.category] || "otros";
  service.icon = service.icon || service.title.slice(0, 1).toUpperCase();
  service.summary = service.summary || service.description;
}

const output = `window.serviceCategories = ${JSON.stringify(
  Object.entries(categoryKeys).map(([label, key]) => ({ label, key })),
  null,
  2,
)};\n\nwindow.servicesData = ${JSON.stringify(services, null, 2)};\n`;

fs.writeFileSync(outputPath, output);
console.log(`Updated ${path.basename(outputPath)} with ${services.length} service(s).`);
