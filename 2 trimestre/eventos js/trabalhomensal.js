window.addEventListener('load', init, false)

function init() {
    document.getElementById("nome").addEventListener('keyup', nome, false)
    document.getElementById("senha").addEventListener('blur', senha, false)
    document.getElementById("confirmarsenha").addEventListener('blur', confirmarsenha, false)
    document.getElementById("subimit").addEventListener('submit', submiti, false)
    document.getElementById("subimit").addEventListener('reset', submiti, false)

}


function nome() {
    let nome = document.getElementById("nome").value
    console.log("nome: " + nome)
};

function senha() {
    let senha = document.getElementById("senha").value;
    if (senha.length < 6) {
        alert("Número de caracteres menor que 6");
    }
}

function confirmarsenha() {
    let confirmarsenha = document.getElementById("confirmarsenha").value
    if (document.getElementById("senha").value != document.getElementById("confirmarsenha").value) {
        alert("as senhas são diferentes");
    }
}


function submiti(event) {
    let nomen = document.getElementById("nome").value;
    let senhan = document.getElementById("senha").value;
    console.log("nome: " + nomen)
    console.log("senha: " + senhan)
    event.preventDefault();
}