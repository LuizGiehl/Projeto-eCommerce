import { catalogo } from "./ultilidades.js"

export function renderizarCatalogo() {
    for (const produtoCatalogo of catalogo) {
        const cartaoProduto = `<div class="card-produto">
    <img src="./imagens/${produtoCatalogo.nomeArquivoImg}" alt="Produto 1">
    <p>${produtoCatalogo.nome}</p>
    <p>${produtoCatalogo.marca}</p>
    <p>R$ ${produtoCatalogo.preco}</p>
    <button>Adicionar</button>
    </div>`

    document.getElementById("container-produto").innerHTML += cartaoProduto
} 
    }