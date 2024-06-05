// pegando os elementos do HTML e armazenando nas variaveis
var numero1 = document.getElementById('numero1');
var numero2 = document.getElementById('numero2');
var formulario = document.getElementById('formulario');
var resultado = document.getElementById('resultado');

// crianndo uma funçao de soma 
function somar(event){
    
    // previnindo o comportamento padrao
    event.preventDefault();

    // pegando o valor dos inputs
    var n1 = parseInt(numero1.value);
    var n2 = parseInt(numero2.value);

    // fazendo a soma
    var soma = n1 + n2;
    
    // exibindo o resultado na tela
    resultado.innerText = soma
};

// Cria uma regra para não permitir que o campo de numero seja preenchido com letras:
function mascaraNumero(event) {

    // Lendo o valor dos input:
    let value = event.currentTarget.value;

    // Formata o campo de numero:
    value = value.replace(/\D/g, '');

    // Atualiza o campo de cep:
    event.currentTarget.value = value;

    // Retorna o evento:
    return event
}

// Adicionando um evento de keyup e puxando a funçao:
numero1.addEventListener('keyup', mascaraNumero);
numero2.addEventListener('keyup', mascaraNumero);
formulario.addEventListener('submit', somar);
