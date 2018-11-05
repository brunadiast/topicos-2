window.addEventListener('load', init, false);

function init() {
    //Recuperar o formulário
    // document.getElementById('formulario'); //Usando ID no formulário
    // document.forms[0];//Posicionamento da tela
    let formUsuario = document.forms['formulario']; //Pelo name do form

    //Adicionar eventos nos campos

    formUsuario.nome.addEventListener('blur', validarNome, false);
    formUsuario.idade.addEventListener('blur', validarIdade, false);
    formUsuario.senha.addEventListener('blur', validarSenha, false);

    //Adicionar eventos no formulario
    formUsuario.addEventListener('submit', validarForm, false);

    formUsuario.addEventListener('change', validarEstados, false);

}

function validarNome() { //Mínimo 2 dígitos e máximo 10 dígitos
    let nome = document.forms['formulario'].nome.value;
    if (nome.length < 2 || nome.length > 10) {
        console.warn('Nome Errado');
        document.forms['formulario'].nome.style.borderColor = 'red';
        return false;
    }
    console.log('Nome Certo');
    document.forms['formulario'].nome.style.borderColor = 'green';
    return true;
}

function campoObrigatorio() {
    let nome = document.forms['formulario'].nome.value;
    //if(nome.length == 0){
    if (nome == "") {
        console.log('campo obrigatório');
    }
}

function validarIdade() { //Mínimo 10 anos e máximo 150 anos
    let idade = document.forms['formulario'].idade.value;
    if (idade < 10 || idade > 150) {
        console.warn('Idade Incorreta!');
        colocarErro(document.forms['formulario'].idade);
        return false;
    }
    console.log('Idade Correta!');
    colocarSucesso(document.forms['formulario'].idade);
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

function validarSenha() { //Mínimo 6 dígitos
    let senha = document.forms['formulario'].senha.value;
    if (senha.length < 6) {
        console.warn('Senha menor que 6 dígitos.');
        colocarErro(document.forms['formulario'].senha);
        return false;
    }
    console.log('Senha correta!');
    colocarSucesso(document.forms['formulario'].senha);
    return true;
}

function validarEstados() {
    let estados = document.forms['formulario'].estados;
    let posicao = estados.selectedIndex;
    if (posicao == 0) {
        colocarErro(estados);
        return false;
    }
    colocarSucesso(estados);
    return true;
}


function validarIdiomas() { //verificar se pelo menos uma opção foi selecionada
    let idiomas = document.forms['formulario'].idiomas;

    for (i = 0; i < idiomas.length; i++) {
        let idioma = idiomas[i];
        if (idioma.checked == true) {
            return true;
        }
    }
    alert('Selecione um idioma!')
    return false;
}

function validarMinimoIdiomas() { //verificar se pelo menos uma opção foi selecionada
    let contador = 0;
    let idiomas = document.forms['formulario'].idiomas;

    for (i = 0; i < idiomas.length; i++) {
        let idioma = idiomas[i];
        if (idioma.checked == true) {
            contador = contador + 1
                //contador++
        }
    }
    if (contador >= 3) {
        return true;
    } else {
        alert(' Não selecionou no minimo 3');
        return false;
    }
}

function validarSexo(params) {
    let sexos = document.forms['formulario'].sexo;
    for (i = 0; i < sexos.length; i++) {
        let sexo = sexos[i];
        if (sexo.checked == true) {
            return true;
        } else {
            alert('selecione um sexo')
            return false;
        }
    }

}



// function validarForm(event) {
//     if (validarNome() == false) {
//         event.preventDefault();
//         return false;
//     }
//     if (validarIdade() == false) {
//         event.preventDefault();
//         return false;
//     }
//     if (validarSenha() == false) {
//         event.preventDefault();
//         return false;
//     }
//     return true;
//     //event.preventDefault(); //Evita o evento do formulário
// }

function validarForm(event) {
    let controle = true;

    if (validarNome() == false) {
        controle = false;
    }
    if (validarIdade() == false) {
        controle = false;
    }
    if (validarSenha() == false) {
        controle = false;
    }
    if (validarEstados() == false) {
        controle = false;
    }
    if (validarIdiomas() == false) {
        controle = false;
    }
    if (validarMinimoIdiomas() == false) {
        controle = false;

    }
    if (validarSexo() == false) {
        controle = false;

    }


    //Verifica variável de controle
    if (controle == false) {
        event.preventDefault();
        return false;
    }
    return true;
}