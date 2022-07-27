import { clickRemove, clickRead } from "./events.js";
import { updateLibrary } from "./library.js";

function createBookElement(book, index) {
	let card = document.createElement("div");
	card.classList.add("card");

	if (book.read === false) {
		card.classList.add("not-read");
	} else {
		card.classList.remove("not-read");
	}

	card.setAttribute("data-index", index);
	card.append(bookDataElement(book));
	card.append(bookReadToggle(book, index));
	card.append(bookRemoveButton(book, index));

	document.getElementById("library").append(card);
}

function bookDataElement(book) {
	let bookElem = document.createElement("ul");
	bookElem.classList.add("book-data");

	bookElem.appendChild(titleListElem(book.title));
	bookElem.appendChild(authorListElem(book.author));
	bookElem.appendChild(pagesListElem(book.pages));

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
}

function bookReadToggle(book, index) {
	let readToggle = document.createElement("label");
	readToggle.classList.add("read-toggle");
	readToggle.setAttribute("data-index", index);
	readToggle.appendChild(bookReadInput(book.read));
	readToggle.appendChild(bookReadSwitch());
	readToggle.appendChild(bookReadLabel());

	return readToggle;

	function bookReadInput(read) {
		let readInput = document.createElement("input");
		readInput.setAttribute("type", "checkbox");
		readInput.classList.add("toggle-checkbox");
		if (read === true) {
			readInput.checked = true;
		} else {
			readInput.checked = false;
		}

		return readInput;
	}

	function bookReadSwitch() {
		let readSwitch = document.createElement("div");
		readSwitch.classList.add("toggle-switch");
		readSwitch.setAttribute("data-index", index);
		readSwitch.addEventListener("click", clickRead);
		return readSwitch;
	}

	function bookReadLabel() {
		let readLabel = document.createElement("span");
		readLabel.classList.add("toggle-label");
		readLabel.innerHTML = "Read";
		return readLabel;
	}
}

function bookRemoveButton(book, index) {
	let removeButton = document.createElement("button");
	removeButton.classList.add("control");
	removeButton.classList.add("remove");
	removeButton.setAttribute("type", "button");
	removeButton.setAttribute("data-index", index);
	removeButton.innerHTML = "REMOVE";
	removeButton.addEventListener("click", clickRemove);

	return removeButton;
}

function refreshDisplay() {
	let books = document.querySelectorAll(".card");
	for (let book of books) {
		book.remove();
	}
	updateLibrary();
}

export { createBookElement, refreshDisplay };
