const $examples = document.querySelectorAll("#examples li");
const $imageHref = document.querySelector("#image-href");
const $addButton = document.querySelector("#add-button");
const $imageContainer = document.querySelector("#image-container");


$addButton.addEventListener("click", () => {
  const url = new URL($imageHref.value);
  // Added Code
  const divImageContainer = document.createElement('div');
  divImageContainer.classList.add('myDivImageContainer');
  const newImage = document.createElement('img');
  newImage.classList.add('myNewImage');
  newImage.src = url;
  newImage.height = 200;
  newImage.width = 300;
  divImageContainer.appendChild(newImage);
  $imageContainer.appendChild(divImageContainer);

  //Creating fonctional buttons

  const dropDownButton = document.createElement('button');
  dropDownButton.textContent = 'Drop Down';
  divImageContainer.appendChild(dropDownButton);

  const pushUpButton = document.createElement('button');
  pushUpButton.textContent = 'Push Up';
  divImageContainer.appendChild(pushUpButton);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete image';
  divImageContainer.appendChild(deleteButton);

  //delete button handler
  deleteButton.addEventListener("click", () => {
    deleteDiv(divImageContainer);
    checkPosition(deleteButton);
  });
  //push up button handler
  pushUpButton.addEventListener('click', () =>{
    moveDivUp(divImageContainer);
    checkPosition(pushUpButton);
  })
  
  //drop down handler
  dropDownButton.addEventListener('click', () =>{
    moveDivDown(divImageContainer);
    checkPosition(dropDownButton);
  })

  // Added code end */
  console.debug(`Ajouter l'image ${url} à`, $imageContainer);
});

$imageHref.addEventListener("input", () => {
  $addButton.disabled = !$imageHref.checkValidity() || $imageHref.value === "";
});

for (const $example of $examples)
  $example.addEventListener("click", () => {
    $imageHref.value = $example.textContent.trim();
    $imageHref.dispatchEvent(new Event("input"));
  });

  function deleteDiv(divImageContainer) {
    divImageContainer.remove();
  }


  function moveDivDown(divImageContainer){
    const upfrontDiv = divImageContainer.nextElementSibling;
    if(upfrontDiv) {
      divImageContainer.parentNode.insertBefore(upfrontDiv, divImageContainer);
    }
  }

  function moveDivUp(divImageContainer) {
    const priviousDiv = divImageContainer.previousElementSibling;
    if (priviousDiv) {
      priviousDiv.parentNode.insertBefore(divImageContainer, priviousDiv);
    }
  }

  function checkPosition(pb) {
    $imageContainer.firstElementChild.pb.disabled = false;
    $imageContainer.lastElementChild.pb.disabled = false;
  }