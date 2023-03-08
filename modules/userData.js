/* eslint-disable import/prefer-default-export */

const userNmae = document.getElementById('name');
const userScore = document.getElementById('score');

const userData = async () => {
  if (userNmae.value.length > 0 && userScore.value.length > 0) {
    // console.log(userNmae.value.length);
    const res = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/o1omlETtXdg23fc9m4gK/scores/',
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

export default userData;