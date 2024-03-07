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

// Fonction pour initialiser l'affichage de la progression
function setProgress(total) {
  $progressBar.value = 0; // Initialiser la barre de progression à zéro
  $progressBar.max = total; // Définir la valeur maximale de la barre de progression sur le nombre total d'éléments à traiter
  updateProgress(); // Mettre à jour l'affichage de la progression
}

// Fonction pour faire évoluer d'un cran la progression
function updateProgress() {
  $progressBar.value += 1; // Augmenter la valeur de la barre de progression de 1
  $progressNb.textContent = `${$progressBar.value} / ${$progressBar.max}`; // Mettre à jour le texte affichant la progression actuelle
}

setProgress(7);

// Fonction pour faire évoluer progressivement la barre de progression
function incrementProgress(totalSeconds) {
  const totalTime = totalSeconds * 1000; // Convertir en millisecondes
  const totalIterations = $progressBar.max; // Nombre total d'itérations nécessaires pour atteindre la valeur finale de la barre de progression
  const incrementValue = totalTime / totalIterations; // Valeur d'incrémentation pour chaque itération
  
  let currentValue = 0;

  // Définir l'intervalle pour incrémenter la barre de progression
  const interval = setInterval(() => {
    currentValue++;
    $progressBar.value = currentValue;

    // Vérifier si la valeur actuelle atteint la valeur maximale de la barre de progression
    if (currentValue >= $progressBar.max) {
      clearInterval(interval); // Arrêter l'intervalle une fois la progression terminée
    }
  }, incrementValue);
}

// Utilisation :
// Appeler la fonction incrementProgress avec le nombre total de secondes
incrementProgress(10); // Par exemple, pour une progression de 10 secondes
