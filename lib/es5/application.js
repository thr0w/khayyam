'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _i18n = require('./i18n');

var _i18n2 = _interopRequireDefault(_i18n);

var _languages = require('./languages');

var _languages2 = _interopRequireDefault(_languages);

exports['default'] = {
  properties: [{
    name: 'title',
    type: _i18n2['default'],
    required: true
  }, {
    name: 'languages',
    type: _languages2['default'],
    required: true
  }]
};
module.exports = exports['default'];
//# sourceMappingURL=application.js.map
