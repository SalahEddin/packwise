import React from 'react';

import { storiesOf } from '@storybook/react';
import ChecklistGroup from 'presenters/atoms/checklist-group';

let items = [
  { key: '1', text: 'Potato', isChecked: false },
  { key: '2', text: 'Shoe', isChecked: true }
];

storiesOf('Checklist Card', module).add('Card Group', () => (
  <ChecklistGroup
    title={'Dummy Header'}
    items={items}
    onChange={(key, checkedState) => {}}
  ></ChecklistGroup>
));
