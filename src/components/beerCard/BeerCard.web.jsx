import React from "react";
import propTypes from "prop-types";
import { View, Text, Image } from "react-native-web";

import beerCardStyle from "./BeerCardStyle";

const BeerCard = (props) => {
  const { name, tagline, description, imageUrl } = props;

  return (
    <View style={beerCardStyle.beerCard}>
      <View>
        <Text style={beerCardStyle.beerCardName}>{name}</Text>
        <Text style={beerCardStyle.beerCardTagline}>{tagline}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ color: 'lightgrey' }}>Description:</Text>
          <Text style={{ color: 'lightgrey' }}>{description}</Text>
        </View>
      </View>
      <Image
        style={{ width: 50, height: 190, marginTop: 10, }}
        source={{
          uri: imageUrl,
        }}
      />
    </View>
  );
};


// write propTypes
BeerCard.propTypes = {
  name: propTypes.string.isRequired,
};
// write default props
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
    contributed_by: "",
  },
};

export default BeerCard;