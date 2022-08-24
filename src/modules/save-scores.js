
const saveScores = async (e) => {
   e.preventDefault();
   const output = document.getElementById('outpudata')
    const user = document.getElementById('name').value;
    const score = document.getElementById('scores').value;
    const formData = {user: user, score: score}

    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/G2FzmBjwJK9W4frxM9oY/scores/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
   
    const res = await response.json();
   
    
}
export default saveScores;