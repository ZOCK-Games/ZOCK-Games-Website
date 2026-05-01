let dragging = false;
let offsetY = 0;

const image = document.getElementById("scrollImage");

// Scroll-Funktion
window.addEventListener("scroll", function () {
  if (!dragging) {
    const scrollTop = window.scrollY || window.pageYOffset;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollProzent = docHeight > 0 ? scrollTop / docHeight : 0;
    const maxTop = window.innerHeight - image.offsetHeight;
    const neueTop = scrollProzent * maxTop;
    image.style.top = neueTop + "px";
  }
});

image.addEventListener("mousedown", function (e) {
  dragging = true;
  offsetY = e.clientY - image.getBoundingClientRect().top;
  image.style.cursor = "grabbing";
  document.body.style.userSelect = "none";
});

document.addEventListener("mouseup", function () {
  if (dragging) {
    dragging = false;
    image.style.cursor = "grab";
    document.body.style.userSelect = "";
  }
});
