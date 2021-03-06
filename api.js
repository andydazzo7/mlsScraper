var mysql = require('mysql');
const express = require('express')
const app = express()
const port = 4000
var compression = require('compression');
var con = mysql.createConnection({
  host: "mls.cet8db5wesjz.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "MLSrocks1!",
  database: "mls"
});
function formatDateToString(date){

  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];
  // 01, 02, 03, ... 29, 30, 31
  var dd = (date.getDate() < 10 ? '0' : '') + date.getDate();
  // 01, 02, 03, ... 10, 11, 12
  var MM = monthNames[date.getMonth()];
  // 1970, 1971, ... 2015, 2016, ...
  var yyyy = date.getFullYear();

  // create the format you want
  return ( MM + " " + dd + ", " + yyyy);
}
var date = new Date();
var invdate = new Date(date.toLocaleString('en-US', {
  timeZone: 'America/New_York'
}));
console.log(invdate)
var diff = date.getTime() - invdate.getTime();
console.log(new Date(date.getTime() + diff));
console.log(formatDateToString(new Date()));

app.use(compression());
app.use((req, res, next) => {

  console.log(`Logged  ${req.url}  ${req.method} -- ${new Date()}`)
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

app.get('/teams/:team', (req,res,next)=>{
    var options = {timeZone: 'America/New_York'};
    var today = formatDateToString(new Date());
    console.log(today)
    con.query(`SELECT DISTINCT * FROM data WHERE date_added='${today}' AND team='${req.params.team}' LIMIT 6`, function (err, result, fields) {
    if (err) throw err;
    res.send(result);
    });
  });
  app.get('/tops', (req,res,next)=>{
    var options = { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'America/New_York'};
    var dtoday  = new Date();
    var today2 = dtoday.toLocaleDateString('en-us', options);
    console.log(today2);
      con.query(`SELECT DISTINCT * FROM data WHERE release_date='${today2}' LIMIT 7`, function (err, result, fields) {
      if (err) throw err;
      res.send(result);
      });
    });
//
  app.listen((process.env.PORT || 5000), () => console.log(`Example app listening at http://localhost:${port}`))