const Undead = require('../class/Undead');
test('should create Undead', () => {
    const char = new Undead('Skeleton');
    expect(char.attack).toBe(25);
});