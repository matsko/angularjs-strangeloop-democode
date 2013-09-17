module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadTasks('./lib');

  grunt.initConfig({
    connect: {
      options: {
        port: 8888,
        base: './app'
      },
      server: {
        options: {
          keepalive: true
        }
      }
    },

    karma: {
      unit: {
        configFile: './test/karma-unit.conf.js',
        autoWatch: false,
        singleRun: true
      },
      unit_auto: {
        configFile: './test/karma-unit.conf.js'
      },
      e2e: {
        configFile: './test/karma-e2e.conf.js',
        autoWatch: false,
        singleRun: true
      },
      e2e_auto: {
        configFile: './test/karma-e2e.conf.js'
      }
    }
  });

  //single run tests
  grunt.registerTask('test', ['karma:unit', 'test:e2e']);
  grunt.registerTask('test:unit', ['karma:unit']);
  grunt.registerTask('test:e2e', ['connect:testserver', 'karma:e2e']);

  //autotest and watch tests
  grunt.registerTask('autotest', ['karma:unit_auto']);
  grunt.registerTask('autotest:unit', ['karma:unit_auto']);
  grunt.registerTask('autotest:e2e', ['karma:e2e_auto']);

  //installation-related
  grunt.registerTask('install', ['bower']);

  //defaults
  grunt.registerTask('default', ['dev']);

  //development
  grunt.registerTask('dev', ['install', 'serve']);
  grunt.registerTask('serve', ['connect:server']);
};
