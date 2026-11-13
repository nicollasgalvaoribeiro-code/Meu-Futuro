document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Efeito de Digitação (Typewriter) no Título Principal
    const palavras = ["Meu Futuro", "Meu Sucesso", "Meus Sonhos"];
    let palavraIndex = 0;
    let letraIndex = 0;
    let apagando = false;
    const elementoTexto = document.getElementById("texto-digitado");

    function digitar() {
        const palavraAtual = palavras[palavraIndex];

        if (apagando) {
            elementoTexto.textContent = palavraAtual.substring(0, letraIndex - 1);
            letraIndex--;
        } else {
            elementoTexto.textContent = palavraAtual.substring(0, letraIndex + 1);
            letraIndex++;
        }

        let velocidade = apagando ? 60 : 120;

        if (!apagando && letraIndex === palavraAtual.length) {
            velocidade = 2000; // Pausa quando termina de escrever a palavra
            apagando = true;
        } else if (apagando && letraIndex === 0) {
            apagando = false;
            palavraIndex = (palavraIndex + 1) % palavras.length;
            velocidade = 400;
        }

        setTimeout(digitar, velocidade);
    }

    // Inicia o efeito de digitação
    digitar();


    // 2. Animação de Surgimento das Seções ao Rolar a Página (Intersection Observer)
    const secoes = document.querySelectorAll(".animar");

    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("visivel");
            }
        });
    }, {
        threshold: 0.2 // Dispara a animação quando 20% da seção estiver visível na tela
    });

    secoes.forEach((secao) => {
        observador.observe(secao);
    });
});