import './style.css';

const score = [
  {
    name: 'Mostafa',
    playerScore: 20,
  },
  {
    name: 'Adeka',
    playerScore: 25,
  },
  {
    name: 'Jeen',
    playerScore: 25,
  },
  {
    name: 'Jone',
    playerScore: 15,
  },
  {
    name: 'Doe',
    playerScore: 40,
  },
];

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
