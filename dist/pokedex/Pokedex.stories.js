"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Pokedex = _interopRequireDefault(require("./Pokedex.web"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Pokedex',
  component: _Pokedex.default
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Pokedex.default, args);
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  name: 'Charizard',
  imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
  height: '5',
  weight: '5'
};