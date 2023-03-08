/* eslint-disable no-unused-vars */
import './style.css';
import showData from '../modules/showData.js';
import userData from '../modules/userData.js';
import getData from '../modules/getData.js';

const submitBtn = document.getElementById('submit');
const refreshBtn = document.getElementById('refresh');

window.addEventListener('load', () => {
  showData();
});

submitBtn.addEventListener('click', () => {
  userData();
});

refreshBtn.addEventListener('click', () => {
  getData();
  showData();
});
