import { Dice } from './Dice';


export class Games {
    gamesArray: Game[]
    constructor(gamesArray: Game[]) {
        this.gamesArray = gamesArray
    }

    sumGameIds() {

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
        const regex = /(\d+)/;
        const match = this.gameString.match(regex);
        return match ? Number(match[0]) : 0;
    }

}