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

/* RegisterPlayer */
const playerForm = document.querySelector('.registerPlayer');
playerForm.addEventListener('submit',handleSubmit);

let player = {}; 

function handleSubmit(e){
    e.preventDefault();

    if(e.target.name.value == null || e.target.name.value == ""){
        alert ("No player in the register field");
        return null;
    }
    else{
        player = {
            id: Date.now(),
            name : e.target.name.value,
        }
        playerData.push(player);
        putThisLocal();
        renderRegisteredPlayer();
    }
    console.log(player);
    e.target.name.value = "";

    console.log("Registered");
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

/* GetScore Forn DB (info.json)*/
let gameON = false

getScore()
async function getScore(){
    try {
        const response = await fetch('info.json');
        const responseData = await response.json();
        renderGameON(responseData.court);
    } 
    catch (error) {
        console.error('error');
    }
} 

/* Game start Score record */
/* Flag för att game on ska inte starta innan det aktivera */
document.querySelector('.playerSB').addEventListener('click',()=>{
    gameON = true;
    getScore();
    console.log("Game status = "+gameON);
});
function renderGameON(court){
    console.log(court);
    if(gameON==true){
        console.log('renderGameON == ' + gameON);
        if (Array.isArray(court)) {
            court.forEach((c) => {
                console.log(c);         
    
                let div = document.createElement("div");
                div.className = "holeDiv";
                div.id = c.id;
    
                let info = document.createElement("p");
                info.className = "courtInfo";
                info.innerHTML = "info: " + c.info;
    
                let par = document.createElement("p");
                par.className = "parInfo";
                par.innerHTML = "par: " + c.par;
    
                div.appendChild(info);
                div.appendChild(par);
    
                for (let player of playerData) {
                    let input = document.createElement("input");
                    input.type = "number";
                    let i = document.createElement("i");
                    i.innerHTML = player.name;
                    input.name = player;
                    input.dataset.id = c.id;
                    input.addEventListener("input", (e) => {
                      const holeId = e.target.dataset.id;
                      const playerName = e.target.name;
                      const score = e.target.value;
                      savescore(playerName, holeId, score);
                    }); 
                    div.appendChild(i);
                    div.appendChild(input);
                }
    
                document.querySelector('.gameOn').appendChild(div);
            });
        } 
    
        else {
            console.error('can not get court data');
        }
    }
}

function savescore(name, holeid, result) {
   
   
   
   /* 
   1. leta upp rätt spelare i players 
   2. gå in det objektet och sätt 
   */
   
   
   
   
    const playerSVS = playerData.find(player => player.name === name);
    console.log(playerData);

    playerSVS[holleid]=reulst;



  }