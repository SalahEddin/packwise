import React from 'react';

import { storiesOf } from '@storybook/react';
import QuestionContainer from './index';
import Combobox from 'presenters/atoms/combobox';

const options = [
  { id: 1, name: 'test 1' },
  { id: 2, name: 'test 2' },
  { id: 3, name: 'test 3' }
];
storiesOf('Molecules|Questions', module).add('Combobox', () => (
  <QuestionContainer label={'test'}>
    <Combobox options={options} onChange={o => console.log(o)}></Combobox>
  </QuestionContainer>
));
