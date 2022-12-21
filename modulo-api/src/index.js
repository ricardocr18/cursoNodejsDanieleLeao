/**
 * Aqui será um Cadastro de usuário
 * 
 * GET - Listar todos os usuários;
 * POST - Inserir os usuários;
 * PUT - Alterar um usuário
 * DELETE - Remove um usuário
 */
//request.url -> Capture a rota

/**
 * Nesse arquivo receberemos os seguintes dados do usuário:
 * name
 * username
 * email
 */

const http = require('http');
const handler = require('./handlerRouters');

const server = http.createServer(handler);

server.listen(3000, () => console.log('Servidor está rodando!'))

//Aqui quando não tinveos um erro não tratado em nosso código, usamos esse parametro
process.on('uncaughtException', (err) =>
    console.log('Erro no servidor ${err}')) 
