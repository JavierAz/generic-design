const endpoint = 'http://127.0.0.1:8080/ProyectoAppRed/api/teams';
const resultsContainer = document.getElementById("resultsContainer");
const searchAddTeam = document.getElementById("searchAddTeam");


let resultContainer = document.createElement("div");
resultContainer.classList.add("resultContainer");
resultContainer.innerHTML =
`<div class="resultContainer>
<h4>Nombre del juego</h4>
 <button>Añadir</button>
 </div>`;

 let teams, jsonTeams;

function getTeams(){


  let req = new XMLHttpRequest();
  req.open("GET", endpoint);
  req.send();
  req.onreadystatechange = function() {
    searchAddTeam.addEventListener('keydown', function(){
      if (req.readyState == 4 && req.status == 200) {
        teams = JSON.parse(req.responseText);
        resultsContainer.innerHTML = '';
        const text = searchAddTeam.value.toLowerCase();
        for(let team of teams){
          let title = team.name.toLowerCase();
          if(title.indexOf(text) !== -1){
            resultsContainer.innerHTML += `
              <div class="resultContainer">
                <h4>${team.name}</h4>
                <form action="/addTeamToPlayer" method="post">
                  <input type="hidden" name="idTeam" value="${team.idteam}">
                  <button>Unirme</button>
                </form>
              </div>`;}
          }
        }
    })
  };
}

getTeams();

