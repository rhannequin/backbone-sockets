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
      bookTemplate: _.template($('#book-template').text()),

      initialize: function () {
        var collection = this.collection = new BookList();
        this.render();
        collection.on('sync', this.render, this);
        collection.on('add', this.addBook, this);
        // collection.on('remove', this.render, this);
        collection.fetch();
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
        var $ul = this.$el.find('ul');
        $ul.html('');
        _.map(this.collection.models, function (book) {
          var bookView = new BookView({ model: book });
          $ul.append(bookView.render());
        });
      },

      addBook: function (book) {
        var bookView = new BookView({ model: book });
        this.$el.find('ul').append(bookView.render());
      }

    });

  });

}).call(this);