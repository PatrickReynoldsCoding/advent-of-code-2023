// starting at 18:23


let numbersToAdd: number[] = []

const symbols =  ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", ";", ":", "'", ",", "<", ">", "/", "?", "`", "~"]


export const findDigitAndAdjacentCharIndices = (stringToCheck: string): number[][] => {
    const indicesOfMatches: number[][] = [];

    for (let i = 0; i < stringToCheck.length; i++) {
        if (/\d/.test(stringToCheck[i])) { //is current char a digit?
            let indices: number[] = [i];
            while (/\d/.test(stringToCheck[i + 1])) { // pushes chars until we don't match a digit
                indices.push(++i);
            }

            indices.unshift(indices[0] - 1) // get char before
            indices.push(indices[indices.length -1] + 1) // get char after

            indicesOfMatches.push(indices.filter(num => !isNaN(num))); // remove any NaN and push
        }
    }

    return indicesOfMatches;
}

export const findAdjacentMatches = (testString: string, indices: number[][]) => {




}

// const checkParallelLines = (checkSegment: string[]): number[] | null => {
//         // 1. for current line, get all numbers in line with their index positions
//         // and put to map/record
//         // 2. for each number, add to [] if previous line contains symbol in the
//         // recorded index positions, as well as lowest index -1 and highest index +1
//         // 3. if no match, repeat 2  with next line
// }
//
//
// export const checkSegmentForParts = (checkSegment: string[]): void => {
//
//         const currentLine = // todo need logic for saying what line is current if its first or last el in the schematicArray
//         const partsToAdd: number[] | null = checkCurrentLine(checkSegment) ?? checkParallelLines(checkSegment)
// }
//
//
// export const runPart1 = () => {
//         numbersToAdd.push(checkSegmentForParts)
// }


