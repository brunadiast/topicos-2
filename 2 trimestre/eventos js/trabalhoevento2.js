window.addEventListener('load', init, false);



function init() {
    document.getElementById('botao').addEventListener('click', validarForm, false)
    document.getElementById('oi').addEventListener('reset', validar, false)
    document.getElementById('no').addEventListener('blur', valida, false)
}

function validarForm() {
    let nome = document.getElementById("nomeid").value;
    let sobrenome = document.getElementById("sobrenomeid").value;
    alert("nome: " + nome);
    alert("sobrenome: " + sobrenome);


};



function validar() {
    let nom = document.getElementById('nomeid2').value;
    alert("nome: " + nom);
};


function valida() {
    let no = document.getElementById('no').value;
    alert("no: " + no);
}