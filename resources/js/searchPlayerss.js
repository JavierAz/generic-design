const endpoint = 'http://52.8.109.6:8080/ProyectoAppRed-1/api/players';
const resultsContainer = document.getElementById("resultsContainer");
const searchAddPlayer = document.getElementById("searchAddPlayer");


let resultContainer = document.createElement("div");
resultContainer.classList.add("resultContainer");
resultContainer.innerHTML =
`<div class="resultContainer>
<h4>Nombre del juego</h4>
 <button>Añadir</button>
 </div>`;

 let players, jsonPlayers;

function getPlayers(){


let req = new XMLHttpRequest();
req.open("GET", endpoint);
req.send();
req.onreadystatechange = function() {
    searchAddPlayer.addEventListener('keypress', function(){
      if (req.readyState == 4 && req.status == 200) {
        players = JSON.parse(req.responseText);
        resultsContainer.innerHTML = '';
        const text = searchAddPlayer.value.toLowerCase();
        for(let player of players){
          let name = player.name.toLowerCase() + ' ' + player.middleLastName.toLowerCase() + ' ' + player.lastName.toLowerCase();
          //let playerGame = player.games.title.toLowerCase();
          let listGames = [];
          let showGames = []
          for(let gamep of player.games){
            showGames.push(gamep.title)
            listGames.push(gamep.title.toLowerCase());
          }
          console.log(listGames.find(e => e.indexOf(text) !== -1));
            if(name.indexOf(text) !== -1 || listGames.find(s => s.indexOf(text) !== -1) !== undefined){
              resultsContainer.innerHTML += `
                <div class="resultContainer">
                  <h4>${player.name + ' ' + player.middleLastName + ' ' + player.lastName}</h4>
                  <p>Juegos: ${showGames.join(', ')}</p>
                  <form action="/addPlayerToTeam" method="post">
                    <input type="hidden" name="idPlayer" value="${player.idPlayer}">
                    <button>Añadir</button>
                  </form>
                </div>`;}
        }
      }
    });
  }
}

getPlayers();