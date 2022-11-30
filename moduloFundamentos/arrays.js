const nomes = ['Marias', 'Ricardo', 'Zenilda', 'Tereza', 'Jorge', 'Fernando']
nomes.push('Bruno') // Aqui estou incluindo um dados ao Araay

console.log(nomes) //Aqui estou imprimindo i array

//splice - AQui remove os elementos
nomes.splice(0,2)
console.log(nomes)

//slice - Aqui crio um novo Array com os dados que gostaria de ter, também posso fazer o slice com variaveis
const novoArray = nomes.slice(0,3);
console.log(novoArray)