import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Collapsible, Heading, Layer } from 'grommet';
import { FormClose, Notification } from 'grommet-icons';

const AppBar = props => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation="medium"
    style={{ zIndex: '1' }}
    {...props}
  />
);

function Workspace(props) {
  Workspace.propTypes = {
    size: PropTypes.any,
    mainBox: PropTypes.node
  };

  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <Box fill>
      <AppBar>
        <Heading level="4" margin="none">
          Packwise
        </Heading>
        <Button
          icon={<Notification />}
          onClick={() => setShowSidebar(!showSidebar)}
        />
      </AppBar>
      <Box direction="row" flex overflow={{ horizontal: 'hidden' }}>
        <Box flex align="center" justify="center">
          {props.mainBox}
        </Box>
        {!showSidebar || props.size !== 'small' ? (
          <Collapsible direction="horizontal" open={showSidebar}>
            <Box
              flex
              width="medium"
              background="light-2"
              elevation="small"
              align="center"
              justify="center"
            >
              sidebar
            </Box>
          </Collapsible>
        ) : (
          <Layer>
            <Box
              background="light-2"
              tag="header"
              justify="end"
              align="center"
              direction="row"
            >
              <Button
                icon={<FormClose />}
                onClick={() => setShowSidebar(false)}
              />
            </Box>
            <Box fill background="light-2" align="center" justify="center">
              sidebar
            </Box>
          </Layer>
        )}
      </Box>
    </Box>
  );
}

export default Workspace;
