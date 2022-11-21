import React from 'react';
import { ArgsTable } from '@storybook/addon-docs';
import Logo from './Logo';

export default {
  title: 'Components/utils/Logo',
  component: Logo,
};

const Template = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {
  area: 'default',
};

export const LogoSchool = Template.bind({});
LogoSchool.args = {
  area: 'school',
  variant: 'color',
};

export const LogoSchoolNegro = Template.bind({});
LogoSchoolNegro.args = {
  area: 'school',
  variant: 'black',
};

export const LogoSchoolBlanco = Template.bind({});
LogoSchoolBlanco.args = {
  area: 'school',
  variant: 'white',
};
LogoSchoolBlanco.parameters = {
  backgrounds: {
    default: 'black',
    values: [
      { name: 'black', value: '#000' },
      { name: 'white', value: '#fff' },
    ],
  },
};

export const LogoStudio = Template.bind({});
LogoStudio.args = {
  area: 'studio',
  variant: 'color',
};

export const LogoStudioNegro = Template.bind({});
LogoStudioNegro.args = {
  area: 'studio',
  variant: 'black',
};

export const LogoStudioBlanco = Template.bind({});
LogoStudioBlanco.args = {
  area: 'studio',
  variant: 'white',
};
LogoStudioBlanco.parameters = {
  backgrounds: {
    default: 'black',
    values: [
      { name: 'black', value: '#1A1A1A' },
      { name: 'white', value: '#fff' },
    ],
  },
};

export const LogoLabs = Template.bind({});
LogoLabs.args = {
  area: 'labs',
  variant: 'color',
};

export const LogoLabsNegro = Template.bind({});
LogoLabsNegro.args = {
  area: 'labs',
  variant: 'black',
};

export const LogoLabsBlanco = Template.bind({});
LogoLabsBlanco.args = {
  area: 'labs',
  variant: 'white',
};
LogoLabsBlanco.parameters = {
  backgrounds: {
    default: 'black',
    values: [
      { name: 'black', value: '#1A1A1A' },
      { name: 'white', value: '#fff' },
    ],
  },
};

<ArgsTable of={Logo} />;
