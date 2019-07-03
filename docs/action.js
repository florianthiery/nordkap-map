// set center coordinates
var coords = [67.7898109, 22.30581];
// set default zoom level
var zoomLevel = 5;
// initialize map
var map = L.map('map').setView(coords, zoomLevel);
// set source for map tiles
ATTR = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
CDB_URL = 'https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png';
// add tiles to map
L.tileLayer(CDB_URL, {
    attribution: ATTR
}).addTo(map);

//var photos = [];

var photos = [{
        "lat": 63.793483,
        "lng": 20.290592,
        "name": "Tag 1 - Umeå (SWE)- Ankunft",
        "link": "https://my.hidrive.com/share/###",
        "url": "img/d1_1.jpg",
        "thumbnail": "img/d1_1.jpg"
    },
    {
        "lat": 64.592043,
        "lng": 18.692441,
        "name": "Tag 1 - Lycksele (SWE) - Hotell Lappland",
        "link": "https://my.hidrive.com/share/###",
        "url": "img/d1_2.jpg",
        "thumbnail": "img/d1_2.jpg"
    },
    {
        "lat": 65.051316,
        "lng": 19.410492,
        "name": "Tag 2 - Schweden - Busfahrt",
        "link": "https://my.hidrive.com/share/###",
        "url": "img/d2_1.jpg",
        "thumbnail": "img/d2_1.jpg"
    },
    {
        "lat": 65.59444444,
        "lng": 19.17000000,
        "name": "Tag 2 - Arvidsjaur (SWE) - Lappstaden",
        "link": "https://my.hidrive.com/share/###",
        "url": "img/d2_2.jpg",
        "thumbnail": "img/d2_2.jpg"
    },
    {
        "lat": 65.59472222,
        "lng": 19.16944444,
        "name": "Tag 2 - Arvidsjaur (SWE) - Kirche",
        "link": "https://my.hidrive.com/share/###",
        "url": "img/d2_3.jpg",
        "thumbnail": "img/d2_3.jpg"
    },
    {
        "lat": 65.59361111,
        "lng": 19.17277778,
        "name": "Tag 2 - Arvidsjaur (SWE) - Elch/Stadt",
        "link": "https://my.hidrive.com/share/###",
        "url": "img/d2_4.jpg",
        "thumbnail": "img/d2_4.jpg"
    },
    {
        "lat": 66.04555556,
        "lng": 17.87138889,
        "name": "Tag 2 - Arjeplog (SWE)",
        "link": "https://my.hidrive.com/share/###",
        "url": "img/d2_5.jpg",
        "thumbnail": "img/d2_5.jpg"
    },
    {
        "lat": 66.50250000,
        "lng": 16.41444444,
        "name": "Tag 2 - Schweden - Busfahrt",
        "link": "https://my.hidrive.com/share/###",
        "url": "img/d2_6.jpg",
        "thumbnail": "img/d2_6.jpg"
    },
    {
        "lat": 66.54805556,
        "lng": 16.33444444,
        "name": "Tag 2 - Polarkreis",
        "link": "https://my.hidrive.com/share/###",
        "url": "img/d2_7.jpg",
        "thumbnail": "img/d2_7.jpg"
    },
    {
        "lat": 66.67250000,
        "lng": 16.12583333,
        "name": "Tag 2 - Schweden - Busfahrt",
        "link": "https://my.hidrive.com/share/###",
        "url": "img/d2_8.jpg",
        "thumbnail": "img/d2_8.jpg"
    },
    {
        "lat": 66.75500000,
        "lng": 15.83472222,
        "name": "Tag 2 - Schweden/Norwegen - Grenze",
        "link": "https://my.hidrive.com/share/###",
        "url": "img/d2_9.jpg",
        "thumbnail": "img/d2_9.jpg"
    },
    {
        "lat": 66.81491340,
        "lng": 15.43418190,
        "name": "Tag 2 - Norwegen - Busfahrt",
        "link": "https://my.hidrive.com/share/###",
        "url": "img/d2_10.jpg",
        "thumbnail": "img/d2_10.jpg"
    },
    {
        "lat": 67.103660,
        "lng": 15.391583,
        "name": "Tag 2 - Rognan (NOR) - Rognan Hotell",
        "link": "https://my.hidrive.com/share/###",
        "url": "img/d2_11.jpg",
        "thumbnail": "img/d2_11.jpg"
    }
];

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
