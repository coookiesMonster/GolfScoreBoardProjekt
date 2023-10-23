/* DATA*/
let playerData = [];

/* Delete Player Form DATA */
function removePlayer(id){
    let leftOvers = playerData.filter(t=> t.id != id); 

    playerData = [...leftOvers];
    putThisLocal();
    document.getElementById(id).remove();
    return leftOvers;
}

/* Attempt to get and parse playerData from localStorage */
storePlayerLocal()
async function storePlayerLocal(){
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
    player = {
        id: Date.now(),
        name : e.target.name.value
    }
    playerData.push(player);
    putThisLocal();
    renderRegisteredPlayer();
    e.target.name.value = "";

    console.log("Registered");
}

/* GetScore Forn DB (info.json)*/
getScore()
async function getScore(){
    const response = await fetch('info.json');
    const responseData = await response.json();

    console.log(responseData);
} 

/* Render Player From Register*/

const playerRegisterDisplay = document.querySelector('.displayPlay');
function renderRegisteredPlayer(){
    playerRegisterDisplay.innerHTML = '';
    playerData.forEach(player=>renderRegi(player));
}

function renderRegi(player){
    let div = document.createElement("div");
    div.id = player.id;

    let h2 = document.createElement("h2");
    h2.innerText = player.name;
    
    let delBtn = document.createElement("button");
    delBtn.addEventListener("click", ()=>removePlayer(player.id));
    delBtn.innerText = "Remove";
    

    div.appendChild(h2);
    div.appendChild(delBtn);

    document.querySelector('.displayPlay').appendChild(div);
}



