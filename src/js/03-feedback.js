import '../css/common.css';
import '../css/03-feedback.css';

import throttle from 'lodash.throttle';

const input = document.querySelector(`[name="email"]`);
const textarea = document.querySelector(`[name="message"]`);
const form = document.querySelector(`.feedback-form`);
const FEEDBACK_KEY = `feedback-form-state`;


populateInputs();
form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 300));

const userData = {
  [input.name]: input.value,
  [textarea.name]: textarea.value,
};
localStorage.setItem(FEEDBACK_KEY, JSON.stringify(userData));

console.log(userData);

function onFormSubmit(e) {
  e.preventDefault();
  console.log(userData);
  e.currentTarget.reset();
  localStorage.removeItem(FEEDBACK_KEY);
}

function onFormInput() {
  userData[input.name] = input.value;
  userData[textarea.name] = textarea.value;
  localStorage.setItem(FEEDBACK_KEY, JSON.stringify(userData));
}

function populateInputs() {
  const savedData = localStorage.getItem(FEEDBACK_KEY);
  const currentUserData = JSON.parse(savedData);
  if (!currentUserData) {
    return;
  }
  input.value = currentUserData.email;
  textarea.value = currentUserData.message;
}