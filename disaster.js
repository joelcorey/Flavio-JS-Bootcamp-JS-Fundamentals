import disasterData from './disasterData.js';

class Disaster {
    constructor() {
        this.num = Math.floor((Math.random() * disasterData.types.length) + 1);
        
        // this.disasterName = disasterData[num].type
        // this.damage = disasterData[num].damage;
    }

    get num() {
        console.log(this.num);
    }
    
    get name() {
        return this.disasterName;
    }

    get damage() {
        return this.damage;
    }
}

export default Disaster;