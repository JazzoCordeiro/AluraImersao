function conversor() {
    const valorwons = prompt("Digite um valor em Wons");
    const moeda = document.getElementById("currency").value;

    let valorConvertido;
    let simboloMoeda;
    

    const umwon = 0.0040; 
    const umdolar = 0.00076; 
    const umeuro = 0.00070; 

    switch (moeda) {
      case "dollars":
        valorConvertido = valorwons * umdolar;
        simboloMoeda = "$";
        break;
      case "euros":
        valorConvertido = valorwons * umeuro;
        simboloMoeda = "€";
        break;
      case "wons":
        valorConvertido = valorwons * umwon;
        simboloMoeda = "R$";
        break;
      default:
        alert("Moeda não suportada!");
        return;
    }

    const valorFormatado = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valorConvertido);
    
    alert("Valor convertido: " + valorFormatado);
  }