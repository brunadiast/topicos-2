window.addEventListener('load', init, false);

function init() {
    document.getElementById('quadrado').addEventListener('mouseover', azul, false);
    document.getElementById('quadrado').addEventListener('mouseout', verde, false);
    document.getElementById('quadrado').addEventListener('click', vermelho, false);
    document.getElementById('quadrado').addEventListener('dblclick', preto, false);

    document.getElementById('um').addEventListener('click', um, false);
    document.getElementById('dois').addEventListener('click', dois, false);
    document.getElementById('tres').addEventListener('click', tres, false);

    document.getElementById('nome').addEventListener('blur', verificaNome, false);
    document.getElementById('idade').addEventListener('blur', verificaIdade, false);

    //reset
    //submit
    document.getElementById('formulario').addEventListener('submit', verificaForm, false);
    document.getElementById('formulario').addEventListener('reset', verificaForm, false)
}

function verificaForm(event) {
    alert('verificando...');
    verificaNome();
    verificaIdade();
    event.preventDefault();

}

function um(e) {
    alert("um");
    e.stopPropagation();
}

function dois(eve) {
    alert("dois");
    eve.stopPropagation();
}

function tres(event) {
    alert("tres");
    event.stopPropagation();
}

function verificaNome() {
    let nome = document.getElementById("nome").value;
    if (nome.length <= 2) {
        alert("Nome errado");
    }
}

function verificaIdade() {
    let idade = document.getElementById("idade").value;
    if (idade < 18) {
        alert("bbzinh@");
    }
}

function azul() {
    document.getElementById('quadrado').style.backgroundColor = 'blue';
}

function verde() {
    document.getElementById('quadrado').style.backgroundColor = 'green';
}

function vermelho() {
    document.getElementById('quadrado').style.backgroundColor = 'red';
}

function preto() {
    document.getElementById('quadrado').style.backgroundColor = 'black';
    document.getElementById('quadrado').style.width = '50px';
    document.getElementById('quadrado').style.height = '50px';
}