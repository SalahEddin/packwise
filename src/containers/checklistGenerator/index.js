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
