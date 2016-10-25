$(document).ready(function(){
  drawSketchpad(96)
});

$("#reset_button").on("click", reDrawSketchpad);

function drawSketchpad(row_count) {
  for(i = 0; i < row_count; i++) {
    $('.table').append('<div class="row r' + i + '"></div>');
    for(j = 0; j < row_count; j++) {
      $('.r' + i).append('<div class="cell c' + j + ' default"></div>');
    };
  };
  var row_size = (528 / row_count) + "px";
  $('.cell').height(row_size).width(row_size);
  $('.cell').hover(function(){
    $(this).removeClass('default').addClass('highlighted')
  });
};

function reDrawSketchpad() {
  var rows = prompt("Please enter how many pixels to draw per side:");
  while (isNaN(rows) || rows < 16 || rows > 128) {
    rows = prompt("Please enter a number between 16 and 128")
  }

  $('.row').remove();
  drawSketchpad(rows)
}
