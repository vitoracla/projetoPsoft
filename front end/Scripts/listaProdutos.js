carregaProdutos();

function carregaProdutos() {
    const nomeProduto = localStorage.getItem("produto");
    var produtos = [];

    produtos.push(



       /* {
            produto: "vitor",
            validade: "14/12/53",
            fabricante:"asdfsd",
            categoria: "higiente"}
        */
    );
    // pegar o link do back 
    /*fetch('  link do back')
        .then(function (response) {
            return response.json();
        })
        .then(function (res) {
            produtos =
        });*/

        produto = "";
        produtos.forEach(element => {
           produto += "<div>";
            produto +=`<p>Nome do Produto: </p> ${element.nome}`;
            produto += `<p>Codigo de barra: </p>${element.barcode}`;
            produto += `<p>Fabricante: </p>${element.company}`;
            produto += `<p>Categora: </p>${element.category}`;
        produto += "</div>";
       
        });
        document.getElementById("listagem").innerHTML = produto;

}

//nome, barcode, company, category, status