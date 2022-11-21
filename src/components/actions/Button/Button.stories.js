import React from 'react';
import { ArgsTable } from '@storybook/addon-docs';
import Button from './Button';

export default {
  title: 'Components/actions/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'CAMPUS',
};

export const Secondary = Template.bind({});
Secondary.args = {
  secondary: true,
  label: 'BOLSA DE TRABAJO',
};

export const Whatsapp = Template.bind({});
Whatsapp.args = {
  whatsapp: true,
  label: '¿Preguntas? ¡Escribenos!',
};

<ArgsTable of={Button} />;
