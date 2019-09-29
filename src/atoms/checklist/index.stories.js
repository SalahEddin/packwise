import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import ChecklistItem from 'atoms/checklist/ChecklistItem';
import ChecklistGroup from 'atoms/checklist/ChecklistGroup';

let items = [
  { key: '1', text: 'Potato', isChecked: false },
  { key: '2', text: 'Shoe', isChecked: true }
];

const checklist = storiesOf('Atoms|Checklist', module).addDecorator(withKnobs);

checklist.add('Checklist Item', () => {
  const checked = boolean('Checked item', false);

  return (
    <ChecklistItem
      text="Checked state"
      isChecked={checked}
      onChange={() => {}}
    />
  );
});

checklist.add('Checklist Group', () => (
  <ChecklistGroup
    title={'Dummy Header'}
    items={items}
    onChange={() => {}}
  />
));