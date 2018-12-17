import renderCardProduto from "/Componentes/CardProduto.js";

function carregaProdutos() {

    const nomeProduto = localStorage.getItem("produto");

    let produtos = [];

    fetch('https://whispering-ocean-74723.herokuapp.com/product/')
    .then(function (response) {
        return response.json();
    })
    .then(function (res) {
        produtos = res.filter(e => e.name.toLowerCase().indexOf(nomeProduto.toLowerCase()) != -1);
        
        let produto = "";
        produtos.forEach(element => {
            let name = element.name;
            let company = element.company;
            let status = element.status;
            let price = element.price

            produto += renderCardProduto(name, company, status, price, true);
        });
    
        document.getElementById("listagem").innerHTML = produto;
    });
}

carregaProdutos();