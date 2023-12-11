export class SchematicLine {
    string: string;
    id: number;
    indices: number[][];
    previousString: string;
    nextString: string;
    foundParts: number[];
    unchecked: number[];


    constructor(string: string, id: number, indices: number[][], previousString: string, nextString: string) {
        this.string = string;
        this.id = id;
        this.indices = indices;
        this.previousString = previousString;
        this.nextString = nextString;
        this.foundParts = this.findParts();
    }


    findDigitAndAdjacentCharIndices(): number[][] {
        const indicesOfMatches: number[][] = [];

        for (let i = 0; i < this.string.length; i++) {
            if (/\d/.test(this.string[i])) { //is current char a digit?
                let indices: number[] = [i];
                while (/\d/.test(this.string[i + 1])) { // pushes chars until we don't match a digit
                    indices.push(++i);
                }

                indices.unshift(indices[0] - 1) // get char before
                indices.push(indices[indices.length - 1] + 1) // get char after

                indicesOfMatches.push(indices.filter(num => !isNaN(num))); // remove any NaN and push
            }
        }
        return indicesOfMatches;
    }

    findParts() {
        return [426, 985]
    }


}