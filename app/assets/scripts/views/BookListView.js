(function () {

  define([
    'jquery',
    'lodash',
    'backbone',
    'collections/BookList',
    'views/BookView'
  ], function ($, _, Backbone, BookList, BookView) {

    return Backbone.View.extend({

      el: '#book-list',
      template:     _.template($('#book-list-template').text()),
      bookTemplate: _.template($('#book-template').text()),

      initialize: function () {
        var collection = this.collection = new BookList();
        this.render();
        collection.on('sync', this.render, this);
        collection.on('add', this.addBook, this);
        collection.fetch();
        // var self = this;
        // var i = 10;
        // var interval = setInterval(function() {
        //   collection.add({ author: 'author', title: 'title', url: 'url' });
        //   i--;
        //   if(i === 0) {
        //     clearInterval(interval);
        //   }
        // }, 1000);
      },

      render: function () {
        var result = [],
            self   = this;
        _.each(this.collection.models, function (book) {
          var bookView = new BookView({ model: book });
          result.push(bookView.render());
        });
        self.$el.html(self.template({ books: result.join('') }));
      },

      addBook: function (book) {
        var bookView = new BookView({ model: book });
        this.$el.find('ul').append(bookView.render());
      }

    });

  });

}).call(this);