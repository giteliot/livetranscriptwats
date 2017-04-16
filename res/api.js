const app = require('../server.js');

module.exports = function(app) {

	app.post("/api/transcript", function (request, response) {
	    response.send("Hello");
	    return;
	});
	
};


