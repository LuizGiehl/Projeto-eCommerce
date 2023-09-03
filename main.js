import { inicializarCarrinho } from "./src/carrinho.js"

const catalogo = [
    {
        id: 1,
        nome: "Regata Minimalist Army",
        marca: "Army",
        preco: 109,
        nomeArquivoImg: "product-01.webp"
    },
    {
        id: 2,
        nome: "Camiseta Cotton RD Experience",
        marca: "Army",
        preco: 139,
        nomeArquivoImg: "product-02.webp"
    },
    {
        id: 3,
        nome: "Jaqueta Athleisure Armybr",
        marca: "Army",
        preco: 299,
        nomeArquivoImg: "product-03.webp"
    },
    {
        id: 4,
        nome: "Camiseta Cotton Tag Army",
        marca: "Army",
        preco: 139,
        nomeArquivoImg: "product-04.webp"
    },
    {
        id: 5,
        nome: "Blusão Premium Winter Oversized",
        marca: "Army",
        preco: 290,
        nomeArquivoImg: "product-05.webp"
    },
    {
        id: 6,
        nome: "Calça Athleisure Armybr",
        marca: "Army",
        preco: 259,
        nomeArquivoImg: "product-06.webp"
    },
    {
        id: 7,
        nome: "Calça Jogger Armybr",
        marca: "Army",
        preco: 209,
        nomeArquivoImg: "product-07.jpg"
    },
    {
        id: 8,
        nome: "Camiseta Camo Soldier Black Ops",
        marca: "Army",
        preco: 139,
        nomeArquivoImg: "product-08.webp"
    }
]

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

inicializarCarrinho();