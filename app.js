var express  = require('express'),
    http     = require('http'),
    path     = require('path'),
    db       = require('./database');

var app     = express(),
    booksDb = db.collections.books;

// Configure app
app.configure(function(){
  app.set('port', process.env.PORT || 5000);
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'app')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

var server = http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

// Socket.io

var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
  io.sockets.emit('this', { will: 'be received by everyone'});
});

module.exports = app;