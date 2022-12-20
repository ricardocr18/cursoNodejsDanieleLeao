const { Client } = require("pg");

const client = new Client({
    host: 'localhost',
    user: 'postgres',
    password: 'Linux@31',
    database: 'modulo_api_cursos',
    port: 5432
})

client.connect();


module.exports = {
    client
}