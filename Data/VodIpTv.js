// Type de Données : VodIpTv.
console.log(" Get Type de Données : VodIpTv.");

function getVodIpTv(){

	var VodIpTvData = {
	_title: [],
	_thematique: []	
	}
	// API WikiData.

	// API Cozy.
	var VoidipTv_title = [];
	initVodIpTv_title();
	return VoidipTv_title;	
}

function initVodIpTv_title(callback) {
	cozysdk.defineView('VideoStream', 'voidiptv', 'function(doc) { emit(doc.title); }', function(err) {
		cozysdk.queryView('VideoStream', 'voidiptv', {"limit":50, "include_docs":true, "descending":true}, function(err, docs) {
			console.log(docs);
			VoidipTv_title = docs;
		});
	});
};

