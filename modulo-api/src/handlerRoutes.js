const router = require("./routes");


const handler = (request, response) => {
    const method = request.method;
    const url = request.url

    // com o Metodo Split("/").filter(Boolean) ele pecorre tudo que tem antes e depois do / e cria um array com essas informações
    // o uso do filter á para o split pegar o que só tem valor entre a /
    const urlSplit = url.split("/").filter(Boolean);

    // Busque as rotas que comecem por urlSplit[0] /users
    //E
    //Busque as rotas que sejam do metodo method
    const resultRouter = router.filter(item => {
        return (
            item.method.toLocaleLowerCase() === method.toLocaleLowerCase() &&
            item.url.toLocaleLowerCase().startsWith(`/${urlSplit[0].toLocaleLowerCase()}`)
        )
    })

    const executeRouter = resultRouter.find((item) => {
        const routeUrlSplit = item.url.split("/").filter(Boolean);
        return urlSplit.length === routeUrlSplit.length        
    })

    return executeRouter.controller(request, response)
}


module.exports = handler