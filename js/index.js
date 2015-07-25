
// Jumps to the provided hash (i.e. anchor id)
// function scrollTo(hash) {
//     location.hash = "#" + hash;
// };

/**
* Keycode:section map and keypress listener for section navigation by hotkeys
*/

var keyToSectionMap = {
   105: "top",
   13: "portfolio",
   112: "portfolio",
   97: "about",
   99: "contact"
};

$(document).keypress(function(evt) {
   // alert(evt.which);
   // alert(evt.target.type);
   if (evt.target.type == "textarea" || evt.target.type == "text") {
      return;
   }
   var section = "#" + keyToSectionMap[evt.which];
   $('html, body').animate({
     'scrollTop': $(section).offset().top
   }, 300);
});
