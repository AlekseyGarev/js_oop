const Daemon = require('../class/Daemon');
test('should create Daemon', () => {
    const char = new Daemon('Lucifer');
    expect(char.type).toBe('Daemon');
    expect(char.defence).toBe(40);
});