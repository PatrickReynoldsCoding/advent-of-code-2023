import {stringToStringArray} from "../utils/helperMethods";

const fs = require('fs');
import {Game, Games} from "./models/Game";



describe('Day two tests', () => {

       let input = fs.readFileSync('day-2/input.txt', 'utf8');





    it('the Game Class can return its id as a number ', () => {

        const game1 = new Game("Game 1: 6 green, 3 blue; 3 red, 1 green; 4 green, 3 red, 5 blue")
        const game2 = new Game("Game 2: 6 green, 3 blue; 3 red, 1 green; 4 green, 3 red, 5 blue")
        const game3 = new Game("Game 30: 6 green, 3 blue; 3 red, 1 green; 4 green, 3 red, 5 blue")



        expect(game1.id).toBe(1);
        expect(game2.id).toBe(2);
        expect(game3.id).toBe(30);
    });

    it('when given several game ids, the Games Class can sum the IDs ', () => {

        const game1 = new Game("Game 1: 6 green, 3 blue; 3 red, 1 green; 4 green, 3 red, 5 blue")
        const game2 = new Game("Game 2: 2 red, 7 green; 13 green, 2 blue, 4 red; 4 green, 5 red, 1 blue; 1 blue, 9 red, 1 green")
        const game3 = new Game("Game 50: 3 red, 7 blue, 4 green; 2 green, 1 blue, 7 red; 4 red, 1 green, 5 blue")

        let gamesArray = new Array()
        gamesArray.push(game1, game2, game3)
        const games = new Games(gamesArray)


        expect(games.sumGameIds()).toBe(53);
    });

    it('the game class can return the highest coloured dice', () => {

        const game1 = new Game("Game 1: 6 green, 3 blue; 30 red, 1 green; 4 green, 3 red, 5 blue")
        const game2 = new Game("Game 1: 6 green, 3 blue; 3 red, 14 green; 4 green, 3 red, 5 blue")
        const game3 = new Game("Game 1: 6 green, 20 blue; 3 red, 1 green; 4 green, 3 red, 5 blue")

        expect(game1.getHighestFromString("red")).toBe(30);
        expect(game2.getHighestFromString("green")).toBe(14);
        expect(game3.getHighestFromString("blue")).toBe(20);
    });

    it('the game class returns 0 if the value is not as high as the elfs critiria', () => {

        // The Elf would first like to know which games would have been possible if the
        // bag contained only 12 red cubes, 13 green cubes, and 14 blue cubes?

        const game1 = new Game("Game 1: 6 green, 3 blue; 3 red, 1 green; 4 green, 3 red, 5 blue")
        const game2 = new Game("Game 1: 6 green, 3 blue; 3 red, 14 green; 4 green, 3 red, 5 blue")
        const game3 = new Game("Game 1: 6 green, 20 blue; 3 red, 1 green; 4 green, 3 red, 5 blue")
        const game4 = new Game("Game 1: 6 green, 3 blue; 3 red, 1 green; 4 green, 3 red, 5 blue")
        const game5 = new Game("Game 1: 6 green, 3 blue; 3 red, 1 green; 4 green, 3 red, 5 blue")

        expect(game1.getHighestFromString("red")).toBe(0);
        expect(game2.getHighestFromString("green")).toBe(14);
        expect(game3.getHighestFromString("blue")).toBe(20);
        expect(game4.getHighestFromString("green")).toBe(0);
        expect(game5.getHighestFromString("blue")).toBe(0);
    });

    it('Solves the code!', () => {

        const codeArray: string[] = stringToStringArray(input)

        const gamesArray: Game[] = codeArray.map(code => new Game(code))

        const games: Games = new Games(gamesArray)

        console.log(games.sumGameIds())
    });

});
