$userLogin = document.getElementById("Usuario");
$userPassword = document.getElementById("Senha");
$userName = document.getElementById("Nome");

function register(){
    let login = $userLogin.value;
    let name = $userName.value;
	let password = $userPassword.value;

	let requestBody = {
        "name":name,
        "login":login,
		"password":password
	};
	
	fetch("https://whispering-ocean-74723.herokuapp.com/user/login/", {method:"POST", body:requestBody})
	.then(function(response){
		return response.status;
    })
    .then(function(status){
        if (status == 200){
            alert("Cadastro bem sucedido");
            window.location.href = "views/paginaInicial.html"
        } else {
            alert("Ocorreu um erro. Tente novamente");
        }
    });
}