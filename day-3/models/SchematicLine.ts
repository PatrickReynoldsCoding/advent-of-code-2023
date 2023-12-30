export class SchematicLine {
    string: string;
    id: number;
    potentialMatchIndices: number[][];
    previousString: string;
    nextString: string;
    foundParts: number[];
    unchecked: number[];
    symbols: string[] = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", ";", ":", "'", ",", "<", ">", "/", "?", "`", "~", "£"]


    constructor(string: string, id: number, previousString: string, nextString: string) {
        this.string = string;
        this.id = id;
        this.potentialMatchIndices = this.findPotentialParts();
        this.previousString = previousString;
        this.nextString = nextString;
        this.foundParts = this.findParts();
    }


    isCharASymbol(el: string): boolean {
        return this.symbols.includes(el)
    }

    isCharADigit(el: string): boolean {
       return /\d/.test(el)
    }

    findPotentialParts(): number[][] {
        const indicesOfMatches: number[][] = [];
        const stringLength = this.string.length;
  

        for (let i: number = 0; i < stringLength; i++) {
            if (this.isCharADigit(this.string[i])) {
                let indices: number[] = [i];
                while (this.isCharADigit(this.string[i + 1])) { // pushes chars until we don't match a digit
                    indices.push(++i);
                }

                const potentialMatchLength: number = indices.length
                const prev: number = indices[0] - 1
                const next: number = indices[potentialMatchLength - 1] + 1
                if (prev >= 0) indices.unshift(prev) // get char before
                if (next <= stringLength) indices.push(next) // get char after

                indicesOfMatches.push(indices.filter(num => !isNaN(num))); // remove any NaN and push
            }
        }
        return indicesOfMatches;
    }




    convertIndicesToPart(partIndices: number[]): number {
        const part: string = partIndices.map(index => this.string[index]).join("")
        return Number(part.replace(/[^0-9]/g, ''));
    }

    findPartsAdjacent(): number[] {
        let partsToPush: number[] = []
        this.potentialMatchIndices.forEach((partToCheck: number[]) => {// every is like forEach but breaks when false is returned
            
            
            const firstChar: string = this.string[partToCheck[0]]
            const lastChar: string = this.string[partToCheck[partToCheck.length + 1]]

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