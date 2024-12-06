const listaSelecaoCases = document.querySelectorAll(".cases");

listaSelecaoCases.forEach(cases =>{
    cases.addEventListener("click", () => {
        const cartaoCaseAberto = document.querySelector(".aberto");
        cartaoCaseAberto.classList.remove("aberto");

        const idCaseSelecionado = cases.attributes.id.value;
        const idDoCaseParaAbrir = "case-" + idCaseSelecionado;
        const caseParaAbrir = document.getElementById(idDoCaseParaAbrir);
        caseParaAbrir.classList.add("aberto");
    })
})