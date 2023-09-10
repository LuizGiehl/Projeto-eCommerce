import { desenharProdutoCarrinhoSimples, lerLocalStorage } from "./src/ultilidades.js";
import { atualizarPrecoNoCarrinho } from "./src/carrinho.js";

function desenharProdutosCheckout() {
    const idsProdutoCarrinhoComQuantidade = lerLocalStorage("carrinho")
    for (const idProduto in idsProdutoCarrinhoComQuantidade) {
        desenharProdutoCarrinhoSimples(idProduto, "container-produtos-checkout", idsProdutoCarrinhoComQuantidade[idProduto])
    }
}

function finalizarCompra(evento) {
    evento.preventDefault()
    window.location.href = window.location.origin + '/pedidos.html';

}

desenharProdutosCheckout();
atualizarPrecoNoCarrinho();


document.addEventListener("submit", (evt) => finalizarCompra(evt));
