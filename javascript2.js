const palavras = ["Serviços", "Portfólio", "Contato", "Orçamento"];

// Seleciona o primeiro link dentro da tag <nav>
const linkAnimado = document.querySelector('nav a:first-child');

let indiceAtual = 0;

function trocarPalavra() {
  // 1. Inicia a animação de SAÍDA (slide-out)
  linkAnimado.classList.remove('slide-in');
  linkAnimado.classList.add('slide-out');

  // 2. Espera o tempo da animação de saída (300ms) para trocar o texto
  setTimeout(() => {
    // Troca o texto
    linkAnimado.textContent = palavras[indiceAtual];
    
    // 3. Inicia a animação de ENTRADA (slide-in)
    linkAnimado.classList.remove('slide-out');
    linkAnimado.classList.add('slide-in');

    // Avança para o próximo índice
    indiceAtual = (indiceAtual + 1) % palavras.length;
  }, 300); // 300ms é o tempo da transição CSS
}

// Inicializa o link com a animação de entrada
linkAnimado.classList.add('slide-in');

// Configura o intervalo para chamar a função a cada 2000 milissegundos (2 segundos)
setInterval(trocarPalavra, 2000);
