var expect = require("chai").expect;
var request = require("request");

describe("Add Two Numbers", function(){
    var url = "https://localhost:3000/addTwoNumbers/2/5";
    it("returns status code 200 to check if api works", function(done) {
        request(url, function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done()
        });
    });
    it("returns statuscode key in body to check api give right result should be 200", function(done) {
        request(url, function(err, response, body){
            body = JSON.parse(body)
            expect(response.statusCode).to.equal(200);
            done()

        });
    });
    
    it("returns the result as number", function(done) {
        request(url, function(err, response, body){
            body = JSON.parse(body)
            expect(body.result).to.be.a('number');
            done()

        });
    });
    it("returns the result equal to 7", function(done) {
        request(url, function(err, response, body){
            body = JSON.parse(body)
            expect(body.result).to.equal(7);
            done()

        });
    });
    it("returns the result not equal to 10", function(done) {
        request(url, function(err, response, body){
            body = JSON.parse(body)
            expect(body.result).to.not.equal(10);
            done()

        });
    });

});