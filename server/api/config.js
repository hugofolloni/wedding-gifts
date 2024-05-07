require('dotenv').config();

const mySqlconfig = {
    db: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        dialect: "postgres",
        native: true,
        ssl: true, 
        dialectOptions: {
          ssl: true
        }
    }
}

const pgConfig = {pool: `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`}

console.log(pgConfig)
module.exports = pgConfig;