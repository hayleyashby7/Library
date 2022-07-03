let myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

function addBookToLibrary(title, author, pages, read) {
  let newBook = new Book(title, author, pages, read);

  myLibrary.push(newBook);
}

addBookToLibrary("Nineteen Eighty-Four", "George Orwell", "328", "Have read");
addBookToLibrary(
  "Alice's Adventures in Wonderland",
  "Lewis Carroll",
  "320",
  "Have read"
);
addBookToLibrary("Wuthering Heights", "Emily Bronte", "464", "Not read");

function createEntry(book) {
  let card = document.createElement("div");
  card.classList.add("card");

  card.append(bookDataElement(book));

  document.getElementById("library").append(card);
}

function bookDataElement(book) {
  let bookElem = document.createElement("ul");
  bookElem.classList.add("book-data");

  bookElem.appendChild(titleListElem(book.title));
  bookElem.appendChild(authorListElem(book.author));
  bookElem.appendChild(pagesListElem(book.pages));
  bookElem.appendChild(readListElem(book.read));

  return bookElem;

  function titleListElem(title) {
    let titleElem = document.createElement("li");
    titleElem.classList.add("title");
    titleElem.innerHTML = "<b>" + title + "</b>";
    return titleElem;
  }

  function authorListElem(author) {
    let authorElem = document.createElement("li");
    authorElem.classList.add("author");
    authorElem.innerHTML = "<i>" + author + "</i>";
    return authorElem;
  }

  function pagesListElem(pages) {
    let pagesElem = document.createElement("li");
    pagesElem.classList.add("pages");
    pagesElem.innerHTML = "(" + pages + " pages)";
    return pagesElem;
  }

  function readListElem(read) {
    let readElem = document.createElement("li");
    readElem.classList.add("read");
    readElem.innerHTML = read;
    return readElem;
  }
}

createEntry(myLibrary[0]);
