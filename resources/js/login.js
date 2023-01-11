/* Title animation */

const phraseContainer = document.getElementById("phraseContainer");
const phrases = [
    'Si son un equipo de e-sports, podrán reclutar jugadores para eventos que ustedes especifiquen..',
    'Si eres un jugador, podrás unirte a equipos que necesiten jugadores para sus eventos, además de agregar juegos y el nivel que tengas en ellos..'
];

let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

function loop(){
    isEnd = false; 
    phraseContainer.innerHTML = currentPhrase.join('');
    if (i < phrases.length) {
        
        if (!isDeleting && j <= phrases[i].length) {
            currentPhrase.push(phrases[i][j]);
            j++;
        } 

        if (isDeleting && j <= phrases[i].length) {
            currentPhrase.pop(phrases[i][j]);
            j--;
        }
        
        if(j == phrases[i].length){
            isEnd = true;
            isDeleting = true;
        }

        if (isDeleting && j === 0) {
            currentPhrase = [];
            isDeleting = false;
            i++;
            if (i === phrases.length) {
                i = 0;
            }
        }
    }
    const speedUp = Math.random() * (20 - 5) + 5;
    const normalSpeed = Math.random() * (100 - 20) + 20;
    const time = isEnd ?  2000 : isDeleting ? speedUp : normalSpeed;
    setTimeout(loop,time);
}

loop();


/* Form menú */

const menuContainer = document.getElementById("menuContainer");

const selectionButton = document.createElement("input");
    selectionButton.classList.add("selectionButton");
    selectionButton.setAttribute("type", "checkbox")
    
const optionSelectionPlayer = document.createElement("span");
    optionSelectionPlayer.classList.add("optionSelection");
    optionSelectionPlayer.classList.remove("selected");
    optionSelectionPlayer.innerHTML = `Jugador`
    
const optionSelectionTeam = document.createElement("span");
    optionSelectionTeam.classList.add("optionSelection");
    optionSelectionTeam.classList.remove("selected");
    optionSelectionTeam.innerHTML = `Equipo`


const signUpButtonL = document.createElement("button");
signUpButtonL.setAttribute("type", "button");
signUpButtonL.setAttribute("id", "signUpButtonL");
signUpButtonL.classList.add("button");
signUpButtonL.innerHTML = "Crear cuenta"


const signInButtonL = document.createElement("button");
signInButtonL.setAttribute("type", "submit");
signInButtonL.classList.add("button");
signInButtonL.innerHTML = "Ingresar";


const buttonsContainer = document.createElement("div");
buttonsContainer.classList.add("buttonsContainer");
buttonsContainer.appendChild(signUpButtonL);
buttonsContainer.appendChild(signInButtonL);

const accountCreated = document.createElement("button");
accountCreated.setAttribute("type", "button");
accountCreated.setAttribute("id", "linkButton");
accountCreated.classList.add("linkButton");
accountCreated.innerHTML = "¿Ya tienes cuenta? Inicia sesión";

const createAccount = document.createElement("button");
createAccount.setAttribute("type", "submit");
createAccount.classList.add("button");
createAccount.innerHTML = "Crear cuenta";

const buttonsContainerS = document.createElement("div");
buttonsContainerS.classList.add("buttonsContainer");
buttonsContainerS.appendChild(accountCreated);
buttonsContainerS.appendChild(createAccount);

const signInContainer = document.createElement("div");
signInContainer.classList.add("signInContainer");
signInContainer.innerHTML = `<h2>Iniciar sesión</h2>`;




