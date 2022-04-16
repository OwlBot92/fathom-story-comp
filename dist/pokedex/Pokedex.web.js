"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNativeWeb = require("react-native-web");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PokedexScreen = function PokedexScreen(props) {
  var name = props.name,
      onPress = props.onPress,
      imgUrl = props.imgUrl,
      weight = props.weight,
      height = props.height;
  return /*#__PURE__*/_react.default.createElement(_reactNativeWeb.View, {
    style: style.container
  }, /*#__PURE__*/_react.default.createElement(_reactNativeWeb.View, {
    style: style.blueCircle
  }), /*#__PURE__*/_react.default.createElement(_reactNativeWeb.View, {
    style: style.pokedexScreen
  }, /*#__PURE__*/_react.default.createElement(_reactNativeWeb.Image, {
    style: {
      height: 200,
      width: 200,
      marginTop: 10
    },
    source: {
      uri: imgUrl
    }
  })), /*#__PURE__*/_react.default.createElement(_reactNativeWeb.View, {
    style: style.infoScreen
  }, /*#__PURE__*/_react.default.createElement(_reactNativeWeb.Text, {
    style: {
      fontSize: 24,
      color: 'white',
      marginBottom: 10
    }
  }, name.toUpperCase()), /*#__PURE__*/_react.default.createElement(_reactNativeWeb.Text, {
    style: {
      fontSize: 18,
      color: 'white',
      alignSelf: 'flex-start'
    }
  }, "Weight: ", weight), /*#__PURE__*/_react.default.createElement(_reactNativeWeb.Text, {
    style: {
      fontSize: 18,
      color: 'white',
      alignSelf: 'flex-start'
    }
  }, "Height: ", height)), /*#__PURE__*/_react.default.createElement(_reactNativeWeb.TouchableOpacity, {
    style: style.btn,
    onPress: onPress
  }, /*#__PURE__*/_react.default.createElement(_reactNativeWeb.Text, {
    style: {
      color: 'white'
    }
  }, "HOME")));
};

PokedexScreen.propTypes = {
  name: _propTypes.default.string,
  onPress: _propTypes.default.func,
  imgUrl: _propTypes.default.string,
  weight: _propTypes.default.number,
  height: _propTypes.default.number
};
PokedexScreen.defaultProps = {
  name: '',
  onPress: function onPress() {
    return console.log('hello');
  },
  imgUrl: '',
  weight: '',
  height: ''
};

var style = _reactNativeWeb.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b10924',
    borderWidth: 10,
    borderColor: '#cb092a',
    maxWidth: 400,
    paddingBottom: 15
  },
  blueCircle: {
    height: 50,
    width: 50,
    borderRadius: 50,
    margin: 10,
    backgroundColor: '#1a9e95',
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#333333'
  },
  pokedexScreen: {
    backgroundColor: '#072f3d',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 0,
    paddingVertical: 15,
    marginHorizontal: 15,
    borderWidth: 15,
    borderColor: '#373c3e'
  },
  infoScreen: {
    backgroundColor: "#2b826c",
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 10,
    marginHorizontal: 15,
    padding: 25,
    borderColor: '#8c8273'
  },
  btn: {
    backgroundColor: '#333333',
    width: 100,
    paddingHorizontal: 25,
    paddingVertical: 10,
    alignSelf: 'center',
    marginTop: 25,
    alignItems: 'center',
    borderLeftColor: 'grey',
    borderTopColor: 'grey',
    borderTopWidth: 2,
    borderLeftWidth: 2
  }
});

var _default = PokedexScreen;
exports.default = _default;