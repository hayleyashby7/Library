import { createBook } from "./book.js";
import { createBookElement } from "./display.js";
import { formSetUp } from "./form.js";

export let myLibrary = [];

function addBookToLibrary(title, author, pages, read) {
	let newBook = createBook(title, author, pages, read);

	myLibrary.push(newBook);
}

export function updateLibrary() {
	for (let i = 0; i < myLibrary.length; i++) {
		createBookElement(myLibrary[i], i);
	}

	console.log(myLibrary);
}

addBookToLibrary("Nineteen Eighty-Four", "George Orwell", "328", true);
addBookToLibrary("Alice's Adventures in Wonderland", "Lewis Carroll", "320", true);
addBookToLibrary("Wuthering Heights", "Emily Bronte", "464", false);
updateLibrary();
formSetUp();
