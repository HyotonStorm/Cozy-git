  function updateContactList() 
  {
	cozysdk.defineRequest('Contact', 'all', 'function(doc) { emit(doc.n); }', function(err, res) {
		if (err != null) {
			return alert(err);
		} else {
			cozysdk.run('Contact', 'all', {}, function(err, res) {
				if (err != null) {
					return alert(err);
				} else {
					var contacts = JSON.parse("" + res);
					contacts.forEach(function(contactName) {
						contactName.key = contactName.key.replace(/ /g, '\u00a0');
					});
					render(contacts);
				}
			});
		}
	});