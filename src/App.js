import React from 'react';
import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import { Grommet, ResponsiveContext } from 'grommet';
import globalStyles from 'base/globalStyles';
import theme from 'base/theme';
import PackHelper from 'pages/packHelper';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Grommet theme={theme} full>
        <ResponsiveContext.Consumer>
          {size => <PackHelper size={size} />}
        </ResponsiveContext.Consumer>
      </Grommet>
    </ThemeProvider>
  );
}

export default App;
