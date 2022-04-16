"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PokemonCard = function PokemonCard(props) {
  var name = props.name,
      onPress = props.onPress,
      imgUrl = props.imgUrl,
      pokemonNameStyle = props.pokemonNameStyle;
  return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    style: style.landingPokemonCard,
    onPress: onPress
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: pokemonNameStyle
  }, name.toUpperCase()), /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    style: {
      height: 200,
      width: 200,
      marginTop: 10
    },
    source: {
      uri: imgUrl
    }
  }));
};

var style = _reactNative.StyleSheet.create({
  landingPokemonCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
    backgroundColor: '#181a1b',
    borderRadius: 10,
    borderWidth: 4,
    borderColor: '#8c8273'
    /* border-radius: 10px, */

    /* border: 4px solid black, */

  },
  landingPokeballPlaceholder: {}
});

PokemonCard.propTypes = {
  name: _propTypes.default.string.isRequired,
  onPress: _propTypes.default.func.isRequired,
  pokemonNameStyle: _propTypes.default.object
};
PokemonCard.defaultProps = {
  name: 'Pikachu',
  //pokemon image url
  imgUrl: '',
  onPress: function onPress() {
    return console.log('card Pressed');
  },
  pokemonNameStyle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  }
};
var _default = PokemonCard;
exports.default = _default;