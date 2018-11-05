window.addEventListener('load', init, false)

function init() {
    document.getElementById("botao").addEventListener('click', validarForm, false)
    document.getElementById("buttonid").addEventListener('dblclick', validarF, false)
    document.getElementById("sobrenomeid").addEventListener('blur', validar, false)

}



function validarForm() {
    let nome = document.getElementById("nomeid").value
    alert("nome: " + nome)
};

function validarF() {
    alert("clicou duas vezes ")
}

function validar() {
    let sobrenome = document.getElementById("sobrenomeid").value
    alert("sobrenome: " + sobrenome)
}