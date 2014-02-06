$(document).ready(function(){
  $('#get_color').on('click', function(e) {
    e.preventDefault();
    var url = "/color"
    $.post(url, function(data) {
      alert(data.color);
      var selector = '#color_me li:nth-of-type'.concat(data.cell);
      alert(selector);
      $(selector).css("background-color",data.color);
    });
  })
});
