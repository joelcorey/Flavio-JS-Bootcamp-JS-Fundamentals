let houseData = {
    houseName: 'Joel\'s House of Awesomeness',
    estimatedWorth: 200213,
    estimatedWorthCurrency: 'USD',
    utilities: {
        internet: 'fiber',
        eletrical: 'yes',
        solar: ['yes', 'panel', 'wind', 'battery-bank'],
        plumbing: ['city', 'well'],
    },
    rooms: [
        {
            roomType: 'office',
            squareFootage: 400,
            notes: []
        },
        {
            roomType: 'bedroom',
            squareFootage: 400,
            notes: []
        },
        {
            roomType: 'bedroom',
            squareFootage: 500,
            notes: []
        },
        {
            roomType: 'bedroom',
            squareFootage: 900,
            notes: ['master bedroom']
        },
        {
            roomType: 'kitchen',
            squareFootage: 800,
            notes: []
        },
        {
            roomType: 'dining room',
            squareFootage: 800,
            notes: ['adjoined to kitchen']
        },
        {
            roomType: 'laundry',
            squareFootage: 300,
            notes: ['water heater located adjacent']
        },
        {
            roomType: 'bathroom',
            squareFootage: 200,
            notes: ['half bath']
        },
        {
            roomType: 'bathroom',
            squareFootage: 400,
            notes: ['full shower, full bath']
        },
        {
            roomType: 'bathroom',
            squareFootage: 600,
            notes: ['master bath, jacuzzi tub, rain shower, adjoined to master bedroom']
        },
        {
            roomType: 'magical pantry',
            squareFootage: 0,
            notes: ['A magical pantry that defies the laws of nature!']
        }
    ]
}

export default houseData;