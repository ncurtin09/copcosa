const video = document.querySelector("#scrollVideo");
const header = document.querySelector(".site-header");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const services = Array.isArray(window.servicesData) ? window.servicesData : [];

function updateHeader() {
  header.classList.toggle("is-solid", window.scrollY > 80);
}

if (video) {
  if (reduceMotion) {
    video.pause();
  } else {
    video.play().catch(() => {});
  }
}

const serviceCards = document.querySelector("#serviceCards");
const scrollCue = document.querySelector(".scroll-cue");
let activeServiceFilter = "proyectos";
const iconForServiceCard = window.getServiceIcon || ((service) => service.icon);

if (scrollCue) {
  scrollCue.addEventListener("click", (event) => {
    const target = document.querySelector(scrollCue.getAttribute("href"));
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  });
}

function renderServices(filter = activeServiceFilter) {
  if (!serviceCards) return;

  activeServiceFilter = filter;
  const visibleServices = filter === "all" ? services : services.filter((service) => service.categoryKey === filter);

  serviceCards.innerHTML = visibleServices
    .map(
      (service) => `
        <article class="service-card" data-category="${service.categoryKey}">
          <div class="service-icon" aria-hidden="true">${iconForServiceCard(service)}</div>
          <h3>${service.title}</h3>
          <a class="read-more" href="service.html?id=${service.id}">Leer mas</a>
        </article>
      `,
    )
    .join("");
}

document.querySelectorAll(".service-filter").forEach((filterButton) => {
  filterButton.addEventListener("click", () => {
    const filter = filterButton.dataset.filter;
    document.querySelectorAll(".service-filter").forEach((item) => {
      item.classList.toggle("is-active", item === filterButton);
    });
    renderServices(filter);
  });
});

if (serviceCards) {
  renderServices();
}

window.addEventListener(
  "scroll",
  () => {
    updateHeader();
  },
  { passive: true },
);
updateHeader();
