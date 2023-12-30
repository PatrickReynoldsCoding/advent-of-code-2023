import {stringToStringArray} from "../utils/helperMethods";
import {SchematicLine} from "./models/SchematicLine";

const fs = require('fs');


describe('Day three tests', () => {

    let input = fs.readFileSync('day-4/input.txt', 'utf8');
    const schematicArray: string[] = stringToStringArray(input)


    it('returns indices of potential matches', () => {

        const pre =     "...........#..."
        const current = "426~.....985..."
        const next =    "..............."

        const sl: SchematicLine = new SchematicLine(current, 3, pre, next)

        expect(sl.potentialMatchIndices).toStrictEqual([[0, 1, 2, 3], [8, 9, 10, 11, 12]])

    });


    it('checks current string for matches and returns number', () => {

        const pre = "...........#..."
        const current = "..#426...985..."
        const next = "..............."

        const sl: SchematicLine = new SchematicLine(current, 3, pre, next)

        expect(sl.findPartsAdjacent()).toStrictEqual([426])


    });


    it('finds adjacent parts 1', () => {

        const pre = "...........#..."
        const current = "..#426...985..."
        const next = "..............."

        const sl: SchematicLine = new SchematicLine(current, 3, pre, next)

        expect(sl.foundParts).toStrictEqual([426, 985])
    });

    it('finds adjacent parts 2', () => {

        const pre = ""
        const current = "..*456..976"
        const next = ""

        const sl: SchematicLine = new SchematicLine(current, 3, pre, next)

        expect(sl.findPartsAdjacent()).toStrictEqual([456])

    });


    it('finds adjacent parts 3', () => {

        const pre = ""
        const current = "..*456..&976"
        const next = ""

        const sl: SchematicLine = new SchematicLine(current, 3, pre, next)

        expect(sl.findPartsAdjacent()).toStrictEqual([456, 976])


    });


    it('Find Parallel parts 1', () => {
    
        const pre =     "..#426...#....."
        const current = "..#426...985..."
        const next =    "10......203...."

        const sl: SchematicLine = new SchematicLine(current, 1, pre, next)

        expect(sl.findPartsParallel()).toStrictEqual([426, 985])


    })

    it('Find Parallel parts 2', () => {
    
        const pre =     ".............."
        const current = "...426...985..."
        const next =    "..............."

        const sl: SchematicLine = new SchematicLine(current, 1, pre, next)

        expect(sl.findPartsParallel()).toStrictEqual([])


    })


    it('Find Parallel parts 3', () => {
    
        const pre =     "£..........(..."
        const current = "111..453....534"
        const next =    ".....!........."

        const sl: SchematicLine = new SchematicLine(current, 1, pre, next)

        const result = sl.findPartsParallel()

        const expected = [111, 453, 534]

        expect(result).toStrictEqual(expected)


    })


    //     // const s3: string = "..#426...985..."
    //     // const s4: string = "10......203...."
    //     // const s5: string = ".........#....."
    //     // const indices = [[2,3,4,5,6], [8,9,10,11,12]]


    //     const schematicArrayMock: string[] = [
    //         "...............",
    //         "..#426...#.....",
    //         "..#426...985...", //checking 985 here
    //         "10......203....",
    //         ".........#....."
    //     ]

    //     const toCheck: { string: string; unchecked: number[]; id: number; matches: number[] } = {
    //         id: 3,
    //         string: "..#426...985...",
    //         matches: [426],
    //         unchecked: [985]
    //     }

    //     const expected: { string: string; unchecked: number[]; id: number; matches: number[] } = {
    //         id: 3,
    //         string: "..#426...985...",
    //         matches: [426, 985],
    //         unchecked: []
    //     }


    //     expect(checkForAdjacentSymbol(schematicArrayMock, toCheck)).toBe(expected) // todo wip


    // });


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

