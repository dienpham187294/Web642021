function InfoFruit() {
    let arr = [
        {
            "img": "baby lotion.jpeg",
            "name": "baby lotion",
            "status": false,
            "price": 31,
            "image": "https://i.postimg.cc/d1HS7rLQ/baby-lotion.png"
        },
        {
            "img": "baby powder.jpeg",
            "name": "baby powder",
            "status": false,
            "price": 31,
            "image": "https://i.postimg.cc/1t5j5JRY/baby-powder.jpg"
        },
        {
            "img": "baby wipes.jpeg",
            "name": "baby wipes",
            "status": false,
            "price": 49,
            "image": "https://i.postimg.cc/prmcKrFf/baby-wipes.jpg"
        },
        {
            "img": "bib.jpeg",
            "name": "bib",
            "status": false,
            "price": 25,
            "image": "https://i.postimg.cc/BbRYp3Td/bib.jpg"
        },
        {
            "img": "block.jpeg",
            "name": "block",
            "status": false,
            "price": 36,
            "image": "https://i.postimg.cc/RCYD47kX/block.jpg"
        },
        {
            "img": "bottle.jpeg",
            "name": "bottle",
            "status": false,
            "price": 49,
            "image": "https://i.postimg.cc/65G137ww/bottle.jpg"
        },
        {
            "img": "bumper.jpeg",
            "name": "bumper",
            "status": false,
            "price": 26,
            "image": "https://i.postimg.cc/L8KQZH6P/bumper.jpg"
        },
        {
            "img": "changing table.jpeg",
            "name": "changing table",
            "status": false,
            "price": 33,
            "image": "https://i.postimg.cc/jqvRXFJC/changing-table.jpg"
        },
        {
            "img": "cloth diaper.jpeg",
            "name": "cloth diaper",
            "status": false,
            "price": 26,
            "image": "https://i.postimg.cc/8P0N8f4S/cloth-diaper.jpg"
        },
        {
            "img": "cotton bud.jpeg",
            "name": "cotton bud",
            "status": false,
            "price": 24,
            "image": "https://i.postimg.cc/4NdsFQzP/cotton-bud.jpg"
        },
        {
            "img": "cradle.jpeg",
            "name": "cradle",
            "status": false,
            "price": 26,
            "image": "https://i.postimg.cc/43CGyCj2/cradle.png"
        },
        {
            "img": "crib.jpeg",
            "name": "crib",
            "status": false,
            "price": 38,
            "image": "https://i.postimg.cc/1XWP38ZD/crib.jpg"
        },
        {
            "img": "disposable diaper.jpeg",
            "name": "disposable diaper",
            "status": false,
            "price": 25,
            "image": "https://i.postimg.cc/wjRH9x4s/disposable-diaper.jpg"
        },
        {
            "img": "doll house.jpeg",
            "name": "doll house",
            "status": false,
            "price": 42,
            "image": "https://i.postimg.cc/DzqTbjTv/doll-house.jpg"
        },
        {
            "img": "doll.jpeg",
            "name": "doll",
            "status": false,
            "price": 49,
            "image": "https://i.postimg.cc/DzqTbjTv/doll-house.jpg"
        },
        {
            "img": "mobile.jpeg",
            "name": "mobile",
            "status": false,
            "price": 41,
            "image": "https://i.postimg.cc/3Nw5V3DN/mobile.jpg"
        },
        {
            "img": "nipple.jpeg",
            "name": "nipple",
            "status": false,
            "price": 24,
            "image": "https://i.postimg.cc/0Qn1Vzjh/nipple.jpg"
        },
        {
            "img": "pacifier.jpeg",
            "name": "pacifier",
            "status": false,
            "price": 26,
            "image": "https://i.postimg.cc/mk6fGKQw/pacifier.jpg"
        },
        {
            "img": "playpen.jpeg",
            "name": "playpen",
            "status": false,
            "price": 43,
            "image": "https://i.postimg.cc/T2kXm5ZD/playpen.jpg"
        },
        {
            "img": "potty.jpeg",
            "name": "potty",
            "status": false,
            "price": 34,
            "image": "https://i.postimg.cc/GhHnjhCS/potty.jpg"
        },
        {
            "img": "puzzle.jpeg",
            "name": "puzzle",
            "status": false,
            "price": 25,
            "image": "https://i.postimg.cc/q7df0sC9/puzzle.png"
        },
        {
            "img": "rattle.jpeg",
            "name": "rattle",
            "status": false,
            "price": 43,
            "image": "https://i.postimg.cc/VLpQZQss/rattle.jpg"
        },
        {
            "img": "rocking chair.jpeg",
            "name": "rocking chair",
            "status": false,
            "price": 50,
            "image": "https://i.postimg.cc/Z5Nk1708/rocking-chair.jpg"
        },
        {
            "img": "safety pin.jpeg",
            "name": "safety pin",
            "status": false,
            "price": 22,
            "image": "https://i.postimg.cc/tgdKgs37/safety-pin.jpg"
        },
        {
            "img": "shade.jpeg",
            "name": "shade",
            "status": false,
            "price": 37,
            "image": "https://i.postimg.cc/j5sGnRcc/shade.jpg"
        },
        {
            "img": "smoke alarm.jpeg",
            "name": "smoke alarm",
            "status": false,
            "price": 21,
            "image": "https://i.postimg.cc/vTTkXXp6/smoke-alarm.jpg"
        },
        {
            "img": "stretchie.jpeg",
            "name": "stretchie",
            "status": false,
            "price": 24,
            "image": "https://i.postimg.cc/sxL8L7rH/stretchie.jpg"
        },
        {
            "img": "stroller.jpeg",
            "name": "stroller",
            "status": false,
            "price": 40,
            "image": "https://i.postimg.cc/dQNzDPyR/stroller.jpg"
        },
        {
            "img": "stuffed animal.jpeg",
            "name": "stuffed animal",
            "status": false,
            "price": 23,
            "image": "https://i.postimg.cc/4Nrqb6wm/stuffed-animal.jpg"
        },
        {
            "img": "swing.jpeg",
            "name": "swing",
            "status": false,
            "price": 24,
            "image": "https://i.postimg.cc/vH1CVqrJ/swing.jpg"
        },
        {
            "img": "teddy bear.jpeg",
            "name": "teddy bear",
            "status": false,
            "price": 42,
            "image": "https://i.postimg.cc/VknT7JH4/teddy-bear.jpg"
        },
        {
            "img": "toy chest.jpeg",
            "name": "toy chest",
            "status": false,
            "price": 38,
            "image": "https://i.postimg.cc/8CGYxT2G/toy-chest.jpg"
        },
        {
            "img": "walker.jpeg",
            "name": "walker",
            "status": false,
            "price": 43,
            "image": "https://i.postimg.cc/9fBkhv27/walker.jpg"
        }
    ]


    return arr
}

export default InfoFruit