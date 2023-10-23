/* DATA*/
let playerData = JSON.parse(localStorage.getItem("playerData")) || [];

function putThisLocal(){
    localStorage.setItem("playerList", JSON.stringify(playerList));
}
/* Button */
let startbtn = document.getElementById("");
let resultbtn = document.getElementById("");

/* RegisterPlayer */
const playerForm = document.querySelector('.registerPlayer');
playerForm.addEventListener('submit',handleSubmit());

const player = {}; 

function handleSubmit(e){
    e.preventDefault();
    console.log("Hej");
    player = {
        name : e.target.name.value
    }
    playerData.push(player);
    putThisLocal();
    renderAll();
    e.target.thePlayerName.value = "";

}

/* GetScore */
getScore()
async function getScore(){
    const response = await fetch("info.json");
    const responseData = await response.json();

    console.log(responseData);
} 

/* Display  Player */
const playerDisplay = document.querySelector(".displayPlay")
playerDisplay

renderAll();
function renderAll(){
    document.querySelector(".displayPlay").innerHTML = "";
    playerData.forEach(player=>renderMe(player));
}
