(function() {
  'use strict';

  var globals = typeof global === 'undefined' ? self : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};
  var aliases = {};
  var has = {}.hasOwnProperty;

  var expRe = /^\.\.?(\/|$)/;
  var expand = function(root, name) {
    var results = [], part;
    var parts = (expRe.test(name) ? root + '/' + name : name).split('/');
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function expanded(name) {
      var absolute = expand(dirname(path), name);
      return globals.require(absolute, path);
    };
  };

  var initModule = function(name, definition) {
    var hot = hmr && hmr.createHot(name);
    var module = {id: name, exports: {}, hot: hot};
    cache[name] = module;
    definition(module.exports, localRequire(name), module);
    return module.exports;
  };

  var expandAlias = function(name) {
    return aliases[name] ? expandAlias(aliases[name]) : name;
  };

  var _resolve = function(name, dep) {
    return expandAlias(expand(dirname(name), dep));
  };

  var require = function(name, loaderPath) {
    if (loaderPath == null) loaderPath = '/';
    var path = expandAlias(name);

    if (has.call(cache, path)) return cache[path].exports;
    if (has.call(modules, path)) return initModule(path, modules[path]);

    throw new Error("Cannot find module '" + name + "' from '" + loaderPath + "'");
  };

  require.alias = function(from, to) {
    aliases[to] = from;
  };

  var extRe = /\.[^.\/]+$/;
  var indexRe = /\/index(\.[^\/]+)?$/;
  var addExtensions = function(bundle) {
    if (extRe.test(bundle)) {
      var alias = bundle.replace(extRe, '');
      if (!has.call(aliases, alias) || aliases[alias].replace(extRe, '') === alias + '/index') {
        aliases[alias] = bundle;
      }
    }

    if (indexRe.test(bundle)) {
      var iAlias = bundle.replace(indexRe, '');
      if (!has.call(aliases, iAlias)) {
        aliases[iAlias] = bundle;
      }
    }
  };

  require.register = require.define = function(bundle, fn) {
    if (bundle && typeof bundle === 'object') {
      for (var key in bundle) {
        if (has.call(bundle, key)) {
          require.register(key, bundle[key]);
        }
      }
    } else {
      modules[bundle] = fn;
      delete cache[bundle];
      addExtensions(bundle);
    }
  };

  require.list = function() {
    var list = [];
    for (var item in modules) {
      if (has.call(modules, item)) {
        list.push(item);
      }
    }
    return list;
  };

  var hmr = globals._hmr && new globals._hmr(_resolve, require, modules, cache);
  require._cache = cache;
  require.hmr = hmr && hmr.wrap;
  require.brunch = true;
  globals.require = require;
})();

(function() {
var global = typeof window === 'undefined' ? this : window;
var __makeRelativeRequire = function(require, mappings, pref) {
  var none = {};
  var tryReq = function(name, pref) {
    var val;
    try {
      val = require(pref + '/node_modules/' + name);
      return val;
    } catch (e) {
      if (e.toString().indexOf('Cannot find module') === -1) {
        throw e;
      }

      if (pref.indexOf('node_modules') !== -1) {
        var s = pref.split('/');
        var i = s.lastIndexOf('node_modules');
        var newPref = s.slice(0, i).join('/');
        return tryReq(name, newPref);
      }
    }
    return none;
  };
  return function(name) {
    if (name in mappings) name = mappings[name];
    if (!name) return;
    if (name[0] !== '.' && pref) {
      var val = tryReq(name, pref);
      if (val !== none) return val;
    }
    return require(name);
  }
};
require.register("js/FuckingGreatAdvice/index.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FuckingGreatAdvice = function () {
  function FuckingGreatAdvice(url) {
    _classCallCheck(this, FuckingGreatAdvice);

    // images should be named like '0.jpg', '1.jpg', '2.jpg' ... 'n.jpg'
    // imagesCount is 
    var imagesCount = 37;
    this.images = Array.from(new Array(imagesCount), function (value, index) {
      return index + '.jpg';
    });
    this.url = url;
    this.apiEndpoint = 'api';
    this.soundSrc = '' + url;
    this.errorText = 'Ошибка скоро будет исправлена. Потерпи блять!';
    this.init();
  }

  _createClass(FuckingGreatAdvice, [{
    key: 'init',
    value: function init() {
      this.fetchQuote();
    }
  }, {
    key: 'getApiEndpoint',
    value: function getApiEndpoint() {
      var url = this.url,
          apiEndpoint = this.apiEndpoint;

      return url + '/' + apiEndpoint;
    }
  }, {
    key: 'getImageUrl',
    value: function getImageUrl() {
      var images = this.images;
      var imageIndex = Math.floor(Math.random() * (images.length - 0));
      return 'img/' + images[imageIndex];
    }
  }, {
    key: 'fetchQuote',
    value: function fetchQuote() {
      var _this = this;

      var apiUrl = this.getApiEndpoint();
      fetch(apiUrl + '/random', {
        method: 'GET',
        mode: 'cors'
      }).then(function (response) {
        return response.json();
      }).then(function (json) {
        return _this.renderQuote(json.text);
      }).catch(function () {
        return _this.renderQuote(_this.errorText);
      });
    }
  }, {
    key: 'renderQuote',
    value: function renderQuote(text) {
      this.text = text;
      var adviceSelector = document.querySelector('.advice');
      var textSelector = document.querySelector('.advice__text');
      var imageSrc = this.getImageUrl();

      adviceSelector.style.backgroundImage = 'url(' + imageSrc + ')';
      textSelector.innerHTML = text;
      textSelector.classList.add('advice__text--ready');
    }
  }]);

  return FuckingGreatAdvice;
}();

exports.default = FuckingGreatAdvice;

});

require.register("js/Popup/index.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Popup = function () {
  function Popup() {
    _classCallCheck(this, Popup);

    this.defaultCategory = 'all';
    this.category = localStorage['fucking-great-advice-category'] || this.defaultCategory;
    this.initListeners();
  }

  _createClass(Popup, [{
    key: 'setCategory',
    value: function setCategory(category) {
      this.category = category;
      localStorage['fucking-great-advice-category'] = category;
    }
  }, {
    key: 'initListeners',
    value: function initListeners() {
      var categorySelector = document.querySelector('.radio__input');
      categorySelector.addEventListener('change', function () {
        this.setCategory(this.value);
      });
    }
  }]);

  return Popup;
}();

exports.default = Popup;

});

require.register("js/index.js", function(exports, require, module) {
'use strict';

var _FuckingGreatAdvice = require('./FuckingGreatAdvice');

var _FuckingGreatAdvice2 = _interopRequireDefault(_FuckingGreatAdvice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
  var advice = new _FuckingGreatAdvice2.default('http://fucking-great-advice.ru/');
});

});

require.register("js/popup.js", function(exports, require, module) {
"use strict";

});

require.register("___globals___", function(exports, require, module) {
  
});})();require('___globals___');


//# sourceMappingURL=app.js.map