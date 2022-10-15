/*
OBJETIVO - Quando clicar na aba temos que mostrar o conteudo da aba que foi clicada pelo usuario e esconder o conteudo da aba anterior 
PASSO1 - Dar um jeito de pegar os elementos que representam as abas do HTML
PASSO2 - Dar um jeito de indentificar o clique no elemento da aba
PASSO3 - Quando o usuario clicar, desmarcar a aba selecionada
PASSO4 - Marcar a aba clicada como selecionado
PASSO6 - Mostrar o conteudo da aba selecionada
*/

//passo1
const abas = document.querySelectorAll(".aba")

//passo2
abas.forEach(aba => {
    aba.addEventListener("click", function() {
        if(aba.classList.contains("selecionado")){
            return;
        }
        
        selecionarAba(aba)

       mostrarInformacoesDaAba(aba)
    });
});

function selecionarAba(aba) {
    //passo3
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado");
    //passo4
    aba.classList.add("selecionado");
}

function nostrarInformacoesDaAba(aba){
     //passo5
     const informacaoSelecionada = document.querySelector(".informacao.selecionado");
     informacaoSelecionada.classList.remove("selecionado");
     //passo6
     const idDoElementoInformacoesDaAba = `informacao-${aba.id}`
     const informacaoASerMostrada = document.getElementById(idDoElementoInformacoesDaAba)
     informacaoASerMostrada.classList.add("selecionado")

}