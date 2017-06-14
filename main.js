var menu = document.getElementsByClassName("menu");
var responsive = document.getElementById("responsive-nav");

for (var i = 0; i < menu.length; i++) {
  menu[i].addEventListener("click", function () {
    responsive.classList.toggle("toggle-nav");
  })
}
