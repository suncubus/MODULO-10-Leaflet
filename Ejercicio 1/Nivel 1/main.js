/**************************************************************
FASE 1: inicializamos el mapa - Centro del mapa plaza catalunya
***************************************************************/
var mymap = L.map('mapid').setView([41.3870154, 2.1700471], 13);// parametros setview centro del mapa y zoom

//Capa donde va el mapa en si, tile layer
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
	maxZoom: 18,
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	id: 'mapbox/streets-v11',
	tileSize: 512,
	zoomOffset: -1
}).addTo(mymap);

/**************************************************************
FASE2: Marcador en  Carrer Balmes 16
***************************************************************/
var marker = L.marker([41.3868561, 2.1661102]).addTo(mymap);

/**************************************************************
FASE3: click en el Marcador muestra popup del restaurante
***************************************************************/
//eventos
marker.on('click', onMarkerClick);

function onMarkerClick(e) {
    marker.bindPopup("<b>Restaurant Centfocs</b><br>Restaurante mediterraneo <br> Carrer de Balmes 16, 08007 Barcelona").openPopup();
}
