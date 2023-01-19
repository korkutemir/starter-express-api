const express = require('express');
const app = express();
var port=process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "js")));

app.get('/', function (req, res) {

  //res.send('Merhaba Express');
//  res.send('<h1>Merhaba Express</h1>');
  res.sendFile( __dirname + "/" + "index.html");

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
