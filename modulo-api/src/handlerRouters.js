const router = require("./routes");

const handler = (request, response) => {
    const method = request.method;  //aqui estarei recebendo o Metodo que pode ser pelo POSTMAN (POST, GET, PATH OU DELETE) e assim já agfego no METHOD 
    const url = request.url

    const urlSplit = url.split("/").filter(Boolean)

    //Busque as rotas que comecem por urlSplit[0] /users e Busque as rotas que sejam do metodo method
    const resultRoute = router.filter(item => {
        return (
            item.method.toLowerCase() === method.toLowerCase() &&
            item.url.toLowerCase().startsWith(`/${urlSplit[0].toLowerCase()}`)
        )
    })

    const executeRouter = resultRoute.find((item) => {
        const routeUrlSplit = item.url.split("/").filter(Boolean);
        return urlSplit.length === routeUrlSplit.length
    })

    //aqui se passarmos uma rota que não existe, o erro aparece na tela do Postman
    if (!executeRouter) {
        response.statusCode = 404;
        return response.end('Not Found');
    }


    const routerSplitUrl = executeRouter.url.split('/').filter(Boolean);
    const objParams = {}

    routerSplitUrl.forEach((item, index) => {
        if (item.startsWith(':')) {
            const formatField = item.replace(':', ''); //Aqui estou removendo os : e colocando o restante da informação dentro do ormatField
            objParams[formatField] = urlSplit[index]
        }
    })

    request.on("data", (data) => {
        const body = JSON.parse(data);

        request.body = body
    }).on('end', () => {
        request.params = objParams;
        return executeRouter.controller(request, response)
    })


}

module.exports = handler;