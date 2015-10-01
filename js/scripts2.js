jQuery(document).ready(function() {
jQuery("h1").click(function() {
  alert("This is a header.");
  alert("I told you, THIS IS A HEADER!")
});

jQuery("h2").click(function() {
  alert("This is a smaller header.");
});


jQuery("p").dblclick(function() {
  alert("This is a paragraph.");
});

jQuery("img").click(function() {
  alert("This is an image.");
});

jQuery("ul").dblclick(function() {
  alert("This is a list");
});

});
