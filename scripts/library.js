import { createBook } from "./book.js";
import { createBookElement } from "./display.js";

export let myLibrary = [];

function addBookToLibrary(title, author, pages, read) {
	let newBook = createBook(title, author, pages, read);

	myLibrary.push(newBook);
}

export function updateLibrary() {
	for (let i = 0; i < myLibrary.length; i++) {
		createBookElement(myLibrary[i], i);
	}
}

addBookToLibrary("Nineteen Eighty-Four", "George Orwell", "328", "Have read");
addBookToLibrary("Alice's Adventures in Wonderland", "Lewis Carroll", "320", "Have read");
addBookToLibrary("Wuthering Heights", "Emily Bronte", "464", "Not read");
updateLibrary();
