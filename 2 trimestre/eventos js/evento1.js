alert("tudo certo")

function ola() {
    let nome = document.getElementById("nome").value;
    alert("Olá " + nome);
}

function azul() {
    let div = document.getElementById('exemplo');
    div.style.backgroundColor = "blue";
}

function verde() {
    document.getElementById('exemplo').style.backgroundColor = "green"
}

function vermelho() {
    document.getElementById('exemplo').style.backgroundColor = "red"
}