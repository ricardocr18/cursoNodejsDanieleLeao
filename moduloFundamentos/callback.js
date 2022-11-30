// busca os dados do usuário 
// Chamar uma função pra validar idade do usuário

function buscarUsuario(callback){
    const usuario = {
        id: 1,
        nome: "Zenilda",
        idade: 15
    };
    callback(usuario)
}

function calcularIdade(usuario){
    if (usuario.idade >= 18){
        console.log("usuário maior de idade")
    } else {
        console.log('usuário menor de idade')
    }
}

buscarUsuario(calcularIdade)