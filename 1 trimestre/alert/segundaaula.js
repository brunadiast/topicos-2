//alert("olá mundo!");

function olaMundo(){
	let nome = prompt("digite seu nome");
	alert("olá," + nome);
}

function carregarPagina(){
	alert("carregou a página!")
}

function somar(){
	let elNum1 = document.getElementById("num1");
	let num1 = elNum1.value;
	let num1Inteiro = parseInt(num1);

	let num2 = document.getElementById("num2").value;
	let num2Inteiro = parseInt(num2);

	let resultado = num1Inteiro + num2Inteiro;
	alert("Resultado:" + resultado);
}