"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _BeerCard = _interopRequireDefault(require("./BeerCard.web"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Example/BeerCard',
  component: _BeerCard.default,
  argTypes: {
    backgroundColor: {
      control: 'color'
    }
  }
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_BeerCard.default, args);
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  name: 'Beer Name',
  tagline: 'Beer Tagline',
  description: 'Beer Description',
  imageUrl: 'https://images.punkapi.com/v2/keg.png'
};