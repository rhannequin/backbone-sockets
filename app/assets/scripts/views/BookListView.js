(function () {

  define(['jquery', 'backbone', 'collections/BookList'], function ($, Backbone, BookList) {

    return Backbone.View.extend({

      initialize: function () {
        var self = this;
        this.collection = new BookList();
        this.collection.on('reset', function () {
          console.log('Reset collection', self.collection.toJSON());
        });
      }

    });

  });

}).call(this);