const Magician = require('../class/Magician');
test('should create Magician', () => {
    const char = new Magician('Merlin');
    expect(char.attack).toBe(10);
    expect(char.defence).toBe(40);
});