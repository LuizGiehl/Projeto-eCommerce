import { catalogo } from "./ultilidades.js";
import { salvarLocalStorage, lerLocalStorage } from "./ultilidades.js";

const idsProdutoCarrinhoComQuantidade = lerLocalStorage("carrinho") ?? {};

function abrirCarrinho() {
    
    document.getElementById("carrinho").style.right = '0px'
    document.getElementById("carrinho").style.removeProperty('rigth');
    atualizarPrecoNoCarrinho();
}

function fecharCarrinho() {
    document.getElementById("carrinho").style.removeProperty('rigth');
    document.getElementById("carrinho").style.right = '-1000px'

}

export function inicializarCarrinho() {
    const botaoFecharCarrinho = document.getElementById('fechar-carrinho')
    const botaoAbrirCarrinho = document.getElementById('abrir-carrinho')

    botaoFecharCarrinho.addEventListener("click", fecharCarrinho);
    botaoAbrirCarrinho.addEventListener("click", abrirCarrinho);
}


function removerDoCarrinho(idProduto) {
    delete idsProdutoCarrinhoComQuantidade[idProduto];
    salvarLocalStorage("carrinho", idsProdutoCarrinhoComQuantidade);
    atualizarPrecoNoCarrinho();
    renderizarProdutosCarrinho();
}

function incrementarQuantidadeProduto(idProduto) {
    idsProdutoCarrinhoComQuantidade[idProduto]++;
    salvarLocalStorage("carrinho", idsProdutoCarrinhoComQuantidade);
    atualizarPrecoNoCarrinho();
    atualizarInformacaoQuantidade(idProduto);
}

function decrementarQuantidadeProduto(idProduto) {
    if (idsProdutoCarrinhoComQuantidade[idProduto] === 1){
        removerDoCarrinho(idProduto);
        return;
    }

    idsProdutoCarrinhoComQuantidade[idProduto]--;
    salvarLocalStorage("carrinho", idsProdutoCarrinhoComQuantidade);
    atualizarPrecoNoCarrinho();
    atualizarInformacaoQuantidade(idProduto);
}

function atualizarInformacaoQuantidade(idProduto) {
    document.getElementById(`quantidade-${idProduto}`).innerText = idsProdutoCarrinhoComQuantidade[idProduto];
}

function desenharProdutoNoCarrinho(idProduto) {
    const produto = catalogo.find((p) => p.id === idProduto)

    const elementoArticle = document.createElement("article")
    elementoArticle.classList.add('produto-carrinho') 
    const cartaoDoProduto = `
        <button id="remover-item-${produto.id}" class="remover-produto">
             <i class="fa-solid fa-circle-xmark"></i>
        </button>
        <img src="imagens/${produto.nomeArquivoImg}" alt="${produto.nome}">
        <div class="info-produto">
            <p>${produto.nome}</p>
            <p>Tamanho: M</p>
            <p id="preco">R$${produto.preco}</p>
        </div>
        <div class="botoes-produto">
            <button id="decrementar-produto-${produto.id}">-</button>
            <p id="quantidade-${produto.id}">${idsProdutoCarrinhoComQuantidade[produto.id]}</p>
            <button id="incrementar-produto-${produto.id}">+</button>
        </div>`;

    elementoArticle.innerHTML = cartaoDoProduto
    document.getElementById("produtos-do-carrinho").appendChild(elementoArticle)

    document.getElementById(`decrementar-produto-${produto.id}`).addEventListener('click', () => decrementarQuantidadeProduto(produto.id))

    document.getElementById(`incrementar-produto-${produto.id}`).addEventListener('click', () => incrementarQuantidadeProduto(produto.id))

    document.getElementById(`remover-item-${produto.id}`).addEventListener('click', () => removerDoCarrinho(produto.id))
}

export function renderizarProdutosCarrinho() {
    const containerProdutosCarrinho = document.getElementById("produtos-do-carrinho")
    containerProdutosCarrinho.innerHTML = ""

    for (const idProduto in idsProdutoCarrinhoComQuantidade) {
        desenharProdutoNoCarrinho(idProduto)
    }
}

export function adicionarAoCarrinho(idProduto) {
    if (idProduto in idsProdutoCarrinhoComQuantidade) {
        incrementarQuantidadeProduto(idProduto);
        return;
    }
    idsProdutoCarrinhoComQuantidade[idProduto] = 1
    desenharProdutoNoCarrinho(idProduto);
    salvarLocalStorage("carrinho", idsProdutoCarrinhoComQuantidade);
    atualizarPrecoNoCarrinho();
} 

export function atualizarPrecoNoCarrinho() {
    const precoCarrinho = document.getElementById("preco-total")
    let precoTotalCarrinho = 0
    for (const idProdutoNoCarrinho in idsProdutoCarrinhoComQuantidade) {
        precoTotalCarrinho += catalogo.find((p) => p.id === idProdutoNoCarrinho).preco * idsProdutoCarrinhoComQuantidade[idProdutoNoCarrinho]
    }
    precoCarrinho.innerText = `Total: R$${precoTotalCarrinho}`
}