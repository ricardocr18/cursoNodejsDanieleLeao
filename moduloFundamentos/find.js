// FIND pecorre o Array para encontrar alguma coisa, no caso o primeira coisa que encontrar

const usuarios = [
    {id: 1, nome: "Maria", idade: 20},
    {id: 2, nome: "José", idade: 19},
    {id: 3, nome: "Pedro", idade: 18},
    {id: 4, nome: "João", idade: 19},
    {id: 5, nome: "Antonio", idade: 18},
]

console.log({usuarios})

const result = usuarios.find((usuario)=>{
    return usuario.idade == 18
})

console.log(result)