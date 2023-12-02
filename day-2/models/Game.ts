import { Dice } from './Dice';
import {sumArray} from "../../utils/helperMethods";

const regExFindAllDigits: RegExp = /\d+/; //find all sequence of digits

export class Games {
    gamesArray: Game[]
    constructor(gamesArray: Game[]) {
        this.gamesArray = gamesArray
    }

    sumGameIds() {
        return sumArray(this.gamesArray.map(game => game.id))
    }


}

export class Game {
    gameString: string;
    id: number;
    // red: number;
    // blue: number;
    // green: number;
    constructor(gameString: string) {
        this.gameString = gameString;
        this.id = this.getId();
        // this.red =
        // this.blue = new Dice("blue", blue);
        // this.green = new Dice("green", green);
    }

    getId(): number {
        const match: RegExpMatchArray = this.gameString.match(regExFindAllDigits);
        return match ? Number(match[0]) : 0; // if not null return the 1st digits found
    }

    getHighestFromString(colour: string) {
        const regex = new RegExp(`(\\d+)\\s${colour}`, "g") // matches: digit, space + colour. /g means global (searches the whole string)
       const colourValuesAsString: RegExpMatchArray =  this.gameString.match(regex) // something like ["3 red", "3 red"]

       const colourValues: number[] = colourValuesAsString.map(value => Number(value.match(regExFindAllDigits)))

        return Math.max(...colourValues)
    }

}