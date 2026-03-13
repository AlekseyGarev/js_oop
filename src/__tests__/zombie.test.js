const Zombie = require('../class/Zombie');
test('should create Zombie', () => {
    const char = new Zombie('Walker');
    expect(char.type).toBe('Zombie');
    expect(char.attack).toBe(40);
});