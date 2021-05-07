//Array de datos
let data_markers = [];
//Array de categorias
let selectCategory = ["Todos"];

//mapa
let map = L.map('mapid').on('load', onMapLoad).setView([41.400, 2.206], 9);
let tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map);

//en el clusters almaceno todos los markers
let markers = L.markerClusterGroup(); //Definimos una capa

//icono marcador
let FoodIcon = L.icon({
	iconUrl: 'img/icon_green.png',
	iconSize: [45, 45]
});

function onMapLoad() {
	//Petición a la api
	$.getJSON("api/apiRestaurants.php", function(data) {		
        for (let value of data){ 			
			data_markers.push(value);//Guardo los restaurantes en el array		
			let arrayDeCadenas = value.kindFood.split(',');	
			for (let cat of arrayDeCadenas){ 
				if (!selectCategory.includes(cat)){ 
					selectCategory.push(cat);//Guardo categorias en el array	
				}
			}
		}
		cargarSelect();//Cargamos la select		
		render_to_map(data_markers,"Todos");//mostramos todos los restaurantes	
	});
}

//Función que carga las categorias en el select
let cargarSelect = () => 
	selectCategory.forEach(function (category, index) {		
		$("#kind_food_selector").append(`<option value = ${category}>${category}</option>`);
	});	

//Cambia la select
$('#kind_food_selector').on('change', function() {
	render_to_map(data_markers, this.value);
});

//muestra marcadores
function render_to_map(data_markers,filter){
	markers.clearLayers(); // Limpiar los marcadores	
	data_markers.forEach(function (marker, index) {			
		if(filter ==="Todos"){				
			setMarker(marker);	
		}else{
			let arrayDeCadenas2 = marker.kindFood.split(',');
			for (let i of arrayDeCadenas2){ 
				if(filter === i){
					setMarker(marker);
				}
			}
		}
	});
	map.addLayer(markers);//añade la capa al mapa			
}
function setMarker(marker){
	marker = L.marker([marker.latitude, marker.longitude], 
		{icon: FoodIcon}).bindPopup("<img src='img/" + marker.photo + "' width='200' height='150'/><br><br><b>" + marker.name + "</b>" + 
		"<br>" + marker.address + "<br><br>" + "Tipo de cocina <i>" + marker.kindFood +"</i>")
		markers.addLayer(marker);	
}
//Comprobamos que la Geolocation está disponible en el navegador 
if ("geolocation" in navigator){ 
    navigator.geolocation.getCurrentPosition(function(position){ 
		L.marker([position.coords.latitude, position.coords.longitude]).bindPopup("<b>Estoy Aquí</b>").addTo(map);
		map.setView([position.coords.latitude,position.coords.longitude], 8);
	});	
}else{
    console.log("La Geolocation No está disponible en el navegador");
}