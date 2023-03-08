/* eslint-disable no-unused-vars */
import './style.css';

// get ID
const id = 'o1omlETtXdg23fc9m4gK';
const getId = async () => {
  const res = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/',
    {
      method: 'POST',
      body: JSON.stringify({
        name: 'My cool new game',
      }),
      headers: {
        'Content-type': 'application/json',
      },
    },
  );
  const myId = await res.json();
  // console.log(myId);
  return myId;
};

// get the data from API
const getData = async () => {
  const res = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`);
  const gameData = await res.json();
  // console.log(gameData.result);
  return gameData.result;
};

getData();
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

window.addEventListener('load', () => {
  showData();
});

const userNmae = document.getElementById('name');
const userScore = document.getElementById('score');

const userData = async () => {
  if (userNmae.value.length > 0 && userScore.value.length > 0) {
    // console.log(userNmae.value.length);
    const res = await fetch(
      `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`,
      {
        method: 'POST',
        body: JSON.stringify({
          user: userNmae.value,
          score: userScore.value,
        }),
        headers: {
          'Content-type': 'application/json',
        },
      },
    );
    const postScore = await res.json();
    userNmae.value = '';
    userScore.value = '';
    return postScore;
  }
  return 0;
};

// getId();

const submitBtn = document.getElementById('submit');
const refreshBtn = document.getElementById('refresh');

submitBtn.addEventListener('click', () => {
  userData();
});

refreshBtn.addEventListener('click', () => {
  showData();
});
