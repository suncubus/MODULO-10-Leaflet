/**************************************************************
inicializamos el mapa - Centro del mapa plaza catalunya
***************************************************************/
let mymap = L.map('mapid').setView([41.3870154, 2.1700471], 13);
//Capa donde va el mapa en si, tile layer
let urlAPI = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
L.tileLayer(urlAPI, {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	id: 'mapbox/streets-v11',
	tileSize: 512,
	zoomOffset: -1,
    zoomControl: true
}).addTo(mymap);

/**********************************************************************************
FASE 1: Al hacer click en cualquier parte del mapa muestra lat. y long. y hace zoom
FASE 2: Siempre hay un único marcador
***********************************************************************************/
mymap.on('click', onMapClick);

let marker;
//junto con un zoom máximo al marcador
function onMapClick(e) {
    //Si existe el marcador lo elimina
    if(marker !=undefined){mymap.removeLayer(marker);}//podía controlar si es NULL
    //crea nuevo marcador
    marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(mymap);
    //hace zoom
    mymap.setView(marker.getLatLng(),20);
    //muestra latitud y longitud
    marker.bindPopup("Mis coordenadas son:<br><b>Latitud:</b> " + e.latlng.lat.toString() + " <br><b> Longitud : </b>" + e.latlng.lng.toString());
}


