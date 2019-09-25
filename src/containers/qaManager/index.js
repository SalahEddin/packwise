import Climbing from './../../data/activity/activity_climbing';
import Hiking from './../../data/activity/activity_hiking';
import Cooking from './../../data/activity/activity_cooking';

// TODO get this from a weather API by specifying time and location
export function genWeatherQuestion() {
  return {
    label: 'what will the weather be like?',
    options: [
      {
        label: 'Sunny',
        value: ['sunny']
      },
      {
        label: 'Rainy',
        value: ['rain']
      },
      {
        label: 'Rainy & Windy',
        value: ['rain', 'strong_wind']
      },
      {
        label: 'Snowy',
        value: ['snow']
      }
    ]
  };
}

function getActiviesKeyVal(i) {
  return {
    value: i.activity_ID,
    label: i.activity_name
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
    label: 'What activities do you plan to do',
    options: options
  };
}
