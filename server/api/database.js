const { Pool } = require('pg');
const config = require('./config');

async function connect() {

    const pool = new Pool({
        connectionString: config.pool,
        ssl: {
          rejectUnauthorized: false
        }
    });
 
    //apenas testando a conexão
    return await pool.connect();
}

async function query(sql) {
    const connection = await connect();
    const results = await connection.query(sql);
    connection.end()

    return results.rows;
}

module.exports = { query };

/* CREATE TABLES:

CREATE TABLE `gifts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `image` varchar(200) DEFAULT NULL,
  `price` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) 

CREATE TABLE `buyers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `buyer` varchar(50) DEFAULT NULL,
  `item` int DEFAULT NULL,
  `confirm` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `item` (`item`),
  CONSTRAINT `buyers_ibfk_1` FOREIGN KEY (`item`) REFERENCES `gifts` (`id`)
)

*/