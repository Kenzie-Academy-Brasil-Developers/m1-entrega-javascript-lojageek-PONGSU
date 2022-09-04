let listaProdutos = [{
    img: './assets/img/moveis/aparador c 3.jpg',
    nome: 'Aparador 3 andares',
    dimensoes: '50 cm x 30 cm x 60 cm',
    preco: 167,
    id: 01,
    codProduto: "Código do produto: 01",
    type: 'tecnologia',
},{
    img: './assets/img/moveis/Armario 3 partes, 2 araras.jpg',
    nome: 'Armario Maior 3 seções',
    dimensoes: '140 cm x 31.5 cm x 170 cm',
    preco: 300,
    id: 02,
    codProduto: "Código do produto: 02",
    type: 'tecnologia',
},{
    img: './assets/img/moveis/Cabideiro menor 4 prateleiras.jpg',
    nome: 'Cabideiro e 4 Prateleiras',
    dimensoes: '170 cm x 82 cm x 32cm',
    preco: 230,
    id: 03,
    codProduto: "Código do produto: 03",
    type: 'tecnologia',
},{
    img: './assets/img/moveis/Estante Flutuante.jpg',
    nome: 'Estante Flutuante',
    dimensoes: '28 cm x 50 cm x 132 cm',
    preco: 179,
    id: 04,
    codProduto: "Código do produto: 04",
    type: 'tecnologia',
},{
    img: './assets/img/moveis/Floreira.jpg',
    nome: 'Floreira',
    dimensoes: '70 cm x 55cm x 16cm',
    preco: 185,
    id: 05,
    codProduto: "Código do produto: 05",
    type: 'tecnologia',
},{
    img: './assets/img/moveis/Prateleira c 6 - 03.jpg',
    nome: 'Prateleira 6 andares',
    dimensoes: '90.2 cm x 33.5 cm x 170 cm',
    preco: 250,
    id: 06,
    codProduto: "Código do produto: 06",
    type: 'tecnologia',
},{
    img: './assets/img/moveis/Prateleira c 6 menor 02.jpg',
    nome: 'Prateleira 6 andares menor',
    dimensoes: '50 cm x 30 cm x 140 cm',
    preco: 190,
    id: 07,
    codProduto: "Código do produto: 07",
    type: 'tecnologia',
},{
    img: './assets/img/moveis/Prateleira C ferro.jpg',
    nome: 'Prateleira Estrutura de Ferro',
    dimensoes: '60cm x 44cm x 12cm',
    preco: 280,
    id: 08,
    codProduto: "Código do produto: 08",
    type: 'tecnologia',
},{
    img: './assets/img/moveis/Prateleira c Tabua preta.jpg',
    nome: 'Prateleira Tabua Preta',
    dimensoes: 'Suportes 61x19cm & Tabua 60x15cm',
    preco: 250,
    id: 09,
    codProduto: "Código do produto: 09",
    type: 'tecnologia',
},{
    img: './assets/img/moveis/sapateira.jpg',
    nome: 'Banco e Sapateira',
    dimensoes: '30 cm x 40 cm x 70 cm',
    preco: 177,
    id: 10,
    codProduto: "Código do produto: 10",
    type: 'tecnologia',
},{
    img: './assets/img/promoção.jpg',
    nome: 'Entrego grátis em Lumiar (raio de 2km do centro) Outros lugares a combinar',         
    dimensoes: 'Montagem é simples mas caso solicite é cobrado 25 reais para uma unidade, 40 para duas e a partir de 3 unidades: Montagem grátis!',
    preco: 'Promoção levando 2 vc ganha 15 reais de desconto e mais 10 reais de desconto a cada produto depois do segundo',
    codProduto: "",
    type: 'personagem',
}]

let titulo = ""
let listaPersonagens = document.getElementById('lista_personagens')
let listaTecnologia = document.getElementById('lista_tecnologia')
let product = {}
let nomeProduto = ''
let imgProduto = ''
let precoProduto = ''
let tipoProduto = ''
let dimensoesProduto = ''
let codigoProduto = ''


function criarLista() {
    for (let i = 0; i < listaProdutos.length; i++) {
        tipoProduto = listaProdutos[i].type
        if (tipoProduto == "personagem") {
            titulo = document.getElementById('titulo_personagens')
            titulo.innerText = "PROMOÇÂO !"
        } else if (tipoProduto == "tecnologia") {
            titulo = document.getElementById('titulo_tecnologia')
            titulo.innerText = "Moveis de Madeira Reflorestada"
        }
    }
}

function classificarItens(params) {
    criarLista()
    for (let i = 0; i < listaProdutos.length; i++) {
        tipoProduto = listaProdutos[i].type
        if (tipoProduto == "personagem") {
            adicionaPersonagem(i)
        } else if (tipoProduto == "tecnologia") {
            adicionaTecnologia(i)
        }
    }
}

function adicionaPersonagem(i) {
    nomeProduto = listaProdutos[i].nome
    imgProduto = listaProdutos[i].img
    precoProduto = listaProdutos[i].preco
    dimensoesProduto = listaProdutos[i].dimensoes

    product = document.createElement('li')
    listaPersonagens.appendChild(product)

    let div = document.createElement('div')
    let img = document.createElement('img')
    img.src = imgProduto
    img.alt = `foto do item: "${nomeProduto}"`
    let nome = document.createElement("h5")
    nome.innerText = nomeProduto
    let dimensoes = document.createElement("h5")
    dimensoes.innerText = dimensoesProduto
    let preco = document.createElement("h5")
    preco.innerText = precoProduto

    product.appendChild(div)
    div.appendChild(img)
    product.appendChild(nome)
    product.appendChild(dimensoes)
    product.appendChild(preco)
}
function adicionaTecnologia(i) {
    nomeProduto = listaProdutos[i].nome
    imgProduto = listaProdutos[i].img
    precoProduto = listaProdutos[i].preco
    dimensoesProduto = listaProdutos[i].dimensoes
    codigoProduto = listaProdutos[i].codProduto

    product = document.createElement('li')
    listaTecnologia.appendChild(product)


    let div = document.createElement('div')
    let img = document.createElement('img')
    img.src = imgProduto
    img.alt = `foto do item: "${nomeProduto}"`
    let nome = document.createElement("h3")
    nome.innerText = nomeProduto
    let dimensoes = document.createElement("h4")
    dimensoes.innerText = dimensoesProduto
    let preco = document.createElement("p")
    preco.innerText = `R$ ${precoProduto.toFixed(2)}`
    let codigo = document.createElement("h6")
    codigo.innerText = codigoProduto

    product.appendChild(div)
    div.appendChild(img)
    product.appendChild(nome)
    product.appendChild(dimensoes)
    product.appendChild(preco)
    product.appendChild(codigo)
}

classificarItens()