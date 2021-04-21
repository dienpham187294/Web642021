function InfoFruit() {
    let arr = [
        {
            "img": "almond.jpeg",
            "name": "almond",
            "status": false,
            "price": 44,
            "image": "https://i.postimg.cc/pLhVyL7H/almond.jpg"
        },
        {
            "img": "apple.jpeg",
            "name": "apple",
            "status": false,
            "price": 41,
            "image": "https://i.postimg.cc/ncLhbkGM/apple.jpg"
        },
        {
            "img": "apricot.jpeg",
            "name": "apricot",
            "status": false,
            "price": 33,
            "image": "https://i.postimg.cc/rmJM70dS/apricot.jpg"
        },
        {
            "img": "avocado.jpeg",
            "name": "avocado",
            "status": false,
            "price": 34,
            "image": "https://i.postimg.cc/GpvcJSdg/avocado.jpg"
        },
        {
            "img": "bananas.jpeg",
            "name": "bananas",
            "status": false,
            "price": 56,
            "image": "https://i.postimg.cc/G2rbMJpL/bananas.jpg"
        },
        {
            "img": "blackberries.jpeg",
            "name": "blackberries",
            "status": false,
            "price": 38,
            "image": "https://i.postimg.cc/P5gXDks8/blackberries.jpg"
        },
        {
            "img": "blueberries.jpeg",
            "name": "blueberries",
            "status": false,
            "price": 41,
            "image": "https://i.postimg.cc/c454snFh/blueberries.jpg"
        },
        {
            "img": "cantaloupe.jpeg",
            "name": "cantaloupe",
            "status": false,
            "price": 51,
            "image": "https://i.postimg.cc/hvtcnDxN/cantaloupe.jpg"
        },
        {
            "img": "cashew.jpeg",
            "name": "cashew",
            "status": false,
            "price": 35,
            "image": "https://i.postimg.cc/c4605Jdn/cashew.jpg"
        },
        {
            "img": "cherries.jpeg",
            "name": "cherries",
            "status": false,
            "price": 39,
            "image": "https://i.postimg.cc/2y9m8s7y/cherries.jpg"
        },
        {
            "img": "chestnut.jpeg",
            "name": "chestnut",
            "status": false,
            "price": 31,
            "image": "https://i.postimg.cc/CMcwN8p0/chestnut.jpg"
        },
        {
            "img": "coconut.jpeg",
            "name": "coconut",
            "status": false,
            "price": 44,
            "image": "https://i.postimg.cc/yd6wgfdZ/coconut.jpg"
        },
        {
            "img": "cranberries.jpeg",
            "name": "cranberries",
            "status": false,
            "price": 36,
            "image": "https://i.postimg.cc/1z0QNnrL/cranberries.png"
        },
        {
            "img": "date.jpeg",
            "name": "date",
            "status": false,
            "price": 32,
            "image": "https://i.postimg.cc/tCfp0Hgm/date.jpg"
        },
        {
            "img": "fig.jpeg",
            "name": "fig",
            "status": false,
            "price": 45,
            "image": "https://i.postimg.cc/3wQhRCmX/fig.jpg"
        },
        {
            "img": "gooseberries.jpeg",
            "name": "gooseberries",
            "status": false,
            "price": 49,
            "image": "https://i.postimg.cc/vZVMbSg8/gooseberries.jpg"
        },
        {
            "img": "grapefruit.jpeg",
            "name": "grapefruit",
            "status": false,
            "price": 38,
            "image": "https://i.postimg.cc/3NN56LQT/grapefruit.jpg"
        },
        {
            "img": "grapes.jpeg",
            "name": "grapes",
            "status": false,
            "price": 56,
            "image": "https://i.postimg.cc/262N2sJG/grapes.jpg"
        },
        {
            "img": "hazelnut.jpeg",
            "name": "hazelnut",
            "status": false,
            "price": 38,
            "image": "https://i.postimg.cc/639NVWHT/hazelnut.jpg"
        },
        {
            "img": "honeydew melon.jpeg",
            "name": "honeydew melon",
            "status": false,
            "price": 44,
            "image": "https://i.postimg.cc/rsHXLSqt/honeydew-melon.jpg"
        },
        {
            "img": "lemon.jpeg",
            "name": "lemon",
            "status": false,
            "price": 60,
            "image": "https://i.postimg.cc/T2NXmXnY/lemon.jpg"
        },
        {
            "img": "lime.jpeg",
            "name": "lime",
            "status": false,
            "price": 42,
            "image": "https://i.postimg.cc/3JyQFbZj/lime.jpg"
        },
        {
            "img": "mango.jpeg",
            "name": "mango",
            "status": false,
            "price": 51,
            "image": "https://i.postimg.cc/y8cqwgtk/mango.jpg"
        },
        {
            "img": "nectarine.jpeg",
            "name": "nectarine",
            "status": false,
            "price": 55,
            "image": "https://i.postimg.cc/tgNKg0Xb/nectarine.jpg"
        },
        {
            "img": "orange.jpeg",
            "name": "orange",
            "status": false,
            "price": 46,
            "image": "https://i.postimg.cc/HLmGHW13/orange.jpg"
        },
        {
            "img": "papaya.jpeg",
            "name": "papaya",
            "status": false,
            "price": 51,
            "image": "https://i.postimg.cc/C1v9jjB6/papaya.jpg"
        },
        {
            "img": "peach.jpeg",
            "name": "peach",
            "status": false,
            "price": 57,
            "image": "https://i.postimg.cc/J0GvKGj7/peach.jpg"
        },
        {
            "img": "peanut.jpeg",
            "name": "peanut",
            "status": false,
            "price": 55,
            "image": "https://i.postimg.cc/PJ9c7TMW/peanut.jpg"
        },
        {
            "img": "pear.jpeg",
            "name": "pear",
            "status": false,
            "price": 47,
            "image": "https://i.postimg.cc/CLn9qnFm/pear.png"
        },
        {
            "img": "pineapple.jpeg",
            "name": "pineapple",
            "status": false,
            "price": 48,
            "image": "https://i.postimg.cc/wjKZcxMH/pineapple.jpg"
        },
        {
            "img": "plum.jpeg",
            "name": "plum",
            "status": false,
            "price": 47,
            "image": "https://i.postimg.cc/66mDqfN8/plum.jpg"
        },
        {
            "img": "prune.jpeg",
            "name": "prune",
            "status": false,
            "price": 31,
            "image": "https://i.postimg.cc/W1MK9RqZ/prune.jpg"
        },
        {
            "img": "raisin.jpeg",
            "name": "raisin",
            "status": false,
            "price": 32,
            "image": "https://i.postimg.cc/W4TyC90H/raisin.jpg"
        },
        {
            "img": "raspberries.jpeg",
            "name": "raspberries",
            "status": false,
            "price": 32,
            "image": "https://i.postimg.cc/qRZZt4SP/raspberries.png"
        },
        {
            "img": "strawberry.jpeg",
            "name": "strawberry",
            "status": false,
            "price": 56,
            "image": "https://i.postimg.cc/G2p5hH7P/strawberry.jpg"
        },
        {
            "img": "walnut.jpeg",
            "name": "walnut",
            "status": false,
            "price": 32,
            "image": "https://i.postimg.cc/k5sHmxcX/walnut.jpg"
        },
        {
            "img": "watermelon.jpeg",
            "name": "watermelon",
            "status": false,
            "price": 47,
            "image": "https://i.postimg.cc/BbL7HRGX/watermelon.jpg"
        }
    ]

    return arr
}

export default InfoFruit