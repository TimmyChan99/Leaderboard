import './style.css';

// Send Data to API ==> Create a new Game

const api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

fetch(api, {
  method: 'POST',
  body: JSON.stringify({
    name: 'Maze Runner',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
});

// Send Data to API ==> Create a new score for the given game

const form = document.querySelector('#add_score_info');
const userName = document.querySelector('.user_name');
const score = document.querySelector('.user_score');

const newScoreAndUser = async () => {
  await fetch(`${api}nSxqOE1SzPIiMx7pzKks/scores/`, {
    method: 'POST',
    body: JSON.stringify({
      user: userName.value,
      score: score.value,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  newScoreAndUser();
  form.reset();
});

// Display the Data

const scoresList = document.querySelector('.scores_list');

const display = (data) => {
  scoresList.innerHTML = '';
  data.forEach((item) => {
    scoresList.innerHTML += `<li class="score_and_name">${item.user}:${item.score}</li>`;
  });
};

// GET Data to API

const refreshBtn = document.querySelector('.Refresh_btn');

const getScoresList = async () => {
  const getScrores = await fetch(`${api}nSxqOE1SzPIiMx7pzKks/scores/`);
  const reponse = await getScrores.json();
  const data = JSON.parse(JSON.stringify(reponse));
  display(data.result);
};

refreshBtn.addEventListener('click', getScoresList);

// Window onLoad

window.onload = getScoresList();