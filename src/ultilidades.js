 export const catalogo = [
    {
        id: "1",
        nome: "Regata Minimalist Army",
        marca: "Army",
        preco: 109,
        nomeArquivoImg: "product-01.webp",
        camiseta: false,
        calça: false,
        casaco: false,
        regata: true,
    },
    {
        id: "2",
        nome: "Camiseta Cotton RD Experience",
        marca: "Army",
        preco: 139,
        nomeArquivoImg: "product-02.webp",
        camiseta: true,
        calça: false,
        casaco: false,
        regata: false,
    },
    {
        id: "3",
        nome: "Jaqueta Athleisure Armybr",
        marca: "Army",
        preco: 299,
        nomeArquivoImg: "product-03.webp",
        camiseta: false,
        calça: false,
        casaco: true,
        regata: false,
    },
    {
        id: "4",
        nome: "Camiseta Cotton Tag Army",
        marca: "Army",
        preco: 139,
        nomeArquivoImg: "product-04.webp",
        camiseta: true,
        calça: false,
        casaco: false,
        regata: false,
    },
    {
        id: "5",
        nome: "Blusão Premium Winter Oversized",
        marca: "Army",
        preco: 290,
        nomeArquivoImg: "product-05.webp",
        camiseta: false,
        calça: false,
        casaco: true,
        regata: false,
    },
    {
        id: "6",
        nome: "Calça Athleisure Armybr",
        marca: "Army",
        preco: 259,
        nomeArquivoImg: "product-06.webp",
        camiseta: false,
        calça: true,
        casaco: false,
        regata: false,
    },
    {
        id: "7",
        nome: "Calça Jogger Armybr",
        marca: "Army",
        preco: 209,
        nomeArquivoImg: "product-07.jpg",
        camiseta: false,
        calça: true,
        casaco: false,
        regata: false,
    },
    {
        id: "8",
        nome: "Camiseta Camo Soldier Black Ops",
        marca: "Army",
        preco: 139,
        nomeArquivoImg: "product-08.webp",
        camiseta: true,
        calça: false,
        casaco: false,
        regata: false,
    }
]

export function salvarLocalStorage(chave, informacao) {
    localStorage.setItem(chave, JSON.stringify(informacao));
}

export function lerLocalStorage(chave) {
    return JSON.parse(localStorage.getItem(chave));
}

export function apagarDoLocalStorage(chave) {
    localStorage.removeItem(chave)
}

export function desenharProdutoCarrinhoSimples(idProduto, idContainerHtml, quantidadeProduto) {
    const produto = catalogo.find((p) => p.id === idProduto)
    const containerProdutosCarrinho = document.getElementById(idContainerHtml);

    const elementoArticle = document.createElement("article")
    elementoArticle.classList.add('produto-carrinho') 
    const cartaoDoProduto = `
        
        <img src="imagens/${produto.nomeArquivoImg}" alt="${produto.nome}" class="foto-produto">
        <div class="info-produto">
            <p>${produto.nome}</p>
            <p>Tamanho: M</p>
            <p id="preco">R$${produto.preco}</p>
        </div>
        <div class="botoes-produto">
            <p id="quantidade-${produto.id}">${quantidadeProduto}</p>
        </div>
        
        `;

    elementoArticle.innerHTML = cartaoDoProduto
    containerProdutosCarrinho.appendChild(elementoArticle)

}