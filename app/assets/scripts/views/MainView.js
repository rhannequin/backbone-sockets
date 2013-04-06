(function () {

  define(['jquery', 'backbone', 'views/BookListView'], function ($, Backbone, BookListView) {

    return Backbone.View.extend({

      el: '#main',

      initialize: function () {
        this.bookListView = new BookListView();
        this.bookListView.collection.fetch();
      }

    });

  });

}).call(this);