import cardProduto from "../Scripts/Componentes/CardProduto.js";

carregarProduto();


function carregarProduto(){
    

    const produtoNome = localStorage.getItem("produtoNome");


    document.getElementById("produto").innerHTML = cardProduto(produtoNome,produto.company,produto.status,produto.price,false);
}