// metodo que le todos os rotulos a partir da passado no parametro
function lerTodosRotulos(rotulo) {
    showAndSayIt($(rotulo).text()); 
}

// metodo que le o valor do campo a partir do valor passado no parametro
function lerValor(rotuloValor) {
    var nome = $(rotuloValor).val();
    showAndSayIt(nome); // metodo para falar
}

// metodo que le o rotulo do campo a partir do valor passado no parametro
function lerRotulo(nomeRotulo) {
    var textoPraLer = $(nomeRotulo).text();
    showAndSayIt(textoPraLer);
}


// metodo que le o corpo do html inteiro com excessao dos valores de input
function lerTudo() {
    var conteudo = $('body').text();
    showAndSayIt(conteudo);

}

// metodo que configura e executa a narração
const showAndSayIt = (m) => {
    // instancia a api de voz
    const msg = new SpeechSynthesisUtterance(m);

    // configura a linguagem e velocidade da narracao
    msg.lang = 'pt-br';
    msg.rate = 0.7;

    msg.onstart = () => console.log(m); // vai escrever no console a mensagem lida

    speechSynthesis.speak(msg); // aqui ocorre a narração
}
