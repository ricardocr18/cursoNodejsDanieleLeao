// Rotas criadas só com GET e informações passadas pelo browser, Não tem nenhuma depedencia

const http = require('http');

const server = http.createServer((request, response) =>{

    console.log(request.url)

    if(request.url === '/minhaPrimeiraRota'){
        const result = {
            message: 'Minha primeira Rota Feita'
        }
    
        //qui passo informar o usuário o sucesso do processo colocando 200 no StatusCode ou 500 para informar algum problema
        response.statusCode = 200;
        response.setHeader("Content-type", 'application/json');
        //response.statusMessage = "Usuário salvo com sucesso"; //essa messagem aparece junto com o statusCode, mais nesse exemplo não vou querer que apareça
    
         return response.end(JSON.stringify(result))
    }

    if (request.url === "/minhaSegundaRota"){
        const result = {
            message: 'Minha segunda rota'
        }
    
        //qui passo informar o usuário o sucesso do processo colocando 200 no StatusCode ou 500 para informar algum problema
        response.statusCode = 200;
        response.setHeader("Content-type", 'application/json');
           
        return response.end(JSON.stringify(result));        
    }

    const result = {
        message: 'qualquer outra rota'
    }

    //qui passo informar o usuário o sucesso do processo colocando 200 no StatusCode ou 500 para informar algum problema
    response.statusCode = 200;
    response.setHeader("Content-type", 'application/json');
    
    response.write(JSON.stringify(result));
    response.end()
})

server.listen(3000, () => console.log('Servidor está rodando!'))