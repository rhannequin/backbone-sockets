(function () {

  require.config({
    baseUrl: 'assets/scripts/',
    deps: ['main'],
    paths: {
      jquery:      'lib/jquery',
      backbone:    'lib/backbone',
      lodash:      'lib/lodash',
      'socket.io': '../../socket.io/socket.io'
    },
    shim: {
      lodash: {
        exports: '_'
      },
      backbone: {
        deps: ['lodash'],
        exports: 'Backbone'
      },
      'socket.io': {
        exports: 'io'
      }
    }
  });

}).call(this);