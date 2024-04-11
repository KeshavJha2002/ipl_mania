const dotenv = require('dotenv')
const Pool = require('pg').Pool
dotenv.config()
const POSTGRES_PORT = process.env.POSTGRES_PORT
const DATABASE_NAME = process.env.DATABASE_NAME
const password = process.env.PASSWORD;
const POSTGRES_USER = process.env.POSTGRES_USER

const pool = new Pool({
    user : POSTGRES_USER,
    password : password,
    host : "localhost",
    port : POSTGRES_PORT,
    database: DATABASE_NAME
})

module.exports = pool