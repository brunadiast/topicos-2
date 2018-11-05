//Exercício 1
// let x = 5;
// let y = 5;
// //x = y++; // x = 5; y=6;
// //x = ++y; // x=6; y=6;
// // x++;
// // ++x;
// //x += y; // x = x+y;
// //x *= y;

// alert('Valor de x: ' + x);
// alert('Valor de y: ' + y);

//Exercício 2
// let x = 5;
// let resultado = x == 5;
// let resultado = x == '5';
// let resultado = x >= 4;
// let resultado = x !== '5';
// let resultado = x === '5';
// alert('Resultado: ' + resultado)


//Exercício 3
function calcular() {
    let numero = document.getElementById('nro').value;
    let numeroConvertido = parseInt(numero);
    let resultado = numeroConvertido % 2;
    if (resultado == 0) {
        document.getElementById('resultado').innerHTML = 'É Par!';
        let dobro = numeroConvertido * 2;
        document.getElementById('resultado2').innerHTML = 'O Dobro é: ' + dobro;
    } else {
        document.getElementById('resultado').innerHTML = 'É Impar!';
        let quadrado = numeroConvertido * numeroConvertido;
        document.getElementById('resultado2').innerHTML = 'O quadrado é: ' + quadrado;
    }
}


//Exercício 4
function mesExtenso() {
    let mes = document.getElementById('nro').value;

    if (mes == 1) {
        document.getElementById('resultado').innerHTML = 'Janeiro';
    } else if (mes == 2) {
        document.getElementById('resultado').innerHTML = 'Fevereiro';
    } else if (mes == 3) {
        document.getElementById('resultado').innerHTML = 'Março';
    } else if (mes == 4) {
        document.getElementById('resultado').innerHTML = 'Abril';
    } else if (mes == 5) {
        document.getElementById('resultado').innerHTML = 'Maio';
    } else if (mes == 6) {
        document.getElementById('resultado').innerHTML = 'Junho';
    } else if (mes == 7) {
        document.getElementById('resultado').innerHTML = 'Férias';
    } else if (mes == 8) {
        document.getElementById('resultado').innerHTML = 'Agosto';
    } else if (mes == 9) {
        document.getElementById('resultado').innerHTML = 'Setembro';
    } else if (mes == 10) {
        document.getElementById('resultado').innerHTML = 'Outubro';
    } else if (mes == 11) {
        document.getElementById('resultado').innerHTML = 'Quase Natal';
    } else if (mes == 12) {
        document.getElementById('resultado').innerHTML = 'Natal';
    } else {
        document.getElementById('resultado').innerHTML = 'Número Inválido';
    }
    document.getElementById('resultado2').innerHTML = '';
}

// switch (mes) {
//     case '1':
//         document.getElementById('resultado').innerHTML = 'Janeiro';
//         break;
//     case '2':
//         document.getElementById('resultado').innerHTML = 'Fevereiro';
//         break;
//     case '3':
//         document.getElementById('resultado').innerHTML = 'Março';
//         break;
//     case '4':
//         document.getElementById('resultado').innerHTML = 'Março';
//         break;
//     case '5':
//         document.getElementById('resultado').innerHTML = 'Março';
//         break;
//     case '6':
//         document.getElementById('resultado').innerHTML = 'Março';
//         break;
//     case '7':
//         document.getElementById('resultado').innerHTML = 'Março';
//         break;
//     case '8':
//         document.getElementById('resultado').innerHTML = 'Março';
//         break;
//     case '9':
//         document.getElementById('resultado').innerHTML = 'Março';
//         break;
//     case '10':
//         document.getElementById('resultado').innerHTML = 'Março';
//         break;
//     case '11':
//         document.getElementById('resultado').innerHTML = 'Março';
//         break;
//     case '12':
//         document.getElementById('resultado').innerHTML = 'Março';
//         break;
//     default:
//         document.getElementById('resultado').innerHTML = 'Mês Inválido';
// }