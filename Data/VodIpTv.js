// Type de Données : VodIpTv.
var VodIpTvData = {
		_doc: [],
		_thematique: []	
		}

function initVodIpTv_title(callback) {
					cozysdk.defineView('VideoStream',
							   'voidiptv',
							   'function(doc) { emit(doc.title); }', 
							   function(err) 
							  		 {
									  cozysdk.queryView('VideoStream',
										            'voidiptv', 
										             {"limit":50, "include_docs":true, "descending":true},
										             function(err, docs) 
										  		                {
													         console.log(docs);
													         VodIpTvData._doc = docs;
													         callback();	
												                }
										         );
							                 }
							  );
};

function getGenre(movie, callback)
{
	var baseURI = 'https://query.wikidata.org/bigdata/namespace/wdq/sparql?query=';
	var sparql = "select distinct ?genreLabel where  {?film wdt:P31 wd:Q11424; rdfs:label '"+ String(movie) +"'@fr ;wdt:P136 ?genre.SERVICE wikibase:label {bd:serviceParam wikibase:language 'en' .}}";
	$.getJSON(baseURI + encodeURIComponent(sparql), callback);
}

function getVodIpTv() {
	initVodIpTv_title(function() 
			 {
				var lengthdoc = VodIpTvData._doc.length;
				console.log("Size :" + String(lengthdoc));
				for (var i = 0; i < VodIpTvData._doc.length; i++)
				{
				    var movie = String(VodIpTvData._doc[i].doc.title);
				    console.log("Movie :" + String(movie));
				    getGenre(movie, function(result)
					    			 {
								console.log(result);
								var theme = result.results.bindings.map(function(binding)
													{ 
													return binding.genreLabel.value ;
													}
										      			 ).join(',');
								VodIpTvData._thematique[i] = theme;
								console.log("Theme :" + String(theme));
					    			 }
					    );
		   	       }		
	              }
	             );
}

console.log(" Get Type de Données : VodIpTv.");
getVodIpTv();
