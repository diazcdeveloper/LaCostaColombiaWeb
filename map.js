/* ============================================
   map.js — Inicialización del mapa Leaflet
   Sección "Where We Are" en index.html.
   Para retirar: elimina este archivo,
   el <link href="map.css"> y el bloque
   <section class="donde-estamos"> en index.html.
   ============================================ */

(function () {
  const LAS_FLORES_COORDS = [11.042164833910492, -74.8293125958409];
  const ZOOM_INICIAL = 13;

  // --- Inicializar mapa ---
  const map = L.map("donde-estamos-map", {
    center: LAS_FLORES_COORDS,
    zoom: ZOOM_INICIAL,
    scrollWheelZoom: false,
  });

  // --- Capa de mosaico (OpenStreetMap) ---
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // --- Ícono pin personalizado (circular) ---
  const heartIcon = L.icon({
    iconUrl: "images/pin.png",
    iconSize: [60, 60],
    iconAnchor: [35, 70],
    popupAnchor: [0, -74],
  });

  const PESCA_MILAGROSA_COORDS = [10.933616605023385, -74.83335924577953];
  const FUNDEPCAR_COORDS        = [11.041705745325483, -74.82575055184907];
  const SALUD_HOY_COORDS        = [10.940711777662699, -74.79160758898816];

  // --- Marcador 1: Construyendo Casa Firme ---
  const marcador = L.marker(LAS_FLORES_COORDS, { icon: heartIcon }).addTo(map);

  marcador.bindPopup(`
    <p class="mapa-popup-titulo">Construyendo Casa Firme Mission</p>
    <p class="mapa-popup-descripcion">
      Las Flores, Barranquilla, Colombia.<br>
      Feeding and educating children in the community.
    </p>
    <img class="mapa-popup-img" src="images/maps/casafirmemapa.jpg" alt="Construyendo Casa Firme Mission" />
    <br>
    <a class="" href="/galeryconstruyendocasafirme.html">Read more</a>
  `);

  // --- Marcador 2: La Pesca Milagrosa ---
  const marcadorPesca = L.marker(PESCA_MILAGROSA_COORDS, { icon: heartIcon }).addTo(map);

  marcadorPesca.bindPopup(`
    <p class="mapa-popup-titulo">La Pesca Milagrosa</p>
    <p class="mapa-popup-descripcion">
      A multi-campus ministry dedicated to evangelism and youth leadership in hard-to-reach Caribbean communities.
    </p>
    <img class="mapa-popup-img" src="images/maps/lapescamapa.jpg" alt="La Pesca Milagrosa" />
    <br>
    <a class="" href="/galerypescamilagrosa.html">Read more</a>
  `);

  // --- Marcador 3: Fundepcar ---
  const marcadorFundepcar = L.marker(FUNDEPCAR_COORDS, { icon: heartIcon }).addTo(map);

  marcadorFundepcar.bindPopup(`
    <p class="mapa-popup-titulo">Fundepcar</p>
    <p class="mapa-popup-descripcion">
      Transforming lives in the Las Flores neighborhood through sports, mentorship, and violence prevention.
    </p>
    <img class="mapa-popup-img" src="images/maps/fundepcarmap.jpg" alt="Fundepcar" />
    <br>
    <a class="" href="/galeryfundepcar.html">Read more</a>
  `);

  // --- Marcador 4: Salud Hoy ---
  const marcadorSaludHoy = L.marker(SALUD_HOY_COORDS, { icon: heartIcon }).addTo(map);

  marcadorSaludHoy.bindPopup(`
    <p class="mapa-popup-titulo">Salud Hoy</p>
    <p class="mapa-popup-descripcion">
      Delivering essential healthcare and spiritual training to the Wayuu indigenous communities in the desert.
    </p>
    <img class="mapa-popup-img" src="images/maps/saludhoymapa.jpeg" alt="Salud Hoy" />
    <br>
    <a class="" href="/galerysaludhoy.html">Read more</a>
  `);

  // --- Ajustar vista para mostrar todos los pins ---
  const bounds = L.latLngBounds([
    LAS_FLORES_COORDS,
    PESCA_MILAGROSA_COORDS,
    FUNDEPCAR_COORDS,
    SALUD_HOY_COORDS,
  ]);
  map.fitBounds(bounds, { padding: [60, 60] });
})();
