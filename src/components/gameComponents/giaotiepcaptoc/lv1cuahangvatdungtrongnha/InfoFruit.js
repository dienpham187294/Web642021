function InfoFruit() {
    let arr = [
        {
            "img": "charcoal briquettes.jpeg",
            "name": "charcoal briquettes",
            "status": false,
            "price": 29,
            "image": "https://i.postimg.cc/G2C6K8VC/charcoal-briquettes.jpg"
        },
        {
            "img": "chimney.jpeg",
            "name": "chimney",
            "status": false,
            "price": 42,
            "image": "https://i.postimg.cc/XqMqQ83v/chimney.jpg"
        },
        {
            "img": "deck.jpeg",
            "name": "deck",
            "status": false,
            "price": 43,
            "image": "https://i.postimg.cc/Hx8jwNqK/deck.jpg"
        },
        {
            "img": "drainpipe.jpeg",
            "name": "drainpipe",
            "status": false,
            "price": 39,
            "image": "https://i.postimg.cc/5NSySLrx/drainpipe.jpg"
        },
        {
            "img": "driveway.jpeg",
            "name": "driveway",
            "status": false,
            "price": 35,
            "image": "https://i.postimg.cc/4yzdM9NQ/driveway.jpg"
        },
        {
            "img": "garage.jpeg",
            "name": "garage",
            "status": false,
            "price": 47,
            "image": "https://i.postimg.cc/pLVTGyNK/garage.jpg"
        },
        {
            "img": "garden hose.jpeg",
            "name": "garden hose",
            "status": false,
            "price": 47,
            "image": "https://i.postimg.cc/GmMpZrrV/garden-hose.jpg"
        },
        {
            "img": "grass.jpeg",
            "name": "grass",
            "status": false,
            "price": 42,
            "image": "https://i.postimg.cc/kXmDSff1/grass.jpg"
        },
        {
            "img": "grill.jpeg",
            "name": "grill",
            "status": false,
            "price": 32,
            "image": "https://i.postimg.cc/fbJbsFRL/grill.jpg"
        },
        {
            "img": "gutter.jpeg",
            "name": "gutter",
            "status": false,
            "price": 38,
            "image": "https://i.postimg.cc/q7SvvLNG/gutter.jpg"
        },
        {
            "img": "hammock.jpeg",
            "name": "hammock",
            "status": false,
            "price": 40,
            "image": "https://i.postimg.cc/8cVkhzBJ/hammock.jpg"
        },
        {
            "img": "hedge clippers.jpeg",
            "name": "hedge clippers",
            "status": false,
            "price": 38,
            "image": "https://i.postimg.cc/zBhXbgWY/hedge-clippers.jpg"
        },
        {
            "img": "lawn mower.jpeg",
            "name": "lawn mower",
            "status": false,
            "price": 48,
            "image": "https://i.postimg.cc/Y21CtQM1/lawn-mower.jpg"
        },
        {
            "img": "lounge chair.jpeg",
            "name": "lounge chair",
            "status": false,
            "price": 44,
            "image": "https://i.postimg.cc/hPcPvhtN/lounge-chair.jpg"
        },
        {
            "img": "mitt.jpeg",
            "name": "mitt",
            "status": false,
            "price": 35,
            "image": "https://i.postimg.cc/jdcq7KW2/mitt.jpg"
        },
        {
            "img": "patio.jpeg",
            "name": "patio",
            "status": false,
            "price": 22,
            "image": "https://i.postimg.cc/bvDqWtmS/patio.jpg"
        },
        {
            "img": "porch.jpeg",
            "name": "porch",
            "status": false,
            "price": 21,
            "image": "https://i.postimg.cc/zv55yP8T/porch.jpg"
        },
        {
            "img": "power saw.jpeg",
            "name": "power saw",
            "status": false,
            "price": 49,
            "image": "https://i.postimg.cc/7LFqkZRs/power-saw.jpg"
        },
        {
            "img": "rake.jpeg",
            "name": "rake",
            "status": false,
            "price": 41,
            "image": "https://i.postimg.cc/QtchxrGX/rake.jpg"
        },
        {
            "img": "roof.jpeg",
            "name": "roof",
            "status": false,
            "price": 22,
            "image": "https://i.postimg.cc/ZKb4ZgfS/roof.jpg"
        },
        {
            "img": "screen.jpeg",
            "name": "screen",
            "status": false,
            "price": 34,
            "image": "https://i.postimg.cc/BQmsvgy1/screen.jpg"
        },
        {
            "img": "shovel.jpeg",
            "name": "shovel",
            "status": false,
            "price": 35,
            "image": "https://i.postimg.cc/g2rpLhFt/shovel.jpg"
        },
        {
            "img": "shutter.jpg",
            "name": "shutter",
            "status": false,
            "price": 26,
            "image": "https://i.postimg.cc/W1KvG4sN/shutter.jpg"
        },
        {
            "img": "spatula.jpeg",
            "name": "spatula",
            "status": false,
            "price": 23,
            "image": "https://i.postimg.cc/fb9hBhbx/spatula.jpg"
        },
        {
            "img": "sprinkler.jpeg",
            "name": "sprinkler",
            "status": false,
            "price": 38,
            "image": "https://i.postimg.cc/zBYYQPL4/sprinkler.jpg"
        },
        {
            "img": "tool shed.jpeg",
            "name": "tool shed",
            "status": false,
            "price": 37,
            "image": "https://i.postimg.cc/Kz7hhrBj/tool-shed.jpg"
        },
        {
            "img": "trowel.jpeg",
            "name": "trowel",
            "status": false,
            "price": 33,
            "image": "https://i.postimg.cc/MHW26MmD/trowel.png"
        },
        {
            "img": "TV antenna.jpeg",
            "name": "TV antenna",
            "status": false,
            "price": 23,
            "image": "https://i.postimg.cc/mk8xtLdG/TV-antenna.jpg"
        },
        {
            "img": "watering can.jpeg",
            "name": "watering can",
            "status": false,
            "price": 24,
            "image": "https://i.postimg.cc/c4LyP3H1/watering-can.gif"
        },
        {
            "img": "wheelbarrow.jpeg",
            "name": "wheelbarrow",
            "status": false,
            "price": 26,
            "image": "https://i.postimg.cc/T29vk0TH/wheelbarrow.jpg"
        },
        {
            "img": "window.jpeg",
            "name": "window",
            "status": false,
            "price": 31,
            "image": "https://i.postimg.cc/PrVsHqpW/window.jpg"
        },
        {
            "img": "work gloves.jpeg",
            "name": "work gloves",
            "status": false,
            "price": 32,
            "image": "https://i.postimg.cc/N0TWR7ND/work-gloves.jpg"
        }
    ]

    return arr
}

export default InfoFruit