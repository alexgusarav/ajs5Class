export default class Character {
    static typeBase = [
      'Boweman',
      'Swordsman',
      'Magician',
      'Daemon',
      'Undead',
      'Zombie',
    ];
  
    constructor(name, type) {
      if (typeof name === 'string' && name.length >= 2 && name.length <= 10) {
        this.name = name;
      } else {
        throw new Error("ошибка, имя должно быть строкой от 2 до 10 символов");
      }
      if (Character.typeBase.includes(type)) {
        this.type = type;
      } else {
        throw new Error('Выберете тип из: Boweman, Swordsman, Magician, Daemon, Undead, Zombie');
      }
      this.health = 100;
      this.level = 1;
    }
    
    levelUp() {
      if (this.health > 0) {
          this.level += 1;
          this.attack *= 1.2;
          this.defence *= 1.2;
          this.health = 100;
      } else {
          throw new Error('персонаж не здоров');
      }
    }

  damage(points) {
      this.health -= points * (1 - this.defence / 100);
      if (this.health < 0) {
          this.health = 0;
      }
  }
}
