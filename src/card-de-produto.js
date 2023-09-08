import { catalogo } from "./ultilidades.js";
import { adicionarAoCarrinho } from "./carrinho.js";

export function renderizarCatalogo() {
    for (const produtoCatalogo of catalogo) {
        const cartaoProduto = `<div class="card-produto" class="${produtoCatalogo.camiseta ? "camiseta" : (produtoCatalogo.calça ? "calca" : (produtoCatalogo.casaco ? "casaco" : "regata"))}" id="card-produto-${produtoCatalogo.id}">
    <img src="./imagens/${produtoCatalogo.nomeArquivoImg}" alt="Produto 1">
    <p>${produtoCatalogo.nome}</p>
    <p>${produtoCatalogo.marca}</p>
    <p>R$ ${produtoCatalogo.preco}</p>
    <button id="adicionar-${produtoCatalogo.id}" class="botao-adicionar"><i class="fa-solid fa-cart-plus"></i></button>
    </div>`

    document.getElementById("container-produto").innerHTML += cartaoProduto;
}
    for (const produtoCatalogo of catalogo ) {
        document.getElementById(`adicionar-${produtoCatalogo.id}`).addEventListener('click', () => adicionarAoCarrinho(produtoCatalogo.id));
    }
}