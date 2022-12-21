//const mysql = require('mysql2')
const { Client } = require("pg");

//Usando o Banco de Dados Postgres
const client = new Client({
        host: 'localhost',
        user: 'postgres',
        password: 'Linux@31',
        database: 'modulo_api_cursos',
        port: 5432 //porta padrão do Postgre é 5432
    });

client.connect();

module.exports = {
    client,
}


//Dados PAra acessar o banco de dados MySQl
// const client = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'modulo_api_cursos',
//     port: 3306
// });