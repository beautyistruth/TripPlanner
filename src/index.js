const mapboxgl = require("mapbox-gl");
mapboxgl.accessToken = 'pk.eyJ1IjoiYmVhdXR5aXN0cnV0aCIsImEiOiJjam9nOWp0M2owY3NtM3BwaG5qY3ZjaGcxIn0.1sNk-7tvJhN9wM27cr0Oqg';
const makeNewMarker = require('./marker.js');

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10' // mapbox has lots of different map styles available.
});

//hard-coded FS location
const element = document.createElement('div');
element.className = ('marker');
new mapboxgl.Marker(element).setLngLat([-74.009151, 40.705086]).addTo(map);

map.on('mousemove', function (e) {
    document.getElementById('info').innerHTML =
        // e.point is the x, y coordinates of the mousemove event relative
        // to the top-left corner of the map
        JSON.stringify(e.point) + '<br />' +
        // e.lngLat is the longitude, latitude geographical position of the event
        JSON.stringify(e.lngLat);
});

