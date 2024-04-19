const { Pool, Client } = require('pg');
const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: 5432,
})
// async function queryDatabase(){
//   try{
//     const res = await pool.query('SELECT * FROM tbl_user')
//   } catch(error){
//     console.error('Error executing query:', error);
//   } finally {
//     await pool.end()

//   }
// }
// queryDatabase();

module.exports = pool;