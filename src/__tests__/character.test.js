const Character = require('../class/Character');

test('should throw error for invalid name', () => {
    expect(() => new Character('A', 'Bowman')).toThrow();
});

test('should throw error for invalid type', () => {
    expect(() => new Character('Hero', 'Warrior')).toThrow();
});

module.exports = Character;