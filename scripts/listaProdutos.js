import cardProduto from "../Scripts/Componentes/CardProduto.js";

carregaProdutos();

function carregaProdutos() {
    const nomeProduto = localStorage.getItem("produto");

    var produtos = [];

    produtos.push(

        {
            name: "Sabonete",
            status: "available",
            price: '199,98',
            barcode: "12345678",
            company: "Bayer",
            category: "higiente"
        }

    );
    produtos.push(

        {
            name: "Paracetamol",
            status: "available",
            price: '250,67',
            barcode: "123456789",
            company: "Bayer",
            category: "higiente"
        }

    );

    produtos = produtos.filter(e => e.name.toLowerCase().indexOf(nomeProduto.toLowerCase()) != -1);


    /*
    fetch('https://whispering-ocean-74723.herokuapp.com/product/')
        .then(function (response) {
            return response.json();
        })
        .then(function (res) {
            produtos = res;
        });



*/

    var produto = "";
    produtos.forEach(element => {

        const name = element.name;
        const company = element.company;
        const status = element.status;
        const price = element.price

        produto += cardProduto(name, company, status, price, true);


    });
    document.getElementById("listagem").innerHTML = produto;

}

