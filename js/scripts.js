$(function(){
  $(".clickable").click(function() {
    $("#initially-showing").fadeToggle();
    $("#initially-hidden").fadeToggle();
  });
});

$(".click").click(function() {
    $("#walrus").fadeOut();

});
