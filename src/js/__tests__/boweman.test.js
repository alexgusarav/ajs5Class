import Boweman from '../boweman';

test('проверка Boweman', () => {
  const testB = new Boweman('test');
  const testId = {
    name: 'test',
    type: 'Boweman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(testB).toEqual(testId);
});
