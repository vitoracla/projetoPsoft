lista_de_produtos = []
produto = new vue({
	el: '#cadastraProduto',
	data:{
		nome: "",
		codigoDeBarra: "",
		fabricante: "",
		categoria:"",
	},

	methods: {
		validaProduto: function(){
			if(this.nome = "" || this.codigoDeBarra = "" || this.fabricante = "" || this.categoria= ""){
				alert("Cadastro nao concluido")
			}else{
				alert("Cadastro concluido")
			}
		

		}
	}
})


var produtos = new Vue({
	el: '#produtos',
	data:{
		aux = [],
		produtos: getProdutos()
	}
})

function getProduto(nome){
	// pegar a url com o back(diego)
	fetch()
}

function carregaProduto(todos, nome){
	produtoAtual = todos.filter(e => e.nome == nome)[0];
	produto.nome = produtoAtual.nome;

}

function cadastraProduto(categoria, nome){
	produto = {};
	produto.categoria = categoria;
	produto.nome = nome;

	// o que é isso ?????
	var user = gapi.auth2.getAuthInstance().currentUser.Ab.w3;
	nome = user.ig;
	postaProduto(produto);
}	
	//atualizar a lista de protudos
function getProdutos(){ 
	const produto = document.getElementById("produto");
	localStorage.setItem("produto",produto.value);

	console.log(localStorage.getItem("produto"));

	// pegar o url com o back(diego)
	fetch()({
	produtos.produtos = promise;
	console.log(produtos);
}).catch(() => getProdutos())

}

function postaProduto(produto){
	fetch( ,{
		headers: {
			'content-Type': 'application/json'
		},
		method: "POST", body: JSON.stringify(produto)}).then(response => response.json()).then(response => console.log(response));

	}
	//colocar a url
	fetch().then(response => response.json()), then(function(promise){
		console.log(promise);
		console.log(produtos);
	})

