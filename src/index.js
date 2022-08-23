import _ from 'lodash';
import './styles/style.css';
import renderTable from './modules/render-table.js'; 

renderTable();

const tbEvenRows = document.querySelector("#table-data tr:nth-child(2)");
console.log(tbEvenRows);
