import { catalogo } from "./ultilidades.js";

function abrirCarrinho() {
    
    document.getElementById("carrinho").style.right = '0px'
    document.getElementById("carrinho").style.removeProperty('rigth');
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

export function adicionarAoCarrinho(idProduto) {
    const produto = catalogo.find((p) => p.id === idProduto)
    const cartaoDoProduto = `<article class="produto-carrinho">
    <button id="remover-produto"><i class="fa-solid fa-circle-xmark"></i></button>
    <img src="imagens/${produto.nomeArquivoImg}" alt="${produto.nome}">
    <div>
        <p>${produto.nome}</p>
        <p>Tamanho: M</p>
        <p id="preco">R$${produto.preco}</p>
    </div>
</article>`;
    document.getElementById("produtos-do-carrinho").innerHTML += cartaoDoProduto
} 