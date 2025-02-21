import Zombie from '../zombie';

test('проверка Zombie', () => {
  const testB = new Zombie('test');
  const testId = {
    name: 'test',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(testB).toEqual(testId);
});