import { Dice } from './Dice';

export class Game {
    id: string;
    redDie: Dice;
    blueDie: Dice;
    greenDie: Dice;
    constructor(id: string, red: number, blue: number, green: number) {
        this.id = id;
        this.redDie = new Dice("red", red);
        this.blueDie = new Dice("blue", blue);
        this.greenDie = new Dice("green", green);
    }
}