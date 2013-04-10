(function () {

  define([
    'jquery',
    'lodash',
    'backbone',
  ], function ($, _, Backbone) {

    return Backbone.View.extend({

      tagName: 'li',
      template: _.template($('#book-template').text()),

      events: {
        'click i': 'destroy'
      },

      render: function () {
        return this.$el.html(this.template(this.model.toJSON()));
      },

      destroy: function (e) {
        e.preventDefault();
        this.model.collection.trigger('removeBook', this.model);
      }

    });

  });

}).call(this);