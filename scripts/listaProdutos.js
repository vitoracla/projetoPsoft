import cardProduto from "../Scripts/Componentes/CardProduto.js";


carregaProdutos();

function carregaProdutos() {
    const nomeProduto = localStorage.getItem("produto");
    var produtos = [];

    produtos.push(

        {
            name: "Sabonete",
            status : "available",
            price : '199,98',
            barcode: "12345678",
            company: "Bayer",
            category: "higiente"
        }

    );
    produtos.push(

        {
            name: "Paracetamol",
            status : "available",
            price : '250,67',
            barcode: "123456789",
            company: "Bayer",
            category: "higiente"
        }

    );

    produtos.push(

        {
            name: "Paracetamol",
            status : "unavailable",
            price : '250,67',
            barcode: "123456789",
            company: "Bayer",
            category: "higiente"
        }

    );

    produtos.push(

        {
            name: "Paracetamol",
            status : "unavailable",
            price : '250,67',
            barcode: "123456789",
            company: "Bayer",
            category: "higiente"
        }

    );
    produtos.push(

        {
            name: "Paracetamol",
            status : "unavailable",
            price : '250,67',
            barcode: "123456789",
            company: "Bayer",
            category: "higiente"
        }

    );
    produtos.push(

        {
            name: "Paracetamol",
            status : "unavailable",
            price : '250,67',
            barcode: "123456789",
            company: "Bayer",
            category: "higiente"
        }

    );
    produtos.push(

        {
            name: "Paracetamol",
            status : "unavailable",
            price : '250,67',
            barcode: "123456789",
            company: "Bayer",
            category: "higiente"
        }

    );

    produtos.push(

        {
            name: "Paracetamol",
            status : "unavailable",
            price : '250,67',
            barcode: "123456789",
            company: "Bayer",
            category: "higiente"
        }

    );
    produtos.push(

        {
            name: "Paracetamol",
            status : "unavailable",
            price : '250,67',
            barcode: "123456789",
            company: "Bayer",
            category: "higiente"
        }

    );
    produtos.push(

        {
            name: "Paracetamol",
            status : "unavailable",
            price : '250,67',
            barcode: "123456789",
            company: "Bayer",
            category: "higiente"
        }

    );
  
    // pegar o link do back 
    /*fetch('  link do back')
        .then(function (response) {
            return response.json();
        })
        .then(function (res) {
            produtos =
        });*/

    var produto = "";
    produtos.forEach(element => {

        const name = element.name;
        const company = element.company;
        const status = element.status;
        const price = element.price

        produto += cardProduto(name,company,status,price,true);

        
   

    });
    document.getElementById("listagem").innerHTML = produto;

}




//nome, barcode, company, category, status