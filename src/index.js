import './styles/style.css';
import saveScores from './modules/save-scores.js';
import fetchScores from './modules/fetch-scores.js';

const saveScoresForm = document.getElementById('scores-form');
saveScoresForm.addEventListener('submit', saveScores);

const refreshBtn = document.getElementById('refresh-score');
refreshBtn.addEventListener('click', fetchScores);
