(function () {

  define(['jquery', 'backbone', 'collections/BookList'], function ($, Backbone, BookList) {

    return Backbone.View.extend({

      initialize: function () {
        this.collection = new BookList();
      }

    });

  });

}).call(this);