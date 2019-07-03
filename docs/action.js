// set center coordinates
var coords = [67.7898109, 22.30581];
// set default zoom level
var zoomLevel = 5;
// initialize map
var map = L.map('map').setView(coords, zoomLevel);
// set source for map tiles
ATTR = '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a> | ' +
    '&copy; <a href="http://cartodb.com/attributions">CartoDB</a>';
CDB_URL = 'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png';
// add tiles to map
L.tileLayer(CDB_URL, {
    attribution: ATTR
}).addTo(map);

var photos = [{
    "lat": 63.825301,
    "lng": 20.263405,
    "name": "Tag 1 - Umea",
    "link": "http://florian-thiery.de",
    "url": "http://41.media.tumblr.com/8dd3cc5931650a6a772db77f6fad797b/tumblr_n5c7uw79Yn1tq6tdto1_400.jpg",
    "thumbnail": "http://40.media.tumblr.com/8dd3cc5931650a6a772db77f6fad797b/tumblr_n5c7uw79Yn1tq6tdto1_75sq.jpg"
}];

var photoLayer = L.photo.cluster().on('click', function(evt) {
    var photo = evt.layer.photo;
    var template = '<img src="{url}" /></a><p>{name} - <a href="{link}" target="_blank">Photos</a></p>';
    evt.layer.bindPopup(L.Util.template(template, photo), {
        minWidth: 400
    }).openPopup();
});

photoLayer.add(photos).addTo(map);

L.geoJson(d1, {
    style: {
        "color": "blue",
        "weight": 3,
        "opacity": 0.95
    }
}).addTo(map);

L.geoJson(d2, {
    style: {
        "color": "red",
        "weight": 3,
        "opacity": 0.95
    }
}).addTo(map);

L.geoJson(d3, {
    style: {
        "color": "blue",
        "weight": 3,
        "opacity": 0.95
    }
}).addTo(map);
