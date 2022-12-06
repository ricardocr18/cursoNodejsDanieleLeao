// Na PROMISES, tem que passar dois objetos para ela resolve(é utilizado sempre que tiver sucesso) e o reject(sempre que tiver que retornar um erro)
// A async / await é executada dentro do escopo da função em completo

function aguardarSetTimeout() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //console.log("Segunda mensagem")
            resolve('Segunda mensagem')
            reject("Mensagem de erro")
        }, 1000);
    })
}

async function executar() {
try { //Aqui dentro do TRY tento executar e caso de Errado vou para o CATCH que descreve o erro, só está dando erro porque comentei a linha 8
    console.log('Primeira mensagem');

    const segundaMensagem = await aguardarSetTimeout();
    console.log(segundaMensagem)

    console.log('Terceira mensagem');
}catch(err){
    console.log(err)
}
}
executar()

// =====================
// AQUI vou usar o .then, aguarda dentro do escopo especifico
// =======================================================

// console.log('Primeira mensagem');

// aguardarSetTimeout().then((result) =>{
// console.log('Inicio');
// console.log(result)
// console.log('fim')
// }). catch((err) => console.log(err))

// console.log('Terceira mensagem');