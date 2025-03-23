let listaDeNumerosSorteados = [];
let numeroLimite = 3;  


function alterarTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}
exibirMensagemDeInicio()
function exibirMensagemDeInicio(){
    alterarTextoNaTela('h1', 'Jogo do numero secreto');
    alterarTextoNaTela('p', 'Digite um numero de 1 a 10');
}
let numeroSecreto = gerarNumeroSecreto();
let numeroDeTentativas = 1;
let palavraTentativa;
console.log(numeroSecreto);
function verificarChute(){
    let chute = document.querySelector('input').value;
    palavraTentativa = numeroDeTentativas > 1 ? 'tentativas' : 'tentativa'
    if(chute == numeroSecreto){
        alterarTextoNaTela('h1', 'Parabéns você acertou');
        alterarTextoNaTela('p', `O numero secreto era ${numeroSecreto} em ${numeroDeTentativas} ${palavraTentativa}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numeroSecreto){
            alterarTextoNaTela('p', `O numero secreto é menor`);
        } else {
            alterarTextoNaTela('p', `O numero secreto é maior`);
        }
    numeroDeTentativas ++;
    limparChute();
    }
}
function gerarNumeroSecreto(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantideDeElementosNaLista = listaDeNumerosSorteados.length;
    // verifica se a quantidade de elementos na lista é igual ao numero limite(variável)
    if (quantideDeElementosNaLista == numeroLimite) {
        // caso verdadeiro lista torna a ficar vazia dando espaço para novos numeros
        listaDeNumerosSorteados = [];
    }
    // verifica se o numero gerado esta na lista 'listaDeNumerosSorteados'
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        // caso verdadeiro gera um novo numero secreto para evitar repitir o numero sorteado
        //  e retorna o valor do numero gerado
        return gerarNumeroSecreto();
    } else {
        // caso nao esteja na lista inclui o numero nela e retorna o valor do numero gerado
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}
function limparChute(){
    chute = document.querySelector('input');
    chute.value = '';

}
function reiniciarJogo(){
    exibirMensagemDeInicio()
    numeroSecreto = gerarNumeroSecreto();
    console.log(numeroSecreto);
    numeroDeTentativas = 1;
    limparChute();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}