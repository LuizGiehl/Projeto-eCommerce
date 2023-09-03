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