function showSignUpTeam(element){
    menuContainer.removeAttribute("signupplayer");
    menuContainer.setAttribute("signupteam", "");
    let signUpTeamForm = document.createElement('form');
    signUpTeamForm.setAttribute("action", "signUpTeam")
    signUpTeamForm.setAttribute("method", "post")
    signUpTeamForm.innerHTML =  
    `<div class="fieldContainer">
        <label for="emailFieldS">Email</label>
        <div class="inputField">
            <div class="iconContainer">
                <img src="resources/Icons/login/arroba.svg" alt="email" class="icon">
            </div>
            <input type="email" name="emailFieldS" placeholder="ejemplo@ejemplo.com" id="emailFieldS">
        </div>
    </div>
    <div class="fieldContainer">
        <label for="teamNameField">Nombre del equipo</label>
        <div class="inputField">
            <div class="iconContainer">
                <img src="resources/Icons/login/user.svg" alt="email" class="icon">
            </div>
            <input type="text" name="teamNameField" placeholder="nombredetuequipo" id="teamNameField">
        </div>
    </div>
    <div class="fieldContainer">
        <label for="leaderField">Nombre del líder</label>
        <div class="inputField">
            <div class="iconContainer">
                <img src="resources/Icons/login/user.svg" alt="email" class="icon">
            </div>
            <input type="text" name="leaderField" placeholder="Nombre del lider" id="leaderField">
        </div>
    </div>
    <div class="fieldContainer">
        <label for="passwordFieldS">Contraseña</label>
        <div class="inputField">
            <div class="iconContainer">
                <img src="resources/Icons/login/lock.svg" alt="email" class="icon">
            </div>
            <input type="password" name="passwordFieldS" placeholder="Contraseña" id="passwordFieldS">
        </div>
    </div>
    <div class="fieldContainer">
        <label for="confirmPasswordFieldS">Confirmar contraseña</label>
        <div class="inputField">
            <div class="iconContainer">
                <img src="resources/Icons/login/lock.svg" alt="email" class="icon">
            </div>
            <input type="password" name="confirmPasswordFieldS" placeholder="Confirmar contraseña" id="confirmPasswordFieldS">
        </div>
    </div>`/*
    <div class="buttonsContainer">
        <button type="button" class="linkButton" id="linkButton">¿Ya tienes cuenta? Ingresar</button>
        <button type="submit" class="button">Crear cuenta</button>
    </div>`*/;
    signUpTeamForm.insertAdjacentElement("beforeend", buttonsContainerS);
    element.insertAdjacentElement("beforeend",signUpTeamForm)
    return signUpTeamForm;
}

function showSignUpPlayer(element){
    menuContainer.removeAttribute("signupteam");
    menuContainer.setAttribute("signupplayer", "");
    let signUpPlayerForm = document.createElement('form');
    signUpPlayerForm.setAttribute("action", "signUpPlayer")
    signUpPlayerForm.setAttribute("method", "post")
    signUpPlayerForm.innerHTML =  
    `<div class="fieldContainer">
        <label for="emailFieldS">Email</label>
        <div class="inputField">
            <div class="iconContainer">
                <img src="resources/Icons/login/arroba.svg" alt="email" class="icon">
            </div>
            <input type="email" name="emailFieldS" placeholder="ejemplo@ejemplo.com" id="emailFieldS">
        </div>
    </div>
    <div class="fieldContainer">
        <label for="teamNameField">Nombre</label>
        <div class="inputField">
            <div class="iconContainer">
                <img src="resources/Icons/login/user.svg" alt="user" class="icon">
            </div>
            <input type="text" name="playerNameField" placeholder="Nombre" id="playerNameField">
        </div>
    </div>
    <div class="fieldContainer">
        <label for="middleNameField">Primer apellido</label>
        <div class="inputField">
            <div class="iconContainer">
                <img src="resources/Icons/login/user.svg" alt="user" class="icon">
            </div>
            <input type="text" name="middleNameField" placeholder="Primer apellido" id="middleNameField">
        </div>
    </div>
    <div class="fieldContainer">
        <label for="lastNameField">Segundo apellido</label>
        <div class="inputField">
            <div class="iconContainer">
                <img src="resources/Icons/login/user.svg" alt="user" class="icon">
            </div>
            <input type="text" name="lastNameField" placeholder="Segundo apellido" id="lastNameField">
        </div>
    </div>
    <div class="fieldContainer">
        <label for="passwordFieldS">Contraseña</label>
        <div class="inputField">
            <div class="iconContainer">
                <img src="resources/Icons/login/lock.svg" alt="email" class="icon">
            </div>
            <input type="password" name="passwordFieldS" placeholder="Contraseña" id="passwordFieldS">
        </div>
    </div>
    <div class="fieldContainer">
        <label for="confirmPasswordFieldS">Confirmar contraseña</label>
        <div class="inputField">
            <div class="iconContainer">
                <img src="resources/Icons/login/lock.svg" alt="email" class="icon">
            </div>
            <input type="password" name="confirmPasswordFieldS" placeholder="Confirmar contraseña" id="confirmPasswordFieldS">
        </div>
    </div>`
    /*<div class="buttonsContainer">
        <button type="button" class="linkButton" id="linkButton">¿Ya tienes cuenta? Ingresar</button>
        <button type="submit" class="button">Crear cuenta</button>
    </div>`*/;
    signUpPlayerForm.insertAdjacentElement("beforeend", buttonsContainerS)
    element.insertAdjacentElement("beforeend",signUpPlayerForm)
    return signUpPlayerForm
}

