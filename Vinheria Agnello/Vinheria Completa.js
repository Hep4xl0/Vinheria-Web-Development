function addCarrinho() {

var addCarrinho = document.getElementById("addCarrinho");
alert("Adicionado ao carrinho com sucesso!");
}


function Subtrair() {
var subtrair = document.getElementById("subtrair");
var quantidade = document.getElementById("quantidade");
var numero = parseInt(quantidade.textContent);
var valor = document.getElementById("valor");
var reais = parseFloat(valor.textContent);

var reais = 200;

if (numero == 1) {
menos = numero;
}
else {
menos = numero - 1;
total = reais * menos;
}

quantidade.innerHTML = menos;
valor.innerHTML = `R$ ${total},00`;
}


function Somar() {
var somar = document.getElementById("somar");
var quantidade = document.getElementById("quantidade");
var numero = parseInt(quantidade.textContent);
var valor = document.getElementById("valor");
var reais = parseFloat(valor.textContent);

reais = 200;

if (numero == 20) {
mais = numero;
}
else {
mais = numero + 1;
total = reais * mais;
}

quantidade.innerHTML = mais;
valor.innerHTML = `R$ ${total},00`;
}