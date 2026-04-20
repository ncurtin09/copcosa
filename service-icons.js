// Service icons from Tabler Icons, an open-source MIT licensed SVG icon set.
// Source: https://tabler.io/icons
const serviceIcons = {
  estrategia: `
    <svg viewBox="0 0 24 24" aria-hidden="true" data-icon="target-arrow">
      <path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
      <path d="M12 7a5 5 0 1 0 5 5"></path>
      <path d="M13 3.055a9 9 0 1 0 7.941 7.945"></path>
      <path d="M15 6v3h3l3 -3h-3v-3l-3 3"></path>
      <path d="M15 9l-3 3"></path>
    </svg>
  `,
  proyectos: `
    <svg viewBox="0 0 24 24" aria-hidden="true" data-icon="list-check">
      <path d="M3.5 5.5l1.5 1.5l2.5 -2.5"></path>
      <path d="M3.5 11.5l1.5 1.5l2.5 -2.5"></path>
      <path d="M3.5 17.5l1.5 1.5l2.5 -2.5"></path>
      <path d="M11 6l9 0"></path>
      <path d="M11 12l9 0"></path>
      <path d="M11 18l9 0"></path>
    </svg>
  `,
  activos: `
    <svg viewBox="0 0 24 24" aria-hidden="true" data-icon="building-warehouse">
      <path d="M3 21v-13l9 -4l9 4v13"></path>
      <path d="M13 13h4v8h-10v-6h6"></path>
      <path d="M13 21v-9a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v3"></path>
    </svg>
  `,
  compras: `
    <svg viewBox="0 0 24 24" aria-hidden="true" data-icon="shopping-cart-check">
      <path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
      <path d="M11.5 17h-5.5v-14h-2"></path>
      <path d="M6 5l14 1l-1 7h-13"></path>
      <path d="M15 19l2 2l4 -4"></path>
    </svg>
  `,
  medicion: `
    <svg viewBox="0 0 24 24" aria-hidden="true" data-icon="ruler-measure">
      <path d="M19.875 12c.621 0 1.125 .512 1.125 1.143v5.714c0 .631 -.504 1.143 -1.125 1.143h-15.875a1 1 0 0 1 -1 -1v-5.857c0 -.631 .504 -1.143 1.125 -1.143h15.75"></path>
      <path d="M9 12v2"></path>
      <path d="M6 12v3"></path>
      <path d="M12 12v3"></path>
      <path d="M18 12v3"></path>
      <path d="M15 12v2"></path>
      <path d="M3 3v4"></path>
      <path d="M3 5h18"></path>
      <path d="M21 3v4"></path>
    </svg>
  `,
  riesgo: `
    <svg viewBox="0 0 24 24" aria-hidden="true" data-icon="shield-exclamation">
      <path d="M15.04 19.745c-.942 .551 -1.964 .976 -3.04 1.255a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 .195 6.015"></path>
      <path d="M19 16v3"></path>
      <path d="M19 22v.01"></path>
    </svg>
  `,
  socioambiental: `
    <svg viewBox="0 0 24 24" aria-hidden="true" data-icon="plant-2">
      <path d="M2 9a10 10 0 1 0 20 0"></path>
      <path d="M12 19a10 10 0 0 1 10 -10"></path>
      <path d="M2 9a10 10 0 0 1 10 10"></path>
      <path d="M12 4a9.7 9.7 0 0 1 2.99 7.5"></path>
      <path d="M9.01 11.5a9.7 9.7 0 0 1 2.99 -7.5"></path>
    </svg>
  `,
  sistemas: `
    <svg viewBox="0 0 24 24" aria-hidden="true" data-icon="sitemap">
      <path d="M3 17a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2l0 -2"></path>
      <path d="M15 17a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2l0 -2"></path>
      <path d="M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2l0 -2"></path>
      <path d="M6 15v-1a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v1"></path>
      <path d="M12 9l0 3"></path>
    </svg>
  `,
  tecnologica: `
    <svg viewBox="0 0 24 24" aria-hidden="true" data-icon="device-desktop-cog">
      <path d="M12 16h-8a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v7"></path>
      <path d="M7 20h5"></path>
      <path d="M9 16v4"></path>
      <path d="M17.001 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
      <path d="M19.001 15.5v1.5"></path>
      <path d="M19.001 21v1.5"></path>
      <path d="M22.032 17.25l-1.299 .75"></path>
      <path d="M17.27 20l-1.3 .75"></path>
      <path d="M15.97 17.25l1.3 .75"></path>
      <path d="M20.733 20l1.3 .75"></path>
    </svg>
  `,
  ingenierias: `
    <svg viewBox="0 0 24 24" aria-hidden="true" data-icon="tool">
      <path d="M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6 -6a6 6 0 0 1 -8 -8l3.5 3.5"></path>
    </svg>
  `,
  simulaciones: `
    <svg viewBox="0 0 24 24" aria-hidden="true" data-icon="calculator">
      <path d="M4 5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -14"></path>
      <path d="M8 8a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1l0 -1"></path>
      <path d="M8 14l0 .01"></path>
      <path d="M12 14l0 .01"></path>
      <path d="M16 14l0 .01"></path>
      <path d="M8 17l0 .01"></path>
      <path d="M12 17l0 .01"></path>
      <path d="M16 17l0 .01"></path>
    </svg>
  `,
  interventoria: `
    <svg viewBox="0 0 24 24" aria-hidden="true" data-icon="clipboard-search">
      <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h4.5m7.5 -10v-4a2 2 0 0 0 -2 -2h-2"></path>
      <path d="M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2"></path>
      <path d="M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
      <path d="M20.2 20.2l1.8 1.8"></path>
    </svg>
  `,
  consultorias: `
    <svg viewBox="0 0 24 24" aria-hidden="true" data-icon="messages">
      <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10"></path>
      <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2"></path>
    </svg>
  `,
  financiera: `
    <svg viewBox="0 0 24 24" aria-hidden="true" data-icon="chart-bar">
      <path d="M3 13a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -6"></path>
      <path d="M15 9a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -10"></path>
      <path d="M9 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -14"></path>
      <path d="M4 20h14"></path>
    </svg>
  `,
  juridica: `
    <svg viewBox="0 0 24 24" aria-hidden="true" data-icon="scale">
      <path d="M7 20l10 0"></path>
      <path d="M6 6l6 -1l6 1"></path>
      <path d="M12 3l0 17"></path>
      <path d="M9 12l-3 -6l-3 6a3 3 0 0 0 6 0"></path>
      <path d="M21 12l-3 -6l-3 6a3 3 0 0 0 6 0"></path>
    </svg>
  `,
  predial: `
    <svg viewBox="0 0 24 24" aria-hidden="true" data-icon="map-check">
      <path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v9"></path>
      <path d="M9 4v13"></path>
      <path d="M15 7v8"></path>
      <path d="M15 19l2 2l4 -4"></path>
    </svg>
  `,
};

function getServiceIcon(service) {
  return serviceIcons[service.id] || serviceIcons[service.categoryKey] || serviceIcons.proyectos;
}

window.getServiceIcon = getServiceIcon;
