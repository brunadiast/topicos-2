window.addEventListener('load', init, false);

function init() {
    let formulario = document.forms["formulario1"];

    formulario.nome.addEventListener('blur', validarNome, false);
    formulario.idade.addEventListener('blur', validarIdade, false);
    formulario.email.addEventListener('blur', validarEmail, false);
    formulario.telefone.addEventListener('blur', validarTel, false);



    formulario.addEventListener('submit', validarForm, false);
    formulario.estados.addEventListener('change', validarEstados, false);
    formulario.cidade.addEventListener('change', validarCidade, false);

}


function validarNome() {
    let nome = document.forms['formulario1'].nome.value;
    if (nome.length < 2 || nome.length > 10) {
        console.log('Nome Errado');
        document.forms['formulario1'].nome.style.borderColor = 'red';
        return false;
    }
    console.log('Nome Certo');
    document.forms['formulario1'].nome.style.borderColor = 'green';
    return true;
}

function campoObrigatorio() {
    let nome = document.forms['formulario1'].nome.value;
    if (nome == "") {
        console.log('campo obrigatório');
    }
}

function validarIdade() {
    let idades = document.forms['formulario1'].idade.value;
    if (idades < 18 || idades > 70) {
        console.log('Não pode ir por causa da idade!');
        colocarErro(document.forms['formulario1'].idade);
        return false;
    }
    console.log('Idade suficiente!');
    colocarSucesso(document.forms['formulario1'].idade);
    return true;
}




function colocarErro(campo) {
    campo.classList.remove('sucesso');
    campo.classList.add('erro');
}

function colocarSucesso(campo) {
    campo.classList.remove('erro');
    campo.classList.add('sucesso');
}


function validarEmail() {
    let emails = document.forms['formulario1'].email.value;
    if (emails.length < 2 || emails.length > 40) {
        console.log('email Errado');
        document.forms['formulario1'].email.style.borderColor = 'red';
        return false;
    }
    console.log('email Certo');
    document.forms['formulario1'].email.style.borderColor = 'green';
    return true;
}

function campoObrigatorio() {
    let email = document.forms['formulario1'].nome.value;
    if (email == "") {
        console.log('campo obrigatório');
    }
}

function validarTel() {
    let telefone = document.forms['formulario1'].telefone.value;
    if (telefone.length < 2 || telefone.length > 10) {
        console.log('tel Errado');
        document.forms['formulario1'].telefone.style.borderColor = 'red';
        return false;
    }
    console.log('tel Certo');
    document.forms['formulario1'].telefone.style.borderColor = 'green';
    return true;
}

function campoObrigatorio() {
    let telefone = document.forms['formulario1'].nome.value;
    if (telefone == "") {
        console.log('campo obrigatório');
    }
}


function validarSexo() {
    let sexos = document.forms['formulario1'].sexo;
    for (i = 0; i < sexos.length; i++) {
        let sexo = sexos[i];
        if (sexo.checked == true) {
            return true;
        }
    }
    alert('selecione um sexo')
    return false;
}


function validarLingua() {
    let idiomas = document.forms['formulario1'].lingua;

    for (i = 0; i < idiomas.length; i++) {
        let idioma = idiomas[i];
        if (idioma.checked == true) {
            return true;
        }
    }
    alert('Selecione um idioma!')
    return false;
}


function validarEstados() {
    let estados = document.forms['formulario1'].estados;
    let posicao = estados.selectedIndex;
    if (posicao == 0) {
        colocarErro(document.forms['formulario1'].estados);
        return false;
    }
    colocarSucesso(document.forms['formulario1'].estados);
    return true;
}

function validarCidade() {
    let cidade = document.forms['formulario1'].cidade;
    let posicoes = cidade.selectedIndex;
    if (posicoes == 0) {
        colocarErro(document.forms['formulario1'].cidade);
        return false;
    }
    colocarSucesso(document.forms['formulario1'].cidade);
    return true;

}



function validarForm2(event2) {
    if (validarNome() == false) {
        event2.preventDefault();
        return false;
    }

    if (validarTel() == false) {
        event2.preventDefault();
        return false;
    }

}





function validarForm(event) {
    let controle = true;

    if (validarNome() == false) {
        controle = false;
    }

    if (validarIdade() == false) {
        controle = false;
    }

    if (validarEmail() == false) {
        controle = false;
    }

    if (validarTel() == false) {
        controle = false;
    }

    if (validarSexo() == false) {
        controle = false;
    }

    if (validarLingua() == false) {
        controle = false;
    }


    if (validarEstados() == false) {
        controle = false;
    }

    if (validarCidade() == false) {
        controle = false;
    }

    if (controle == false) {
        event.preventDefault();
        return false;
    }
    return true;
}