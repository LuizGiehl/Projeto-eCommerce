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

export function adicionarAoCarrinho() {
    const cartaoDoProduto = `<article class="produto-carrinho">
    <button id="remover-produto"><i class="fa-solid fa-circle-xmark"></i></button>
    <img src="imagens/product-02.webp" alt="produto 2">
    <div>
        <p>Camiseta Cotton RD Experience</p>
        <p>Tamanho: M</p>
        <p id="preco">R$139</p>
    </div>
</article>`;
    document.getElementById("produtos-do-carrinho").innerHTML += cartaoDoProduto
} 