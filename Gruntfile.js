module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    concat: {
      dist: {
        src: [
            //BEFORE MAIN_OUT
            'js/agar/master.js',
            'js/agar/environment.js',
            'js/agar/i18n.js',

          //Lib script
          'js/lib/underscore-min.js',
          'js/lib/backbone-min.js',
          'js/lib/backbone.marionette.js',
          'js/lib/msgpack.js',
          'js/lib/CustomFunctions.js',
          'js/Application.js',
          //'js/CustomWebSocket.js',
          'js/MapControl.js',
          //Message passing with content, bacground scirpt
          'js/messenger.js',
          'js/template-loader.js',
          'js/agar/main_out_v25.js',
          'js/Clan.js',
          'js/MapUtil/MapUtil.js',
          //BEGIN Auto feed bot
          'js/FeedBot/FeedBot.js',
          //END Auto feed bot

          //BEGIN Minimap
          'js/minimap/minimap.js',
          //END minimap
          //STATS
          'js/Stats.js',
          //END STATS
          'js/StartApplication.js',
          //AFTER MAIN_OUT
          'js/agar/soundjs.min.js',
          'js/agar/agario.js'
        ],
        dest: 'js/concat.js'
      }
    },
    uglify: {
      mainScript: {
        files: {
          'js/concat.min.js': ['js/concat.js']
        }
      },
      extension: {
        files: {
          'js/background.min.js': [
            'js/lib/msgpack.js',
            'js/background.js',
            'js/lib/backbone.marionette.js'],
          'js/contentScript.min.js': [
            'js/lib/underscore-min.js',
            'js/contentScript.js',
            'js/lib/backbone-min.js'
          ]
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // Default task.
  grunt.registerTask('default', ['concat','uglify']);

};