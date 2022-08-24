const fetchScores = () => {
    fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/G2FzmBjwJK9W4frxM9oY/scores/')
    .then(async (response) => {
        const result = await response.json();
           console.log(result);
       })
      .catch((error) => console.log(error))
    }
export default fetchScores;