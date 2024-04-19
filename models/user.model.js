let pool = require('../config/db');
// console.log('/pg', pg);

exports.list = async ()=>{
    try{
        client = await pool.connect();
        const res = await client.query('SELECT * FROM tbl_user')
        return res
      } catch(error){
        console.error('Error executing query:', error);
        return error
      } finally {
        await pool.end()
      }
}