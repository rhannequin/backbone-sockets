(function () {

  define([
    'jquery',
    'lodash',
    'backbone',
    'views/BookListView'
  ], function ($, _, Backbone, BookListView) {

    return Backbone.View.extend({

      el: '#main',
      template: _.template($('#main-template').text()),

      events: {
        'submit form': 'addBook',
      },

      initialize: function (params) {
        this.socket = params.socket;
        this.defineEvents();
        this.render();
        this.bookListView = new BookListView();
      },

      render: function () {
        this.$el.html(this.template());
      },

      defineEvents: function () {
        this.socket.on('broadcast', function (data) {
          console.log('Broadcast message: ', data);
        });
      },

      addBook: function (e) {
        e.preventDefault();
      }

    });

  });

}).call(this);