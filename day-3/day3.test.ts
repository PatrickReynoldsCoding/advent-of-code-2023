import {stringToStringArray} from "../utils/helperMethods";
import {checkForAdjacentSymbol, findDigitAndAdjacentCharIndices} from "./day3";

const fs = require('fs');


describe('Day two tests', () => {

    let input = fs.readFileSync('day-4/input.txt', 'utf8');
    const schematicArray: string[] = stringToStringArray(input)





    it('returns all number in string and the adjacent chars', () => {

        const testString = "..#426...985..."

        expect(findDigitAndAdjacentCharIndices(testString)).toStrictEqual([[2,3,4,5,6], [8,9,10,11,12]])

    });


    xit('takes string and indices, performs check and returns match to array', () => {


        const s3 = "..#426...985..."
        const indices = [[2,3,4,5,6], [8,9,10,11,12]]


        expect(checkForAdjacentSymbol(s3, indices)).toBe({
            stringNo: 3,
            string: "..#426...985...",
            matches: [426],
            unchecked: [985]
        }) // todo wip


    });

    it('checkParallelLines looks at numbers that havent matched in its own string and checks parallel strings for symbols', () => {

        // const s3: string = "..#426...985..."
        // const s4: string = "10......203...."
        // const s5: string = ".........#....."
        // const indices = [[2,3,4,5,6], [8,9,10,11,12]]


        const schematicArrayMock: string[] = [
            "...............",
            "..#426...#.....",
            "..#426...985...", //checking 985 here
            "10......203....",
            ".........#....."
        ]

        const toCheck: { string: string; unchecked: number[]; id: number; matches: number[] } = {
            id: 3,
            string: "..#426...985...",
            matches: [426],
            unchecked: [985]
        }

        const expected: { string: string; unchecked: number[]; id: number; matches: number[] } = {
            id: 3,
            string: "..#426...985...",
            matches: [426, 985],
            unchecked: []
        }



        expect(checkForAdjacentSymbol(schematicArrayMock, toCheck).toBe(expected) // todo wip


    });



    xit('turns whole string into desired matches', () => {





        expect("..486...186*925.....*....483.883.1....286......").toBe([186, 925])
        expect("..*../127.54.........354.....................*...37/..").toBe([127, 37])
        expect(".757..=422...").toBe([422])
        expect("...359*42.....=.......309...561.").toBe([359, 42])

    });

    xit('solves part 1!', () => {

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


        // expect(partThreeCodeBreaker(input)).toBe(4361)

        console.log()
    });

});

