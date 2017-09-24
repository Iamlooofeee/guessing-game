class GuessingGame {

    constructor() {};

    setRange(min, max) {
        this.min = min;
        this.max = max;
    };

    guess(){   
        return Math.ceil((this.max+this.min+1)/2);
    };

    lower() {
        this.setRange(this.min,Math.floor((this.max+this.min)/2));
    };

    greater() {
        this.setRange(Math.floor((this.max+this.min)/2+1),this.max);
    };

}
//
module.exports = GuessingGame;
