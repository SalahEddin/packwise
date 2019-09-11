import React from 'react';

import { storiesOf } from '@storybook/react';
import Card from 'presenters/atoms/card';

storiesOf('Atoms|Card', module).add('card', () => (
  <Card header={'Food'}>
    <p>Card</p>
  </Card>
));
