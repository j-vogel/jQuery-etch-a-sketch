$(document).ready(function(){
  drawSketchpad(86)
});

$("#reset_button").on("click", reDrawSketchpad);

function drawSketchpad(row_count) {
  for(i = 0; i < Math.pow(row_count, 2); i++) {
    $('.table').append('<div class="cell default"></div>');
  };
  var row_size = Math.floor((650 / row_count)*1000) / 1000 + "px";
  alert(row_size);

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

  $('.cell').remove();
  drawSketchpad(rows)
}
