module.exports = function(config) {
  config.set({
    files : [
      'app/components/jquery/jquery.js',
      'app/lib/angular-1.2.0-rc.2/angular.js',
      'app/lib/angular-1.2.0-rc.2/angular-animate.js',
      'app/lib/angular-1.2.0-rc.2/angular-route.js',
      'app/lib/angular-1.2.0-rc.2/angular-resource.js',
      'app/lib/angular-1.2.0-rc.2/angular-mocks.js',
      'http://cdn.firebase.com/v0/firebase.js',
      'app/components/angular-fire/angularFire.js',
      'app/scripts/config.js',
      'app/scripts/helpers.js',
      'app/scripts/firebase.js',
      'app/scripts/modules/homePages.js',
      'app/scripts/modules/listPages.js',
      'app/scripts/modules/nav.js',
      'app/scripts/app.js',

      'test/unit/**/*.js'
    ],
    basePath: '../',
    plugins:[
      'karma-chrome-launcher',
      'karma-jasmine'
    ],
    frameworks: ['jasmine'],
    reporters: ['progress'],
    browsers: ['Chrome'],
    autoWatch: false,
    singleRun: true,
    colors: true
  });
};
