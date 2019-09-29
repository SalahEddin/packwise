import React from 'react';
import Workspace from 'templates/workspace';
import Guide from 'organisms/guide'

function PackHelper(props) {
  return <Workspace size={props.size} mainBox={<Guide/>}/>;
}

export default PackHelper;