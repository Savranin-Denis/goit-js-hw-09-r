console.log('Form');

const form = document.querySelector('.feedback-form');
const input = form.elements.email;
const message = form.elements.message;

const formData = { email: '', message: '' };

form.addEventListener('input', formInput);

function formInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

const savedData = localStorage.getItem('feedback-form-state');

if (savedData) {
  const parsedData = JSON.parse(savedData);
  input.value = parsedData.email;
  message.value = parsedData.message;
  formData.email = parsedData.email;
  formData.message = parsedData.message;
}

form.addEventListener('submit', formSubmit);

function formSubmit(event) {
  event.preventDefault();
  const emailValue = formData.email.trim();
  const messageValue = formData.message.trim();
  if (emailValue === '' || messageValue === '') {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
  form.reset();
}
