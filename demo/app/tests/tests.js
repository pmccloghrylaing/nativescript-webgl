var Opengles = require("nativescript-opengles").Opengles;
var opengles = new Opengles();

describe("greet function", function() {
    it("exists", function() {
        expect(opengles.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(opengles.greet()).toEqual("Hello, NS");
    });
});