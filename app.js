/*let inicio = document.getElementById("introducao");

console.log(inicio);

let ponteiro = "";

for (let informacao of introducao) {
  ponteiro +=
  `
  <div class="item-resultado">
  <p class="descricao-meta"> ${informacao.utilidade} </p>
  <p class="descricao-meta"> ${informacao.convencimento} </p>
  <div>
  `;
}

inicio.innerHTML = ponteiro;
*/
function pesquisar() {
    // Essa função é responsável por realizar uma pesquisa e exibir os resultados na página.

    let sessao = document.getElementById("resultados-pesquisa");
    // Obtem o elemento HTML com o ID "resultados-pesquisa" onde os resultados serão exibidos.

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    console.log(campoPesquisa);
    

    let resultado = "";
    // Inicializa uma string vazia para armazenar os resultados da pesquisa.

    let titulo = "";
    let descricao = "";

    campoPesquisa = campoPesquisa.toLowerCase();
  
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase();
      descricao = dado.descricao.toLowerCase();

      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
        if (!campoPesquisa) {
          sessao.innerHTML = "<p> Nada foi encontrado </p>"
          return
        }

        resultado += `
          <div class="item-resultado">
            <h2>
              <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta"> ${dado.descricao} </p>
            <img src= ${dado.imagem} alt=${dado.descricaoImagem}>
         </div>
        `;
      // Constrói o HTML para cada resultado, incluindo o título, descrição e link.
      // O resultado é concatenado à string "resultado".
      }
    }

    if (!resultado) {
    resultado = "<p> Nada foi encontrado </p>"
    };
  
    sessao.innerHTML = resultado;
    // Atribui o HTML gerado ao elemento "sessao", atualizando a página com os resultados.
  
  };