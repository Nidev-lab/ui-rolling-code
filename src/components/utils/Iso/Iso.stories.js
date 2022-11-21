import React from 'react';
import { ArgsTable } from '@storybook/addon-docs';
import Iso from './Iso';

export default {
  title: 'Components/utils/Iso',
  component: Iso,
};

const Template = (args) => <Iso {...args} />;

export const IsoNegro = Template.bind({});

export const IsoBlanco = Template.bind({});
IsoBlanco.args = {
  variant: 'white',
};
IsoBlanco.parameters = {
  backgrounds: {
    default: 'black',
    values: [
      { name: 'black', value: '#1A1A1A' },
      { name: 'white', value: '#fff' },
    ],
  },
};

<ArgsTable of={Iso} />;
