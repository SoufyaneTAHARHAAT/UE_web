document.addEventListener('DOMContentLoaded', ()=> {
    const book_marks_button = document.getElementById('bookmarks-go');

    book_marks_button.addEventListener('click', async() => {
        try{
            const response = await fetch('all-bookmarks-status.json');
            if(!response.ok){
                throw new Error(`Failed to load data ${response.status}`);
            }

            const data = await response.json();

            display_list(data);
        }
        catch (error){
            console.error('Error loading data', error);
        }
    });
});

function display_list(bookmarks){
    const bookMarksList = document.getElementById('bookmarks-list');
    bookMarksList.innerHTML = '';

    bookmarks.forEach(bookMark => {
        const bookItem = document.createElement('li');
        bookItem.textContent = bookMark.title;
        bookMarksList.appendChild(bookItem);
    });
}