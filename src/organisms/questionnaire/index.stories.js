import React from 'react';
import { storiesOf } from '@storybook/react';
import Questionnaire from './index';
import { genWeatherQuestion, genActivities } from 'utils/qaManager';

let weatherQuestion = genWeatherQuestion();
let activitiesQuestion = genActivities();

storiesOf('Organisms', module).add('Questionnaire', () => (
  <Questionnaire
    activitiesQuestion={activitiesQuestion}
    weatherQuestion={weatherQuestion}
    onCompleted={() => {
      console.log('completed questions');
    }}
  />
));
