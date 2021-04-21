function InfoFruit() {
    let arr = [
        {
            "img": "bluejay.jpeg",
            "name": "bluejay",
            "status": false,
            "price": 46,
            "image": "https://i.postimg.cc/RF8svtPk/bluejay.jpg"
        },
        {
            "img": "canary.jpeg",
            "name": "canary",
            "status": false,
            "price": 42,
            "image": "https://i.postimg.cc/zDb20dv8/canary.jpg"
        },
        {
            "img": "cardinal.jpeg",
            "name": "cardinal",
            "status": false,
            "price": 38,
            "image": "https://i.postimg.cc/QN24PpK5/cardinal.jpg"
        },
        {
            "img": "chick.jpeg",
            "name": "chick",
            "status": false,
            "price": 23,
            "image": "https://i.postimg.cc/y8Bf6sP8/chicken.png"
        },
        {
            "img": "chicken.jpeg",
            "name": "chicken",
            "status": false,
            "price": 30,
            "image": "https://i.postimg.cc/y8Bf6sP8/chicken.png"
        },
        {
            "img": "crow.jpeg",
            "name": "crow",
            "status": false,
            "price": 27,
            "image": "https://i.postimg.cc/QdbfHw4k/crow.jpg"
        },
        {
            "img": "duck.jpeg",
            "name": "duck",
            "status": false,
            "price": 37,
            "image": "https://i.postimg.cc/13prqwf0/duck.jpg"
        },
        {
            "img": "eagle.jpeg",
            "name": "eagle",
            "status": false,
            "price": 24,
            "image": "https://i.postimg.cc/jjc68T6L/eagle.jpg"
        },
        {
            "img": "egg.jpeg",
            "name": "egg",
            "status": false,
            "price": 39,
            "image": "https://i.postimg.cc/yNsXXxZM/egg.jpg"
        },
        {
            "img": "flamingo.jpeg",
            "name": "flamingo",
            "status": false,
            "price": 41,
            "image": "https://i.postimg.cc/tJKF14bm/flamingo.jpg"
        },
        {
            "img": "goose.jpeg",
            "name": "goose",
            "status": false,
            "price": 30,
            "image": "https://i.postimg.cc/fLbcpP55/goose.jpg"
        },
        {
            "img": "hawk.jpeg",
            "name": "hawk",
            "status": false,
            "price": 37,
            "image": "https://i.postimg.cc/Gt8khsWy/hawk.jpg"
        },
        {
            "img": "hummingbird.jpeg",
            "name": "hummingbird",
            "status": false,
            "price": 49,
            "image": "https://i.postimg.cc/wvbXpkGz/hummingbird.jpg"
        },
        {
            "img": "nest.jpeg",
            "name": "nest",
            "status": false,
            "price": 44,
            "image": "https://i.postimg.cc/WbZMBg6R/nest.jpg"
        },
        {
            "img": "ostrich.jpeg",
            "name": "ostrich",
            "status": false,
            "price": 26,
            "image": "https://i.postimg.cc/VspqZDtB/ostrich.jpg"
        },
        {
            "img": "owl.jpeg",
            "name": "owl",
            "status": false,
            "price": 26,
            "image": "https://i.postimg.cc/FHg0RvBD/owl.jpg"
        },
        {
            "img": "parakeet.jpeg",
            "name": "parakeet",
            "status": false,
            "price": 33,
            "image": "https://i.postimg.cc/HkCQdnBr/parakeet.jpg"
        },
        {
            "img": "parrot.jpeg",
            "name": "parrot",
            "status": false,
            "price": 43,
            "image": "https://i.postimg.cc/GpLGTN0r/parrot.jpg"
        },
        {
            "img": "peacock.jpeg",
            "name": "peacock",
            "status": false,
            "price": 21,
            "image": "https://i.postimg.cc/DZmGBXyM/peacock.jpg"
        },
        {
            "img": "pelican.jpeg",
            "name": "pelican",
            "status": false,
            "price": 39,
            "image": "https://i.postimg.cc/s2TSYcyW/pelican.jpg"
        },
        {
            "img": "penguin.jpeg",
            "name": "penguin",
            "status": false,
            "price": 32,
            "image": "https://i.postimg.cc/B6yKynjQ/penguin.jpg"
        },
        {
            "img": "pheasant.jpeg",
            "name": "pheasant",
            "status": false,
            "price": 22,
            "image": "https://i.postimg.cc/WtcJNYmB/pheasant.jpg"
        },
        {
            "img": "pigeon.jpeg",
            "name": "pigeon",
            "status": false,
            "price": 48,
            "image": "https://i.postimg.cc/7h22yrz1/pigeon.jpg"
        },
        {
            "img": "roadrunner.jpeg",
            "name": "roadrunner",
            "status": false,
            "price": 42,
            "image": "https://i.postimg.cc/WphCxNWR/roadrunner.jpg"
        },
        {
            "img": "robin.jpeg",
            "name": "robin",
            "status": false,
            "price": 47,
            "image": "https://i.postimg.cc/RCyyBkyW/robin.jpg"
        },
        {
            "img": "rooster.jpeg",
            "name": "rooster",
            "status": false,
            "price": 22,
            "image": "https://i.postimg.cc/ZKNgKfzV/rooster.jpg"
        },
        {
            "img": "seagull.jpeg",
            "name": "seagull",
            "status": false,
            "price": 46,
            "image": "https://i.postimg.cc/Sx7vcJs9/seagull.jpg"
        },
        {
            "img": "sparrow.jpeg",
            "name": "sparrow",
            "status": false,
            "price": 28,
            "image": "https://i.postimg.cc/P5k7Lmth/sparrow.jpg"
        },
        {
            "img": "stork.jpeg",
            "name": "stork",
            "status": false,
            "price": 48,
            "image": "https://i.postimg.cc/wBqb2gyG/stork.jpg"
        },
        {
            "img": "swan.jpeg",
            "name": "swan",
            "status": false,
            "price": 50,
            "image": "https://i.postimg.cc/KY0pswtv/swan.jpg"
        },
        {
            "img": "turkey.jpeg",
            "name": "turkey",
            "status": false,
            "price": 34,
            "image": "https://i.postimg.cc/RFqprdT1/turkey.jpg"
        },
        {
            "img": "woodpecker.jpeg",
            "name": "woodpecker",
            "status": false,
            "price": 29,
            "image": "https://i.postimg.cc/j2782jmL/woodpecker.jpg"
        }
    ]


    return arr
}

export default InfoFruit