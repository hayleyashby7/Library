import { myLibrary } from "./library.js";
import { refreshDisplay } from "./display.js";

function clickRemove(event) {
	let index = getIndex(event);
	myLibrary.splice(index, 1);
	refreshDisplay();
}

function clickRead(event) {
	let index = getIndex(event);
	let book = myLibrary[index];

	if (book.read) {
		book.read = false;
	} else {
		book.read = true;
	}
	refreshDisplay();
}

function getIndex(event) {
	let button = event.currentTarget;
	return button.dataset.index;
}

export { clickRemove, clickRead };
