export default class Game {
    rolls = []

    roll(knocked) { 
        this.rolls.push(knocked);
    }

    score() {
        return this.rolls.reduce((a, b) => a + b);
    }
}