const normAngle = require("../src/lib/math");

describe('test normAngle',() => {
    test('test calcul bizarre', () => {
        expect(normAngle(-3*Math.PI/4)).toBe(-2.356194490192345);
    })
})