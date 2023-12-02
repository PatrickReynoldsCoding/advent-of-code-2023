import {stringToStringArray, sumArray} from "../utils/helperMethods";

const getCorrectInput = (code: string): string => {
    return code[0] + code.slice(-1)
}


const getLastElement = (arr: any[]): any => {
    if (arr.length === 1) {
        return arr[0];
    } else {
        return arr[arr.length - 1];
    }
}


const codeBreaker = (code: string) => {

    const spelledOut = new Map([
        ["one", 1],
        ["two", 2],
        ["three", 3],
        ["four", 4],
        ["five", 5],
        ["six", 6],
        ["seven", 7],
        ["eight", 8],
        ["nine", 9]
    ]);


    const numberFinder = (fiveCharSeg: string) => {
        const doesKeyExist = (keyToCheck: string) => {
            if (spelledOut.has(keyToCheck)) {
                return spelledOut.get(keyToCheck)
            } else {
                return null
            }
        }

        const threeDigit: string = fiveCharSeg.substring(0, 3)
        const fourDigit: string = fiveCharSeg.substring(0, 4)
        return doesKeyExist(threeDigit) ?? doesKeyExist(fourDigit) ?? doesKeyExist(fiveCharSeg) ?? null;
    };

    let foundDigits: number[] = []
    const findNextDigit = (code: String) => {
        const firstChar = parseInt(code[0], 10)
        if (!isNaN(firstChar)) {
            foundDigits.push(firstChar)
        } else {
            const codeSeg = code.substring(0, 5)
            let num: number | null = numberFinder(codeSeg)
            switch (typeof num) {
                case "number":
                    foundDigits.push(num)
                    break;

                case "object":
                    if (num === null) {

                    }
                    break;

            }
        }
    }




    const runCode = (code: String): number => {
        if (code === "") {
            return parseInt(foundDigits[0].toString() + getLastElement(foundDigits).toString(),10)
        } else
            findNextDigit(code)
        return runCode(code.substring(1))

    }

    const result = runCode(code)
    return result
}


export const getCalibrationValue = (code: string): string => {

    const array: string[] = stringToStringArray(code)

    const removeChars: string[] = array.map(string => string.replace(/[^0-9]/g, ''))

    const removeUselessNumbers: string[] = removeChars.map(getCorrectInput)

    const convertToNumber: number[] = removeUselessNumbers.map(string => parseInt(string, 10))




    const part1Result = sumArray(convertToNumber)

    const part2Result = sumArray(array.map(code => codeBreaker(code)))

    return `Part 1: ${part1Result}, Part 2: ${part2Result}`

}

