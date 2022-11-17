import React from 'react';

import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'CAMPUS',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'BOLSA DE TRABAJO',
};
