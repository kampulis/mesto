export class FormValidator {
  constructor(allClasses, parentSelector) {
    this.allClasses = allClasses;
    this.form = document.querySelector(`${parentSelector} form`);
    this.submitButton = this.form.querySelector(allClasses.submitButtonSelector);
    this.inputs = Array.from(this.form.querySelectorAll(this.allClasses.inputContainerSelector));
    this.enableValidations = this.enableValidations.bind(this);
  }

  _validateInput(input, errorElement) {
    if (!input.validity.valid) {
      this._showInputError(input, errorElement);
    } else {
      this._hideInputError(errorElement);
    }
    this.toggleSubmitButtonState();
  }

  _showInputError(input, errorElement) {
    errorElement.textContent = input.validationMessage;
  }

  _disableButton(button) {
    button.disabled = true;
  }

  _hideInputError(errorElement) {
    errorElement.textContent = "";
  }

  _addValidationsToInputs() {
    this.inputs.forEach(input => {
      const inputElement = input.querySelector(this.allClasses.inputSelector)
      const errorElement = input.querySelector(this.allClasses.inputErrorSelector);
      inputElement.addEventListener('input', (e) => {
        this._validateInput(e.target, errorElement);
      });
    })
  }

  clearErrors() {
    this.inputs.forEach(input => this._hideInputError(input.querySelector(this.allClasses.inputErrorSelector)));
  }

  toggleSubmitButtonState() {
    if (this.form.checkValidity()) {
      this.submitButton.disabled = false;
    } else {
      this.submitButton.disabled = true;
    }
  }

  enableValidations() {
    this._addValidationsToInputs();
    this.toggleSubmitButtonState();
  }
}
