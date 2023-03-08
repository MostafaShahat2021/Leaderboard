/* eslint-disable no-unused-vars */
// get ID
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