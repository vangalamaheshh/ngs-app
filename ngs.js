L.mapbox.accessToken = 'pk.eyJ1IjoibXZhbmdhbGEiLCJhIjoidFVSRGw4ZyJ9.D8-sMcQCisPAzyP9T0mekA';
var map = L.mapbox.map('map', 'mapbox.streets', {
    // These options apply to the tile layer in the map.
    tileLayer: {
        // This map option disables world wrapping. by default, it is false.
        continuousWorld: false,
        // This option disables loading tiles outside of the world bounds.
        noWrap: true
    }
}).setView([40, 0], 2);
