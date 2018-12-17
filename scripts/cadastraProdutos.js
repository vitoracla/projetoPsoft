const $productNameRegister = document.getElementById("NomeProduto");
const $barcodeRegister = document.getElementById("CodigoDeBarra");
const $companyRegister = document.getElementById("Fabricante");
const $categoryRegister = document.getElementById("Categoria");

function registerProduct(){
    let userLogin = localStorage.getItem("userLogin");
    let userPassword = localStorage.getItem("userPassword");
    let name = $productNameRegister.value;
    let barcode = $barcodeRegister.value;
    let company = $companyRegister.value;
    let categoryClass = $categoryRegister.options[$categoryRegister.selectedIndex].value;
    let actualCategory = "";
    
    if (categoryClass != ""){
        if (categoryClass === "medicamentos"){
            actualCategory = "medication";
        } else {
            if (categoryClass === "higienePessoal"){
                actualCategory = "toiletry";
            } else {
                if (categoryClass === "cosmeticos"){
                    actualCategory = "cosmetic";
                } else {
                    actualCategory = "food";
                }
            }
        }

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
    } else {
        alert("Escolha uma categoria");
    }

}