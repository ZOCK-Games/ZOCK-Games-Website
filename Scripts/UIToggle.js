let UI = document.getElementById("InfoPanel");
function toggleUI() {
  if (UI.style.opacity == 0) {
    UI.style.opacity = 1; // sichtbar
    UI.style.display = "block";
  } else {
    UI.style.opacity = 0; // unsichtbar
    UI.style.display = "none";
  }
}
