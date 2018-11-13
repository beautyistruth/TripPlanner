
const mapboxgl = require('mapbox-gl');
mapboxgl.accessToken = 'pk.eyJ1IjoiYmVhdXR5aXN0cnV0aCIsImEiOiJjam9nOWp0M2owY3NtM3BwaG5qY3ZjaGcxIn0.1sNk-7tvJhN9wM27cr0Oqg';

module.exports = function makeNewMarker(markerType, coordinates) {
    //marker type as string, coordinates as array
    const element = document.createElement('div');
    element.className = (markerType);
    new mapboxgl.Marker(element).setLngLat(coordinates).addTo(map);
};

