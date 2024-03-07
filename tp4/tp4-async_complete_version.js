document.addEventListener('DOMContentLoaded', () => {
    const bookmarksButton = document.getElementById('bookmarks-go');
    bookmarksButton.addEventListener('click', async () => {
        try {
            const response = await fetch('all-bookmarks-status.json');
            if (!response.ok) {
                throw new Error(`Failed to fetch bookmarks: ${response.status}`);
            }

            const bookmarks = await response.json();
            const bookmarksList = document.getElementById('bookmarks-list');

            bookmarks.forEach(bookmark => {
                const listItem = document.createElement('li');
                const link = document.createElement('a');
                link.href = bookmark.url;
                link.target = '_blank';
                link.textContent = bookmark.title;

                if (bookmark.status === 'dead') {
                    link.classList.add('offline');
                }

                link.addEventListener('click', event => {
                    if (bookmark.status === 'dead') {
                        const confirmMessage = 'This link appears to be dead. Are you sure you want to proceed?';
                        if (!confirm(confirmMessage)) {
                            event.preventDefault();
                        }
                    }
                });

                listItem.appendChild(link);
                bookmarksList.appendChild(listItem);
            });
        } catch (error) {
            console.error('Error fetching bookmarks:', error);
        }
    });
});
