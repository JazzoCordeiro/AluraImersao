// Pergunta a idade apenas uma vez ao carregar a página
let idade = prompt("Quantos anos você tem?");
idade = Number(idade); // Converte a entrada para número

// Função para rodar o jogo
function jogar() {
  if (idade < 18) {
    alert("Você NÃO pode jogar, é menor de idade");
  } else {
    let escolhaJogador = prompt("Digite 1 para Pedra, 2 para Papel ou 3 para Tesoura");
    escolhaJogador = Number(escolhaJogador); // Converte a entrada para número
    
    // Verificação de escolha válida
    if (escolhaJogador < 1 || escolhaJogador > 3) {
      alert("Escolha inválida! Digite 1 para Pedra, 2 para Papel ou 3 para Tesoura.");
    } else {
      let escolhaComp = Math.floor(Math.random() * 3) + 1; // Gera a escolha do computador

      if (escolhaJogador == escolhaComp) {
        alert("Empate");
      } else if (escolhaJogador == 1) {
        if (escolhaComp == 2) {
          alert("Computador venceu, ele escolheu Papel");
        } else if (escolhaComp == 3) {
          alert("Você venceu, computador escolheu Tesoura");
        }
      } else if (escolhaJogador == 2) {
        if (escolhaComp == 1) {
          alert("Você venceu, computador escolheu Pedra");
        } else if (escolhaComp == 3) {
          alert("Computador venceu, ele escolheu Tesoura");
        }
      } else if (escolhaJogador == 3) {
        if (escolhaComp == 1) {
          alert("Computador venceu, ele escolheu Pedra");
        } else if (escolhaComp == 2) {
          alert("Você venceu, computador escolheu Papel");
        }
      }
    }
  }
}
