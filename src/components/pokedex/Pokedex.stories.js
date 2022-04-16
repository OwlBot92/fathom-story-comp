import React from 'react';
import PokedexScreen from './Pokedex.web';

export default {
  title: 'Pokedex',
  component: PokedexScreen,
};

const Template = (args) => <PokedexScreen {...args} />;
export const Default = Template.bind({});

Default.args = {
  name: 'Charizard',
  imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
  height: '5',
  weight: '5',
};
