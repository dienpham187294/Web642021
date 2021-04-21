function InfoFruit() {
    let arr = [
        {
            "img": "fabric softener.jpeg",
            "name": "fabric softener",
            "status": false,
            "price": 37,
            "image": "https://i.postimg.cc/g2zSKg8c/fabric-softener.jpg"
        },
        {
            "img": "feather duster.jpeg",
            "name": "feather duster",
            "status": false,
            "price": 23,
            "image": "https://i.postimg.cc/4yRwHPXg/feather-duster.jpg"
        },
        {
            "img": "flashlight.jpeg",
            "name": "flashlight",
            "status": false,
            "price": 45,
            "image": "https://i.postimg.cc/JzpTYj5N/flashlight.jpg"
        },
        {
            "img": "garbage can.jpeg",
            "name": "garbage can",
            "status": false,
            "price": 39,
            "image": "https://i.postimg.cc/VNTKm1T5/garbage-can.jpg"
        },
        {
            "img": "iron.jpeg",
            "name": "iron",
            "status": false,
            "price": 40,
            "image": "https://i.postimg.cc/598sdhmN/ironing-board.jpg"
        },
        {
            "img": "ironing board.jpeg",
            "name": "ironing board",
            "status": false,
            "price": 35,
            "image": "https://i.postimg.cc/598sdhmN/ironing-board.jpg"
        },
        {
            "img": "laundry basket.jpeg",
            "name": "laundry basket",
            "status": false,
            "price": 32,
            "image": "https://i.postimg.cc/FzbpySKJ/laundry-basket.jpg"
        },
        {
            "img": "laundry.jpeg",
            "name": "laundry",
            "status": false,
            "price": 23,
            "image": "https://i.postimg.cc/FzbpySKJ/laundry-basket.jpg"
        },
        {
            "img": "light bulb.jpeg",
            "name": "light bulb",
            "status": false,
            "price": 37,
            "image": "https://i.postimg.cc/5N1nxsP5/light-bulb.jpg"
        },
        {
            "img": "mop refill.jpeg",
            "name": "mop refill",
            "status": false,
            "price": 50,
            "image": "https://i.postimg.cc/CxrNsSwJ/mop-refill.jpg"
        },
        {
            "img": "mousetrap.jpeg",
            "name": "mousetrap",
            "status": false,
            "price": 50,
            "image": "https://i.postimg.cc/nLs1dgzx/mousetrap.jpg"
        },
        {
            "img": "paper towel.jpeg",
            "name": "paper towel",
            "status": false,
            "price": 50,
            "image": "https://i.postimg.cc/PJHz5qMf/paper-towel.jpg"
        },
        {
            "img": "pipe.jpeg",
            "name": "pipe",
            "status": false,
            "price": 29,
            "image": "https://i.postimg.cc/SRGL2pZ6/pipe.jpg"
        },
        {
            "img": "plunger.jpeg",
            "name": "plunger",
            "status": false,
            "price": 28,
            "image": "https://i.postimg.cc/Qt1JD71n/plunger.jpg"
        },
        {
            "img": "rags.jpeg",
            "name": "rags",
            "status": false,
            "price": 39,
            "image": "https://i.postimg.cc/s2t4bmQh/rags.jpg"
        },
        {
            "img": "sponge mop.jpeg",
            "name": "sponge mop",
            "status": false,
            "price": 20,
            "image": "https://i.postimg.cc/pVQJ1D2m/sponge-mop.jpg"
        },
        {
            "img": "spray starch.jpeg",
            "name": "spray starch",
            "status": false,
            "price": 22,
            "image": "https://i.postimg.cc/ncHG8Cz0/spray-starch.jpg"
        },
        {
            "img": "stepladder.jpeg",
            "name": "stepladder",
            "status": false,
            "price": 20,
            "image": "https://i.postimg.cc/J4PcRMHm/stepladder.jpg"
        },
        {
            "img": "vacuum cleaner.jpeg",
            "name": "vacuum cleaner",
            "status": false,
            "price": 44,
            "image": "https://i.postimg.cc/sgxPXq5W/vacuum-cleaner.jpg"
        },
        {
            "img": "washing machine.jpeg",
            "name": "washing machine",
            "status": false,
            "price": 41,
            "image": "https://i.postimg.cc/jS1HJchF/washing-machine.jpg"
        },
        {
            "img": "washing powder.jpeg",
            "name": "washing powder",
            "status": false,
            "price": 46,
            "image": "https://i.postimg.cc/N0r18XJf/washing-powder.jpg"
        },
        {
            "img": "window cleaner.jpeg",
            "name": "window cleaner",
            "status": false,
            "price": 50,
            "image": "https://i.postimg.cc/9M5yLfKP/window-cleaner.jpg"
        },
        {
            "img": "attachment.jpg",
            "name": "attachment",
            "status": false,
            "price": 44,
            "image": "https://i.postimg.cc/RF7KyBxk/attachment.jpg"
        },
        {
            "img": "bleach.jpeg",
            "name": "bleach",
            "status": false,
            "price": 31,
            "image": "https://i.postimg.cc/3N3mHcKd/bleach.jpg"
        },
        {
            "img": "broom.jpeg",
            "name": "broom",
            "status": false,
            "price": 46,
            "image": "https://i.postimg.cc/022DWFW4/broom.jpg"
        },
        {
            "img": "bucket.jpeg",
            "name": "bucket",
            "status": false,
            "price": 32,
            "image": "https://i.postimg.cc/BbNDZB6N/bucket.jpg"
        },
        {
            "img": "circuit breaker.jpeg",
            "name": "circuit breaker",
            "status": false,
            "price": 36,
            "image": "https://i.postimg.cc/c1cfc0mY/circuit-breaker.jpg"
        },
        {
            "img": "cleanser.jpeg",
            "name": "cleanser",
            "status": false,
            "price": 24,
            "image": "https://i.postimg.cc/Qx45Rmvd/cleanser.jpg"
        },
        {
            "img": "clothesline.jpeg",
            "name": "clothesline",
            "status": false,
            "price": 46,
            "image": "https://i.postimg.cc/7Z57D7yM/clothesline.jpg"
        },
        {
            "img": "clothespin.jpeg",
            "name": "clothespin",
            "status": false,
            "price": 30,
            "image": "https://i.postimg.cc/CLHrD3Z6/clothespin.jpg"
        },
        {
            "img": "dryer.jpeg",
            "name": "dryer",
            "status": false,
            "price": 49,
            "image": "https://i.postimg.cc/xTSFXfdz/dryer.jpg"
        },
        {
            "img": "dustpan.jpeg",
            "name": "dustpan",
            "status": false,
            "price": 20,
            "image": "https://i.postimg.cc/zf3xs3x9/dustpan.jpg"
        }
    ]


    return arr
}

export default InfoFruit