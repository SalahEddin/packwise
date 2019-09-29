import React from 'react';

import { storiesOf } from '@storybook/react';
import Combobox from 'atoms/combobox';

const options = [
  { id: 1, name: 'test 1' },
  { id: 2, name: 'test 2' },
  { id: 3, name: 'test 3' }
];
storiesOf('Atoms|Combobox', module).add('Combobox', () => (
  <Combobox options={options} onChange={o => console.log(o)}></Combobox>
));
