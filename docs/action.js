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

var link_d1 = "https://my.hidrive.com/share/###";
var link_d2 = "https://my.hidrive.com/share/###";
var link_d3 = "https://my.hidrive.com/share/###";
var link_d4 = "https://my.hidrive.com/share/###";
var link_d5 = "https://my.hidrive.com/share/###";
var link_d6 = "https://my.hidrive.com/share/###";
var link_d7 = "https://my.hidrive.com/share/###";
var link_d8 = "https://my.hidrive.com/share/###";
var link_d9 = "https://my.hidrive.com/share/###";

var photos = [{
        "lat": 63.793483,
        "lng": 20.290592,
        "name": "Tag 1 - Umeå (SWE)- Ankunft",
        "link": link_d1,
        "url": "img/d1_1.jpg",
        "thumbnail": "img/d1_1.jpg"
    },
    {
        "lat": 64.592043,
        "lng": 18.692441,
        "name": "Tag 1 - Lycksele (SWE) - Hotell Lappland",
        "link": link_d1,
        "url": "img/d1_2.jpg",
        "thumbnail": "img/d1_2.jpg"
    },
    {
        "lat": 65.051316,
        "lng": 19.410492,
        "name": "Tag 2 - Schweden - Busfahrt",
        "link": link_d2,
        "url": "img/d2_1.jpg",
        "thumbnail": "img/d2_1.jpg"
    },
    {
        "lat": 65.59444444,
        "lng": 19.17000000,
        "name": "Tag 2 - Arvidsjaur (SWE) - Lappstaden",
        "link": link_d2,
        "url": "img/d2_2.jpg",
        "thumbnail": "img/d2_2.jpg"
    },
    {
        "lat": 65.59472222,
        "lng": 19.16944444,
        "name": "Tag 2 - Arvidsjaur (SWE) - Kirche",
        "link": link_d2,
        "url": "img/d2_3.jpg",
        "thumbnail": "img/d2_3.jpg"
    },
    {
        "lat": 65.59361111,
        "lng": 19.17277778,
        "name": "Tag 2 - Arvidsjaur (SWE) - Elch/Stadt",
        "link": link_d2,
        "url": "img/d2_4.jpg",
        "thumbnail": "img/d2_4.jpg"
    },
    {
        "lat": 66.04555556,
        "lng": 17.87138889,
        "name": "Tag 2 - Arjeplog (SWE)",
        "link": link_d2,
        "url": "img/d2_5.jpg",
        "thumbnail": "img/d2_5.jpg"
    },
    {
        "lat": 66.50250000,
        "lng": 16.41444444,
        "name": "Tag 2 - Schweden - Busfahrt",
        "link": link_d2,
        "url": "img/d2_6.jpg",
        "thumbnail": "img/d2_6.jpg"
    },
    {
        "lat": 66.54805556,
        "lng": 16.33444444,
        "name": "Tag 2 - Polarkreis",
        "link": link_d2,
        "url": "img/d2_7.jpg",
        "thumbnail": "img/d2_7.jpg"
    },
    {
        "lat": 66.67250000,
        "lng": 16.12583333,
        "name": "Tag 2 - Schweden - Busfahrt",
        "link": link_d2,
        "url": "img/d2_8.jpg",
        "thumbnail": "img/d2_8.jpg"
    },
    {
        "lat": 66.75500000,
        "lng": 15.83472222,
        "name": "Tag 2 - Schweden/Norwegen - Grenze",
        "link": link_d2,
        "url": "img/d2_9.jpg",
        "thumbnail": "img/d2_9.jpg"
    },
    {
        "lat": 66.81491340,
        "lng": 15.43418190,
        "name": "Tag 2 - Norwegen - Busfahrt",
        "link": link_d2,
        "url": "img/d2_10.jpg",
        "thumbnail": "img/d2_10.jpg"
    },
    {
        "lat": 67.103660,
        "lng": 15.391583,
        "name": "Tag 2 - Rognan (NOR) - Rognan Hotell",
        "link": link_d2,
        "url": "img/d2_11.jpg",
        "thumbnail": "img/d2_11.jpg"
    },
    {
        "lat": 67.57916667,
        "lng": 15.88888889,
        "name": "Tag 3 - Sørfold (NOR) - Kobbelv",
        "link": link_d3,
        "url": "img/d3_1.jpg",
        "thumbnail": "img/d3_1.jpg"
    },
    {
        "lat": 68.10805556,
        "lng": 15.88611111,
        "name": "Tag 3 - Norwegen - Busfahrt",
        "link": link_d3,
        "url": "img/d3_2.jpg",
        "thumbnail": "img/d3_2.jpg"
    },
    {
        "lat": 68.29861111,
        "lng": 16.02388889,
        "name": "Tag 3 - Bognes/Lødingen (NOR) - Fährfahrt",
        "link": link_d3,
        "url": "img/d3_3.jpg",
        "thumbnail": "img/d3_3.jpg"
    },
    {
        "lat": 68.23222222,
        "lng": 14.56666667,
        "name": "Tag 3 - Svolvær (NOR) - Lofoten",
        "link": link_d3,
        "url": "img/d3_4.jpg",
        "thumbnail": "img/d3_4.jpg"
    },
    {
        "lat": 68.20750000,
        "lng": 14.23500000,
        "name": "Tag 3 - Lofoten (NOR)",
        "link": link_d3,
        "url": "img/d3_5.jpg",
        "thumbnail": "img/d3_5.jpg"
    },
    {
        "lat": 68.15444444,
        "lng": 14.20222222,
        "name": "Tag 3 - Henningsvær (NOR) - Lofoten",
        "link": link_d3,
        "url": "img/d3_6.jpg",
        "thumbnail": "img/d3_6.jpg"
    },
    {
        "lat": 68.80089250,
        "lng": 16.54008410,
        "name": "Tag 3 - Harstad (NOR) - Scandic Harstad",
        "link": link_d3,
        "url": "img/d3_7.jpg",
        "thumbnail": "img/d3_7.jpg"
    },
    {
        "lat": 68.79888889,
        "lng": 16.54861111,
        "name": "Tag 4 - Harstad (NOR) - Hurtigruten",
        "link": link_d4,
        "url": "img/d4_1.jpg",
        "thumbnail": "img/d4_1.jpg"
    },
    {
        "lat": 69.07900840,
        "lng": 17.40014950,
        "name": "Tag 4 - Harstad/Tromsø (NOR) - Hurtigruten",
        "link": link_d4,
        "url": "img/d4_2.jpg",
        "thumbnail": "img/d4_2.jpg"
    },
    {
        "lat": 69.64805556,
        "lng": 18.98750000,
        "name": "Tag 4 - Tromsø (NOR) - Eismeerkathedrale",
        "link": link_d4,
        "url": "img/d4_3.jpg",
        "thumbnail": "img/d4_3.jpg"
    },
    {
        "lat": 69.63583333,
        "lng": 18.99583333,
        "name": "Tag 4 - Tromsø (NOR) - Fjellheisen",
        "link": link_d4,
        "url": "img/d4_4.jpg",
        "thumbnail": "img/d4_4.jpg"
    },
    {
        "lat": 69.64583333,
        "lng": 18.95027778,
        "name": "Tag 4 - Tromsø (NOR) - Ølhallen (Mack)",
        "link": link_d4,
        "url": "img/d4_5.jpg",
        "thumbnail": "img/d4_5.jpg"
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
