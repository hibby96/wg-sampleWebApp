const Metros = require('./Metros.json')

function nearest(LatLng) {
    try {
        var lat = LatLng.split(",")[0];
        var lng = LatLng.split(",")[1];
    } catch (e) { var lat; var lng; };
    if (lat && lng) {
        // Metros.sort(function(a,b){return a.Lat - b.Lat})
        nearestMetro = { "Distance": 8888 };
        for (Metro of Metros) {
            dist = distance(lat, lng, Metro.Lat, Metro.Lng);
            if (dist < nearestMetro.Distance) {
                nearestMetro = {
                    "Metro": Metro,
                    "Distance": dist
                }
            }

        }
        return JSON.stringify(nearestMetro);
    } else {
        return { "error": "Latitude or Longitude error" }
    }
}

function distance(lat1, lng1, lat2, lng2) {
    var radlat1 = Math.PI * lat1 / 180
    var radlat2 = Math.PI * lat2 / 180
    var theta = lng1 - lng2
    var radtheta = Math.PI * theta / 180
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    // if (dist > 1) {  
    //     dist = 1;
    // }
    dist = Math.acos(dist)
    dist = dist * 180 / Math.PI
    dist = dist * 60 * 1.1515
    return dist
}
function test() {
    return "test complete";
}
module.exports = { nearest };