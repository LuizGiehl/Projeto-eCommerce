import { lerLocalStorage, desenharProdutoCarrinhoSimples } from "./src/ultilidades.js";

function criarPedidoHistorico(pedidoComData) {
    const elementoPedido = `<p class="data">${new Date(pedidoComData.dataPedido).toLocaleDateString('pt-BR', {hour: "2-digit", minute: "2-digit"})}</p>
    <section id="container-pedidos-${pedidoComData.dataPedido}" class="container-de-pedidos"></section>
    `
    const main = document.getElementsByTagName("main")[0]
    main.innerHTML += elementoPedido

    for(const idProduto in pedidoComData.pedido) {
        desenharProdutoCarrinhoSimples(idProduto, `container-pedidos-${pedidoComData.dataPedido}`, pedidoComData.pedido[idProduto])
    }
}

function rederizarHistoricoPedidos() {
    const historico = lerLocalStorage("historico")
    for(const pedidoComData of historico) {
        criarPedidoHistorico(pedidoComData)
    }
}

rederizarHistoricoPedidos();