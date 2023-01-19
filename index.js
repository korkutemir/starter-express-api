const express = require('express');
const app = express();
var port=process.env.PORT || 3000;

app.get('/', function (req, res) {

  //res.send('Merhaba Express');
//  res.send('<h1>Merhaba Express</h1>');
  res.sendFile( __dirname + "/" + "earth.html");

});

app.post('/vr', function (req, res) {
// res.send('Merhaba Express');
  res.sendFile( __dirname + "/" + "vr.html");
});

app.listen(port, function () {
  console.log('Sunucu çalışıyor...');
});
