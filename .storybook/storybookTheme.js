import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: '#00aeef',
  colorSecondary: '#00aeef',

  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appBorderColor: '#00aeef',
  appBorderRadius: 0,

  // Typography
  fontBase: '"Roboto',
  fontCode: 'monospace',

  // Text colors
  textColor: '#000000',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#8b959b',
  barSelectedColor: '#00aeef',
  barBg: '#ffffff',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandUrl: 'www.packwise.herokuapp.com'
});
