export const stringToStringArray = (codes: string) => {
    return codes.split("\n")
}
export const sumArray = (numbers: number[]): number => {
    if (numbers.length === 0) {
        return 0
    }
    if (numbers.length === 1) {
        return numbers[0]
    } else {
        return numbers.reduce((total, num) => total + num, 0);
    }
}