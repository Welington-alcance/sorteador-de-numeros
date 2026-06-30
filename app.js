const NumerosSorteados = [];

const inputQuantidade = document.querySelector("#quantidade");
const inputNumeroInicial = document.querySelector("#numeroInicial");
const inputNumeroFinal = document.querySelector("#numeroFinal");
const btnSortear = document.querySelector("#btn-sortear");
const btnReiniciar = document.querySelector("#btn-reiniciar");
const inputResultado = document.querySelector("#resultadoSpan");

function sortear(){
    const quantidade = Number(inputQuantidade.value.trim());
    const numeroIncial = Number(inputNumeroInicial.value.trim());
    const numeroFinal = Number(inputNumeroFinal.value.trim());
    const possibilidades = numeroFinal - numeroIncial +1;

    if(NumerosSorteados.length > 0){
        return;
    }

    if(!verificarInputs(quantidade, numeroIncial, numeroFinal, possibilidades)){
        limparTela();
        return;
    }

    let numeroGerado;

    for(let i = 0; i < quantidade; i++){
        numeroGerado = (geradorNumero(possibilidades));

        while(NumerosSorteados.includes(numeroGerado)){
            numeroGerado = (geradorNumero(possibilidades));
        }

        NumerosSorteados.push(numeroGerado);
    }

    exibirTela();
    btnReiniciar.classList.remove('container__botao-desabilitado');
    btnReiniciar.classList.add('container__botao');
}

function reiniciar(){
    limparTela();

    btnReiniciar.classList.remove('container__botao');
    btnReiniciar.classList.add('container__botao-desabilitado');
}

function limparTela(){
    inputQuantidade.value = '';
    inputNumeroInicial.value = '';
    inputNumeroFinal.value = '';
    inputResultado.textContent = 'nenhum até agora';
    NumerosSorteados.length = 0;
    inputQuantidade.focus();
}

function exibirTela(){
    inputResultado.innerHTML = NumerosSorteados

}


function geradorNumero(possibilidades){
    const numero = parseInt(Math.random()*possibilidades+1)
    return numero;
}


function verificarInputs(quantidade, numeroIncial, numeroFinal, possibilidades){

    if(quantidade === null || isNaN(quantidade)){
        alert('Por favor, informe a quantidade de números a serem sorteados');
        return false;
    } 
    if(quantidade === 0){
       alert('Por favor, informe uma quantidade de número para ser sorteado mair que zero');
        return false;
    }
    if(numeroIncial === null || isNaN(numeroIncial)){
       alert('Por favor, informe um número inicial');
       return false;
    } 
    if(numeroIncial === 0){
        alert('Por favor, informe um número inicial maior que zero');
        return false;
    }
    if(numeroFinal === null || isNaN(numeroFinal)){
        alert('Por favor, informe um número final');
        return false;
    } 
    if(numeroFinal === 0){
        alert('Por favor, informe um número final maior que zero');
        return false;
    }
    if(numeroIncial >= numeroFinal){
        alert('O número inicial não pode ser maior ou igual ao número final');
        return false;
    }
    if(possibilidades <= quantidade){
        alert('Informe uma quantidade de números a ser sorteado menor que a diferença entre a quantidade final menor a quantidade inicial.');
        return false;
    }

    return true;

}