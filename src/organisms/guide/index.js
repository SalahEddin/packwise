import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Questionnaire from 'organisms/questionnaire';
import { genWeatherQuestion, genActivities } from 'utils/qaManager';
import {
  filterEquipment,
  filterShelters,
  filterGear,
  aggregateChecklists
} from 'utils/checklistGenerator';
import Card from 'atoms/card';
import ChecklistGroup from 'atoms/checklist/ChecklistGroup';
import { loadActivities, loadShelters, loadClothing } from 'data/client';

let weatherQuestion = genWeatherQuestion();
let activitiesQuestion = genActivities();

function Guide(props) {
  Guide.propTypes = {};
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
    let processed = {
      ...finalList,
      [category]: finalList[category].map(x =>
        x.key === id ? { ...x, isChecked: checked } : x
      )
    };
    setFinalList(processed);
  }

  return (
    <div style={{height: '900px', width: "900px", marginTop: '50px'}}>
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
            />
            <ChecklistGroup
              title={'Equipment'}
              items={finalList.equipment}
              onChange={(key, checkedState) => {
                updateCheckedItems(key, 'equipment', checkedState);
              }}
            />
            <ChecklistGroup
              title={'Clothing'}
              items={finalList.clothing}
              onChange={(key, checkedState) => {
                updateCheckedItems(key, 'clothing', checkedState);
              }}
            />
          </Card>
        )}
      </div>
    </div>
  );
}

export default Guide;
