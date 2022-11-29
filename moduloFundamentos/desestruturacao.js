//Quando fazemos uma desestruturação de um objeto não mudamos a caracteristica do objeto raiz

let nome = "Raquel"

const pessoa ={
    nome: "Ricardo",
    idade: 46,
    CPF: "03512638708",
    instagram: "ricardocr18"
}

// const { nome } = pessoa; Aqui foi uma forma de desestruturar 
const {nome: nomeDaPEssoa} = pessoa //Aqui podemos usar a desestruturação usando o (Nome) mesmo ele sendo usado na linha 3
console.log(nome)
console.log(nomeDaPEssoa)