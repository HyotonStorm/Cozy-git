 //Type de Données : Agenda.
console.log("Get Type de Données : Agenda.");

function getVodIpTv()
{
	var EvenementData = { // Déclaration d'un object
			_description: [],
			_start: [],
			_end: [],
			_place: []	
			}

	initAgenda_description();
	initAgenda_start();
	initAgenda_end();
	initAgenda_place();

	return EvenementData;	
}

function initAgenda_description(callback) 
{
	cozysdk.defineView('Event',
			   'monagenda', 
			   'function(doc) { emit(doc.description); }',
			   function(err) {
						cozysdk.queryView('Event', 
								  'monagenda',
								  {"limit":50, "include_docs":true, "descending":true}, 
								  function(err, docs) {
										console.log(docs);
										EvenementData._description = docs;
										      }
								 );
					}
			  );
};

function initAgenda_start(callback)
{
	cozysdk.defineView('Event',
			   'monagenda', 
			   'function(doc) { emit(doc.start); }', 
			   function(err) 
			   {
				cozysdk.queryView('Event', 
						  'monagenda',
						  {"limit":50, "include_docs":true, "descending":true},
						  function(err, docs) 
						  {
							console.log(docs);
							EvenementData.start = docs;
						  }
						);
			  }
			  );
};

function initAgenda_end(callback) 
{
				cozysdk.defineView('Event',
						   'monagenda', 
						   'function(doc) { emit(doc.end); }',
						   function(err) {
								cozysdk.queryView('Event', 
										  'monagenda',
										  {"limit":50, "include_docs":true, "descending":true},
										  function(err, docs) 
										  {
											console.log(docs);
											EvenementData._end = docs;
										  }
										 );
								 }
						  );
};

function initAgenda_place(callback) 
{
				cozysdk.defineView('Event',
						   'monagenda',
						   'function(doc) { emit(doc.start); }',
						   function(err) {
							cozysdk.queryView('Event',
									  'monagenda',
									  {"limit":50, "include_docs":true, "descending":true},
									  function(err, docs) 
									  {
										console.log(docs);
										EvenementData._place = docs;
									  }
									 );
								}
						  );
};
