module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    concat: {
      dist: {
        src: [
          'js/lib/underscore-min.js',
          'js/lib/backbone-min.js',
          'js/lib/backbone.marionette.js',
          'js/bot/Application.js',
          'js/agar/main_out.js',
          'js/bot/FeedBot.js',
          'js/bot/StartApplication.js'
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