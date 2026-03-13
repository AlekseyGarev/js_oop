const Swordsman = require('../class/Swordsman');
test('should create Swordsman', () => {
    const char = new Swordsman('Artur');
    expect(char.attack).toBe(40);
    expect(char.defence).toBe(10);
});