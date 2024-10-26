function createMap() {
    var map = L.map('map').setView([32.47, -93.76], 6);

    // Generating map
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 20,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // Generating coordinates
    var latA = getRandomInRange(30, 35, 3)
    var latB = getRandomInRange(30, 35, 3)
    var latC = getRandomInRange(30, 35, 3)

    var longA = getRandomInRange(-90, -100, 3)
    var longB = getRandomInRange(-90, -100, 3)
    var longC = getRandomInRange(-90, -100, 3)

     // URL generation
     var urlA = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latA}&longitude=${longA}&localityLanguage=en`
     var urlB = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latB}&longitude=${longB}&localityLanguage=en`
     var urlC = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latC}&longitude=${longC}&localityLanguage=en`

    // Placing markers
    var markerA = L.marker([latA, longA]).addTo(map);
    var markerB = L.marker([latB, longB]).addTo(map);
    var markerC = L.marker([latC, longC]).addTo(map);

    // Changing headers
    document.getElementById('marker1').textContent = "Marker 1: Latitude: " + latA + ", Longitude: " + longA
    document.getElementById('marker2').textContent = "Marker 2: Latitude: " + latB + ", Longitude: " + longB
    document.getElementById('marker3').textContent = "Marker 3: Latitude: " + latC + ", Longitude: " + longC

    // Locality
    fetch(urlA)
        .then((res) => res.json())
        .then((data) => {
            var locA = data.locality
            document.getElementById('loc1').textContent = "Locality: " + locA 
        })

    fetch(urlB)
        .then((res) => res.json())
        .then((data) => {
            var locB = data.locality
            document.getElementById('loc2').textContent = "Locality: " + locB
        })

    fetch(urlC)
        .then((res) => res.json())
        .then((data) => {
            var locC = data.locality
            document.getElementById('loc3').textContent = "Locality: " + locC 
        })



    // Changing text
    
}

function getRandomInRange(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
}

window.onload = createMap;