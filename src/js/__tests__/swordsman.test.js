import Swordsman from '../swordsman';

test('проверка Swordsman', () => {
  const testB = new Swordsman('test');
  const testId = {
    name: 'test',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(testB).toEqual(testId);
});
