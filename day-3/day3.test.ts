import {stringToStringArray} from "../utils/helperMethods";
import {partThreeCodeBreaker} from "./day3";

const fs = require('fs');


describe('Day two tests', () => {

    let input = fs.readFileSync('day-3/input.txt', 'utf8');


    // check el in array before and after.
    //
    //     if either el has a symbol in the same indexes (-1 and +1) then add to record


    it('adds all ', () => {

        input = "*467..114..\n" +
            "..........\n" +
            "..35..#633.\n"

        const schematicArray: string[] = stringToStringArray(input)


        expect(partThreeCodeBreaker(schematicArray)).toBe(["*467..114..",
        "..........",
        "..35..#633."])

    });

    it('solves part 1!', () => {

        input = "467..114..\n" +
                "...*......\n" +
                "..35..633.\n" +
                "......#...\n" +
                "617*......\n" +
                ".....+.58.\n" +
                "..592.....\n" +
                "......755.\n" +
                "...$.*....\n" +
                ".664.598.."


        expect(partThreeCodeBreaker(input)).toBe(4361)

        console.log()
    });

});

