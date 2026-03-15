const imagesNews = [
  "/Images/ShowCaseImages/SpaceCrash.png",
  "/Images/ShowCaseImages/StartScreen.png",
];

let x = 0;
const elNews = document.querySelector(".imageShowCaseNews");
elNews.style.backgroundImage = `url(${imagesNews[x]})`;

setInterval(() => {
  x = (x + 1) % imagesNews.length;
  elNews.style.backgroundImage = `url(${imagesNews[x]})`;
}, 3000);