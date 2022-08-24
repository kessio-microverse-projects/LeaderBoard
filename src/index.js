import './styles/style.css';
import renderTable from './modules/render-table.js';
import saveScores from './modules/save-scores.js';

renderTable();

const saveScoresForm = document.getElementById('scores-form');
saveScoresForm.addEventListener('submit', saveScores);
