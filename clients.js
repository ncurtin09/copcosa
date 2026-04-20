const clientGrid = document.querySelector("#clientLogoGrid");
const clientEmpty = document.querySelector("#clientEmpty");
const imageExtensions = /\.(avif|gif|jpe?g|png|svg|webp)$/i;
const clients = Array.isArray(window.clientImages) ? window.clientImages : [];

function titleFromFile(path) {
  const fileName = path.split("/").pop() || "";
  return fileName.replace(imageExtensions, "").replace(/[-_]+/g, " ").trim() || "Cliente";
}

function renderClients() {
  const images = clients.filter((client) => imageExtensions.test(typeof client === "string" ? client : client.src || ""));

  if (!clientGrid) return;

  if (images.length === 0) {
    clientEmpty.hidden = false;
    return;
  }

  clientEmpty.hidden = true;
  clientGrid.innerHTML = images
    .map((client) => {
      const src = typeof client === "string" ? client : client.src;
      const name = typeof client === "string" ? titleFromFile(src) : client.name || titleFromFile(src);
      return `
        <article class="client-logo-card">
          <img src="${src}" alt="${name}">
        </article>
      `;
    })
    .join("");
}

renderClients();
