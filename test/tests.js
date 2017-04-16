'use strict';

const supertest = require('supertest'); 
const should = require('should');
const server = supertest.agent("http://localhost:3000");

describe('/api/transcript', function() {
	const body = {};

	it("should have status 200",function(done){
	    server
	    .post("/api/transcript")
	    .send(body)
	    .expect(200)
	    .end(function(err,res){
		    res.status.should.equal(200);
		    done();
	    	});
  	});

  	it("should return Hello Watson on def file",function(done){
	    server
	    .post("/api/transcript")
	    .send(body)
	    .expect(200)
	    .end(function(err,res){
		    res.text.should.equal("Hello Watson.");
		    done();
	    	});
  	});
}); 