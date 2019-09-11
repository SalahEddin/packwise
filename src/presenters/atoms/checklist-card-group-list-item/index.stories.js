import React from 'react';

import { storiesOf } from '@storybook/react';
import ChecklistCardGroupListItem from 'presenters/atoms/checklist-card-group-list-item';

storiesOf('Atoms|Checklist Card', module).add('Checked List Item', () => (
  <ChecklistCardGroupListItem text="Checked state" isChecked={true} onChange={()=>{}}/>
));

storiesOf('Atoms|Checklist Card', module).add('Unchecked List Item', () => (
    <ChecklistCardGroupListItem text="Unchecked state" isChecked={false} onChange={()=>{}}/>
  ));
  