const fs = require('fs');
import { getCalibrationValue } from './day1';

describe('Day one tests', () => {

       let input = fs.readFileSync('day-1/input.txt', 'utf8');

    it('getCalibrationValue function should return correct results', () => {
        expect(getCalibrationValue(input)).toBe(`Part 1: 54634, Part 2: 53855`);
    });
});
