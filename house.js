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
    constructor(rooms) {
        this.roomCount = roomCount;
        this.rooms = rooms;
    }

    /** 
    Getter: gets total house area(square footage)
    */
    get area() {
        return this.calcArea();
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
        if (!this.hasOwnProperty(rooms)) {
            return "This house has no rooms! What kind of crazy person lives here?!"
        }

        /**
        Itterate through each room in the house and return the square footage.
        This does not take in to account hallways and other access ways.
        */
        let totalArea = 0;
        for (const room in this.rooms) {
            if (room.hasOwnProperty(squareFootage)) {
                totalArea += room.squareFootage;
            }
        }
        return totalArea;
    }

}

/**
Export the class to be consumed elsewhere
*/
export default House;