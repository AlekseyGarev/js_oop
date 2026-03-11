const Character = require('../Character');

test('test example', () => {
    const char = new Character('Hero', 'Bowman');
    expect(char.health).toBe(100);
});


describe('Character class tests', () => {
    
    test('should create a character correctly', () => {
        const char = new Character('Hero', 'Bowman');
        expect(char.name).toBe('Hero');
        expect(char.health).toBe(100);
    });

    test('should throw error for short name', () => {
        expect(() => new Character('A', 'Bowman')).toThrow();
    });

    test('should throw error for invalid type', () => {
        expect(() => new Character('Hero', 'Dragon')).toThrow();
    });

    test('levelUp should increase stats and heal', () => {
        const char = new Character('Hero', 'Bowman');
        char.attack = 25;
        char.defence = 25;
        char.damage(50);
        char.levelUp();
        expect(char.level).toBe(2);
        expect(char.attack).toBe(30);
        expect(char.health).toBe(100);
    });

    test('levelUp should throw error if dead', () => {
        const char = new Character('Hero', 'Bowman');
        char.health = 0;
        expect(() => char.levelUp()).toThrow("Персонаж умер, нельзя повысить уровень..");
    });

    test('damage should reduce health correctly', () => {
        const char = new Character('Hero', 'Bowman');
        char.defence = 25;
        char.damage(100);
        expect(char.health).toBe(25);
    });

    test('damage should not set health below 0', () => {
        const char = new Character('Hero', 'Bowman');
        char.damage(200);
        expect(char.health).toBe(0);
    });
});