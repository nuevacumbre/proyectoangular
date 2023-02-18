
//import mysql from 'promise-mysql';
/*import mysql from 'mysql2';
//const mysql = require('mysql2/promise');

import keys from './keys';

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 3308,
    password: '1234',
    database: 'ng_games_db',
});

// Connect to the server
const consulta = (query: string) => {
    connection.connect((err) => {
        if (err) {
            // Return error if present
            console.log("Error occurred", err);
        } else {
            // Create database
            console.log("Connected to MySQL Server");
            connection.query(query, function (err, result) {
            if (err) {
                err;
                //console.log(err);
                
            }
            return result;
            connection.end();
            console.log("New database created");
            });
        }
    });
}

export default consulta;
**/
/*
import mysql from 'promise-mysql';
import mysql2 from 'mysql2';
const mysql = require('mysql2/promise');

import keys from './keys';

const pool = mysql.createPool(keys.database);
*/
// public async list (req: Request, res: Response) {
// const mysql = require('mysql2/promise');
// const conn = await mysql.createConnection(keys.database);
// const [rows, fields] = await conn.execute('SELECT * FROM games');
//         await conn.end();
//         res.json(rows);

// }
/////////let conn: PoolConnection | undefined;  // <-- ADDED TO FIX THE ERROR!!!

////////pool.getConnection(function(err,conn){
/////////    console.log('DB is conected')
// Connection is automatically released when query resolves
/////////});
/*pool.getConnection()
    .then(connection => {
        pool.releaseConnection(connection);
        console.log('DB is connected');
    });*/

  //////////  export default pool;

const mysql = require('mysql');
const { promisify } = require('util');
/////////const Connection = require('mysql/lib/Connection');
const { database } = require('./keys');

///mysql.createConnection   no se usa en produccion
const pool = mysql.createPool(database);

pool.getConnection((err: { code: string; }, connection: { release: () => void; }) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('DATABASE CONNECTION WAS CLOSED');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('DATABASE HAS TO MANY CONNECTIONS');
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('DATABASE CONNECTION WAS REFUSED');
        }
    }

    if (connection) connection.release();
    console.log("DB is Connected");
});

//Promisify Pool Querys 
pool.query = promisify(pool.query);

module.exports = pool;