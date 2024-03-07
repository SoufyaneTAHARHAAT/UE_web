// elements interactifs de la page
const $output = document.querySelector("#output");
const $fileSelector = document.querySelector("#file-selector");
const $progressBar = document.querySelector("#progress-bar");
const $progressNb = document.querySelector("#progress-number");
const $goButton = document.querySelector("#go-button");

// vérifie si un lien est OK, le cas échéant intérroge GH
async function checkLinkAlive(link) {
  const uri = new URL(link.url);
  console.debug(`checkLinkAlive(${uri})`);
  const apiUri = new URL(`https://api.github.com/repos${uri.pathname}`);
  // 🚧 TODO 🚧
  return;
}

// produit un élément à ajouter à output
function displayLink(link) {
  console.debug("displayLink()", link);
  // 🚧 TODO 🚧
  return;
}

// télécharge la liste choisie et lance checkLinkAlive pour chaque
async function downloadAndCheck(event) {
  console.debug("downloadAndCheck()", event);
  // 🚧 TODO 🚧
  return;
}

$goButton.addEventListener("click", (event) => downloadAndCheck(event));
