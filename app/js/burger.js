//Just to flash the showcase, this is pure CSS
var inputs = document.getElementsByClassName(".menu-toggle"),
    labels = document.getElementsByClassName(".menu-burger");

//Label Menus to make them easier to search for
for (var x = 0; x < labels.length; x++){
  labels[x].innerHTML += "<b>Menu "+ (x + 1) + "</b>";
}

//Checks all checkboxs triggering all CSS transitions
function check (status) {
  for (var x = 0; x < inputs.length; x++){
    inputs[x].checked = status;
  }
  if(status){
    var uncheck = setTimeout(function() {
      check(false);
    }, 2000);
  }

}

// Выдвижение меню

var $btn = document.getElementById('menu-burger');
var $nav = document.getElementById('burger-menu');

$btn.addEventListener('click', function() {
    $nav.classList.toggle('active');
});
