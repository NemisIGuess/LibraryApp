let myLibrary = [];

class Book {
    constructor (title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}
function addBookToLibrary(book) {
    myLibrary.push(book);
}

const bookTable = document.getElementById("container");
function displayBooks() {
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
    document.getElementById("title").focus();
}) 

const body = document.querySelector("body");
function displayAddBookForm() {
    body.classList.add("overflow");
    const viewBlocker = document.createElement("div");
    viewBlocker.classList.add("viewBlocker");
    body.appendChild(viewBlocker);
    const bookForm = document.getElementById("addBookForm");
    bookForm.style.visibility = "visible";
    viewBlocker.addEventListener("click", clearViewBlocker);
}

function clearViewBlocker() {
    const viewBlocker = document.querySelector(".viewBlocker");
    body.removeChild(viewBlocker);
    body.classList.remove("overflow");
    addBookButton.classList.remove("rotate45")
    addBookButton.classList.add("rotate0")
    const bookForm = document.getElementById("addBookForm");
    bookForm.style.visibility = "hidden";
}

window.addEventListener('submit', (e) => {
    e.preventDefault()
    addBookToLibrary(new Book(form.title.value,form.author.value,form.pages.value,form.read.value));
    form.reset();
    clearViewBlocker();
});


// MIRAR EL CODIGO DE ZACH INGLE DE COMO MOSTRAR LA TABLA, ETC
