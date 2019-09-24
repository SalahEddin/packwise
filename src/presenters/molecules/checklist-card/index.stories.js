import React from 'react';

import { storiesOf } from '@storybook/react';
import ChecklistCard from 'presenters/molecules/checklist-card';
import Card from 'presenters/atoms/card/index';

let items = [
  { key: '1', text: 'Potato', isChecked: false, collection: 'food' },
  { key: '2', text: 'Shoe', isChecked: true, collection: 'food' },
  { key: '3', text: 'Tent', isChecked: true, collection: 'shelter' }
];

storiesOf('Checklist Card', module).add('Empty Card', () => (
  <ChecklistCard initalCheckListItemsState={[]} />
));

storiesOf('Checklist Card', module).add('Card', () => (
  <Card header={'Packing List'}>
    <ChecklistCard initalCheckListItemsState={items} />
  </Card>
));