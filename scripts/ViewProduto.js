import cardProduto from "../Scripts/Componentes/CardProduto.js";

carregarProduto();


function carregarProduto(){
    

    const produtoNome = localStorage.getItem("produtoNome");
    const produtoCompany = localStorage.getItem("produtoCompany");
    const produtoStatus = localStorage.getItem("produtoStatus");
    const produtoPrice = localStorage.getItem("produtoPrice");



    document.getElementById("produto").innerHTML = cardProduto(produtoNome,produtoCompany,produtoStatus,produtoPrice,false);
}