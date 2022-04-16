import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native-web';
import PropTypes from 'prop-types';

const PokemonCard = (props) => {
  const { name, onPress, imgUrl, pokemonNameStyle } = props;
  return (
    <TouchableOpacity style={style.landingPokemonCard} onPress={onPress}>
      <Text style={pokemonNameStyle}>{name.toUpperCase()}</Text>
      <Image
        style={{ height: 200, width: 200, marginTop: 10, }}
        source={{
          uri: imgUrl,
        }}
      />
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  landingPokemonCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
    cursor: 'pointer',
    backgroundColor: '#181a1b',
    borderRadius: 10,
    borderWidth: 4,
    borderColor: '#8c8273',
    /* border-radius: 10px, */
    /* border: 4px solid black, */
  },
  landingPokeballPlaceholder: {
  }
});

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  pokemonNameStyle: PropTypes.object,
};

PokemonCard.defaultProps = {
  name: 'Pikachu',
  //pokemon image url
  imgUrl: '',
  onPress: () => console.log('card Pressed'),
  pokemonNameStyle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  }
};


export default PokemonCard;