const imagesGames = [
  "/Images/ShowCaseImages/Game.png",
  "/Images/ShowCaseImages/SpaceCrash.png",
  "/Images/ShowCaseImages/StartScreen(1).png",
  "/Images/ShowCaseImages/TitelImage.png"
];

let i = 0;
const elGames = document.querySelector(".imageShowCaseGame");
elGames.style.backgroundImage = `url(${imagesGames[i]})`;
i + 1;

setInterval(() => {
  i = (i + 1) % imagesGames.length;
  elGames.style.backgroundImage = `url(${imagesGames[i]})`;
}, 3000);