import { myLibrary } from "./library.js";
import { refreshDisplay } from "./display.js";

function clickRemove(event) {
	let button = event.currentTarget;
	let index = button.dataset.index;
	myLibrary.splice(index, 1);
	refreshDisplay();
}

export { clickRemove };
