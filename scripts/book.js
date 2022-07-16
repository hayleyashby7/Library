class Book {
	title;
	author;
	pages;
	read;

	constructor(title, author, pages, read) {
		this.title = title;
		this.author = author;
		this.pages = pages;
		this.read = read;
	}
}

function createBook(title, author, pages, read) {
	return new Book(title, author, pages, read);
}

export { createBook };
