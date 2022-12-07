// O filter mostra o resultado que está na condição, posso passar qualquer consição

const usuarios = [
    {id: 1, nome: "Maria", idade: 20},
    {id: 2, nome: "José", idade: 19},
    {id: 3, nome: "Pedro", idade: 18},
    {id: 4, nome: "João", idade: 19},
    {id: 5, nome: "Antonio", idade: 18},
]

const result = usuarios.filter((usuario) => {
    return usuario.idade == 18 || usuario.idade == 20
})

console.log(result)