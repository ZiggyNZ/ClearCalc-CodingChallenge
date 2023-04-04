// Creates a reusable popup in javascript
function createOrShowPopup(btn, message, onConfirm, onCancel) {
	var dialogId = "popup-"+btn.id;

	var existing = document.getElementById(dialogId);
	if(existing !== null) {
		existing.showModal();
		return;
	}

	// Create root popup object
	var dialog = document.createElement('dialog');
	dialog.setAttribute("id", dialogId);
	dialog.className = "reusable";

	// Create message
	var messageBlock = document.createElement('p');
	messageBlock.innerText = message;
	dialog.appendChild(messageBlock);
	
	var buttonBlock = document.createElement('div');

	// Configure confirmation button
	var confirmButton = document.createElement('Button');
	confirmButton.innerText = 'Confirm';
	confirmButton.addEventListener('click', function(e) {
		var modal = document.getElementById(dialogId);
		modal.close();
		eval(onConfirm);
	});
	buttonBlock.appendChild(confirmButton);

	// Configure cancellation button
	var cancelButton = document.createElement('Button');
	cancelButton.innerText = 'Cancel';
	cancelButton.addEventListener('click', function(e) {
		var modal = document.getElementById(dialogId);
		modal.close();
		eval(onCancel);
	});
	buttonBlock.appendChild(cancelButton);

	dialog.appendChild(buttonBlock);

	// Bind popup to object calling this function + show modal
	btn.parentElement.appendChild(dialog);
	document.getElementById(dialogId).showModal();
}

// An example of how some predfined function can be fed into the buttons
function defaultFunction() {
	console.log('example text to console');
}