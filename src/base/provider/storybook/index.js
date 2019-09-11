import React from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';

import globalStyles from 'base/globalStyles';
import theme from 'base/theme';

function Provider(props) {
  Provider.propTypes = {
    story: PropTypes.node.isRequired
  };

  return (
    <>
      <Global styles={globalStyles} />
      <ThemeProvider theme={theme}>{props.story}</ThemeProvider>
    </>
  );
}

export default Provider;
