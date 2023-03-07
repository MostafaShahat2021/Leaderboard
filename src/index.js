import './style.css';
import { score } from './vars.js';

const scoreList = document.querySelector('.score-list');
const renderScore = () => {
  score.forEach((item) => {
    const lielement = document.createElement('li');
    lielement.setAttribute('class', 'score-container');
    lielement.innerHTML = `
      <span class="name">${item.name}: </span>
      <span class="score">${item.playerScore}</span>
      `;
    scoreList.appendChild(lielement);
  });
};
renderScore();
