import Character from '../character';
import Boweman from '../boweman';

test('проверка по длине имени', () => {
  const testLen = () => new Character('t', 'Boweman');
  expect(testLen).toThrow("ошибка, имя должно быть строкой от 2 до 10 символов");
});

test('проверка по выбору класса', () => {
  const testCl = () => new Character('test', 'noClass');
  expect(testCl).toThrow('Выберете тип из: Boweman, Swordsman, Magician, Daemon, Undead, Zombie');
});

test('проверка базового типа', () => {
    const testCh = new Character('test', 'Boweman')
    const testId = {
        name: 'test',
        type: 'Boweman',
        health: 100,
        level: 1,
    }
    expect(testCh).toEqual(testId);
});

test('проверка изменения уровня', () => {
    const testB = {
      name: 'test',
      type: 'Boweman',
      health: 100,
      level: 2,
      attack: 30,
      defence: 30,
    };
    const unit = new Boweman('test', 'Boweman');
    unit.levelUp();
    expect(unit).toEqual(testB);
});
  
test('проверка изменения уровня не здорового героя', () => {
    const unit = new Boweman('test', 'Boweman');
    unit.health = 0;
    expect(() => unit.levelUp()).toThrow('персонаж не здоров');
});
  
test('проверка получения урона', () => {
    const unit1 = {
      name: 'test',
      type: 'Boweman',
      health: 92.5,
      level: 1,
      attack: 25,
      defence: 25,
    };
    const unit = new Boweman('test', 'Boweman');
    unit.damage(10);
    expect(unit).toEqual(unit1);
});
 
test('смерть персонажа после урона', () => {
    const unit = new Boweman('test', 'Boweman');
    unit.health = 5;
    unit.damage(10)
    expect(unit.health).toEqual(0);
});