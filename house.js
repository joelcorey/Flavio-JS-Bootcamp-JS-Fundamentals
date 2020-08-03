/**
Expected example:
{
    houseName: stringName
    estimatedWorth: 200,213
    estimatedWorthCurrency: 'USD'
    utilities: {
        internet: 'fiber',
        eletrical: 'yes',
        solar: 'no', 'yes', 'panel', 'wind', 'battery-bank',
        plumbing: 'city', 'well', etc
    },
    rooms: {
        {
            roomtype: bedroom, kitchen, laundry, etc,
            squareFootage: 200-1500 etc
        }
    }
}
*/

class House {
    constructor(data) {
        this.rooms = data.rooms;
    }

    /** 
    Getter: gets total house area(square footage)
    */
    get area() {
        return this.calcArea();
    }

    get description() {
        return this.consoleLog();
    }

    /** 
    Class method that is returned by the getArea() getter 
    */
    calcArea() {
        /** 
        Defensive programming: 
        Does the house have rooms? While a house without rooms would
        be quite odd in the real world, it is common in programming 
        world.
        */
        // if (!this.hasOwnProperty(this.rooms)) {
        //     return "This house has no rooms! What kind of crazy person lives here?!"
        // }

        /**
        Itterate through each room in the house and return the square footage.
        This does not take in to account hallways and other access ways.
        */
        let totalArea = 0;
        for (let i = 0; i < this.rooms.length; i++) {
            // if (this.rooms[i].hasOwnProperty(squareFootage)) {
                console.log(this.rooms[i]);
                
            // }
            totalArea += this.rooms[i][squareFootage]     
        }
        return this.rooms
        return totalArea;
    }

    consoleLog() {
        console.log(this);
    }

}

/**
Export the class to be consumed elsewhere
*/
export default House;