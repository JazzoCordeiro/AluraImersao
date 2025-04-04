alert("Há uma ponte de vidro a sua frente com 3 quadrados de vidro, cada passo que você der pode quebrar o vidro. Escolha um dos vidros para pisar e reze para não ser o vidro fraco. Agora siga o seu caminho.");

let rodada = 0;
let venceu = false; // Variável para verificar se o jogador venceu

while (rodada < 3) { // Agora o loop vai até 3 rodadas
  console.log("Rodada: " + (rodada + 1)); // Exibe a rodada corretamente
  rodada++; // Incrementa a rodada

  let escolhaJogador = prompt("Nivel " + (rodada + 1) + ", escolha um dos 3 quadrados de vidro que você seguirá (1, 2 ou 3)");

  // Verifica se a escolha do jogador é válida (entre 1 e 3)
  while (escolhaJogador < 1 || escolhaJogador > 3) {
    escolhaJogador = prompt("Escolha inválida! Digite um número entre 1 e 3:");
  }

  let quadrado = Math.floor(Math.random() * 3) + 1; // Gera um número aleatório entre 1 e 3

  if (escolhaJogador == quadrado) {
    alert("A ponte de vidro quebrou! Fim de jogo.");
    break; // Encerra o jogo se o jogador escolher o vidro errado
  } else {
    alert("Você passou, a ponte com o piso fraco era a ponte: " + quadrado);
  }
}

if (rodada == 3) {
  venceu = true; // O jogador venceu se ele passou por todas as rodadas
  alert("Você venceu! Parabéns.");
} else {
  alert("Você perdeu antes de completar as rodadas.");
}

console.log("Venceu: " + venceu); // Exibe se o jogador venceu ou não
