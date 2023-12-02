const fs = require('fs');
import {Game, Games} from "./models/Game";



describe('Day two tests', () => {

       let input = fs.readFileSync('day-2/input.txt', 'utf8');


    //t1 push game ids to array and add

//t2 when given the values, the method can create a dice with the highest numbers




    it('the Game Class can return its id as a number ', () => {

        const game1 = new Game("Game 1: 6 green, 3 blue; 3 red, 1 green; 4 green, 3 red, 5 blue")
        const game2 = new Game("Game 2: 6 green, 3 blue; 3 red, 1 green; 4 green, 3 red, 5 blue")
        const game3 = new Game("Game 3: 6 green, 3 blue; 3 red, 1 green; 4 green, 3 red, 5 blue")



        expect(game1.id).toBe(1);
        expect(game2.id).toBe(2);
        expect(game3.id).toBe(3);
    });

    // it('when given several game ids, the Games Class can sum the IDs ', () => {
    //
    //     const game1 = new Game("Game 1", 1,2, 3)
    //     const game2 = new Game("Game 2", 1,2, 3)
    //     const game3 = new Game("Game 3", 1,2, 3)
    //
    //     let gamesArray = new Array()
    //     gamesArray.push(game1, game2, game3)
    //     const games = new Games(gamesArray)
    //
    //
    //     expect(games.sumGameIds).toBe(6);
    // });
    //
    // it('getCalibrationValue function should return correct results', () => {
    //
    //     const game1 = new Game("Game 1", 1,2, 3)
    //
    //     console.log(game1.redDie.value)
    //     console.log(game1.id)
    //
    //
    //
    //     // expect(getCalibrationValue(input)).toBe(`Part 1: 54634, Part 2: 53855`);
    // });

});
