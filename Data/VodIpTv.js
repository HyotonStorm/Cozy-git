// Type de Données : VodIpTv.
console.log(" Get Type de Données : VodIpTv.");

function getVodIpTv(){

	var VodIpTvData = {
	_doc: [],
	_thematique: []	
	}
	initVodIpTv_title();
	for (var i = 0; i < VodIpTvData.doc.length; i++)		
		VoidipTvData._thematique[i] = getGenre(VoidipTvData._doc[i].title)
	return VoidipTv_title;	

function initVodIpTv_title(callback) {
	cozysdk.defineView('VideoStream', 'voidiptv', 'function(doc) { emit(doc.title); }', function(err) {
		cozysdk.queryView('VideoStream', 'voidiptv', {"limit":50, "include_docs":true, "descending":true}, function(err, docs) {
			console.log(docs);
			VoidipTvData._doc = docs;
		});
	});
};


fonction getGenre(movie)
{


}