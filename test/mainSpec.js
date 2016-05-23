var chai = require("chai");
var expect = require("chai").expect;
var main = require("../public/js/main");

describe("fileNameSerializer", function() {
  it("returns a string", function() {
    var inputPrefix = "assets/flipbook-images/rhome_";
    var inputZeros = 3;
    var inputIndex = 1;
    var inputFileType = "png";
    var output = main.fileNameSerializer(inputPrefix, inputZeros, inputIndex, inputFileType);

    expect(output).to.equal("assets/flipbook-images/rhome_001.png");
    expect(output).to.be.a("string");
  });
  it("adds leading zeros to supplied index up to supplied max number of leading zeros");
});
