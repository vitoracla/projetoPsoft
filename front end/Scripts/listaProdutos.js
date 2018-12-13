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
            produto +=`<p>Nome do Produto: </p> ${element.produto}`;
            produto += `<p>Validade: </p>${element.validade}`;
            produto += `<p>Fabricante: </p>${element.fabricante}`;
            produto += `<p>Categora: </p>${element.categoria}`;
        produto += "</div>";
       
        });
        document.getElementById("listagem").innerHTML = produto;

}