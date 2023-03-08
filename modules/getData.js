// get the data from API
const getData = async () => {
  const res = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/o1omlETtXdg23fc9m4gK/scores/');
  const gameData = await res.json();
  // console.log(gameData.result);
  return gameData.result;
};

// getData();

export default getData;