function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Reger para pesquisar somente por caracteres alfanumericos
    const regex = /[^a-zA-Z0-9à-úç]/g
    // Pega o valor pesquisado
    let campoPesquisa = document.getElementById("campo-pesquisa").value
    campoPesquisa = campoPesquisa.replace(regex, '')

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = '<p class="not-found">Informe um nome ou termo para pesquisa.</p>'
        return
    }

    // Seta para lowerCase
    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = ""; 
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase().replace(regex, '')
        descricao = dado.descricao.toLowerCase().replace(regex, '')
        posicao = dado.posicao.toLowerCase().replace(regex, '')
        equipes = dado.equipes.join(',').toLowerCase().replace(regex, '')
        tags = dado.tags.toLowerCase().replace(regex, '')
        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || posicao.includes(campoPesquisa) || equipes.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <div class="item-image">
                    <img src="${dado.imagem}" alt="Imagem do jogador"/>
                </div>
                <div class="item-description">
                    <h2>
                        <a href=${dado.link} target="_blank">${dado.titulo}</a>
                    </h2>
                    <div class="description-info">
                        <p class="descricao-meta"><b>Posição:</b> ${dado.posicao}</p>
                        <p class="descricao-meta"><b>Total de Pontos:</b> ${dado.total_pontos}</p>
                    </div>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href=${dado.link} target="_blank">Mais informações</a>
                </div>
                <p class="item-number">${dado.numeros[0]}</p>
            </div>
        `;
        }
    }

    // Se nao encontrou, retorna mensagem
    if (!resultados) {
        resultados = '<p class="not-found">Nenhum atleta encontrado para a busca.</p>';
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}