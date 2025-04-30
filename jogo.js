// definindo uma função para gerar um número aleatório entre 1 e 100
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
// função para limpar o campo de palpite
function limparPalpite() {
  const input = document.getElementById('palpite');
  input.value = '';
  input.focus();
}

let jogoAtivo = true;

function iniciarJogo() {
  jogoAtivo = true;  // Reativa o jogo
  //Gerar um número secreto aleatório entre 1 e 100.
  numeroSecreto = getRandomInt(1, 100);
  // Definir o número máximo de tentativas (ex: 10).
  maxTentativas = 10;
  // Inicializar o contador de tentativas.
  tentativasRestantes = maxTentativas;
  document.getElementById("tentativas").innerHTML = "Tentativas restantes: " + tentativasRestantes;
}

function chutar() {
  if (!jogoAtivo) return;  // Bloqueia o chute se o jogo já acabou
  // Capturar o valor inserido no input (palpite do jogador).
  let palpite = document.getElementById("palpite").value;
  // Validar se o palpite é um número válido entre 1 e 100.
  if (isNaN(palpite) || palpite < 1 || palpite > 100) {
    alert("Por favor, insira um número válido entre 1 e 100.");
    limparPalpite();
    return;
  }
  
  // Decrementar o contador de tentativas.
  palpite = Number(palpite);
  tentativasRestantes--;
  
  // Exibir o número de tentativas restantes.
  document.getElementById("tentativas").innerHTML = "Tentativas restantes: " + tentativasRestantes;
  
  // Comparar o palpite com o número secreto e exibir uma mensagem:
  if (palpite == numeroSecreto) {
    document.getElementById("resultado").innerHTML = "Você acertou! O número secreto era " + numeroSecreto + ".";
    document.getElementById("tentativas").innerHTML = ""; // ← limpa as tentativas restantes
    document.getElementById("dica").innerHTML = ""; // Limpa a dica
    jogoAtivo = false;  // Desativa o jogo
  } else if (tentativasRestantes == 0) {
    document.getElementById("resultado").innerHTML = "Você perdeu! O número secreto era " + numeroSecreto + ".";
    document.getElementById("tentativas").innerHTML = ""; // ← limpa as tentativas restantes
    document.getElementById("dica").innerHTML = ""; // Limpa a dica
    jogoAtivo = false;  // Desativa o jogo
  } else if (palpite < numeroSecreto) {
    document.getElementById("dica").innerHTML = "O número secreto é maior.";
  } else {
    document.getElementById("dica").innerHTML = "O número secreto é menor.";
  }
  limparPalpite();
}

// Inicia o jogo ao carregar a página
window.onload = function() {
  iniciarJogo();
};

function reiniciarJogo() {
  // Limpar mensagens anteriores
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("dica").innerHTML = "";
  limparPalpite();
  // Reiniciar o jogo
  iniciarJogo();
}
