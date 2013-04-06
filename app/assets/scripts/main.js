(function () {

  require([
    'socket.io',
    'jquery',
    'backbone',
    'views/MainView'
  ], function (io, $, Backbone, MainView) {

    var socket = new io.connect();
    socket.on('connect', function() {
      console.log('Socket.io connected');
      var mainView = new MainView();
    });
    socket.on('disconnect', function () {
      console.log('Socket.io disconnected');
    });

  });

}).call(this);