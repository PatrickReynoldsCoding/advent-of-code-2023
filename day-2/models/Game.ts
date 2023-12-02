import {Dice} from './Dice';
import {sumArray} from "../../utils/helperMethods";

const regExFindAllDigits: RegExp = /\d+/; //find all sequence of digits

export class Games {
    gamesArray: Game[]

    constructor(gamesArray: Game[]) {
        this.gamesArray = gamesArray
    }

    sumPlayableGames(part2: boolean = false) {
        return sumArray(this.gamesArray.map(game => {
            if (part2 == true) {
                return game.powerOfMinNeeded

            } else {
                if (game.isGamePlayable) {
                    return game.id
                } else {
                    return 0
                }
            }
        }))

    }


}

export class Game {
    gameString: string;
    id: number;
    isGamePlayable: boolean
    red: number;
    green: number;
    blue: number;
    powerOfMinNeeded: number

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
        const match: RegExpMatchArray = this.gameString.match(regExFindAllDigits);
        return match ? Number(match[0]) : 0; // if not null return the 1st digits found
    }

    checkIfGameIsPlayable(): boolean {
        const isPlayableCheck: number[] = ["red", "green", "blue"].map(colour => this.returnIfPlayable(colour, this.getHighestFromString(colour)))
        const isPlayable = !isPlayableCheck.includes(0)
        return isPlayable
    }

    getHighestFromString(colour: string, part2: boolean = false) {
        const regex = new RegExp(`(\\d+)\\s${colour}`, "g") // matches: digit, space + colour. /g means global (searches the whole string)
        const colourValuesAsString: RegExpMatchArray = this.gameString.match(regex) // something like ["3 red", "3 red"]

        const colourValues: number[] = colourValuesAsString.map(value => Number(value.match(regExFindAllDigits)))

        return Math.max(...colourValues)



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