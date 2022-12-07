// Quando utilizamos o MAP ele não muda a estrutura do array, apenas ele cria um novo array conforme nos manipulamos
const nomes = ['Marias', 'Ricardo', 'Zenilda', 'Tereza', 'Jorge', 'Fernando']

// Aqui está funcionando, só tirar o comentário e cuidado para não coledir as informações com o segundo bloco de códigos
// const result = nomes.map((nome) => {
//     return 'O nome do usuário é ' + nome
// })
// console.log(result)

const result = nomes.map((nome) => {
    return {
        nome: nome,
        descrição: 'O nome é ' + nome,
        id: Math.random().toFixed(2)
    }
})

console.log(result)