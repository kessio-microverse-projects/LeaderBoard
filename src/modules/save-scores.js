const saveScores = (e) => {
    e.preventDefault();

    const user = document.getElementById('name').value;
    const score = document.getElementById('scores').value;
    const formData = {user: user, score: score}

    fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/G2FzmBjwJK9W4frxM9oY/scores/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then((res) => res.json())
    .then((result) =>(result))
    
}
export default saveScores;