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

addBookToLibrary("Nineteen Eighty-Four", "George Orwell", "328", "True");
addBookToLibrary("Alice's Adventures in Wonderland", "Lewis Carroll", "320", "True");
addBookToLibrary("Wuthering Heights", "Emily Bronte", "464", "False");
