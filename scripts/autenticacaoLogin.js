$userLogin = document.getElementById("Usuario");
$userPassword = document.getElementById("Senha");
$admin = document.getElementById("sim");
$regular = document.getElementById("nao");

function validate(fullUser){
	let password = fullUser.password;
	let isAdmin = fullUser.isAdmin;

	if (password === maybePassword){
		if (isAdmin && $admin.checked){
			localStorage.setItem("userName", fullUser.name);
			localStorage.setItem("userLogin", fullUser.login);
			localStorage.setItem("userPassword", password);
			window.location.href = "paginaAdm.html";
		} else {
			if (!isAdmin && $regular.checked){
				localStorage.setItem("userName", fullUser.name);
				localStorage.setItem("userLogin", fullUser.login);
				localStorage.setItem("userPassword", password);
				window.location.href = "paginaUsuario.html";
			} else {
				alert("Tipo de conta não confere");
			}
		}
	} else {
		alert("Nome de usuário ou senha inválidos");
	}
}

function login(){
	let login = $userLogin.value;
	let maybePassword = $userPassword.value;

	let requestBody = {
		"login":login,
		"password":maybePassword
	};
	
	fetch("https://whispering-ocean-74723.herokuapp.com/user/login/", {method:"GET", body:requestBody})
	.then(function(response){
		return response.json();
	})
	.then(function(fullUser){
		validate(fullUser);
	});
}