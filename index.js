const express = require('express');
const app = express();
var port=process.env.PORT || 3000;
var path=require('path');

app.use(express.static(path.join(__dirname, "assets")));

//app.use(express.static('public'));

app.get('/', function (req, res) {

  //res.send('Merhaba Express');
//  res.send('<h1>Merhaba Express</h1>');
  res.sendFile( __dirname + "/" + "earth.html");

});

app.get('/vr', function (req, res) {
// res.send('Merhaba Express');
  res.sendFile( __dirname + "/" + "vr.html");
});

app.get('/megagen', function (req, res) {
// res.send('Merhaba Express');
  res.sendFile( __dirname + "/" + "index.html");
});

app.listen(port, function () {
  console.log('Sunucu çalışıyor...');
});
