'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  if (!input.id) {
    input.id = `${input.name}-input`;
  }

  if (!input.name) {
    return;
  }

  if (
    input.type === 'submit' ||
    input.type === 'button' ||
    input.type === 'hidden'
  ) {
    return;
  }

  const label = document.createElement('label');
  const labelText = input.name.charAt(0).toUpperCase() + input.name.slice(1);

  label.classList.add('field-label');
  label.htmlFor = input.id;
  label.textContent = labelText;
  input.placeholder = labelText;
  input.parentNode.appendChild(label);
});
