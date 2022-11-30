// REST SPRED OPERATOR (...), espalhar dados e não muda o Objeto raiz

//Aqui são exemplos do SPRED
const aluno = {
    nome: "Bruno",
    idade: 06,
    cursos : ['NodeJs', 'SQL', 'Docker']
}
//console.log({aluno}) //Esse console.log está funcioanando, basta tirar o comentário dele


const alunoAtualizado ={
    ...aluno,
    idade: 20,
    cursos: [...aluno.cursos, 'Java'] //Aqui estou colocando o curso Java dentro do curso
}

// console.log({alunoAtualizado}) Esse console.log está funcioanando, basta tirar o comentário dele

//AQUI SÃO EXEMPLOS DO REST ...
const {nome, idade, ...resto} = aluno
console.log(idade)

//Aqui estou fazendo com um ARRAY
const nomes = ['Ricardo', 'Zenilda', 'Jorge', 'Fernand0']
const [primeiro, ...restoNomes] = nomes
console.log(restoNomes)