function formSetUp() {
	addNewBookEvent();
	cancelNewBookEvent();
	closeForm();
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
}

function closeForm() {
	document.getElementById("newBook").style.display = "none";
}

export { formSetUp };
