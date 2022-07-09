function createBookElement(book, index) {
	let card = document.createElement("div");
	card.classList.add("card");
	card.setAttribute("data-index", index);
	card.append(bookDataElement(book));
	card.append(bookReadButton(book));
	card.append(bookRemoveButton(book));

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

function bookReadButton(book) {
	let readButton = document.createElement("button");
	readButton.classList.add("control");
	readButton.classList.add("read");
	readButton.setAttribute("type", "button");
	readButton.innerHTML = "READ";

	return readButton;
}

function bookRemoveButton(book) {
	let removeButton = document.createElement("button");
	removeButton.classList.add("control");
	removeButton.classList.add("remove");
	removeButton.setAttribute("type", "button");
	removeButton.innerHTML = "REMOVE";

	return removeButton;
}

export { createBookElement };
