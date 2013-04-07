(function () {

  define(['jquery', 'backbone', 'views/BookListView'], function ($, Backbone, BookListView) {

    return Backbone.View.extend({

      el: '#main',

      initialize: function (params) {
        this.socket = params.socket;
        this.defineEvents();
        this.bookListView = new BookListView();
        this.bookListView.collection.reset(params.books);
      },

      defineEvents: function () {
        this.socket.on('broadcast', function (data) {
          console.log('Broadcast message: ', data);
        });
      }

    });

  });

}).call(this);