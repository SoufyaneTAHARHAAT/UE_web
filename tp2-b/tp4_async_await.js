async function fetch_data_cats(){
    try{
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=3');
        if(!response.ok){
            throw new Error(`Http error ${response.status}`);
        }

        const data = await response.json();
        const array_url_images = data.map(cat => cat.url);

        return array_url_images;
    }

    catch (error){
        console.error(`Error while loading images ${error}`);
        throw error;
    }
}

async function displayCatGallery(){
    const img_cont = document.getElementById("image-container");
    img_cont.innerHTML = '';

    try{
        const fetched_cats_array = await fetch_data_cats();
        fetched_cats_array.forEach(url_element => {
            const img_element = document.createElement('img');
            img_element.src = url_element;
            img_element.alt = "cat";
            img_cont.appendChild(img_element);
        });
    }
    catch (error){
        console.error(`There has been an error ${error}`);
    }
    

}

displayCatGallery();