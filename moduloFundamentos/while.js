// while - Enquanto a condição for verdadeira
let dinheiro = 1000

//Aqui só usamos o while e está funcionando, apenas está comentada
// while (dinheiro > 0){
//     console.log("Eu posso gastar, tenho" + dinheiro + "reais")
//     dinheiro = dinheiro -100;
// }

// console.log("Acabou o seu dinehri" + dinheiro);


// Aqui usamos o Do / While
do {
    console.log("Eu posso gastar, tenho" + dinheiro + "reais");
    dinheiro = dinheiro - 100;
}while (dinheiro > 0);
console.log("Acabou o seu dinheiro"+ dinheiro)