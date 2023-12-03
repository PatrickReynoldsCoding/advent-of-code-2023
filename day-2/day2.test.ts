import {stringToStringArray} from "../utils/helperMethods";

const fs = require('fs');
import {Game} from "./models/Game";
import {Games} from "./models/Games";


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


        expect(games.sumPlayableGames()).toBe(53);
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

        expect(game1.getHighestFromString("red")).toBe(3);
        expect(game2.getHighestFromString("green")).toBe(14);
        expect(game3.getHighestFromString("blue")).toBe(20);
        expect(game4.getHighestFromString("green")).toBe(6);
        expect(game5.getHighestFromString("blue")).toBe(5);
    });

    it('Solves the part 1 code!', () => {

        const codeArray: string[] = stringToStringArray(input)

        const gamesArray: Game[] = codeArray.map(code => new Game(code))

        const games: Games = new Games(gamesArray)

        console.log(games.sumPlayableGames())
    });

    it('returns power of min dice needed', () => {

        // The power of a set of cubes is equal to the numbers of red, green, and blue cubes multiplied together.

        const game1 = new Game("Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green")
        const game2 = new Game("Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue")
        const game3 = new Game("Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red")
        const game4 = new Game("Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red")
        const game5 = new Game("Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green")

        expect(game1.powerOfMinNeeded).toBe(48);
        expect(game2.powerOfMinNeeded).toBe(12);
        expect(game3.powerOfMinNeeded).toBe(1560);
        expect(game4.powerOfMinNeeded).toBe(630);
        expect(game5.powerOfMinNeeded).toBe(36);

    });

    it('should sum to 60', () => {

        let gamesArray: Game[] = [
            new Game("Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green"),
            new Game("Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue"),
            new Game("Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red"),
            new Game("Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red"),
            new Game("Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green"),
        ]


        const games: Games = new Games(gamesArray)


        expect(games.powerOfFewestDiceNeeded()).toBe(2286);
    });

    it('Solves the part 2 code!', () => {

        const codeArray: string[] = stringToStringArray(input)

        const gamesArray: Game[] = codeArray.map(code => new Game(code))

        const games: Games = new Games(gamesArray)

        console.log(games.powerOfFewestDiceNeeded())
    });

});

    describe('Reddit solutions', () => {


        it('solution by 4HbQ, converted from python ', () => {


            // original py
            // def f(line):
            // bag = {'r':0, 'g':0, 'b':0}
            // for num, col in re.findall(r'(\d+) (\w)', line):
            // bag[col] = max(bag[col], int(num))
            // return math.prod(bag.values())





            function calculateProduct(line: string): number {
                const bag: Record<string, number> = { r: 0, g: 0, b: 0 };


                // matches one or more digits (\d+), followed by a space, followed by a word character (\w).
                // g is global search and will find all matches rather than stop after first match.
                // The parentheses () are used to capture the matched groups for later use. (num) (colour)
                const matches: IterableIterator<RegExpMatchArray> = line.matchAll(/(\d+) (\w)/g); //

                // @ts-ignore
                for (const match of matches) {
                    const [, num, col] = match; // ignore the 1st el and get the 2nd and 3rd
                    bag[col] = Math.max(bag[col], Number(num)); // compare current record and num and set highest to new record
                }

                // Convert to array of nums and reduce.
                // When you give reduce a callback, the 1st arg is the acc. The return of the cb then becomes the acc.
                // So we can use this to multiply each value together
                // acc*el=newAcc
                // l1: 1*4=4
                // l2: 4*2=8
                // l3: 8*6=48
                return Object.values(bag).reduce((product, value) => product * value, 1);
            }

            expect(calculateProduct("123 apple 456 banana 789 cherry")).toBe(48)


            // TL;DR: this method does the following
            // 1. create record/map
            // 2. make regex array of all matches
            // 3. use el2 and el3 to replace record if higher
            // 4. reduce used to multiply each value by each other.
        });


    });
