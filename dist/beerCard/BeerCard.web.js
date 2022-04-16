"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactNativeWeb = require("react-native-web");

var _BeerCardStyle = _interopRequireDefault(require("./BeerCardStyle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BeerCard = function BeerCard(props) {
  var name = props.name,
      tagline = props.tagline,
      description = props.description,
      imageUrl = props.imageUrl;
  return /*#__PURE__*/_react.default.createElement(_reactNativeWeb.View, {
    style: _BeerCardStyle.default.beerCard
  }, /*#__PURE__*/_react.default.createElement(_reactNativeWeb.View, null, /*#__PURE__*/_react.default.createElement(_reactNativeWeb.Text, {
    style: _BeerCardStyle.default.beerCardName
  }, name), /*#__PURE__*/_react.default.createElement(_reactNativeWeb.Text, {
    style: _BeerCardStyle.default.beerCardTagline
  }, tagline), /*#__PURE__*/_react.default.createElement(_reactNativeWeb.View, {
    style: {
      flexDirection: 'row'
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNativeWeb.Text, {
    style: {
      color: 'lightgrey'
    }
  }, "Description:"), /*#__PURE__*/_react.default.createElement(_reactNativeWeb.Text, {
    style: {
      color: 'lightgrey'
    }
  }, description))), /*#__PURE__*/_react.default.createElement(_reactNativeWeb.Image, {
    style: {
      width: 50,
      height: 190,
      marginTop: 10
    },
    source: {
      uri: imageUrl
    }
  }));
}; // write propTypes


BeerCard.propTypes = {
  name: _propTypes.default.string.isRequired
}; // write default props

BeerCard.defaultProps = {
  beer: {
    name: "",
    tagline: "",
    description: "",
    imageUrl: "",
    abv: "",
    ibu: "",
    foodPairing: [],
    brewersTips: "",
    contributed_by: ""
  }
};
var _default = BeerCard;
exports.default = _default;