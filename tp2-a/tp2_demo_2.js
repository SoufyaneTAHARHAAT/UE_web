"use strict";
console.info(`Le script ${document.currentScript.src} s'exécute...`);
console.debug(document.querySelectorAll("a"));
console.info(`...le script ${document.currentScript.src} a terminé.`);

let list_count = document.querySelectorAll('li');
console.log(`List item count : ${list_count.length}`);