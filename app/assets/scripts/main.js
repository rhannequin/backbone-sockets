(function () {

  require([
    'socket.io',
    'jquery',
    'backbone',
    'views/MainView'
  ], function (io, $, Backbone, MainView) {

    var self = this;

    var socket = new io.connect();
    socket.on('connect', function () {
      console.log('Welcome, Socket.io connected');
      self.mainView = new MainView({ socket: socket });
    });
    socket.on('disconnect', function () {
      console.log('End, Socket.io disconnected');
    });
    socket.on('new_book_created', function (book) {
      self.mainView.trigger('new_book_created', book);
    });

  });

}).call(this);