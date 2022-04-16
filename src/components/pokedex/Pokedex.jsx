import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const PokedexScreen = (props) => {
  const { name, onPress, imgUrl, weight, height } = props;
  return (
    <View style={style.container}>
      <View style={style.blueCircle} />
      {/* POKEDEX SCREEN */}
      <View style={style.pokedexScreen}>
        <Image
          style={{ height: 200, width: 200, marginTop: 10, }}
          source={{
            uri: imgUrl,
          }}
        />
      </View>
      {/* INFO SCREEN */}
      <View style={style.infoScreen}>
        <Text style={{ fontSize: 24, color: 'white', marginBottom: 10, }}>{name.toUpperCase()}</Text>
        <Text style={{ fontSize: 18, color: 'white', alignSelf: 'flex-start' }}>Weight: {weight}</Text>
        <Text style={{ fontSize: 18, color: 'white', alignSelf: 'flex-start' }}>Height: {height}</Text>
      </View>

      {/* BACKHOME BTN */}
      <TouchableOpacity style={style.btn} onPress={onPress}>
        <Text style={{ color: 'white' }}>HOME</Text>
      </TouchableOpacity>
    </View>
  );
}
PokedexScreen.propTypes = {
  name: PropTypes.string,
  onPress: PropTypes.func,
  imgUrl: PropTypes.string,
  weight: PropTypes.number,
  height: PropTypes.number,
}
PokedexScreen.defaultProps = {
  name: '',
  onPress: () => console.log('hello'),
  imgUrl: '',
  weight: '',
  height: '',
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b10924',
    borderWidth: 10,
    borderColor: '#cb092a',
    maxWidth: 400,
    paddingBottom: 15,
  },
  blueCircle: {
    height: 50,
    width: 50,
    borderRadius: 50,
    margin: 10,
    backgroundColor: '#1a9e95',
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#333333',
  },
  pokedexScreen: {
    backgroundColor: '#072f3d',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 0,
    paddingVertical: 15,
    marginHorizontal: 15,
    borderWidth: 15,
    borderColor: '#373c3e',
  },
  infoScreen: {
    backgroundColor: "#2b826c",
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 10,
    marginHorizontal: 15,
    padding: 25,
    borderColor: '#8c8273',
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
}
);


export default PokedexScreen;