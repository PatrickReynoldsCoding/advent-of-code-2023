// starting at 18:23



export const partThreeCodeBreaker = (schematicArray: string[]) => {


    let numbersToAdd = []
    const size = schematicArray.length

    for (let i = 0; i < size; i++) {
        const previous= i === 0 ? null : schematicArray[i - 1];
        const current= schematicArray[i];
        const next= i >= size ? null : schematicArray[i + 1];

        const toCheck = [previous, current, next]

        return toCheck

        // do check and add to numbersToAdd
    }


}




