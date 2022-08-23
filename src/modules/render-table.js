const renderTable = () => {
  const tableData = [
    {
      name: 'Name:',
      score: 100,
    },
    {
      name: 'Name:',
      score: 20,
    },
    {
      name: 'Name:',
      score: 50,
    },
    {
      name: 'Name:',
      score: 78,
    },
    {
      name: 'Name:',
      score: 125,
    },
    {
      name: 'Name:',
      score: 77,
    },
  ];

  tableData.forEach((data) => {
    const tableContainer = document.querySelector('.table-body');
    tableContainer.innerHTML += `
                    <tr>
                    <td>${data.name}${data.score}</td>
                    </tr> `;
  });
};
export default renderTable;
