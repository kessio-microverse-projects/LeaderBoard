const  fetchScores = async () => {

   const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/G2FzmBjwJK9W4frxM9oY/scores/')
        const result = await response.json()

        const data = result.result
        console.log(data)
       data.forEach((user) => {
            const tableContainer = document.querySelector('.table-body');
            tableContainer.innerHTML += `
                            <tr>
                            <td>${user.user}: ${user.score}</td>
                            </tr> `;
          });
    }
export default fetchScores;