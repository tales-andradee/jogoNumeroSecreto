let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
tentativas = 1;

// função parâmetro 
function exibirNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate: 1.2});
}


function mensagemSaudações() {
    exibirNaTela("h1", "Jogo do número secreto");
    exibirNaTela("p", "Escolha um número entre 1 e 10");
}

mensagemSaudações();

// função inserida no botão
function verificarChute() {
    chute = document.querySelector("input").value;
    if (chute == numeroSecreto) {
        exibirNaTela("h1", "Acertou!");
        let mensagemTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemAcerto = `Você descobriu o número secreto com ${tentativas} ${mensagemTentativa}!`;
        exibirNaTela("p", mensagemAcerto);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (chute > numeroSecreto) {
            exibirNaTela("p", "O número secreto é menor que o chute");
        } else {
            exibirNaTela("p", "O número secreto é maior que o chute");
        }
        tentativas++;
        limparCampo();
    }
}

// função retorno
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let QuantidadeDeNumeroEscolhidos = listaNumerosSorteados.length;

    if (QuantidadeDeNumeroEscolhidos == numeroLimite) {
        listaNumerosSorteados =[];
    }
    if (listaNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }

}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = " ";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemSaudações();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}
