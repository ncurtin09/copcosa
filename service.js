const services = Array.isArray(window.servicesData) ? window.servicesData : [];
const params = new URLSearchParams(window.location.search);
const selectedId = params.get("id") || "proyectos";
const service = services.find((item) => item.id === selectedId) || services.find((item) => item.id === "proyectos") || services[0];
const iconForServicePage = window.getServiceIcon || ((item) => item.icon);

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderDescription(text) {
  const lines = text.split(/\r?\n/);
  const chunks = [];
  let paragraph = [];
  let list = [];

  function flushParagraph() {
    if (paragraph.length) {
      chunks.push(`<p>${escapeHtml(paragraph.join(" "))}</p>`);
      paragraph = [];
    }
  }

  function flushList() {
    if (list.length) {
      chunks.push(`<ul>${list.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`);
      list = [];
    }
  }

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) {
      flushParagraph();
      flushList();
      continue;
    }

    const bullet = line.match(/^[-*•]\s+(.+)$/);
    if (bullet) {
      flushParagraph();
      list.push(bullet[1]);
      continue;
    }

    flushList();
    paragraph.push(line);
  }

  flushParagraph();
  flushList();
  return chunks.join("");
}

if (service) {
  document.title = `${service.title} | COPCO S.A.S`;
  document.querySelector("#serviceCategory").textContent = service.category;
  document.querySelector("#servicePageIcon").innerHTML = iconForServicePage(service);
  document.querySelector("#servicePageTitle").textContent = service.title;
  document.querySelector("#servicePageIntro").textContent = service.summary;
  document.querySelector("#serviceScope").innerHTML = renderDescription(service.description);
}
