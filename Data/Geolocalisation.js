// Type de Données : Culturelle.
console.log("Get Type de Données : Geolocation.");



function getGeoloc()
{
	var _geoData;

	initGeoloc();
	return _getData;
}

// MesInfos Data
function initGeoloc(callback) {
		cozysdk.defineView('GeoPoint',	
				   'byTimestamp', 
				   'function(doc) { emit(doc.timestamp); }',
				   function(err) {
						cozysdk.queryView('GeoPoint',
								  'byTimestamp',
								  {"limit":50, "include_docs":true, "descending":true}, 
								  function(err, docs) 
								 		    {	
											console.log(docs);
											_geoData = docs;
								  		    }
								 );
						}
			       );
};

// Geolocalisation navigateur.
/*fonction initGeoloc_navigator()
{
	var _geoData = {
			_Latitude: 0,
			_Longitude: 0,
			}

	var position;

	// La géolocation est-elle prise en charger par le navigateur ?
	if (navigator.geolocation)
  	{
        navigator.geolocation.getCurrentPosition(position, 
						errorHandler, 
						{enableHighAccuracy:false, maximumAge:60000, timeout:27000}
						);
    	_geoData._Latitude = position.coords.latitude;
    	_geoData._Longitude = position.coords.longitude;		
    }
    else
        alert('Votre navigateur ne prend malheureusement pas en charge la géolocalisation.');
}

// Fonction de gestion des erreurs
function errorHandler(error)
{
  
}*/
