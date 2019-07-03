// set center coordinates
var coords = [67.7898109, 22.30581];
// set default zoom level
var zoomLevel = 5;
// initialize map
var map = L.map('map').setView(coords, zoomLevel);
// set source for map tiles
ATTR = 'Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
CDB_URL = 'https://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png';
// add tiles to map
L.tileLayer(CDB_URL, {
    attribution: ATTR
}).addTo(map);

var photos = [];

/*var photos = [{
    "lat": 63.825301,
    "lng": 20.263405,
    "name": "Tag 1 - Umea",
    "link": "http://florian-thiery.de",
    "url": "http://41.media.tumblr.com/8dd3cc5931650a6a772db77f6fad797b/tumblr_n5c7uw79Yn1tq6tdto1_400.jpg",
    "thumbnail": "http://40.media.tumblr.com/8dd3cc5931650a6a772db77f6fad797b/tumblr_n5c7uw79Yn1tq6tdto1_75sq.jpg"
}];*/

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

L.geoJson(d4_1, {
    style: {
        "color": "red",
        "weight": 3,
        "opacity": 0.95
    }
}).addTo(map);

L.geoJson(d4_2, {
    style: {
        "color": "orange",
        "weight": 3,
        "opacity": 0.95,
        "dashArray": '10,10'
    }
}).addTo(map);

L.geoJson(d4_3, {
    style: {
        "color": "orange",
        "weight": 3,
        "opacity": 0.95,
        "dashArray": '20,15'
    }
}).addTo(map);

L.geoJson(d4_4, {
    style: {
        "color": "red",
        "weight": 3,
        "opacity": 0.95
    }
}).addTo(map);

L.geoJson(d5, {
    style: {
        "color": "blue",
        "weight": 3,
        "opacity": 0.95
    }
}).addTo(map);

L.geoJson(d6, {
    style: {
        "color": "red",
        "weight": 3,
        "opacity": 0.95
    }
}).addTo(map);

L.geoJson(d7, {
    style: {
        "color": "blue",
        "weight": 3,
        "opacity": 0.95
    }
}).addTo(map);

L.geoJson(d8, {
    style: {
        "color": "red",
        "weight": 3,
        "opacity": 0.95
    }
}).addTo(map);
