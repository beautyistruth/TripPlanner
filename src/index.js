//console.log("Hello from JavaScript");

const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = 'pk.eyJ1IjoiYmVhdXR5aXN0cnV0aCIsImEiOiJjam9nOWp0M2owY3NtM3BwaG5qY3ZjaGcxIn0.1sNk-7tvJhN9wM27cr0Oqg';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

