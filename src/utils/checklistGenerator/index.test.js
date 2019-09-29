import {
  filterShelters,
  primitiveArraysEqual,
  filterGear,
  filterEquipment,
  aggregateChecklists
} from './index';

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

// filterGear Tests

it('gear match found', () => {
  const pantsOptions = [
    {
      gear_name: 'quick-dry pants',
      gear_type: 'pants',
      aliases: [],
      apropriate_conditions: [[]]
    },
    {
      gear_name: 'quick-dry shorts',
      gear_type: 'pants',
      aliases: [],
      apropriate_conditions: [['warm'], ['warm', 'sunny']]
    }
  ];
  const apropriate_conditions = ['warm'];
  expect(JSON.stringify(filterGear(pantsOptions, apropriate_conditions))).toBe(
    JSON.stringify([pantsOptions[1]])
  );
});

// filter equipment
const activityMockOptions = [
  {
    activity_ID: 'activity_base',
    activity_name: 'general items',
    short_description: 'items needed for all activities',
    aliases: ['base'],
    shelter_needed: false,
    equipment: [
      { item: 'watch', essential: true },
      { item: 'headlamp', essential: false },
      { item: 'multi-tool', essential: true }
    ]
  },
  {
    activity_ID: 'activity_make_coffee',
    activity_name: 'make coffee',
    short_description: '',
    aliases: ['tea', 'hot beverage'],
    shelter_needed: false,
    equipment: [
      { item: 'matches or lighter', essential: true },
      { item: 'coffee maker', essential: false }
    ]
  },
  {
    activity_ID: 'activity_one_day_hike',
    activity_name: 'one-day hiking',
    short_description: '',
    aliases: ['trekking'],
    shelter_needed: false,
    equipment: [
      { item: 'hiking boots', essential: true },
      { item: 'hiking sticks', essential: false },
      { item: 'headlamp', essential: true }
    ]
  }
];

it('no activity chosen', () => {
  expect(JSON.stringify(filterEquipment(activityMockOptions))).toBe(
    JSON.stringify([])
  );
});

it('invalid activity chosen', () => {
  expect(
    JSON.stringify(filterEquipment(activityMockOptions, ['invalid']))
  ).toBe(JSON.stringify([]));
});

it('one activity chosen', () => {
  let expectedEquipment = [
    { item: 'watch', essential: true },
    { item: 'headlamp', essential: false },
    { item: 'multi-tool', essential: true }
  ];
  expect(
    JSON.stringify(filterEquipment(activityMockOptions, ['activity_base']))
  ).toBe(JSON.stringify(expectedEquipment));
});

it('multiple non-clashing activities chosen', () => {
  let expectedEquipment = [
    { item: 'coffee maker', essential: false },
    { item: 'headlamp', essential: false },
    { item: 'matches or lighter', essential: true },
    { item: 'multi-tool', essential: true },
    { item: 'watch', essential: true }
  ];
  let result = filterEquipment(activityMockOptions, [
    'activity_base',
    'activity_make_coffee'
  ]);
  result.sort((a, b) => a.item.localeCompare(b.item));

  expect(JSON.stringify(result)).toBe(JSON.stringify(expectedEquipment));
});

it('multiple clashing activities chosen', () => {
  let expectedEquipment = [
    { item: 'headlamp', essential: true },
    { item: 'hiking boots', essential: true },
    { item: 'hiking sticks', essential: false },
    { item: 'multi-tool', essential: true },
    { item: 'watch', essential: true }
  ];
  let result = filterEquipment(activityMockOptions, [
    'activity_base',
    'activity_one_day_hike'
  ]);
  result.sort((a, b) => a.item.localeCompare(b.item));

  expect(JSON.stringify(result)).toBe(JSON.stringify(expectedEquipment));
});

// aggregate lists
it('non-empty lists', () => {
  let equipment = [{item: "daypack", essential: true}];
  let shelter = [{shelter_name: "geodesic tent", aliases: [], apropriate_conditions: []}];
  let clothing = [{gear_name: "sunglasses", gear_type: "eyewear", aliases: [], apropriate_conditions: []}]
  let result = aggregateChecklists(shelter, equipment, clothing);
  expect(result.length).toBe(3);
});

it('one empty list', () => {
  let equipment = [];
  let shelter = [{shelter_name: "geodesic tent", aliases: [], apropriate_conditions: []}];
  let clothing = [{gear_name: "sunglasses", gear_type: "eyewear", aliases: [], apropriate_conditions: []}]
  let result = aggregateChecklists(shelter, equipment, clothing);
  expect(result.length).toBe(2);
});