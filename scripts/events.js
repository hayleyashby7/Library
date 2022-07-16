import { myLibrary } from "./library.js";
import { refreshDisplay } from "./display.js";
import "./book.js";

function clickRemove(event) {
	let index = getIndex(event);
	myLibrary.splice(index, 1);
	refreshDisplay();
}

function clickRead(event) {
	let index = getIndex(event);
	let targetBook = myLibrary[index];

	if (targetBook.read === false) {
		targetBook.read = true;
	} else {
		targetBook.read = false;
	}

	refreshDisplay();
}

function getIndex(event) {
	let button = event.target;
	return button.dataset.index;
}

function openForm() {
	document.getElementById("newBook").style.display = "block";
}
function closeForm() {
	document.getElementById("newBook").style.display = "none";
}
export { clickRemove, clickRead };
