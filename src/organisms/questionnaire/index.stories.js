import React from 'react';
import { storiesOf } from '@storybook/react';
import Questionnaire from './index';
import { genWeatherQuestion, genActivities } from 'utils/qaManager';

let weatherQuestion = genWeatherQuestion();
let activitiesQuestion = genActivities();

storiesOf('Organisms|Questionnaire', module).add('Questionnaire', () => (
  <div style={{ height: '700px' }}>
    <Questionnaire
      activitiesQuestion={activitiesQuestion}
      weatherQuestion={weatherQuestion}
      onCompleted={() => {
        console.log('completed questions');
      }}
    />
  </div>
));
