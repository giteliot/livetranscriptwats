var request = require('supertest'); 
var should = require('should');
var config = require('../config.js');
var url = config.url;


//TEMPLATE
/*describe('/visitor', function() {
	var body = {
			name: 'Elia'
	};

	it('should have status 200', function() {
		request(url)
			.post('/api/visitors')
			.send(body)
	    // end handles the response
		.end(function(err, res) {
	         if (err) {
	         	throw err;
	         }
	         // this is should.js syntax, very clear
	         res.status.should.equal(200);
	    });
	});

	it('should return Hello Elia', function() {
		request(url)
			.post('/api/visitors')
			.send(body)
	    // end handles the response
		.end(function(err, res) {
	         if (err) {
	         	throw err;
	         }
	         // this is should.js syntax, very clear
	         res.text.should.equal("Hello Elia!");
	    });
	});
});*/
