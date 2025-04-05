let personagem = ["", "", ""];
let comp = ["", "", ""];

let forcaPersona = 0;
let forcaComp = 0;

// Entrando com os nomes dos personagens
for (let pers = 0; pers < 3; pers++) {
  let escolha = prompt("Digite o nome do seu personagem " + (pers + 1));
  personagem[pers] = escolha;
  forcaPersona += Math.floor(Math.random() * 10) + 1;
}

// Definindo os NPCs
let npc = ["Carlota", "Paulão", "Olho-morto", "Perneta", "Pirulito", "Xanaina", "Creuza", "Enzo", "Oreia", "Neuza"];

// Gerando os NPCs para o time do computador
for (let computa = 0; computa < 3; computa++) {
  let indiceAleatorio = Math.floor(Math.random() * 10) + 1;  // Seleciona um NPC aleatório
  comp[computa] = npc[indiceAleatorio];  // Atribui o NPC ao time do computador
  forcaComp += Math.floor(Math.random() * 10) + 1;  // Calcula a força do NPC
}

let total = forcaPersona - forcaComp

if (forcaPersona > forcaComp){
  alert("Seu time ganhou")
}else if(forcaPersona< forcaComp){
  alert("Seu time perdeu por " + total)
}else{
  alert("Empatou")
}
