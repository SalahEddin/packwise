import Climbing from './activity/activity_climbing';
import Hiking from './activity/activity_hiking';
import Cooking from './activity/activity_cooking';

import Shelter from './shelter/shelter';
import Clothing from './clothing/clothing';

let activities = [...Climbing, ...Hiking, ...Cooking];

export function loadActivities() {
  return activities;
}

export function loadShelters() {
  return Shelter;
}

export function loadClothing() {
  return Clothing;
}
