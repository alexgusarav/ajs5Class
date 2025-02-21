import Daemon from '../daemon';

test('проверка Daemon', () => {
  const testB = new Daemon('test');
  const testId = {
    name: 'test',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(testB).toEqual(testId);
});
