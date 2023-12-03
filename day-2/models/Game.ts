export class Game {
    gameString: string;
    id: number;
    isGamePlayable: boolean
    red: number;
    green: number;
    blue: number;
    powerOfMinNeeded: number
    regExFindAllDigits: RegExp = /\d+/;

    constructor(gameString: string) {
        this.gameString = gameString;
        this.id = this.getId();
        this.isGamePlayable = this.checkIfGameIsPlayable();
        this.red = this.getHighestFromString("red")
        this.green = this.getHighestFromString("green")
        this.blue = this.getHighestFromString("blue")
        this.powerOfMinNeeded = this.red * this.green * this.blue
    }


    getId(): number {
        const match: RegExpMatchArray = this.gameString.match(this.regExFindAllDigits);
        return match ? Number(match[0]) : 0; // if not null return the 1st digits found
    }


    getHighestFromString(colour: string) {
        const regex = new RegExp(`(\\d+)\\s${colour}`, "g") // matches: digit, space + colour. /g means global (searches the whole string)
        const colourValuesAsString: RegExpMatchArray = this.gameString.match(regex) // something like ["3 red", "3 red"]

        const colourValues: number[] = colourValuesAsString.map(value => Number(value.match(this.regExFindAllDigits)))

        return Math.max(...colourValues)


    }


    checkIfGameIsPlayable(): boolean {
        const isPlayableCheck: number[] = ["red", "green", "blue"].map(colour => this.returnIfPlayable(colour, this.getHighestFromString(colour)))
        const isPlayable = !isPlayableCheck.includes(0)
        return isPlayable
    }


    returnIfPlayable(colour: string, highest: number) {
        switch (colour) {
            case "red":
                return highest <= 12 ? highest : 0

            case "green":
                return highest <= 13 ? highest : 0

            case "blue":
                return highest <= 14 ? highest : 0

        }
    }


}