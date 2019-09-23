import React from 'react';

import { storiesOf } from '@storybook/react';
import ChecklistItem from 'presenters/atoms/checklist-item';

storiesOf('Checklist Card', module).add('Checked List Item', () => (
  <ChecklistItem text="Checked state" isChecked={true} onChange={() => {}} />
));

storiesOf('Checklist Card', module).add('Unchecked List Item', () => (
  <ChecklistItem text="Unchecked state" isChecked={false} onChange={() => {}} />
));
