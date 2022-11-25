function login() {

    const username = "Maria Clara"
    
    const password = "senha123";
    let usuario_informado = document.getElementById("username").value;

    let senha_informada = document.getElementById("password").value;

    if(usuario_informado == username && senha_informada == password) {

        let continuar_logado = document.getElementById("remember-me");

        if(continuar_logado){
            document.cookie = "logado=1";
        }

        window.location.href = "index.html"
    } else {
        alert("Não foi possível ser logado")
    }
}

function register(){
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let repeat_password = document.getElementById("repeat-password").value;

    if(password != repeat_password){
        alert("Sua senha está diferente")
    }
}