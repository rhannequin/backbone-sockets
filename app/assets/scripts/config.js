(function () {

  require.config({
    baseUrl: 'assets/scripts/',
    deps: ['main'],
    paths: {
      jquery:      '../components/jquery/jquery.min',
      backbone:    '../components/backbone/backbone-min',
      lodash:      '../components/lodash/lodash',
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