// Type de Données : Culturelle.
console.log("Get Type de Données : Geolocation.");



function getGeoloc()
{
	var _geoData = {
	_Timestamp: [],
	_Latitude: [],
	_Longitude: [],
	_Radius: []		
	}

	initGeoloc_timestamp();
	initGeoloc_latitude();
	initGeoloc_longitude();
	initGeoloc_radius();
	return _getData;
}

// MesInfos Data
function initGeoloc_timestamp(callback) {
	cozysdk.defineView('GeoPoint', 'byTimestamp', 'function(doc) { emit(doc.timestamp); }', function(err) {
		cozysdk.queryView('GeoPoint', 'byTimestamp', {"limit":50, "include_docs":true, "descending":true}, function(err, docs) {
			console.log(docs);
			_geoData._Timestamp = docs;
		});
	});
};

function initGeoloc_latitude (callback) {
	cozysdk.defineView('GeoPoint', 'byTimestamp', 'function(doc) { emit(doc.latitude); }', function(err) {
		cozysdk.queryView('GeoPoint', 'byTimestamp', {"limit":50, "include_docs":true, "descending":true}, function(err, docs) {
			console.log(docs);
			_geoData._Latitude = docs;
		});
	});
};

function initGeoloc_longitude(callback) {
	cozysdk.defineView('GeoPoint', 'byTimestamp', 'function(doc) { emit(doc.longitude); }', function(err) {
		cozysdk.queryView('GeoPoint', 'byTimestamp', {"limit":50, "include_docs":true, "descending":true}, function(err, docs) {
			console.log(docs);
			_geoData._Longitude = docs;
		});
	});
};

function initGeoloc_radius(callback) {
	cozysdk.defineView('GeoPoint', 'byTimestamp', 'function(doc) { emit(doc.radius); }', function(err) {
		cozysdk.queryView('GeoPoint', 'byTimestamp', {"limit":50, "include_docs":true, "descending":true}, function(err, docs) {
			console.log(docs);
			_geoData._Radius = docs;
		});
	});
};

// Geolocalisation navigateur.
fonction initGeoloc_navigator()
{
		var _geoData = {
	_Latitude: 0,
	_Longitude: 0,
	}

	var position;

	// La géolocation est-elle prise en charger par le navigateur ?
	if (navigator.geolocation)
  	{
        navigator.geolocation.getCurrentPosition(position, errorHandler, {enableHighAccuracy:false, maximumAge:60000, timeout:27000});
    	_geoData._Latitude = position.coords.latitude;
    	_geoData._Longitude = position.coords.longitude;		
    }
    else
        alert('Votre navigateur ne prend malheureusement pas en charge la géolocalisation.');
}

// Fonction de gestion des erreurs
function errorHandler(error)
{
  
}