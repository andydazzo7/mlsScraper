var mysql = require('mysql');
const express = require('express')
const app = express()
const port = 4000
var con = mysql.createConnection({
  host: "mls.cet8db5wesjz.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "MLSrocks1!",
  database: "mls"
});
app.use((req, res, next) => {
  console.log(`Logged  ${req.url}  ${req.method} -- ${new Date()}`)
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});
app.get('/teams/:team', (req,res,next)=>{
    con.query(`SELECT * FROM data WHERE date_added='June 08, 2020' AND team='${req.params.team}'`, function (err, result, fields) {
    if (err) throw err;
    res.send(result);
    });
  });

  app.listen((port), () => console.log(`Example app listening at http://localhost:${port}`))