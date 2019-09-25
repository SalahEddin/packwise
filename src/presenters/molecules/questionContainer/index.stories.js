import React from 'react';

import { storiesOf } from '@storybook/react';
import QuestionContainer from './index';
import Combobox from 'presenters/atoms/combobox';
import CheckboxList from 'presenters/molecules/checkboxList';

const options = [
  { value: 1, label: 'test 1', checked: true },
  { value: 2, label: 'test 2', checked: false },
  { value: 3, label: 'test 3', checked: true }
];

storiesOf('Molecules|Questions', module).add('Combobox', () => (
  <div>
    <QuestionContainer label={'test'}>
      <Combobox options={options} onChange={o => console.log(o)}></Combobox>
    </QuestionContainer>
    <QuestionContainer label={'muliple checkboxes questions'}>
      <CheckboxList
        options={options}
        setChecked={(id, checked) =>
          console.log(`newState of ${id} is ${checked}`)
        }
      />
    </QuestionContainer>
  </div>
));
