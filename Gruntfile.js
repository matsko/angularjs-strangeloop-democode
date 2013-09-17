module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadTasks('./lib');

  grunt.initConfig({
    connect: {
      options: {
        port: 8888,
        base: 'app/'
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
        configFile: './test/karma-unit.conf.js',
        autoWatch: true,
        singleRun: false
      }
    }
  });

  //single run tests
  grunt.registerTask('test', ['karma:unit']);
  grunt.registerTask('test:unit', ['karma:unit']);

  //autotest and watch tests
  grunt.registerTask('autotest', ['karma:unit_auto']);
  grunt.registerTask('autotest:unit', ['karma:unit_auto']);

  //installation-related
  grunt.registerTask('install', ['bower']);

  //defaults
  grunt.registerTask('default', ['dev']);

  //development
  grunt.registerTask('dev', ['install', 'serve']);
  grunt.registerTask('serve', ['connect:server']);
};
