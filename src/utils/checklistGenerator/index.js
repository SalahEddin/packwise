// for now this logic will live on the client-side

export function filterByConditions(options, selectedConditions) {
  let filtered = options.filter(function(entry) {
    let conditionsSet = entry.apropriate_conditions;
    for (var i = 0, l = conditionsSet.length; i < l; i++) {
      let set = conditionsSet[i];
      if (primitiveArraysEqual(set, selectedConditions)) return true;
    }
    return false;
  });
  return filtered;
}

export function filterShelters(options, selectedConditions) {
  return filterByConditions(options, selectedConditions);
}

export function filterGear(options, selectedConditions) {
  return filterByConditions(options, selectedConditions);
}

export function filterEquipment(options, selectedActivitiesId = []) {
  // no selected activities
  if (selectedActivitiesId.length === 0) return [];
  let filtered = options
    .filter(x => selectedActivitiesId.includes(x.activity_ID))
    .map(y => y.equipment);
  // no matching activities
  if (filtered.length === 0) return [];
  let flattenedList = [].concat(...filtered);
  let finalList = [];

  // loop items in every other activity
  for (var y = 0; y < flattenedList.length; y++) {
    let currentItem = flattenedList[y];
    // check if item already exists
    let duplicates = finalList.filter(x => x.item === currentItem.item);
    if (duplicates.length === 0) {
      finalList.push(currentItem);
    } else {
      // reduce duplicates
      let isAlreadyEssential = duplicates.reduce(
        (prev, curr) => prev.essential || curr.essential
      ).essential;
      if (!isAlreadyEssential && currentItem.essential) {
        // only update it when current item is essential but the one in the final list is not
        finalList = finalList.map(x =>
          x.item === currentItem.item ? { ...currentItem } : x
        );
      }
    }
  }
  return [].concat(...finalList);
}

export function primitiveArraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  // Please note that calling sort on an array will modify that array.
  // you might want to clone your array first.
  a.sort();
  b.sort();

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
