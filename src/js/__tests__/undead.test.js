import Undead from '../undead';

test('проверка Undead', () => {
  const testB = new Undead('test');
  const testId = {
    name: 'test',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(testB).toEqual(testId);
});
