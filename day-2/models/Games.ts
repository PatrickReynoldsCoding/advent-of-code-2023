import {sumArray} from "../../utils/helperMethods";
import {Game} from "./Game";

export class Games {
    gamesArray: Game[]

    constructor(gamesArray: Game[]) {
        this.gamesArray = gamesArray
    }

    sumPlayableGames() {
        return sumArray(this.gamesArray.map(game => {
            if (game.isGamePlayable) {
                return game.id
            } else {
                return 0
            }
        }))
    }

    powerOfFewestDiceNeeded() {
        return sumArray(this.gamesArray.map(game => {
            return game.powerOfMinNeeded
        }))
    }


}