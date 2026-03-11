class Character {
    constructor(name, type) {
        if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
            throw new Error('Введеное имя должно быть строкой и иметь длинну от 2 до 10 символов');
        }

        const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
        if (!types.includes(type)) {
            throw new Error("Неверный тип персонажа");
        }

        this.name = name;
        this.type = type;

        this.health = 100;
        this.level = 1;

        this.attack = 0;
        this.defence = 0;
    }

    levelUp() {
        if (this.health <= 0) {
            throw new Error("Персонаж умер, нельзя повысить уровень..");
        }
    
        this.level += 1;
        this.attack *= 1.2;
        this.defence *= 1.2;
        this.health = 100;
    }
    
    damage(points) {
        if (this.health > 0) {
            this.health -= points * (1 - this.defence / 100);
        }
    
        if (this.health < 0) {
            this.health = 0;
        }
    }
}


module.exports = Character;



