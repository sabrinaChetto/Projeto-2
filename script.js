// Reação se usuário clicar em "sim"
function sim() {
    // Troca da imagem dos gatinhos
    var imagem = document.getElementById("imagem1");
    imagem.src = "./imagens/imagem2.png"
    // Mensagem em caixa de alerta
    alert("Você aceitou namorar comigo! :)");
    
    
}

// Reação se usuário clicar em "não"
function nao(btn) {
    btn.style.position = "absolute";
    btn.style.bottom = geraPosicao(10, 90);
    btn.style.left = geraPosicao(10, 90);
    // Mensagem opcional no console
    console.log("opa, desviei...");
}

// Criando função geradora de posições aleatórias
function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}
