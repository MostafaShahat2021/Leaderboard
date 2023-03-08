/* eslint-disable no-unused-vars */
import getData from './getData.js';

// Show Data
const scoreList = document.querySelector('.score-list');
const showData = async () => {
  const data = await getData();
  const renderScore = () => {
    data.forEach((item) => {
      const lielement = document.createElement('li');
      lielement.setAttribute('class', 'score-container');
      lielement.innerHTML = `
        <span class="name">${item.user}: </span>
        <span class="score">${item.score}</span>
        `;
      scoreList.appendChild(lielement);
    });
  };
  renderScore();
};

export default showData;