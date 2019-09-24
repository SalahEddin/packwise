import Climbing from './../../data/activity/activity_climbing';
import Hiking from './../../data/activity/activity_hiking';
import Cooking from './../../data/activity/activity_cooking';

// TODO get this from a weather API by specifying time and location
export function genWeatherQuestion() {
  return {
    question: 'what will the weather be like?',
    options: [
      {
        description: 'Sunny',
        value: ['sunny']
      },
      {
        description: 'Rainy',
        value: ['rain']
      },
      {
        description: 'Rainy & Windy',
        value: ['rain', 'strong_wind']
      },
      {
        description: 'Snowy',
        value: ['snow']
      }
    ]
  };
}

function getActiviesKeyVal(i) {
  return {
    activity_ID: i.activity_ID,
    activity_name: i.activity_name
  };
}
// TODO: request from packwise-data repo
export function genActivities() {
  let options = [
    ...Climbing.map(getActiviesKeyVal),
    ...Hiking.map(getActiviesKeyVal),
    ...Cooking.map(getActiviesKeyVal)
  ];
  return {
    question: 'What activities do you plan to do',
    options: options
  };
}
