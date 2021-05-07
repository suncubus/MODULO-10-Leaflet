var mymap = L.map('mapid').setView([41.3870154, 2.1700471], 13)

let urlAPI = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
L.tileLayer(urlAPI, {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	id: 'mapbox/streets-v11',
	tileSize: 512,
	zoomOffset: -1,
    zoomControl: true
}).addTo(mymap);

//clase icono base
let iconBase = L.Icon.extend({
    options: {
        iconSize:     [40, 40],//tamaño icono
        iconAnchor:   [30, 20],//posición del icono
        popupAnchor:  [-10, -20]//distancia del popup 
    }
});
//instancias del icono
iconGreen = new iconBase({iconUrl: 'img/icon_green.png'});
iconBlue = new iconBase({iconUrl: 'img/icon_blue.png'});
iconYellow = new iconBase({iconUrl: 'img/icon_yellow.png'});
iconRed = new iconBase({iconUrl: 'img/icon_red.png'});
iconPurple = new iconBase({iconUrl: 'img/icon_purple.png'});

//arrays que contienen los iconos y las clases con el color
let icons = [iconGreen, iconBlue, iconYellow, iconRed, iconPurple];
let txtColors = ["green","blue","yellow","red","purple"];

//marcadores
mymap.on('click', onMapClick);

let marker;
let aux;
function onMapClick(e) {
    if(marker !=undefined){mymap.removeLayer(marker)};

    //posición aleatoria de los arrays
    aux = Math.floor(Math.random()*(0,4));
   
    marker = L.marker([e.latlng.lat, e.latlng.lng], 
            {icon: icons[aux]}).bindPopup(
            `<h1 class='${txtColors[aux]}'>Mis coordenadas son:</h1><ul><li><b>Latitud:</b> 
            ${e.latlng.lat.toString()}</li><li><b>Longitud:</b> ${e.latlng.lng.toString()}</li></ul>`
            ).addTo(mymap);

    mymap.setView(marker.getLatLng(),20);    
}
