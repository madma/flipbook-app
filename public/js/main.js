console.log("main.js loaded!");

$(function() {

  var image = "assets/flipbook-images/rhome_001.png";

});

function fileNameSerializer(prefix, zeros, index, fileType) {
  var indexString;
  var index = String(index);
  indexString = index.length >= zeros ? index : String(0).repeat(zeros - index.length) + index;
  return prefix + indexString + "." + fileType;
}

// get the x position of the mouse
// normalize x position [0.00, 1.00]
// normalize image
