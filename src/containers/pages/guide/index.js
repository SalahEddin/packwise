import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Questionnaire from 'presenters/organisms/questionnaire';
import { genWeatherQuestion, genActivities } from 'containers/qaManager';
import {
  filterEquipment,
  filterShelters,
  filterGear
} from 'containers/checklistGenerator';
import { loadActivities, loadShelters, loadClothing } from 'data/client';

let weatherQuestion = genWeatherQuestion();
let activitiesQuestion = genActivities();

function GuidePage(props) {
  GuidePage.propTypes = {};
  const [isQuestionnaireComplete, setIsQuestionnaireComplete] = useState(false);
  function onQuestionnaireComplete(weather, activities) {
    setIsQuestionnaireComplete(true);
    let allActivities = loadActivities();
    let shelters = loadShelters();
    let clothing = loadClothing();

    let activityIds = activities.map(x => x.value);
    let matchedEquipment = filterEquipment(allActivities, activityIds);
    let matchedShelter = filterShelters(shelters, weather);
    let matchedGear = filterGear(clothing, weather);
    console.log(matchedEquipment);
    console.log(matchedShelter);
    console.log(matchedGear);
  }

  return (
    <div>
      <div
        style={{ visibility: isQuestionnaireComplete ? 'collapse' : 'visible' }}
      >
        <Questionnaire
          weatherQuestion={weatherQuestion}
          activitiesQuestion={activitiesQuestion}
          onCompleted={(weather, activities) =>
            onQuestionnaireComplete(weather, activities)
          }
        />
      </div>
      <div
        style={{ visibility: isQuestionnaireComplete ? 'visible' : 'collapse' }}
      >
        {/* checklist generator */}
      </div>
    </div>
  );
}

export default GuidePage;
