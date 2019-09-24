import { genWeatherQuestion, genActivities } from './index';

it('non-empty weather question and answers', () => {
  let { question, options } = genWeatherQuestion();
  expect(question !== '').toBe(true);
  expect(options.length > 0).toBe(true);
});

it('all weather answers have description and values', () => {
  let { options } = genWeatherQuestion();
  options.forEach(o => {
    expect(o.description && o.description !== '').toBe(true);
    expect(o.value.length > 0).toBe(true);
  });
});

it('non-empty activities question and answers', () => {
  let { question, options } = genActivities();
  expect(question !== '').toBe(true);
  expect(options.length > 0).toBe(true);
});

it('all activities have description and values', () => {
  let { options } = genActivities();
  options.forEach(o => {
    expect(o.activity_ID && o.activity_ID !== '').toBe(true);
    expect(o.activity_name && o.activity_name !== '').toBe(true);
  });
});
