console.log("main.js loaded!");

$(function() {

  var prefix = "assets/flipbook-images/rhome_";
  var zeros = 3;
  var fileType = "png";
  var imgSeqLength = 104;

  // get x position of mouse within img#current-page

  var $currentPage = $("#current-page");

  $currentPage.on("mousemove", function(event) {
    var $this = $(this);
    var x = getXOnElement($this, event.pageX);
    var i = Math.ceil((x/$this.width())*imgSeqLength);
    var src = fileNameSerializer(prefix, zeros, i, fileType);
    console.log("The x position on this element is: " + x);
    console.log("The image index i is: " + i);
    $this.attr("src", src);
  });

});

function getXOnElement(element, pageX) {
  return Math.ceil(Math.abs(pageX - element.offset().left));
}

function fileNameSerializer(prefix, zeros, index, fileType) {
  var indexString;
  var index = String(index);
  indexString = index.length >= zeros ? index : String(0).repeat(zeros - index.length) + index;
  return prefix + indexString + "." + fileType;
}

// get the x position of the mouse
// normalize x position [0.00, 1.00], xn
// declare the length of the image sequence, l
// multiply xn by l, i
// round i to next highest integer
// return sequence[i]
