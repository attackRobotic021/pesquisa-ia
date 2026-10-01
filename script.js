let perguntaAtual = 1;

const totalPerguntas = 5;


// Começar pesquisa
function comecarPesquisa() {

    document.getElementById("inicio").classList.remove("ativa");

    document.getElementById("pesquisa").classList.add("ativa");

    atualizarTela();
}


// Próxima pergunta
function proximaPergunta() {

    if (!validarPergunta()) {
        alert("Por favor, responda a pergunta antes de continuar.");
        return;
    }

    if (perguntaAtual < totalPerguntas) {

        document
            .getElementById(`pergunta${perguntaAtual}`)
            .classList.remove("ativa-pergunta");

        perguntaAtual++;

        document
            .getElementById(`pergunta${perguntaAtual}`)
            .classList.add("ativa-pergunta");

        atualizarTela();

    } else {

        finalizarPesquisa();

    }
}


// Voltar pergunta
function voltarPergunta() {

    if (perguntaAtual > 1) {

        document
            .getElementById(`pergunta${perguntaAtual}`)
            .classList.remove("ativa-pergunta");

        perguntaAtual--;

        document
            .getElementById(`pergunta${perguntaAtual}`)
            .classList.add("ativa-pergunta");

        atualizarTela();
    }
}


// Atualizar contador e barra
function atualizarTela() {

    document.getElementById("contador").textContent =
        `Pergunta ${perguntaAtual} de ${totalPerguntas}`;

    const porcentagem =
        (perguntaAtual / totalPerguntas) * 100;

    document.getElementById("barraProgresso").style.width =
        `${porcentagem}%`;


    const botaoVoltar = document.getElementById("voltar");

    if (perguntaAtual === 1) {
        botaoVoltar.style.visibility = "hidden";
    } else {
        botaoVoltar.style.visibility = "visible";
    }


    const botaoProximo = document.getElementById("proximo");

    if (perguntaAtual === totalPerguntas) {
        botaoProximo.textContent = "Finalizar pesquisa";
    } else {
        botaoProximo.textContent = "Próxima";
    }
}


// Validar pergunta
function validarPergunta() {

    // Perguntas de múltipla escolha
    if (
        perguntaAtual === 1 ||
        perguntaAtual === 2 ||
        perguntaAtual === 4 ||
        perguntaAtual === 5
    ) {

        const resposta =
            document.querySelector(
                `input[name="q${perguntaAtual}"]:checked`
            );

        if (!resposta) {
            return false;
        }
    }


    // Justificativa da pergunta 2
    if (perguntaAtual === 2) {

        const texto =
            document.getElementById("justificativa2").value.trim();

        if (texto === "") {
            return false;
        }
    }


    // Pergunta 3
    if (perguntaAtual === 3) {

        const texto =
            document.getElementById("resposta3").value.trim();

        if (texto === "") {
            return false;
        }
    }


    // Justificativa da pergunta 4
    if (perguntaAtual === 4) {

        const texto =
            document.getElementById("justificativa4").value.trim();

        if (texto === "") {
            return false;
        }
    }


    // Justificativa da pergunta 5
    if (perguntaAtual === 5) {

        const texto =
            document.getElementById("justificativa5").value.trim();

        if (texto === "") {
            return false;
        }
    }


    return true;
}


// Finalizar pesquisa
function finalizarPesquisa() {

    document.getElementById("pesquisa").classList.remove("ativa");

    document.getElementById("final").classList.add("ativa");

}


// Voltar para início
function voltarInicio() {

    document.getElementById("final").classList.remove("ativa");

    document.getElementById("inicio").classList.add("ativa");

    perguntaAtual = 1;

    document
        .querySelectorAll(".pergunta")
        .forEach(pergunta => {
            pergunta.classList.remove("ativa-pergunta");
        });

    document
        .getElementById("pergunta1")
        .classList.add("ativa-pergunta");

    atualizarTela();
}