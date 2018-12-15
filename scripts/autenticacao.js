var produtos [];

//colocar a url
fetch().then(response => response.json()).then(promise => alunos = promise);

function singOut(){
	var auth2 = gapi.auth2.getAuthInstance();
	auth2.singOut().then(function() {
		console.logo('User signed out.');

	})catch(response => alert(response));
}

function onLoad(){
	gapi.load('auth2', function() {
		gapi.auth2.init().then(() => verifica_login(window.location.href))/

	})

}
//saber o q fiz aqui
function verifica_login(url){
	if(url.includes("/admin")){
		verifica_login_admin();
	}

	else if(url.includes("/usuario"))
		if(url.includes("/front end/paginaUsuario.html")){
			verifica_login_usuario(false);
		}else{
			verifica_login_usuario(true);
		}
}