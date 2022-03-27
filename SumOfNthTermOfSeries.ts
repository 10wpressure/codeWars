export function SeriesSum (n: number): string {
    const term = (x: number) => 1 + 3 * (x - 1)
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += 1 / term(i)
    }
    return sum.toFixed(2)
}

import { assert } from 'chai';
import { describe, it } from 'mocha'

describe('solution', function () {
    it('Basic Tests', function () {
        assert.equal(SeriesSum(1), '1.00');
        assert.equal(SeriesSum(2), '1.25');
        assert.equal(SeriesSum(3), '1.39');
        assert.equal(SeriesSum(4), '1.49');
    });
});