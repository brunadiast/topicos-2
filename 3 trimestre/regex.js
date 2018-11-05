window.addEventListener('load', carregar, false);



function carregar() {
    let formulario = document.forms['cadastro'];
    formulario.cpf.addEventListener("blur", validarCPF, false);
    formulario.email.addEventListener("blur", validarEmail, false);
    formulario.cnpj.addEventListener("blur", validarCnpj, false);
    formulario.telefone.addEventListener("blur", validarTelefone, false);
    formulario.dataa.addEventListener("blur", validarData, false);
    formulario.hora.addEventListener("blur", validarHora, false);
    formulario.horadata.addEventListener("blur", validarDatahora, false);

}

function validarCPF() {
    let campoCPF = document.forms['cadastro'].cpf; //o campo cpf<input>
    let cpf = campoCPF.value; //o que o usúario digitou no campo cpf
    let expressao = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/;
    //let expressao2 = var RegExp=("[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}");

    if (expressao.test(cpf)) {
        campoCPF.style.borderColor = "green";
        return true;
    } else {
        campoCPF.style.borderColor = "red";
        return false;
    }
}



function validarEmail() {
    let campoEmail = document.forms['cadastro'].email;
    let email = campoEmail.value;
    let expressao = /^[a-zA-Z][A-Za-z0-9\.\-\_]{4,19}@[a-zA-Z0-9]{5}\.[a-zA-Z]{3}\.[a-zA-Z]{3}?$/;

    if (expressao.test(email)) {
        campoEmail.style.borderColor = "green";
        return true;
    } else {
        campoEmail.style.borderColor = "red";
        return false;
    }
}


function validarCnpj() {
    let campoCnpj = document.forms['cadastro'].cnpj;
    let cnpj = campoCnpj.value;
    let expressao = /^[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\.?\/?[0-9]{4}\-?[0-9]{2}$/;
    if (expressao.test(cnpj)) {
        campoCnpj.style.borderColor = "green";
        return true;
    } else {
        campoCnpj.style.borderColor = "red";
        return false;
    }

}

function validarTelefone() {
    let campoTelefone = document.forms['cadastro'].telefone;
    let telefone = campoTelefone.value;

    let expressao = /^[0-9]{7}\-?[0-9]{4}|\([0-9]{2}\)[0-9]{5}\-?[0-9]{4}$/;
    if (expressao.test(telefone)) {
        campoTelefone.style.borderColor = "green";
        return true;
    } else {
        campoTelefone.style.borderColor = "red";
        return false;
    }

}


function validarData() {
    let campoData = document.forms['cadastro'].dataa;
    let dataa = campoData.value;

    let expressao = /^(0?[1-9]|[0-2][0-9]|3[0,1])\/(0?[1-9]|1[0-2])\/([0-9]{4})$/;
    if (expressao.test(dataa)) {
        campoData.style.borderColor = "green";
        return true;
    } else {
        campoData.style.borderColor = "red";
        return false;
    }
}

function validarHora() {
    let campoHora = document.forms['cadastro'].hora;
    let hora = campoHora.value;

    let expressao = /^[0-9]{2}\:[0-9]{2}\:[0-9]{2}$/;
    if (expressao.test(hora)) {
        campoHora.style.borderColor = "green";
        return true;
    } else {
        campoHora.style.borderColor = "red";
        return false;
    }
}



function validarDatahora() {
    let campoHoradata = document.forms['cadastro'].horadata;
    let horadata = campoHoradata.value;

    let expressao = /^((0?[1-9]|[0-2][0-9]|3[0,1])\/(0?[1-9]|1[0-2])\/([0-9]{4}) [0-9]{2}\:[0-9]{2}\:[0-9]{2})$/;
    if (expressao.test(horadata)) {
        campoHoradata.style.borderColor = "green";
        return true;
    } else {
        campoHoradata.style.borderColor = "red";
        return false;
    }
}


function validarform(evento) {
    if (validarCPF() == false) {
        evento.preventDefault();
    }
    if (validarCnpj() == false) {
        evento.preventDefault();
    }
    if (validarData() == false) {
        evento.preventDefault();
    }
    if (validarEmail() == false) {
        evento.preventDefault();
    }
    if (validarHora() == false) {
        evento.preventDefault();
    }
    if (validarDatahora() == false) {
        evento.preventDefault();
    }
    if (validarTelefone() == false) {
        evento.preventDefault();
    }
}