function buildSelector(){
    let signUpContainer = document.createElement("div");
    signUpContainer.classList.add("signUpContainer");
    menuContainer.innerHTML = '';
    signUpContainer.innerHTML =
    `<h2>Crear cuenta</h2>
    <div class="selectionContainer">
        <label class="switch">
            <span class="slider round"></span>
        </label>
    </div>
    `;
    menuContainer.appendChild(signUpContainer);

    const selectionContainer = document.getElementsByClassName("selectionContainer");
    selectionContainer[0].insertAdjacentElement("afterbegin", optionSelectionTeam)
    const switchC = document.getElementsByClassName("switch");
    switchC[0].insertAdjacentElement("afterbegin",selectionButton)
    selectionContainer[0].insertAdjacentElement("beforeend", optionSelectionPlayer)

    let actualForm = null;

    if(!selectionButton.checked){
        actualForm = showSignUpTeam(signUpContainer);
    }else{
        actualForm = showSignUpPlayer(signUpContainer);
    }


    selectionButton.addEventListener("change", function(){

        signUpContainer.removeChild(actualForm)

        if(this.checked){
            console.log('checked')
            optionSelectionTeam.classList.remove("selected");
            optionSelectionPlayer.classList.add("selected");
            /*menuContainer.removeAttribute("signupteam");
            menuContainer.setAttribute("signupplayer", "");*/
            actualForm = showSignUpPlayer(signUpContainer)            
        }else{
            console.log('not checked')
            optionSelectionPlayer.classList.remove("selected");
            optionSelectionTeam.classList.add("selected");
            /*menuContainer.removeAttribute("signupplayer");
            menuContainer.setAttribute("signupteam", "");*/
            actualForm = showSignUpTeam(signUpContainer);
        }

    });
}

function signInForm(){
    const signInForm = document.createElement("form");
    signInForm.setAttribute("action", "loginServlet");
    signInForm.setAttribute("method", "post");
    signInForm.innerHTML = 
    `<div class="fieldContainer">
            <label for="emailFieldL">Email</label>
            <div class="inputField">
                <div class="iconContainer">
                    <img src="resources/Icons/login/arroba.svg" alt="email" class="icon">
                </div>
                <input type="email" name="emailFieldL" placeholder="ejemplo@ejemplo.com" id="emailFieldL">
            </div>
        </div>
        <div class="fieldContainer">
            <label for="emailFieldL">Contraseña</label>
            <div class="inputField">
                <div class="iconContainer">
                    <img src="resources/Icons/login/lock.svg" alt="password" class="icon">
                </div>
                <input type="password" name="passwordFieldL" id="passwordFieldL">
            </div>
        </div>`
        signInForm.insertAdjacentElement("beforeend", buttonsContainer);
    return signInForm;
}

signUpButtonL.addEventListener('click', function(){
    menuContainer.setAttribute("signupteam", "");
    menuContainer.innerHTML = '';
    buildSelector();
});

accountCreated.addEventListener('click', function(){
    menuContainer.removeAttribute("signupteam");
    menuContainer.removeAttribute("signupplayer");
    menuContainer.innerHTML = '';
    menuContainer.appendChild(signInContainer);
});

function showSignIn(){
    menuContainer.innerHTML = ''
    signInContainer.appendChild(signInForm());
    menuContainer.appendChild(signInContainer);
}

showSignIn();