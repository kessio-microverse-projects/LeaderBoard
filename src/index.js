import './styles/style.css';
import renderTable from './modules/render-table.js';
import saveScores from './modules/save-scores.js';
import fetchScores from './modules/fetch-scores.js'

//renderTable();
console.log(fetchScores())

const saveScoresForm = document.getElementById('scores-form');
saveScoresForm.addEventListener('submit',saveScores)
   
