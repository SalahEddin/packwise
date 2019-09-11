import React from 'react';

import { configure, addDecorator } from '@storybook/react';

const req = require.context('../src/', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(story => <div>{story()}</div>);

configure(loadStories, module);
