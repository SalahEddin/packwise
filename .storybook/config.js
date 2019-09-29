import React from 'react';
import Provider from 'base/provider/storybook';
import storybookTheme from './storybookTheme';
import { configure, addDecorator, addParameters } from '@storybook/react';

const req = require.context('../src/', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addParameters({
  options: {
    theme: storybookTheme
  }
});

addDecorator(story => <Provider story={story()} />);
addDecorator(story => <div>{story()}</div>);

configure(loadStories, module);
