import "./styles/main.scss";
import template from "./templates/main.hbs"
import data from "./data/data.json"
import { setLocalStorage } from "./utils/utils";
import { getLocalStorage } from "./utils/utils";

let tmpNameUser = ''

window.onload = () => {
  const container = document.getElementById('container');
  const isName = getLocalStorage()
  if (isName) {
    const newDate = Object.assign({}, data, { name: isName })
    container.innerHTML = template(newDate)
  } else {
    container.innerHTML = template(data);
    const nameInput = document.getElementById('nameInput')
    const saveUser = document.getElementById('saveUser')

    nameInput.addEventListener('input', e => {
      console.log(e.target.value);
      tmpNameUser = e.target.value
    })
    saveUser.addEventListener('click', () => {
      setLocalStorage(tmpNameUser)
    })
  }
}

const output = document.querySelector('#js-output');
const input = document.querySelector('#js-input');
const btn = document.querySelector('#js-btn');

const updateView = () => {
  output.textContent = localStorage.getItem('goit-js-module-12') || '';
};

const handleClick = () => {
  localStorage.setItem('goit-js-module-12', input.value);
  updateView();
};

updateView();

btn.addEventListener('click', handleClick);
// localStorage.clear()