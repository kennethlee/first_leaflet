// San Francisco.
var map = L.map('map').setView([37.7833, -122.4167], 11);

// Bears
var cal = L.circle([37.8700, -122.2590], 1000, {
  color: '#003A70',
  fillColor: '#F2A900',
  fillOpacity: 0.25
}).addTo(map);

// Gators
var sfState = L.circle([37.7233, -122.4797], 1000, {
  color: '#231161',
  fillColor: '#CD9700',
  fillOpacity: 0.25
}).addTo(map);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'your.mapbox.project.id',
    accessToken: 'your.mapbox.public.access.token'
}).addTo(map);
