(function () {

  define([
    'jquery',
    'lodash',
    'backbone',
    'collections/BookList'
  ], function ($, _, Backbone, BookList) {

    return Backbone.View.extend({

      el: '#book-list',
      template: _.template($('#book-list-template').text()),

      initialize: function () {
        var self = this;
        this.collection = new BookList();
        this.collection.on('reset', function () {
          self.render();
        });
      },

      render: function () {
        this.$el.html(this.template({ books: this.collection.toJSON() }));
      }

    });

  });

}).call(this);