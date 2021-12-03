const btn = document.getElementById("menu-btn");
const slide = document.getElementById("menu");

function navtoggle() {
  btn.classList.toggle("open");
  slide.classList.toggle("hidden");
  document.body.classList.toggle("no-scroll");
}

btn.addEventListener("click", navtoggle);
