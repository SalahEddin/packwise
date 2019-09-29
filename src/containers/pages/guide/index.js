import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Questionnaire from 'presenters/organisms/questionnaire';
import { genWeatherQuestion, genActivities } from 'containers/qaManager';
import {
  filterEquipment,
  filterShelters,
  filterGear,
  aggregateChecklists
} from 'containers/checklistGenerator';
import Card from 'presenters/atoms/card';
import ChecklistGroup from 'presenters/atoms/checklist/checklistGroup';
import { loadActivities, loadShelters, loadClothing } from 'data/client';

let weatherQuestion = genWeatherQuestion();
let activitiesQuestion = genActivities();

function GuidePage(props) {
  GuidePage.propTypes = {};
  const [isQuestionnaireComplete, setIsQuestionnaireComplete] = useState(false);
  const [finalList, setFinalList] = useState([]);

  function onQuestionnaireComplete(weather, activities) {
    setIsQuestionnaireComplete(true);
    let allActivities = loadActivities();
    let shelters = loadShelters();
    let clothing = loadClothing();

    let activityIds = activities.map(x => x.value);
    let matchedEquipment = filterEquipment(allActivities, activityIds);
    let matchedShelter = filterShelters(shelters, weather);
    let matchedGear = filterGear(clothing, weather);
    let list = aggregateChecklists(
      matchedShelter,
      matchedEquipment,
      matchedGear
    );
    setFinalList(list);
  }

  function updateCheckedItems(id, category, checked) {
    console.log(`${id} in ${category} checked: ${checked}`);
    console.log(finalList[category].filter(x => x.key === id));
    console.log({ ...finalList });
    let processed = {
      ...finalList,
      [category]: finalList[category].map(x =>
        x.key === id ? { ...x, isChecked: checked } : x
      )
    };
    setFinalList(processed);
  }

  return (
    <div>
      <div style={{ display: isQuestionnaireComplete ? 'none' : 'block' }}>
        <Questionnaire
          weatherQuestion={weatherQuestion}
          activitiesQuestion={activitiesQuestion}
          onCompleted={(weather, activities) =>
            onQuestionnaireComplete(weather, activities)
          }
        />
      </div>
      <div style={{ display: isQuestionnaireComplete ? 'block' : 'none' }}>
        {isQuestionnaireComplete && (
          <Card header={'Packing List'}>
            <ChecklistGroup
              title={'Shelter'}
              items={finalList.shelter}
              onChange={(key, checkedState) => {
                updateCheckedItems(key, 'shelter', checkedState);
              }}
            ></ChecklistGroup>
            <ChecklistGroup
              title={'Equipment'}
              items={finalList.equipment}
              onChange={(key, checkedState) => {
                updateCheckedItems(key, 'equipment', checkedState);
              }}
            ></ChecklistGroup>
            <ChecklistGroup
              title={'Clothing'}
              items={finalList.clothing}
              onChange={(key, checkedState) => {
                updateCheckedItems(key, 'clothing', checkedState);
              }}
            ></ChecklistGroup>
          </Card>
        )}
      </div>
    </div>
  );
}

export default GuidePage;
