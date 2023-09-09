import { desenharProdutoCarrinhoSimples, lerLocalStorage } from "./src/ultilidades.js";
import { atualizarPrecoNoCarrinho } from "./src/carrinho.js";

function desenharProdutosCheckout() {
    const idsProdutoCarrinhoComQuantidade = lerLocalStorage("carrinho")
    for (const idProduto in idsProdutoCarrinhoComQuantidade) {
        desenharProdutoCarrinhoSimples(idProduto, "container-produtos-checkout", idsProdutoCarrinhoComQuantidade[idProduto])
    }
}

desenharProdutosCheckout();
atualizarPrecoNoCarrinho();