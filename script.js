const inputMap = {
  'first-name': 'First Name',
  'last-name': 'Last Name',
  'email-address': 'Email Address',
  'notes': 'Notes',
};

function getInputEls() {
  return document.querySelectorAll('.form input, .form textarea');
}

function getMessageEl() {
  return document.getElementById('message');
}

function getErrorEl() {
  const inputs = Array.from(getInputEls());
  const emptyInput = inputs.find((input) => !input.value.trim());
  return emptyInput;
}

function clearInputs() {
  const inputs = Array.from(getInputEls());

  inputs.forEach((input) => {
    input.value = '';
  });
}

function showSuccessMessage() {
  const messageEl = getMessageEl();
  messageEl.innerText = 'Validation successful';
  messageEl.className = 'success';
}

function showErrorMessage(errorEl) {
  const messageEl = getMessageEl();
  const inputName = inputMap[errorEl.id];
  messageEl.innerText = `${inputName} cannot be empty`;
  messageEl.className = 'error';
}

function submit(e) {
  e.preventDefault();
  const errorEl = getErrorEl();

  if (errorEl) {
    showErrorMessage(errorEl);
    clearInputs();
  } else {
    showSuccessMessage();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('submit').addEventListener('click', submit);
});

