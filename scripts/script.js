// After page load, run sketchpad and bind redraw to button
$(document).ready(function(){
  drawSketchpad(16)

  $("#reset_button").on("click", reDrawSketchpad);
});

// Creates grid of div 'cells' to fill 512px square sketchpad div
// 1. Argument is number of cells on one side of the square, so
// we square (x^2) it and generate that many cells in the forloop
// 2. row_size calculates px per cell to fill the sketchpad, then is
// passed to jQuery for correctly sizing newly created divs
// 3. mouseenter is bound to cells and calls hoverColor to handle event
function drawSketchpad(row_count) {
  for(i = 0; i < Math.pow(row_count, 2); i++) {
    $('.table').append('<div class="cell default"></div>');
  };
  var row_size = Math.floor((512 / row_count)*1000) / 1000 + "px";

  $('.cell').height(row_size).width(row_size);
  $('.cell').mouseenter(function() {
    hoverColor(this);
  });
};


// Re-creates grid by asking for new size, validating input, then
// clearing out old cells, then running draw function
function reDrawSketchpad() {
  var rows = prompt("Please enter how many pixels to draw per side:");
  while (isNaN(rows) || rows < 16 || rows > 128) {
    rows = prompt("Please enter a number between 16 and 128")
  }

  $('.cell').remove();
  drawSketchpad(rows)
}

// Event handler for when a cell is hovered on by mouse.
// First hover generates random color, subsequent hovers increase darkness
function hoverColor(linkObj) {
  var hoverCell = linkObj;
  if(hoverCell.classList.contains("default")) {
    $(hoverCell).removeClass('default').addClass('highlighted').css('background-color', randomRGB());
  } else {
    var currentOpacity = parseFloat($(hoverCell).css('opacity'));
    if (currentOpacity != 0) {
      currentOpacity -= 0.1;
      $(hoverCell).css('opacity', currentOpacity);
    };
  };


};

// Generates CSS RGB assignment string in form rgb(#, #, #)
// with each # being a randomly generated number from 0 to 255
function randomRGB() {
  var rgbString = "'rgb(";
  rgbString += Math.floor(Math.random() * (256)) + ", " +  Math.floor(Math.random() * (256)) + ", " + Math.floor(Math.random() * (256)) + ")'";
  return rgbString;
}
