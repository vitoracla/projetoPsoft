const $barcodeRegisterLot = document.getElementById("CodigoDeBarra");
const $amount = document.getElementById("qntItens");
const $shelfLife = document.getElementById("dataValidade");

function registerProduct(){
    let userLogin = localStorage.getItem("userLogin");
    let userPassword = localStorage.getItem("userPassword");
    let barcode = $barcodeRegisterLot.value;
    let amount = $amount.value;
    let shelfLife = $shelfLife.value;

        let requestBody = {
            "user":{
                "login":userLogin,
                "password":userPassword
            },
            "data":{
                "name":name,
                "barcode":barcode,
                "company":company,
                "category":actualCategory,
                "status":"unavailable"
            }
        }
    
        fetch("https://whispering-ocean-74723.herokuapp.com/product/change_price/", {method:"PATCH", body:requestBody})
        .then(function(response){
            return response.status;
        })
        .then(function(status){
            if (status == 200){
                alert("Produto cadastrado com sucesso!");
                window.location.href = "views/paginaAdm.html";
            } else {
                if (status == 400){
                    alert("Dados inválidos. Tente novamente");
                }
            }
        });

}