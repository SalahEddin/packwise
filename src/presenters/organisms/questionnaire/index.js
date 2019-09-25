import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from 'presenters/atoms/card';
import QuestionContainer from 'presenters/molecules/questionContainer';
import Combobox from 'presenters/atoms/combobox';
import CheckboxList from 'presenters/molecules/checkboxList';
import { Button } from 'grommet';
import { QaSeperator } from 'presenters/molecules/questionContainer/index.styles';

function Questionnaire(props) {
  Questionnaire.propTypes = {
    weatherQuestion: PropTypes.shape({
      label: PropTypes.string,
      options: PropTypes.array.isRequired
    }),
    activitiesQuestion: PropTypes.shape({
      label: PropTypes.string,
      options: PropTypes.array.isRequired
    }),
    onCompleted: PropTypes.func.isRequired
  };
  const [selectedWeather, setSelectedWeather] = useState(
    props.weatherQuestion.options[0]
  );
  const [activityOptionsState, setActivityOptionsState] = useState(
    props.activitiesQuestion.options
  );

  function onActivityChecked(activity, checkedState) {
    let updated = activityOptionsState.map(x =>
      x.value === activity ? { ...x, checked: checkedState } : x
    );
    setActivityOptionsState(updated);
  }

  return (
    <Card
      header={
        'Answer these questions to get a packing list appropriate to your activities'
      }
    >
      <QuestionContainer label={props.weatherQuestion.label}>
        <Combobox
          options={props.weatherQuestion.options}
          selectedOption={selectedWeather}
          onChange={o => setSelectedWeather(o)}
        />
      </QuestionContainer>
      <QaSeperator />
      <QuestionContainer label={props.activitiesQuestion.label}>
        <CheckboxList
          options={activityOptionsState}
          setChecked={(o, checkedstate) => onActivityChecked(o, checkedstate)}
        />
      </QuestionContainer>
      <Button
        margin="medium"
        label="Submit"
        onClick={() => {
          props.onCompleted(
            selectedWeather.value,
            activityOptionsState.filter(x => x.checked)
          );
        }}
      />
    </Card>
  );
}

export default Questionnaire;
