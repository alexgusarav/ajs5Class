import Magician from '../magician';

test('проверка Magician', () => {
  const testB = new Magician('test');
  const testId = {
    name: 'test',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(testB).toEqual(testId);
});
