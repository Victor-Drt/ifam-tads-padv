
function lerTodosRotulos(rotulo) {
    showAndSayIt($(rotulo).text()); // metodo para falar
}

function lerValor(rotuloValor) {
    var nome = $(rotuloValor).val();
    showAndSayIt(nome); // metodo para falar
}

function lerRotulo(nomeRotulo) {
    var textoPraLer = $(nomeRotulo).text();
    showAndSayIt(textoPraLer);
}

function lerTudo() {
    var conteudo = $('body').text();
    showAndSayIt(conteudo);

}

const showAndSayIt = (m) => {
    const msg = new SpeechSynthesisUtterance(m);
    msg.onstart = () => console.log(m);
    speechSynthesis.speak(msg);
}
