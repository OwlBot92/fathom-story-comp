import React from 'react';
import BeerCard from './BeerCard.web';


export default {
  title: 'Example/BeerCard',
  component: BeerCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <BeerCard {...args} />;
export const Default = Template.bind({});
Default.args = {
  name: 'Beer Name',
  tagline: 'Beer Tagline',
  description: 'Beer Description',
  imageUrl: 'https://images.punkapi.com/v2/keg.png',
};

