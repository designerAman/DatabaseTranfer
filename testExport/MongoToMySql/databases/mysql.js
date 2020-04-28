const mysql = require('mysql')
const sqldb = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Aman@123',
  // database: 'task2',
  // insecureAuth: true,
})

sqldb.connect((err) => {
  if (err) throw err

  console.log('MySql database connected ......!')

  sqldb.query('CREATE DATABASE IF NOT EXISTS importedbymongo', (err, result) => {
    if (err) throw err
    // console.log(`Mysql Database Created........!`)
    sqldb.query('USE importedbymongo', () => {
      const query = 'CREATE TABLE IF NOT EXISTS user(id int , name VARCHAR(20), age int)'
      sqldb.query(query, function (err, result) {
        if (err) throw err
        // console.log(result)
        // console.log("Table created");
      })
    })

  })
})

module.exports = sqldb
