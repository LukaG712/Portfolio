// Leaflet kaart – Lint, België
window.addEventListener('load', function () {
  var kaart = L.map('kaart').setView([51.12, 4.50], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> bijdragers',
    maxZoom: 19
  }).addTo(kaart);

  L.circle([51.12, 4.50], {
    radius: 1500,
    color: '#0d6efd',
    weight: 3,
    opacity: 0.9,
    fillColor: '#0d6efd',
    fillOpacity: 0.1
  })
  .addTo(kaart)
  .bindPopup('<strong>Lint, België</strong><br>Woonplaats van Luka Gosseye')
  .openPopup();

  setTimeout(function () { kaart.invalidateSize(); }, 200);
});
