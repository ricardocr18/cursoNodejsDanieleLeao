//new Object();
/**
 * Propriedade
 * Cor, Marca, Dimensao
 */

var caneta = new Object();
caneta.cor = "azul";
caneta.marca = "Bic";
caneta.dimensao = "6";

var canetaPreta = new Object();
canetaPreta.cor = "Preta";
canetaPreta.marca = "Bic";
canetaPreta.dimensao = "8";

//console.log(caneta);
//console.log({canetaPreta}); O bigode {} não é obrigatorio

/**
 * Crando criando função
 */

function Caneta(cor, marca, dimensao){
    this.cor = cor;
    this.marca = marca;
    this.dimensao = dimensao;
}

var novaCanetaPreta = new Caneta();
novaCanetaPreta.cor = "rosa";
novaCanetaPreta.marca = "bic";
novaCanetaPreta.dimensao = "10cm";

//console.log(novaCanetaPreta)

/**
 * Criar um objeto direto
 */

var novaCanetaRosa = {
    cor: "Rosa",
    marca: "Bic",
    dimensao: "8cm"
}

//console.log(novaCanetaRosa)

/**
 * Object.create()
 */

var prototipoCaneta = {
    cor: "Marron",
    marca: "Bic",
    dimensao: "10cm",
    imprimir(){
        console.log(this.cor, this.marca, this.dimensao)
    }
};

console.log(prototipoCaneta)

var novaCanetaComPrototipo = Object.create(prototipoCaneta);
novaCanetaComPrototipo.cor = "Verde";
novaCanetaComPrototipo.imprimir()

