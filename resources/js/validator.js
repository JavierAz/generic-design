const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
    nameField: false,
    middleNameField: false,
    lastNameField: false,
    emailField: false,
    loginField: false,
    passwordField: false,
    confirmPasswordField: false,
    passwordFieldL: false
}



const validarFormulario = (e) => {
    console.log('Se ejecuto');
    switch (e.target.name) {
        case "name":
            validarCampo(expresiones.nombre, e.target, 'nameField');
            break;
        case "middleName":
            validarCampo(expresiones.nombre, e.target, 'middleNameField');
            break;
        case "lastName":
            validarCampo(expresiones.nombre, e.target, 'lastNameField');
            break;
        case "email":
            validarCampo(expresiones.correo, e.target, 'emailField');
            break;
        case "login":
            validarCampo(expresiones.correo, e.target, 'loginField');
            break;
        case "passwordL":
            validarCampo(expresiones.password, e.target, 'passwordFieldL');
            break;
        case "password":
            validarCampo(expresiones.password, e.target, 'passwordField');
            validarPassword2();
            break;
        case "confirmPassword":
            validarCampo(expresiones.password, e.target, 'confirmPasswordField');
            validarPassword2();
            break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`${campo}`).classList.remove('errorField');
        document.getElementById(`${campo}`).classList.add('successField');
        campos[campo] = true;
    } else {
        document.getElementById(`${campo}`).classList.add('errorField');
        document.getElementById(`${campo}`).classList.remove('successField');
        campos[campo] = false;
    }
}

const validarPassword2 = () => {
    const inputPassword1 = document.getElementById('passwordField');
    const inputPassword2 = document.getElementById('confirmPasswordField');

    if(inputPassword1.value !== inputPassword2.value){

        document.getElementById(`confirmPasswordField`).classList.add('errorField');
        document.getElementById('confirmPasswordField').classList.remove('successField');
        campos['password'] = false;
    } else {
        document.getElementById(`confirmPasswordField`).classList.remove('errorField');
        document.getElementById('confirmPasswordField').classList.add('successField');
      campos['password'] = true;
    }
}


inputsL.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});



inputsS.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
    console.log(campos);
});

loginForm.addEventListener('submit', (e) => {

    e.preventDefault();
    if(campos.loginField && campos.passwordFieldL){
        loginForm.submit();
    } else {
        alert('Formato en los datos incorrecto.');
    }
});

signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if(campos.nameField && campos.middleNameField && campos.lastNameField && campos.emailField && campos.passwordField){
        
        signUpForm.submit();
        
        var resultSignUp = signUpForm.getAttribute("data-result");
        console.log(resultSignUp);
        if(resultSignUp === 'success'){
        	
        	alert('Registro finalizado.');
        	
		}else if(resultSignUp == 'error'){
			
			alert('El usuario ya existe.');
		
		}	
    } else {
        alert('Por favor, verifique los datos.')
        signUpForm.signUpForm();
    }
});