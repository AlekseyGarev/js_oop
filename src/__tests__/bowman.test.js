const Bowman = require('../class/Bowman');

test('should create Bowman with correct stats', () => {
    const result = new Bowman('Robin');
    const expected = {
        name: 'Robin',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    };
    expect(result).toEqual(expected);
});