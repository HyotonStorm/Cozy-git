 //Type de Données : Agenda.
console.log("Get Type de Données : Agenda.");

function getVodIpTv(){

	var EvenementData;

	initAgenda();
	return EvenementData;	
}

function initAgenda(callback) {
	cozysdk.defineView('Event', 'monagenda', 'function(doc) { emit(doc.description); }', function(err) {
		cozysdk.queryView('Event', 'monagenda', {"limit":50, "include_docs":true, "descending":true}, function(err, docs) {
			console.log(docs);
			EvenementData = docs;
		});
	});
};
