let listaProdutos = [{
    img: './assets/img/actions/animewoman.jpg',
    nome: 'Menina Anime',
    preco: 170,
    type: 'personagem',
}, {
    img: './assets/img/painting/clock.jpg',
    nome: 'Smart Watch',
    preco: 510.37,
    type: 'tecnologia',
}, {
    img: './assets/img/painting/gamepad.jpg',
    nome: 'Controle Ps4',
    preco: 99.70,
    type: 'tecnologia',
}, {
    img: './assets/img/actions/dragonballpersonagem.jpg',
    nome: 'GOKU SS',
    preco: 130,
    type: 'personagem',
}, {
    img: './assets/img/painting/personagem.jpg',
    nome: 'Homem de Lata',
    preco: 230,
    type: 'personagem',
}, {
    img: './assets/img/actions/starwarspersonagem.jpg',
    nome: 'Yoda',
    preco: 77,
    type: 'personagem',
}, {
    img: './assets/img/painting/cameraSegurança.jpg',
    nome: 'Camera Wifi',
    preco: 250,
    type: 'tecnologia',
}, {
    img: './assets/img/painting/celular.webp',
    nome: 'Celular',
    preco: 930,
    type: 'tecnologia',
}, {
    img: './assets/img/painting/headsetsimples.webp',
    nome: 'Headset',
    preco: 270,
    type: 'tecnologia',
}, {
    img: './assets/img/painting/micMesa.webp',
    nome: 'Microfone de Mesa',
    preco: 330,
    type: 'tecnologia',
}, {
    img: './assets/img/painting/notebook.jpg',
    nome: 'Notebook',
    preco: 2300,
    type: 'tecnologia',
}, {
    img: './assets/img/painting/tablet.webp',
    nome: 'Tablet',
    preco: 780,
    type: 'tecnologia',
}, {
    img: './assets/img/painting/tecladomouseSemfio.jpg',
    nome: 'Kit sem Fio',
    preco: 130,
    type: 'tecnologia',
}, {
    img: './assets/img/painting/tecladoRGB.webp',
    nome: 'Teclado Mecanico',
    preco: 390,
    type: 'tecnologia',
}]

let titulo = ""
let listaPersonagens = document.getElementById('lista_personagens')
let listaTecnologia = document.getElementById('lista_tecnologia')
let product = {}

let nomeProduto = ''
let imgProduto = ''
let precoProduto = ''
let tipoProduto = ''

function criarLista() {
    for (let i = 0; i < listaProdutos.length; i++) {
        tipoProduto = listaProdutos[i].type
        if (tipoProduto == "personagem") {
            titulo = document.getElementById('titulo_personagens')
            titulo.innerText = "Lista de Personagens"
        } else if (tipoProduto == "tecnologia") {
            titulo = document.getElementById('titulo_tecnologia')
            titulo.innerText = "Lista de Tecnologia"
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

    product = document.createElement('li')
    listaPersonagens.appendChild(product)

    let div = document.createElement('div')
    let img = document.createElement('img')
    img.src = imgProduto
    img.alt = `foto do item: "${nomeProduto}"`
    let nome = document.createElement("h3")
    nome.innerText = nomeProduto
    let preco = document.createElement("p")
    preco.innerText = `Valor: R$ ${precoProduto.toFixed(2)}`

    product.appendChild(div)
    div.appendChild(img)
    product.appendChild(nome)
    product.appendChild(preco)
}

function adicionaTecnologia(i) {
    nomeProduto = listaProdutos[i].nome
    imgProduto = listaProdutos[i].img
    precoProduto = listaProdutos[i].preco

    product = document.createElement('li')
    listaTecnologia.appendChild(product)


    let div = document.createElement('div')
    let img = document.createElement('img')
    img.src = imgProduto
    img.alt = `foto do item: "${nomeProduto}"`
    let nome = document.createElement("h3")
    nome.innerText = nomeProduto
    let preco = document.createElement("p")
    preco.innerText = `Valor: R$ ${precoProduto.toFixed(2)}`

    product.appendChild(div)
    div.appendChild(img)
    product.appendChild(nome)
    product.appendChild(preco)
}

classificarItens()