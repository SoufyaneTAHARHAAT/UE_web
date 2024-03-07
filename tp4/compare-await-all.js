const uris = [
  "https://pokeapi.co/api/v2/",
  "https://the-site-that-do-no-exists/",
  "https://httpbin.org/status/404",
];

const head = (uri) =>
  fetch(uri, { method: "HEAD" })
    .then((response) => response.status)
    .catch((error) => error.message);

(async () => {
  async function fetchPromiseAll(uris) {
    return await Promise.all(uris.map((uri) => head(uri)));
  }

  async function fetchForLoopAwait(uris) {
    const results = [];
    for (const uri of uris) {
      results.push(await head(uri));
    }
    return results;
  }

  async function fetchMapAwait(uris) {
    return uris.map(async (uri) => await head(uri));
  }

  console.log(await fetchPromiseAll(uris));
  console.log(await fetchForLoopAwait(uris));
  console.log(await fetchMapAwait(uris));
})();

// 1- La méthode HTTP HEAD est utilisée pour demander uniquement des informations sur les en-têtes de réponse, sans demander le contenu du corps de la réponse. Elle est souvent utilisée pour vérifier l'existence d'une ressource, obtenir des métadonnées sur la ressource, ou vérifier l'état de la ressource sans récupérer le contenu complet.

// Dans le contexte de votre code, la fonction head envoie une requête HEAD à chaque URI spécifié dans le tableau uris. Cette fonction est utilisée pour obtenir le statut de chaque ressource sans récupérer le contenu complet de la réponse. Cela peut être utile pour vérifier rapidement l'accessibilité des ressources ou leur disponibilité sans consommer les données inutilement.

// 2- La fonction fetchMapAwait renvoie un tableau de promesses. Chaque promesse représente le résultat de l'appel à la fonction head pour chaque URI dans le tableau uris.

// Cependant, comme la fonction head retourne une promesse qui résout avec le statut de la réponse HTTP ou rejette avec un message d'erreur, le tableau résultant de fetchMapAwait contiendra des promesses au lieu de valeurs de statut HTTP directes. Cela signifie que le tableau renvoyé par fetchMapAwait contient des promesses qui résolvent avec le statut de chaque réponse, ou rejettent avec un message d'erreur si la requête échoue.

// 3-
/* const uris = [
  "https://pokeapi.co/api/v2/",
  "https://the-site-that-do-no-exists/",
  "https://httpbin.org/status/404",
];

let counter = 0; // Variable pour suivre l'ordre de résolution des promesses

const head = (uri) =>
  fetch(uri, { method: "HEAD" })
    .then((response) => {
      console.log(`Promise résolue pour ${uri}, counter: ${++counter}`);
      return response.status;
    })
    .catch((error) => {
      console.log(`Promise rejetée pour ${uri}, counter: ${++counter}`);
      return error.message;
    });

(async () => {
  async function fetchPromiseAll(uris) {
    return await Promise.all(uris.map((uri) => head(uri)));
  }

  async function fetchForLoopAwait(uris) {
    const results = [];
    for (const uri of uris) {
      results.push(await head(uri));
    }
    return results;
  }

  console.log(await fetchPromiseAll(uris));
  console.log(await fetchForLoopAwait(uris));
})();
 */

// 4- 


/* const head = (uri) =>
  (async () => {
    const startTime = Date.now();

    const status = await fetch(uri, { method: "HEAD" }) 
      .then((response) => response.status)
      .catch((error) => error.message);

    const endTime = Date.now();
    console.log(`Request to ${uri} completed in ${endTime - startTime} ms`);

    return status;
  })();
 */