(function () {

  define([
    'jquery',
    'lodash',
    'backbone',
  ], function ($, _, Backbone) {

    return Backbone.View.extend({

      tagName: 'li',
      template: _.template($('#book-template').text()),

      render: function () {
        return this.template(this.model.toJSON());
      }

    });

  });

}).call(this);