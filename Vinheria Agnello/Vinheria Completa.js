total = 200;


function addCarrinho() {

var addCarrinho = document.getElementById("addCarrinho");
alert("Adicionado ao carrinho com sucesso!");
}


function Subtrair() {
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
var quantidade = document.getElementById("quantidade");
var numero = parseInt(quantidade.textContent);
var valor = document.getElementById("valor");
var reais = parseFloat(valor.textContent);

var reais = 200;

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


function caixaCupom(){
    var cupomNome = prompt("insira o cupom de desconto no campo abaixo");
    var cupomNome = cupomNome.toUpperCase();
    var valor = document.getElementById("valor");
    var reais = parseFloat(valor.textContent);
    var desconto = total - total * 0.1

    if (cupomNome == "FIAP2024") {
        total = desconto
    }
    else{
        alert("Cupom inválido ou expirado!")
    }

    valor.innerHTML= `R$ ${total},00`;
}

function mostravalor() {
    valor.innerHTML= `R$ ${total},00`;
}


// LOGIN 


// WHILE 
function login(){
    let nomeUsuario;
    let senhaUsuario;

    while(true){
        nomeUsuario = document.getElementById("login").value;
        senhaUsuario = document.getElementById("senha").value;

        if(nomeUsuario === "1234" && senhaUsuario === "1234"){
            alert('Logado com sucesso!\nClique em "OK" para ser redirecionado');
            location.href = (href="Vinheria Completa.html")
            break
        
        }

        alert("Login ou senha invalidos!")
        break
    }
}

