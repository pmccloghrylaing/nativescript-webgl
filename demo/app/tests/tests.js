var WebGL = require("nativescript-webgl").WebGL;
var webgl = new WebGL();

// TODO replace 'functionname' with an acual function name of your plugin class and run with 'npm test <platform>'
describe("greet function", function() {
  it("exists", function() {
    expect(webgl.greet).toBeDefined();
  });

  it("returns a string", function() {
    expect(webgl.greet()).toEqual("Hello, NS");
  });
});