(function () {

  define(['jquery', 'backbone', 'views/BookListView'], function ($, Backbone, BookListView) {

    return Backbone.View.extend({

      el: '#main',

      initialize: function (params) {
        this.socket = params.socket;
        this.defineEvents();
        this.render();
        this.bookListView = new BookListView();
        this.bookListView.collection.reset(params.books);
      },

      render: function () {
        this.$el.html('<h2>Book list</h2><div id="book-list"></div>');
      },

      defineEvents: function () {
        this.socket.on('broadcast', function (data) {
          console.log('Broadcast message: ', data);
        });
      }

    });

  });

}).call(this);