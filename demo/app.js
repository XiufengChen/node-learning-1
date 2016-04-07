var express = require('express');
var app = express();
var path = require("path");

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);

app.get('/', function(req, res){
  var body = 'Hello World';
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', body.length);
  res.end(body);
});

app.get('/api', function(request, response) {
   response.send({name:"module",age:40});
});

var api2 = require('./routes/api2');
app.get('/api2', api2.index);

app.use(express.static(path.join(__dirname, 'public')));
app.listen(app.get('port'));