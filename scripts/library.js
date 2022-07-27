import { createBook } from "./book.js";
import { createBookElement } from "./display.js";
import { formSetUp } from "./form.js";

let myLibrary = [];

function addBookToLibrary(title, author, pages, read) {
	let newBook = createBook(title, author, pages, read);

	myLibrary.push(newBook);
}

function updateLibrary() {
	for (let i = 0; i < myLibrary.length; i++) {
		createBookElement(myLibrary[i], i);
	}
}

formSetUp();

export { myLibrary, addBookToLibrary, updateLibrary };
