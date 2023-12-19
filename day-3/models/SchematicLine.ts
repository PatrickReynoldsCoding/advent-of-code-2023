export class SchematicLine {
    string: string;
    id: number;
    potentialMatchIndices: number[][];
    previousString: string;
    nextString: string;
    foundParts: number[];
    unchecked: number[];
    symbols: string[] = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", ";", ":", "'", ",", "<", ">", "/", "?", "`", "~"]


    constructor(string: string, id: number, previousString: string, nextString: string) {
        this.string = string;
        this.id = id;
        this.potentialMatchIndices = this.findPotentialParts();
        this.previousString = previousString;
        this.nextString = nextString;
        this.foundParts = this.findParts();
    }


    findPotentialParts(): number[][] {
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

    isCharASymbol(el: string): boolean {
        return this.symbols.includes(el)
    }


    convertIndicesToPart(partIndices: number[]): number {
        const part = partIndices.map(index => this.string[index]).slice(1, -1).join("")
        return Number(part)
    }

    findPartsAdjacent(): number[] {
        let partsToPush: number[] = []
        this.potentialMatchIndices.forEach((partToCheck: number[]) => {// every is like forEach but breaks when false is returned
            
            
            const firstChar = this.string[partToCheck[0]]
            const lastChar = this.string[partToCheck[partToCheck.length + 1]]

            if (this.isCharASymbol(firstChar) || this.isCharASymbol(lastChar)) {
                partsToPush.push(this.convertIndicesToPart(partToCheck))
            }
        })
        return partsToPush
    }

    findPartsParallel(): number[] {
        let partsToPush: number[] = []

        this.potentialMatchIndices.forEach((partToCheck: number[]) => { // every is like forEach but breaks when false is returned
            partToCheck.every(index => {
                if (this.isCharASymbol(this.previousString[index]) || this.isCharASymbol(this.nextString[index])) {
                    partsToPush.push(this.convertIndicesToPart(partToCheck));
                    return false
                } else {
                    return true
                }
            });
        });

        return partsToPush
    }

    findParts() {
       return this.findPartsAdjacent().concat(this.findPartsParallel())

    }

}