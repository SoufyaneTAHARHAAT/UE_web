fetch("https://api.thecatapi.com/v1/images/search?limit=3")
    .then(response => response.json())
    .then(data => {
        const catImages = data.map(cat => cat.url);
        displayCatGallery(catImages);
    })
    .catch(error => console.error("Erreur lors du chargement des images de chat :", error));

function displayCatGallery(catImages) {
    const imageContainer = document.getElementById("image-container");
    imageContainer.innerHTML = ""; 

    catImages.forEach(imageUrl => {
        const imgElement = document.createElement("img");
        imgElement.src = imageUrl;
        imgElement.alt = "Chat";
        imageContainer.appendChild(imgElement);
    });
}
