import React from 'react';

import { storiesOf } from '@storybook/react';
import CheckboxList from './index';

const options = [
  { value: 1, label: 'test 1', checked: true },
  { value: 2, label: 'test 2', checked: false },
  { value: 3, label: 'test 3', checked: true }
];
storiesOf('Molecules|Questions', module).add('Multiple Checkboxes', () => (
  <CheckboxList
    options={options}
    setChecked={(id, checked) => console.log(`newState of ${id} is ${checked}`)}
  />
));
