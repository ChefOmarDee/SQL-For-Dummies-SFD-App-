let express=require('express');
let app = express();
const port = process.env.PORT || 8080;
let sqlquery= 0;


app.get('/', (req, res) => {
  res.send('Hll11o!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})

const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '211473Ok!',
  database: 'omar',
  insecureAuth : true
})

connection.connect()

connection.query(
  'SELECT * FROM CHEF WHERE O2=2', (err, rows) => {
  if (err) throw err
  console.log('The solution is: ', rows[0].O1)
  sqlquery=rows[0].O1
})

connection.end()