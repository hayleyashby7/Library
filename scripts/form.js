function formSetUp() {
	addNewBookEvent();
	cancelNewBookEvent();
}

function addNewBookEvent() {
	let newBookBtn = document.getElementById("new");
	newBookBtn.addEventListener("click", openForm);
}

function cancelNewBookEvent() {
	let cancelBookBtn = document.getElementById("cancel");
	cancelBookBtn.addEventListener("click", closeForm);
}

function openForm() {
	document.getElementById("newBook").style.display = "block";
	document.getElementById("library").classList.add("fade");
}

function closeForm() {
	document.getElementById("newBook").style.display = "none";
	document.getElementById("library").classList.remove("fade");
}

export { formSetUp };
