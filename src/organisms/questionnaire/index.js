import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from 'atoms/card';
import QuestionContainer from 'molecules/questionContainer';
import Combobox from 'atoms/combobox';
import CheckboxList from 'molecules/checkboxList';
import { Button } from 'grommet';
import { QaSeparator } from 'molecules/questionContainer/index.styles';

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
      <QaSeparator margin="14px" />
      <QuestionContainer label={props.activitiesQuestion.label}>
        <CheckboxList
          options={activityOptionsState}
          setChecked={(o, checkedState) => onActivityChecked(o, checkedState)}
        />
      </QuestionContainer>
      <Button
        margin="medium"
        label="Submit"
        primary={true}
        type="submit"
        hoverIndicator={true}
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
