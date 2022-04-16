import React from 'react';
import PokemonCard from './PokemonCard.web';

export default {
  title: 'PokemonCard',
  component: PokemonCard,
};

const Template = (args) => <PokemonCard {...args} />;
export const Default = Template.bind({});

Default.args = {
  name: 'Charizard',
  imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
  pokemonNameStyle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  }
};