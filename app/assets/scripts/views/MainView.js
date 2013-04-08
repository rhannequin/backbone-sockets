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
        var self = this;
        this.socket = params.socket;
        this.defineEvents();
        this.render();
        this.bookListView = new BookListView();
        this.on('new_book_created', function (book) {
          self.bookListView.collection.add(book);
        });
      },

      render: function () {
        this.$el.html(this.template());
      },

      addBook: function (e) {
        e.preventDefault();
        var $form  = $(e.currentTarget),
            author = $form.find('#author').val(),
            title  = $form.find('#title').val(),
            url    = $form.find('#url').val();
        this.socket.emit('new_book', { author: author, title: title, url: url });
      },

      defineEvents: function () {
        this.socket.on('broadcast', function (data) {
          console.log('Broadcast message: ', data);
        });
      }

    });

  });

}).call(this);