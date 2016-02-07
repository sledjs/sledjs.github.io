var webpackConf = require('./webpack.base.conf');
delete webpackConf.entry;

module.exports = function(config) {
  config.set({
    plugins: [
      require('karma-tap'),
      require('karma-webpack'),
      require('karma-spec-reporter'),
      require('karma-phantomjs-launcher'),
    ],

    files: ['../test/*.js'],
    browsers: ['PhantomJS'],
    frameworks: ['tap'],
    reporters: ['spec'],

    preprocessors: {
      '../test/*.js': ['webpack'],
    },

    webpack: Object.assign({
      node: {
        fs: 'empty',
      },
    }, webpackConf),

    webpackMiddleware: {
      noInfo: true,
    },
  });
};
