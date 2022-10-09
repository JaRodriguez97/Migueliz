function contacto() {
  console.log("hola mundo");
}

console.log(this);

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

function toogleMenu() {
  var menuToggle = document.querySelector(".toggle");
  var menu = document.querySelector(".menu");
  menuToggle.classList.toggle("active");
  menu.classList.toggle("active");
}
