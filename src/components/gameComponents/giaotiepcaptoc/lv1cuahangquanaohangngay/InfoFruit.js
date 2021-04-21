function InfoFruit() {
    let arr = [
        {
            "img": "construction boots.jpeg",
            "name": "construction boots",
            "status": false,
            "price": 34,
            "image": "https://i.postimg.cc/2jh57y88/construction-boots.jpg"
        },
        {
            "img": "corduroy pants.jpeg",
            "name": "corduroy pants",
            "status": false,
            "price": 24,
            "image": "https://i.postimg.cc/yYTY2GZM/corduroy-pants.jpg"
        },
        {
            "img": "coveralls.jpeg",
            "name": "coveralls",
            "status": false,
            "price": 50,
            "image": "https://i.postimg.cc/BnQQ3C5X/coveralls.jpg"
        },
        {
            "img": "dress.jpeg",
            "name": "dress",
            "status": false,
            "price": 39,
            "image": "https://i.postimg.cc/QMF89xyD/dress.jpg"
        },
        {
            "img": "glasses.jpeg",
            "name": "glasses",
            "status": false,
            "price": 26,
            "image": "https://i.postimg.cc/s2bVpdkh/glasses.jpg"
        },
        {
            "img": "hard hat.jpeg",
            "name": "hard hat",
            "status": false,
            "price": 37,
            "image": "https://i.postimg.cc/6pj6pGzz/hard-hat.jpg"
        },
        {
            "img": "heel.jpeg",
            "name": "heel",
            "status": false,
            "price": 28,
            "image": "https://i.postimg.cc/QCJhGBHQ/high-heels.jpg"
        },
        {
            "img": "high heels.jpeg",
            "name": "high heels",
            "status": false,
            "price": 49,
            "image": "https://i.postimg.cc/QCJhGBHQ/high-heels.jpg"
        },
        {
            "img": "jacket.jpeg",
            "name": "jacket",
            "status": false,
            "price": 31,
            "image": "https://i.postimg.cc/6qXtmV56/jacket.jpg"
        },
        {
            "img": "lapel.jpeg",
            "name": "lapel",
            "status": false,
            "price": 46,
            "image": "https://i.postimg.cc/xTgn6zrY/lapel.jpg"
        },
        {
            "img": "long sleeve.jpeg",
            "name": "long sleeve",
            "status": false,
            "price": 37,
            "image": "https://i.postimg.cc/Dfr2bNBS/long-sleeve.jpg"
        },
        {
            "img": "lunch box.jpeg",
            "name": "lunch box",
            "status": false,
            "price": 38,
            "image": "https://i.postimg.cc/ZKJJPLMV/lunch-box.jpg"
        },
        {
            "img": "pocket.jpeg",
            "name": "pocket",
            "status": false,
            "price": 43,
            "image": "https://i.postimg.cc/Gm2rVmrD/pocket.jpg"
        },
        {
            "img": "purse.jpeg",
            "name": "purse",
            "status": false,
            "price": 30,
            "image": "https://i.postimg.cc/VN0wsZJL/purse.jpg"
        },
        {
            "img": "raincoat.jpeg",
            "name": "raincoat",
            "status": false,
            "price": 41,
            "image": "https://i.postimg.cc/T34G6vY4/raincoat.jpg"
        },
        {
            "img": "sandal.jpeg",
            "name": "sandal",
            "status": false,
            "price": 28,
            "image": "https://i.postimg.cc/QtL3Fg7g/sandal.jpg"
        },
        {
            "img": "shirt.jpeg",
            "name": "shirt",
            "status": false,
            "price": 35,
            "image": "https://i.postimg.cc/Vk3TgfNm/T-shirt.jpg"
        },
        {
            "img": "shoe.jpeg",
            "name": "shoe",
            "status": false,
            "price": 22,
            "image": "https://i.postimg.cc/Rhd5pjDG/shoelace.jpg"
        },
        {
            "img": "shoelace.jpeg",
            "name": "shoelace",
            "status": false,
            "price": 33,
            "image": "https://i.postimg.cc/Rhd5pjDG/shoelace.jpg"
        },
        {
            "img": "shopping bag.jpeg",
            "name": "shopping bag",
            "status": false,
            "price": 29,
            "image": "https://i.postimg.cc/bY9hvtwb/shopping-bag.jpg"
        },
        {
            "img": "short sleeve.jpeg",
            "name": "short sleeve",
            "status": false,
            "price": 40,
            "image": "https://i.postimg.cc/yY6z38DG/short-sleeve.jpg"
        },
        {
            "img": "shorts.jpeg",
            "name": "shorts",
            "status": false,
            "price": 22,
            "image": "https://i.postimg.cc/kXjPQP8g/shorts.jpg"
        },
        {
            "img": "shoulder bag.jpeg",
            "name": "shoulder bag",
            "status": false,
            "price": 46,
            "image": "https://i.postimg.cc/g2nF4tqq/shoulder-bag.jpg"
        },
        {
            "img": "skirt.jpeg",
            "name": "skirt",
            "status": false,
            "price": 39,
            "image": "https://i.postimg.cc/k5SrPVH2/skirt.jpg"
        },
        {
            "img": "slacks.jpeg",
            "name": "slacks",
            "status": false,
            "price": 29,
            "image": "https://i.postimg.cc/GmV0fPX0/slacks.jpg"
        },
        {
            "img": "sneakers.jpeg",
            "name": "sneakers",
            "status": false,
            "price": 34,
            "image": "https://i.postimg.cc/d1cbssM4/sneakers.jpg"
        },
        {
            "img": "sole.jpeg",
            "name": "sole",
            "status": false,
            "price": 50,
            "image": "https://i.postimg.cc/gJyfrCmd/sole.jpg"
        },
        {
            "img": "sweatband.jpeg",
            "name": "sweatband",
            "status": false,
            "price": 20,
            "image": "https://i.postimg.cc/Gtc6DXmD/sweatband.jpg"
        },
        {
            "img": "sweatpants.jpeg",
            "name": "sweatpants",
            "status": false,
            "price": 44,
            "image": "https://i.postimg.cc/kGfzvW2p/sweatpants.jpg"
        },
        {
            "img": "sweatshirt.jpeg",
            "name": "sweatshirt",
            "status": false,
            "price": 37,
            "image": "https://i.postimg.cc/TY3ZYNSM/sweatshirt.jpg"
        },
        {
            "img": "tank top.jpeg",
            "name": "tank top",
            "status": false,
            "price": 48,
            "image": "https://i.postimg.cc/tR5KbGBN/tank-top.jpg"
        },
        {
            "img": "three-piece suit.jpeg",
            "name": "three-piece suit",
            "status": false,
            "price": 50,
            "image": "https://i.postimg.cc/kXYLVF3V/three-piece-suit.jpg"
        },
        {
            "img": "tie.jpeg",
            "name": "tie",
            "status": false,
            "price": 50,
            "image": "https://i.postimg.cc/13g2Dnsv/tie.jpg"
        },
        {
            "img": "T-shirt.jpeg",
            "name": "T-shirt",
            "status": false,
            "price": 47,
            "image": "https://i.postimg.cc/Vk3TgfNm/T-shirt.jpg"
        },
        {
            "img": "umbrella.jpeg",
            "name": "umbrella",
            "status": false,
            "price": 47,
            "image": "https://i.postimg.cc/fLsP48XP/umbrella.jpg"
        },
        {
            "img": "uniform.jpeg",
            "name": "uniform",
            "status": false,
            "price": 29,
            "image": "https://i.postimg.cc/bvk5F7Gb/uniform.jpg"
        }
    ]


    return arr
}

export default InfoFruit