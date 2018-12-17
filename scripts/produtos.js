
function buscaProduto(){ 
	const produto = document.getElementById("produto");

	if(produto.value === "" ){
		alert("Informe o nome do produto");
	}else{
	localStorage.setItem("produto",produto.value);

	window.location.href = "views/ListaProdutos.html";
	}
}
