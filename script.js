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

const bookTable = document.getElementById("container");
function displayBooksInCards() {
    for (let i = 0; i < myLibrary.length; i++) {
        // const bookCard = document.createElement("div");
        // bookCard.classList.add("bookCard");
        // bookTable.appendChild(bookCard); Cambiar a tabla
    }
}

const addBookButton = document.getElementById("addBookButton");
addBookButton.addEventListener('click', () => {
    addBookButton.classList.remove("rotate0")
    addBookButton.classList.add("rotate45")
    displayAddBookForm();
}) 

const body = document.querySelector("body");
function displayAddBookForm() {
    body.classList.add("overflow");
    const viewBlocker = document.createElement("div");
    viewBlocker.classList.add("viewBlocker");
    body.appendChild(viewBlocker);
    viewBlocker.addEventListener("click", () => {
        addBookButton.classList.toggle("addBookButtonAnimation");
        body.removeChild(viewBlocker);
        body.classList.remove("overflow");
        addBookButton.classList.remove("rotate45")
        addBookButton.classList.add("rotate0")
        bookForm.style.visibility = "hidden";
    });
    const bookForm = document.getElementById("addBookForm");
    bookForm.style.visibility = "visible" ;
}