import './styles/style.css';
import saveScores from './modules/save-scores.js';
import fetchScores from './modules/fetch-scores.js';
import refreshTable from './modules/refresh-table.js';

fetchScores();
refreshTable();


const saveScoresForm = document.getElementById('scores-form');
saveScoresForm.addEventListener('submit',saveScores)
   
