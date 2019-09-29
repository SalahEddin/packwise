import { genWeatherQuestion, genActivities } from './index';

it('non-empty weather question and answers', () => {
  let { label, options } = genWeatherQuestion();
  expect(label !== '').toBe(true);
  expect(options.length > 0).toBe(true);
});

it('all weather answers have description and values', () => {
  let { options } = genWeatherQuestion();
  options.forEach(o => {
    expect(o.label && o.label !== '').toBe(true);
    expect(o.value.length > 0).toBe(true);
  });
});

it('non-empty activities question and answers', () => {
  let { label, options } = genActivities();
  expect(label !== '').toBe(true);
  expect(options.length > 0).toBe(true);
});

it('all activities have description and values', () => {
  let { options } = genActivities();
  options.forEach(o => {
    expect(o.value && o.value !== '').toBe(true);
    expect(o.label && o.label !== '').toBe(true);
  });
});
