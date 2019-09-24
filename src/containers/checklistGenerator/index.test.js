import { filterShelters, primitiveArraysEqual } from './index';

// primitiveArraysEqual Tests

it('string array equality', () => {
  expect(primitiveArraysEqual(['sun'], ['sun'])).toBe(true);
  expect(primitiveArraysEqual(['sun'], ['cold'])).toBe(false);
  expect(primitiveArraysEqual(['sun', 'cold'], ['sun', 'cold'])).toBe(true);
  expect(primitiveArraysEqual(['sun', 'cold'], ['cold', 'sun'])).toBe(true);
});

// filterShelters Tests

const shelterMockOptions = [
  {
    shelter_name: 'tent',
    aliases: [],
    apropriate_conditions: [[], ['rain']]
  },
  {
    shelter_name: 'geodesic tent',
    aliases: ['semi-geodesic'],
    apropriate_conditions: [
      ['strong_wind'],
      ['snow'],
      ['snow', 'strong_wind'],
      ['rain']
    ]
  },
  {
    shelter_name: 'hammock',
    aliases: ['Mexican hammock'],
    apropriate_conditions: [['sun', 'warm']]
  }
];

it('one match found', () => {
  const hammock = shelterMockOptions[2];
  expect(
    JSON.stringify(filterShelters(shelterMockOptions, ['sun', 'warm']))
  ).toBe(JSON.stringify([hammock]));
});

it('empty match found', () => {
  const tent = shelterMockOptions[0];
  expect(JSON.stringify(filterShelters(shelterMockOptions, []))).toBe(
    JSON.stringify([tent])
  );
});

it('no match found', () => {
  expect(JSON.stringify(filterShelters(shelterMockOptions, ['potato']))).toBe(
    JSON.stringify([])
  );
});

it('multiple matches found', () => {
  expect(
    primitiveArraysEqual(filterShelters(shelterMockOptions, ['rain']), [
      shelterMockOptions[0],
      shelterMockOptions[1]
    ])
  ).toBe(true);
});
