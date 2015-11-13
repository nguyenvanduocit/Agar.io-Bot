module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    concat: {
      dist: {
        src: [
          //Lib script
          'js/lib/underscore-min.js',
          'js/lib/backbone-min.js',
          'js/lib/backbone.marionette.js',
          'js/lib/msgpack.js',
          'js/Application.js',
          'js/CustomWebSocket.js',
          //Message passing with content, bacground scirpt
          'js/messenger.js',
          'js/template-loader.js',
          'js/agar/main_out.js',

          //BEGIN Auto feed bot
          //'js/lib/nvduoc/AgarBot.js',
          //'js/bot/FeedBot.js',
          //END Auto feed bot

          //BEGIN Minimap
          'js/minimap/Cell.model.js',
          'js/minimap/Cell.ItemView.js',
          'js/minimap/Cell.CollectionView.js',
          'js/minimap/minimap.js',
          //END minimap
          'js/StartApplication.js'
        ],
        dest: 'js/concat.js'
      }
    },
    min: {
      dist: {
        src: 'js/concat.js',
        dest: 'js/concat.min.js'
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true
      },
      globals: {
        exports: false,
        module: false
      }
    },
    uglify: {}
  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  // Default task.
  grunt.registerTask('default', ['concat']);

};