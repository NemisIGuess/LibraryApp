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
    window.addEventListener("keydown", (e) => {
        if (e.key == 'Escape') {clearViewBlocker()};
    })
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
    addBookToLibrary(new Book(form.title.value, form.author.value, form.pages.value, form.read.value));
    form.reset();
    clearViewBlocker();
    displayTable();
});

function removeBook(index) {
    myLibrary.splice(index, 1)
}

function createRemoveButton(index) {
    let editTableData = document.createElement('td');
    let editButton = document.createElement('input');
    editButton.type = 'image';
    editButton.src = "/images/bin.png";
    editButton.addEventListener('click', () => {
        myLibrary.splice(index, 1);
        displayTable();
    });
    editTableData.appendChild(editButton);
    return editTableData;
}

function createReadButton(index) {
    let readTableData = document.createElement('td');
    let readButton = document.createElement('input');
    readButton.type = 'image';
    readButton.src = "/images/read.png";
    readButton.addEventListener('click', () => {
        myLibrary[index].read == "Yes" ? myLibrary[index].read = "No" : myLibrary[index].read = "Yes";
        displayTable();
    });
    readTableData.appendChild(readButton);
    return readTableData;
}

function displayTable() {
    const tableBody = document.querySelector('tbody');

    while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
    }

    myLibrary.forEach((book, index) => {
        let tableRow = document.createElement('tr');
        Object.keys(book).forEach(prop => {
            let tableData = document.createElement('td');
            tableData.textContent = book[prop];
            tableRow.appendChild(tableData);
    })
    
    tableRow.appendChild(createReadButton(index));
    tableRow.appendChild(createRemoveButton(index));
    tableBody.appendChild(tableRow);
    })

    saveDataToLocal();
}

function saveDataToLocal() {
    localStorage.setItem('library', JSON.stringify(myLibrary));
}

function getDataFromLocal() {
    myLibrary = JSON.parse(localStorage.getItem('library'));
}

document.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem('library')) {
        saveDataToLocal();
    } else {
        getDataFromLocal();
    }

    displayTable();
})