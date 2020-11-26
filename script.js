let myLibrary = [];

function Book(title, author,year, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.yearPublished = year;
    this.read = read;
}
function addBookToLibrary(book) {
    myLibrary.push(book);
}

const bookshelf = document.getElementById("container");
function displayBooksInCards() {
    for (let i = 0; i < myLibrary.length; i++) {
        const bookCard = document.createElement("div");
        bookCard.classList.add("bookCard");
        bookshelf.appendChild(bookCard);
    }
}

const addBook = document.getElementById("addBook");
addBook.addEventListener('click', () => {
        addBook.classList.toggle("addBookAnimation");
}) 