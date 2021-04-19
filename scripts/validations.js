const forms = Array.from(document.querySelectorAll(allClasses.formSelector));

function validateInput(form, input, errorElement, formButton) {
  if (!input.validity.valid) {
    errorElement.textContent = input.validationMessage;
    formButton.disabled = true;
  } else {
    errorElement.textContent = "";
  }
  if (form.checkValidity()) {
    formButton.disabled = false;
  }
}

function addValidationsToInputs(form, formButton, formInputs, allClasses) {
  formInputs.forEach(input => {
    const inputElement = input.querySelector(allClasses.inputSelector)
    const errorElement = input.querySelector(allClasses.inputErrorSelector);
    inputElement.addEventListener('input', (e) => {
      e.preventDefault();
      validateInput(form, e.target, errorElement, formButton);
    });
  })
}

function enableValidations(allClasses) {
  forms.forEach(form => {
    const formInputs = Array.from(form.querySelectorAll(allClasses.inputContainerSelector));
    const formButton = form.querySelector(allClasses.submitButtonSelector);
    disableSubmitButtons(allClasses);
    addValidationsToInputs(form, formButton, formInputs, allClasses);
  });
}

function resetFormsErrors(allClasses) {

  forms.forEach(form => {
    const errorElements = form.querySelectorAll(allClasses.inputErrorSelector);
    errorElements.forEach(element => element.textContent = "");
  });
}

function disableSubmitButtons(allClasses) {
  const disabledButtons = Array.from(document.querySelectorAll(allClasses.disabledButtonSelector));
  disabledButtons.forEach(button => {
    button.disabled = true;
  })
}

enableValidations(allClasses);
