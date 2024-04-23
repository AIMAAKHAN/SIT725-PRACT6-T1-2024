var request = require("request");
import('chai').then(chai => {
    var expect = chai.expect;

    describe("joining two strings", function() {
        var url = "http://localhost:5500/addTwoNumbers/X/Y";
        it("should return status 200", function(done) {
            request(url, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
    });

    describe("Sum of two numbers", function() {
        var url = "http://localhost:5500/addTwoNumbers/9/3";
        it("returns status 200 ", function(done) {
            request(url, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
    });

    
}).catch(error => {
    console.error('Error Message:', error);
});