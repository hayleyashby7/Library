import { refreshDisplay } from "./display.js";
import { addBookToLibrary, myLibrary } from "./library.js";

let title, author, pages, read;

function formSetUp() {
	resetFormData();
	newBookEvent();
	inputEvents();
	addNewBookEvent();
	cancelNewBookEvent();
}

function resetFormData() {
	title = "";
	author = "";
	pages = 0;
	read = false;
}

function resetFormElements() {
	let inputs = document.getElementsByClassName("form-input");
	for (let input of inputs) {
		if (input.name === "read") {
			input.checked = false;
		} else {
			input.value = "";
		}
	}
}

function newBookEvent() {
	let newBookBtn = document.getElementById("new-btn");
	newBookBtn.addEventListener("click", openForm);
}

function cancelNewBookEvent() {
	let cancelBookBtn = document.getElementById("cancel");
	cancelBookBtn.addEventListener("click", closeForm);
}

function addNewBookEvent() {
	let addBookBtn = document.getElementById("add");
	addBookBtn.addEventListener("click", addBook);
}

function inputEvents() {
	let inputs = document.querySelectorAll("input");
	for (let input of inputs) {
		addEventListener("change", inputChanged);
	}
}

function inputChanged(event) {
	let value = event.target.value;

	switch (event.target.name) {
		case "title":
			title = value;
			break;
		case "author":
			author = value;
			break;
		case "pages":
			pages = value;
			break;
		case "read":
			if ((value = "on")) {
				read = true;
			} else {
				read = false;
			}

			break;
		default:
			break;
	}
}

function openForm() {
	resetFormData();
	resetFormElements();
	document.getElementById("newBook").style.display = "block";
	document.getElementById("main-display").classList.add("fade");
}

function closeForm() {
	resetFormData();
	resetFormElements();
	document.getElementById("newBook").style.display = "none";
	document.getElementById("main-display").classList.remove("fade");
}

function addBook() {
	addBookToLibrary(title, author, pages, read);
	closeForm();
	refreshDisplay();
}

export { formSetUp };
