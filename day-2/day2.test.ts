const fs = require('fs');
import {Game} from "./models/Game";
describe('Day two tests', () => {

       let input = fs.readFileSync('day-2/input.txt', 'utf8');

    it('getCalibrationValue function should return correct results', () => {

        const game1 = new Game("Game 1", 1,2, 3)

        console.log(game1.redDie.value)
        console.log(game1.id)



        // expect(getCalibrationValue(input)).toBe(`Part 1: 54634, Part 2: 53855`);
    });
});
