import { css } from '@emotion/core';
import theme from 'base/theme';

export default css`
  html {
    font-family: ${theme.default.font};
    font-size: ${theme.default.fontSize};
  }
  body {
    margin: 0;
    padding: 0;
  }
`;
