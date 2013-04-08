(function () {

  require([
    'socket.io',
    'jquery',
    'backbone',
    'views/MainView'
  ], function (io, $, Backbone, MainView) {

    var socket = new io.connect();
    socket.on('connect', function () {
      console.log('Welcome, Socket.io connected');
      new MainView({ socket: socket });
    });
    socket.on('disconnect', function () {
      console.log('End, Socket.io disconnected');
    });

  });

}).call(this);