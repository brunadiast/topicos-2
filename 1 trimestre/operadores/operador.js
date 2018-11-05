function pegarNumeros(operacao) {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let num1n = parseInt(num1);
    let num2n = parseInt(num2);

    if (operacao == '+') {
        let resultado = somar(num1n, num2n);
        exibiResultado("o resultado da soma é: " + resultado);
    } else if (operacao == '-') {
        let resultado = subtrair(num1n, num2n);
        exibiResultado("o resultado da subtração é: " + resultado);
    } else if (operacao == '/') {
        let resultado = dividir(num1n, num2n);
        exibiResultado("o resultado da divisão é: " + resultado);
    } else if (operacao == '*') {
        let resultado = multiplicar(num1n, num2n);
        exibiResultado("o resultado da multiplicação é: " + resultado);
    } else {
        exibiResultado("operação não existênte");
    }

}

function somar(num1n, num2n) {
    return num1n + num2n;
}

function exibiResultado(texto) {
    document.getElementById('resultado').innerHTML = texto;
}



function subtrair(num1n, num2n) {
    return num1n - num2n;
}

function multiplicar(num1n, num2n) {
    return num1n * num2n;
}

function dividir(num1n, num2n) {
    return num1n / num2n;
}