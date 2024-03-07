"use strict";
console.info("app.js loading...");

console.info("...app.js loaded");

/* Ajout du bouton RSTW... */

var new_button = document.createElement('button');
var new_text = document.createTextNode('RSTUVWXYZ');
new_button.appendChild(new_text);

var existing_button = document.getElementById('demo-btn');

existing_button.insertAdjacentElement('afterend', new_button);

/* Ajout du handler */

var counter = 0;
document.getElementById('demo-btn').addEventListener('click', click_counter);

function click_counter(){
    counter ++;

    const divCode = document.getElementById('output-code');
    const newParagraph = document.createElement('p');
    const newText = document.createTextNode(`click num ${counter}`);
    newParagraph.appendChild(newText);

    divCode.appendChild(newParagraph);

}

new_button.addEventListener('click', decremente);

function decremente(){
    const listDemoElements = document.getElementById('output-code');
    for(let i=0; i<counter;i++)
    {
        listDemoElements.removeChild(listDemoElements.firstElementChild);
    }
    counter = 0;
}

/*//////// Carre de input //////////*/

document.getElementById('eval-btn').addEventListener('click', calculate_square);

function calculate_square()
{
    const input_area = document.getElementById('input-int');
    const input_value = input_area.value;

    alert('The square is '+ input_value * input_value);

}

/*//////// Background red style //////////*/

const exercice2_button = document.getElementById('toggle-btn');

exercice2_button.addEventListener('click', func_red);

function func_red(){
    exercice2_button.classList.toggle('background_red');
}

///////// disabled button ///////////

exercice2_button.addEventListener('click', count_clicks);

let cli_counter = 0;
function count_clicks(){
    cli_counter ++;
    console.log('click counter : '+ cli_counter);
    if(cli_counter ===10){
        exercice2_button.disabled = true;
    }
}

/////// Konami //////////

const konami_area = document.getElementById('konami');
const new_par=document.createElement('p');
const new_input=document.createElement('input');
new_par.appendChild(new_input);
konami_area.appendChild(new_par);

const konamiCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
  ];

const pressed_keys=[];

new_input.onkeydown = handle_pressed_keys;

function handle_pressed_keys(event){
    const key_event=event.key;
    pressed_keys.push(key_event);
    console.log('pressed key : '+key_event);
    console.log('tab key : '+pressed_keys);
    
    const pressedKeysString = pressed_keys.join(',');
    const konamiCodeString = konamiCode.join(',');

  if (pressedKeysString === konamiCodeString) {
    alert('You got it right !');
  }
}