// Creates a reusable popup in javascript
function showPopup(btn, message, onConfirm, onCancel) {
	var dialogId = "test";

	var existing = document.getElementById(dialogId);
	if(existing !== null) {
		existing.showModal();
		return;
	}

	// Create root popup object
	var dialog = document.createElement('dialog');
	dialog.setAttribute("id", dialogId);

	// Create message
	var messageBlock = document.createElement('p');
	messageBlock.innerText = message;
	dialog.appendChild(messageBlock);
	
	// Configure confirmation button
	var confirmButton = document.createElement('Button');
	confirmButton.innerText = 'Confirm';
	confirmButton.addEventListener('click', function(e) {
		var modal = document.getElementById(dialogId);
		modal.close();
		eval(onConfirm);
	});
	dialog.appendChild(confirmButton);

	// Configure cancellation button
	var cancelButton = document.createElement('Button');
	cancelButton.innerText = 'Cancel';
	cancelButton.addEventListener('click', function(e) {
		var modal = document.getElementById(dialogId);
		modal.close();
		eval(onCancel);
	});
	dialog.appendChild(cancelButton);

	// Bind popup to object calling this function + show modal
	btn.parentElement.appendChild(dialog);
	document.getElementById(dialogId).showModal();
}