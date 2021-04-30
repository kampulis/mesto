

export class FormValidator {
  constructor(allClasses, form) {
    this.allClasses = allClasses;
    this.form = form;
  }

  _validateInput(input, errorElement, formButton) {
    if (!input.validity.valid) {
      errorElement.textContent = input.validationMessage;
      formButton.disabled = true;
    } else {
      errorElement.textContent = "";
    }
    if (this.form.checkValidity()) {
      formButton.disabled = false;
    }
  }

  _addValidationsToInputs(formButton, formInputs) {
    formInputs.forEach(input => {
      const inputElement = input.querySelector(this.allClasses.inputSelector)
      const errorElement = input.querySelector(this.allClasses.inputErrorSelector);
      inputElement.addEventListener('input', (e) => {
        e.preventDefault();
        this._validateInput(e.target, errorElement, formButton);
      });
    })
  }

  enableValidations() {
    const formInputs = Array.from(this.form.querySelectorAll(this.allClasses.inputContainerSelector));
    const formButton = this.form.querySelector(this.allClasses.submitButtonSelector);

    this._addValidationsToInputs(formButton, formInputs);
    disableSubmitButtons(this.allClasses);
  }
}

export function disableSubmitButtons(allClasses) {
  const disabledButtons = Array.from(document.querySelectorAll(allClasses.disabledButtonSelector));
  disabledButtons.forEach(button => {
    button.disabled = true;
  })
}

export function resetFormsErrors(forms, allClasses) {
  forms.forEach(function (form) {
    const errorElements = form.querySelectorAll(allClasses.inputErrorSelector);
    errorElements.forEach(element => element.textContent = "");
  })
}





