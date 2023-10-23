/* DATA*/
let playerData = [];
/* Attempt to get and parse playerData from localStorage */
getPlayerFromLocal()
async function getPlayerFromLocal(){
    try {
        const storedData = localStorage.getItem('playerData');
        if (storedData) {
          playerData = JSON.parse(storedData);
        }
    } 
    catch (error) {
        console.error('Error parsing playerData from localStorage:', error);
      }
}
function putThisLocal(){
    localStorage.setItem('playerData', JSON.stringify(playerData));
}

/* Button */
let startbtn = document.getElementById('startSBbtn');
let resultbtn = document.getElementById('');

/* RegisterPlayer */
const playerForm = document.querySelector('.registerPlayer');
playerForm.addEventListener('submit',handleSubmit);

let player = {}; 

function handleSubmit(e){
    e.preventDefault();
    console.log("Hej");
    player = {
        name : e.target.name.value
    }
    playerData.push(player);
    putThisLocal();
    e.target.name.value = "";

}

/* GetScore */
getScore()
async function getScore(){
    const response = await fetch('info.json');
    const responseData = await response.json();

    console.log(responseData);
} 

/* Display  Player */
const playerDisplay = document.querySelector('.displayPlay');