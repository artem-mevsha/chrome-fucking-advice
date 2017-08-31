// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      'js/vendor.js': /^(?!app)/, // Files that are not in `app` dir.
      'js/app.js': /^app/,
    },
  },
  stylesheets: {
    joinTo: 'css/app.css',
  },
};

exports.paths = {
  public: 'dev-fucking-great-advice',
};

exports.plugins = {
  babel: { presets: ['latest', 'stage-0'] },
  pleeease: {
    sass: true,
    autoprefixer: {
      browsers: ['> 1%'],
    },
  },
  copycat: {},
};

exports.overrides = {
  production: {
    plugins: {
      pleeease: {
        minifier: false,
        sourcemaps: true,
      },
      autoReload: {
        enabled: false,
      },
    },
    paths: {
      public: 'fucking-great-advice',
    },
  },
};
