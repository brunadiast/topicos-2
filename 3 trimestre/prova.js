window.addEventListener('load', carregar, false)

function carregar() {
    let formulario = document.forms['cadastro'];
    formulario.nome.addEventListener("blur", validarNome, false);
    formulario.telefone.addEventListener("blur", validarTelefone, false);
    formulario.email.addEventListener("blur", validarEmail, false);
    formulario.cpfcnpj.addEventListener("blur", validarCpf, false);
    formulario.rastreio.addEventListener("blur", validarCodigo, false);
    formulario.estado.addEventListener("change", validarEstado, false);
    formulario.cidade.addEventListener("change", validarCidade, false);
    formulario.addEventListener("submit", validarForm, false);
}

function validarNome() {
    let camponome = document.forms['cadastro'].nome;
    let nome = camponome.value;
    let expressao = /[A-Z]{1}[a-z]{2,9}( [A-Z]{1}[a-z]{2,9})?/;

    if (expressao.test(nome)) {
        camponome.style.borderColor = 'green';
        return true;
    } else {
        camponome.style.borderColor = 'red';
        return false;
    }
}




function validarTelefone() {
    let campoTelefone = document.forms['cadastro'].telefone;
    let telefone = campoTelefone.value;
    let expressao = /\(\d{2}\)\9?\d{4}\-\d{4}/

    if (expressao.test(telefone)) {
        campoTelefone.style.borderColor = 'green';
        return true;
    } else {
        campoTelefone.style.borderColor = 'red';
        return false;
    }
}



function validarEmail() {
    let campoEmail = document.forms['cadastro'].email;
    let email = campoEmail.value;
    let expressao = /^([a-z,A-Z]{1}[a-z,A-Z,0-9,\.\-\_]{5,19}\@[a-z,A-Z]{5}\.[a-z,A-Z]{3}(\.[a-z,A-Z]{2})?)$/;

    if (expressao.test(email)) {
        campoEmail.style.borderColor = 'green';
        return true;
    } else {
        campoEmail.style.borderColor = 'red';
        return false;
    }
}


function validarCpf() {
    let campoCpfNpj = document.forms['cadastro'].cpfcnpj;
    let cpfnpj = campoCpfNpj.value;
    let expressao = /(^(\d{3}\.\d{3}\.\d{3}\-\d{2})|(\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2})$)/

    if (expressao.test(cpfnpj)) {
        campoCpfNpj.style.borderColor = 'green';
        return true;
    } else {
        campoCpfNpj.style.borderColor = 'red';
        return false;
    }
}



function validarCodigo() {
    let campoCodigo = document.forms['cadastro'].rastreio;
    let rastreio = campoCodigo.value;
    let expressao = /^([A-Za-z]{2}[0-9]{9}[A-Za-z]{2})$/

    if (expressao.test(rastreio)) {
        campoCodigo.style.borderColor = 'green';
        return true;
    } else {
        campoCodigo.style.borderColor = 'red';
        return false;
    }
}

function validarEstado() {
    let estado = document.forms['cadastro'].estado;
    if (estado.selectedIndex == 0) {
        alert('Selecione um estado')
        estado.style.borderColor = 'red';
        return false;
    } else {
        estado.style.borderColor = 'green';
        return true;
    }
}

function validarCidade() {
    let cidade = document.forms['cadastro'].cidade;
    if (cidade.selectedIndex == 0) {
        cidade.style.borderColor = 'red';
        alert('Selecione uma cidade')
        return false;
    } else {
        cidade.style.borderColor = 'green';
        return true;
    }
}



function validarSexo() {
    let sexos = document.forms['cadastro'].sexo;
    for (i = 0; i < sexos.length; i++) {
        let sexo1 = sexos[i];
        if (sexo1.checked == true) {
            return true;
        }
    }
    if (sexo1.checked == false) {
        alert('selecione um sexo')
        return false;
    }

}


// function validarSexo() {
//     let sexos = document.forms['cadastro'].sexo;

//     for (i = 0; i < sexos.length; i++) {
//         let sexo1 = sexos[i];
//         if (sexo1.checked == true) {
//             return true
//         } else {
//             alert('Selecione um gênero')
//             return false
//         }
//     }
// }

function validarInteresse() {
    let contador = 0;
    let interesses = document.forms['cadastro'].Interesses;

    for (i = 0; i < interesses.length; i++) {
        let interesse = interesses[i];
        if (interesse.checked == true) {
            contador = contador + 1;
        }
    }
    if (contador >= 3 && contador <= 5) {
        return true;
    }
    alert('Selecione ao menos  3  e no máximo 5 opts ')
    return false;
}

function validarForm(evento) {

    let controle = true;

    if (validarNome() == false) {
        controle = false;
    }
    if (validarTelefone() == false) {
        controle = false;
    }
    if (validarEmail() == false) {
        controle = false;
    }
    if (validarCpf() == false) {
        controle = false;
    }
    if (validarCodigo() == false) {
        controle = false;
    }
    if (validarEstado() == false) {
        controle = false;
    }
    if (validarCidade() == false) {
        controle = false;
    }
    if (validarSexo() == false) {
        controle = false;
    }
    if (validarInteresse() == false) {
        controle = false;
    }
    if (controle == true) {
        return true;
    } else {
        evento.preventDefault()
        return false;
    }
}