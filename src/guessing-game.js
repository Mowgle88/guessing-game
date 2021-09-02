class GuessingGame {
    constructor() {
        this.start = 0;
        this.end = 0;
        this.mid = 0;
    }

    setRange(min, max) {

        this.start = min;
        this.end = max;
    }

    guess() {
        this.mid = Math.round((this.end - this.start)/2 + this.start);
        return this.mid;
    }

    lower() {
        this.end = this.mid;
    }

    greater() {
        this.start = this.mid;
    }
}

module.exports = GuessingGame;
