function pegarNumeros(operacao) {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let gasolina = parseFloat(num1);
    let alcool = parseFloat(num2);
    comparacao(alcool, gasolina)
}


function comparacao(alcool, gasolina) {
    let resultado = alcool / gasolina
    if (resultado > 0.7)
        exibiResultado("o mais viavel é : gasolina");
    else
        exibiResultado("o mais viavel é : alcool ");

}

function exibiResultado(texto) {
    document.getElementById('resultado').innerHTML = texto;
}