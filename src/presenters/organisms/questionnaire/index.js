import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from 'presenters/atoms/card';
import QuestionContainer from 'presenters/molecules/questionContainer';
import Combobox from 'presenters/atoms/combobox';
import CheckboxList from 'presenters/molecules/checkboxList';
import { genWeatherQuestion, genActivities } from 'containers/qaManager';
import { Button } from 'grommet';
import { QaSeperator } from 'presenters/molecules/questionContainer/index.styles';

function Questionnaire(props) {
  Questionnaire.propTypes = {
    onCompleted: PropTypes.func.isRequired
  };
  // TODO this will be asynchronous
  let weatherQuestion = genWeatherQuestion();
  let activitiesQuestion = genActivities();
  const [selectedWeather, setSelectedWeather] = useState(
    weatherQuestion.options[0]
  );
  const [selectedActivities, setSelectedActivities] = useState(
    activitiesQuestion.options
  );
  function onActivityChecked(activity, checkedState) {
    console.log(`${activity} is checked: ${checkedState}`);
    let updated = selectedActivities.map(x =>
      x.value === activity ? { ...x, checked: checkedState } : x
    );
    console.log(updated);
    setSelectedActivities(updated);
  }
  return (
    <Card
      header={
        'Answer these questions to get a packing list appropriate to your activities'
      }
    >
      <QuestionContainer label={weatherQuestion.label}>
        <Combobox
          options={weatherQuestion.options}
          selectedOption={selectedWeather}
          onChange={o => setSelectedWeather(o)}
        />
      </QuestionContainer>
      <QaSeperator />
      <QuestionContainer label={activitiesQuestion.label}>
        <CheckboxList
          options={selectedActivities}
          setChecked={(o, checkedstate) => onActivityChecked(o, checkedstate)}
        />
      </QuestionContainer>
      <Button
        margin="medium"
        label="Submit"
        onClick={(selectedWeather, selectedActivities) => {
          props.onCompleted(selectedWeather, selectedActivities);
        }}
      />
    </Card>
  );
}

export default Questionnaire;
