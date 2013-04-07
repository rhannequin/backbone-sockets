(function () {

  define(['backbone', 'models/Book'], function (Backbone, Book) {

    return Backbone.Collection.extend({

      model: Book

    });

  });

}).call(this);