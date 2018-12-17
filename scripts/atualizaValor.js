$barcode = document.getElementById("CodigoBarrasProduto");
$newPrice = document.getElementById("valor");

function update(){
    let userLogin = localStorage.getItem("userLogin");
    let userPassword = localStorage.getItem("userPassword");
    let newPrice = $newPrice.value;
    let barcode = $barcode.value;

    let requestBody = {
        "user":{
            "login":userLogin,
            "password":userPassword
        },
        "data":{
            "barcode":barcode,
            "price":newPrice
        }
    }

    fetch("https://whispering-ocean-74723.herokuapp.com/product/change_price/", {method:"PATCH", body:requestBody})
    .then(function(response){
        return response.status;
    })
    .then(function(status){
        if (status == 200){
            alert("Produto atualizado com sucesso!");
            window.location.href = "views/paginaAdm.html";
        } else {
            if (status == 400){
                alert("Produto não encontrado. Tente novamente");
            }
        }
    });
}