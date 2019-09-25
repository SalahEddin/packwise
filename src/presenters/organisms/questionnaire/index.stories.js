import React from 'react';

import { storiesOf } from '@storybook/react';
import Questionnaire from './index';

storiesOf('Organisms', module).add('Questionnaire', () => (
  <Questionnaire
    onCompleted={() => {
      console.log('completed questions');
    }}
  />
));
