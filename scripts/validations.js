const forms = Array.from(document.querySelectorAll(allClasses.formSelector));

function validateInput(form, input, errorElement, formButton) {
  const errorShort = `Минимальное количество символов ${input.minLength}. Длина текста сейчас: ${input.value.length} символ`;
  if (input.validity.valueMissing) {
    errorElement.textContent = "Вы пропустили это поле";
    formButton.disabled = true;
  } else if (input.validity.tooShort) {
    errorElement.textContent = errorShort;
    formButton.disabled = true;
  } else if (input.validity.typeMismatch) {
    errorElement.textContent = "Введите адрес сайта";
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
    const disabledButtons = Array.from(document.querySelectorAll(allClasses.disabledButtonSelector));
    disabledButtons.forEach(button => {
      button.disabled = true;
    })
    addValidationsToInputs(form, formButton, formInputs, allClasses);
  });
}

function resetFormsErrors(allClasses) {

  forms.forEach(form => {
    const errorElements = form.querySelectorAll(allClasses.inputErrorSelector);
    errorElements.forEach(element => element.textContent = "");
  });
}

enableValidations(allClasses);
