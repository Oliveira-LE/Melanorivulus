function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome científico de um peixe</p>"
        return 
    }
    campoPesquisa = campoPesquisa.toLowerCase()
    let resultados = "";
    let nome = ""; 
    let descricao = "";
    let ano = ""; 
    let iucn = "";
    for (let dado of dados) {
        nome = dado.nome.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        ano = dado.ano.toLowerCase()
        iucn = dado.iucn.toLowerCase()
        if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || ano.includes(campoPesquisa)|| iucn.includes(campoPesquisa)) {
        resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.nome}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <p class="descricao-meta">${dado.ano}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
                <p class="descricao-meta">${dado.iucn}</p>
            </div>
        `;
    }
    }
    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }
    section.innerHTML = resultados;
}