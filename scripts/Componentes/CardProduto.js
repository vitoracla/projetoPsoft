export default function renderCardProduto(name, company, status, price) {

    var produto = "";
    produto += '<li class = "produtoCard">';
    produto += '<div class = "produtoItens">';
    produto += (status == "available") ? `<p class = "disponivel">Disponível </p>` 
    : `<p class = "indisponivel">Indisponível </p>`;
    produto += `<b> <span class = "itemTitulo"> ${name} </span> </b>`;
    produto += `<p class = ""> <span class = "itemCompany"> ${company} </span> </p>`;
    if (status == 'available')
        produto += `<p><span class = "itemValor"> R$ ${price} </span> </p>`;
    produto += "</div>";
    produto += "</li>";

    return produto;
}