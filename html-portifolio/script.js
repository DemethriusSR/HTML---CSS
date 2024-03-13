let email = document.getElementById('username');
let password = document.getElementById('password');
let textAlert = document.getElementById('textAlert');
let form = document.querySelector('form');

form.addEventListener('submit', (e)=>{
    if(email.value === '' && password.value === ''){
        textAlert.textContent = 'Preencha os campos'
    }else if (validatorEmail(email.value) == true
                && validatorPassword(password.value) == true){
        console.log(email.value);
        console.log(password.value);
    }else{
        console.log("Requisição não atendida");
    }
    e.preventDefault()
})

email.addEventListener('keyup', () =>{
    if (validatorEmail(email.value) != true){
        textAlert.textContent = 'Formato precisa ser abc@def.com.br'
    }else{
        textAlert.textContent = ''
    }
})

password.addEventListener('keyup', () =>{
    if (validatorPassword(password.value) != true){
        textAlert.textContent = 'Utilizar Maiúscula, minuscula, caracter especial e números 6 dígitos.'
    }else{
        textAlert.textContent = ''
    }
})

function validatorEmail (email){
    let emailParttern =  /\S+@\S+\.\S+/;  // /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.[a-z]?$/i;
    return emailParttern.test(email)
}

function validatorPassword (password){
    let passwordParttern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return passwordParttern.test(password)
}