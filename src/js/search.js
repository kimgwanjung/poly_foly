const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-btn');
const searchResults = document.getElementById('search-results');

searchButton.addEventListener('click', searchBooks);

function searchBooks() {
    const searchTerm = searchInput.value;
    searchResults.innerHTML = '';


    const books = [
        { title: 'Book 1', author: 'Author 1', price: '10,000', image: './img/st1.jpg' },
        { title: 'Book 2', author: 'Author 2', price: '15,000', image: './img/st2.jpg' },
        { title: 'Book 3', author: 'Author 3', price: '12,000', image: './img/st3.jpg' }
    ];

    if (books.length === 0) {
        const noResults = document.createElement('p');
        noResults.textContent = '검색 결과가 없습니다.';
        searchResults.appendChild(noResults);
    } else {
        books.forEach((book) => {
            const bookItem = createBookItem(book);
            searchResults.appendChild(bookItem);
        });
    }
}

function createBookItem(book) {
    const bookItem = document.createElement('a');
    bookItem.classList.add('book-item-wrapper');
    
    const bookImg = document.createElement('img');
    bookImg.alt = book.title;
    bookImg.classList.add('book-img');
    bookImg.src = book.image;
    bookItem.appendChild(bookImg);

    const bookTitle = document.createElement('div');
    bookTitle.classList.add('book-title');
    bookTitle.textContent = book.title;
    bookItem.appendChild(bookTitle);

    const bookAuthor = document.createElement('div');
    bookAuthor.classList.add('author');
    bookAuthor.textContent = book.author;
    bookItem.appendChild(bookAuthor);

    const bookPrice = document.createElement('div');
    bookPrice.classList.add('price');
    const priceBold = document.createElement('span');
    priceBold.classList.add('price-bold');
    priceBold.textContent = book.price;
    bookPrice.appendChild(priceBold);
    bookPrice.innerHTML += '원';
    bookItem.appendChild(bookPrice);

    return bookItem;
}