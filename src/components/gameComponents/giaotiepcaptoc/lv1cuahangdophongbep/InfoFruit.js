function InfoFruit() {
    let arr = [
        {
            "img": "counter.jpeg",
            "name": "counter",
            "status": false,
            "price": 37,
            "image": "https://i.postimg.cc/KjyjXkDf/counter.png"
        },
        {
            "img": "cutting board.jpeg",
            "name": "cutting board",
            "status": false,
            "price": 23,
            "image": "https://i.postimg.cc/JzTsyhR7/cutting-board.jpg"
        },
        {
            "img": "dish drainer.jpeg",
            "name": "dish drainer",
            "status": false,
            "price": 45,
            "image": "https://i.postimg.cc/8zkFPvQn/dish-drainer.jpg"
        },
        {
            "img": "dishtowel.jpeg",
            "name": "dishtowel",
            "status": false,
            "price": 39,
            "image": "https://i.postimg.cc/wvNMbcL3/dishtowel.jpg"
        },
        {
            "img": "dishwasher.jpeg",
            "name": "dishwasher",
            "status": false,
            "price": 40,
            "image": "https://i.postimg.cc/9fKzpN4v/dishwasher.jpg"
        },
        {
            "img": "dishwashing liquid.jpeg",
            "name": "dishwashing liquid",
            "status": false,
            "price": 35,
            "image": "https://i.postimg.cc/hvbjKDCB/dishwashing-liquid.jpg"
        },
        {
            "img": "freezer.jpeg",
            "name": "freezer",
            "status": false,
            "price": 32,
            "image": "https://i.postimg.cc/KvxjJTzv/freezer.jpg"
        },
        {
            "img": "frying pan.jpeg",
            "name": "frying pan",
            "status": false,
            "price": 23,
            "image": "https://i.postimg.cc/05prYn9B/frying-pan.jpg"
        },
        {
            "img": "ice tray.jpeg",
            "name": "ice tray",
            "status": false,
            "price": 37,
            "image": "https://i.postimg.cc/SxKsppCB/ice-tray.jpg"
        },
        {
            "img": "lid.jpeg",
            "name": "lid",
            "status": false,
            "price": 50,
            "image": "https://i.postimg.cc/65c3SQ2V/lid.jpg"
        },
        {
            "img": "microwave oven.jpeg",
            "name": "microwave oven",
            "status": false,
            "price": 50,
            "image": "https://i.postimg.cc/vTzQpPB8/microwave-oven.png"
        },
        {
            "img": "mixing bowl.jpeg",
            "name": "mixing bowl",
            "status": false,
            "price": 50,
            "image": "https://i.postimg.cc/nhwLFw1C/mixing-bowl.jpg"
        },
        {
            "img": "oven.jpeg",
            "name": "oven",
            "status": false,
            "price": 29,
            "image": "https://i.postimg.cc/PqgrZp9H/oven.jpg"
        },
        {
            "img": "pot holder.jpeg",
            "name": "pot holder",
            "status": false,
            "price": 28,
            "image": "https://i.postimg.cc/MT1ZYZJQ/pot-holder.jpg"
        },
        {
            "img": "pot.jpeg",
            "name": "pot",
            "status": false,
            "price": 39,
            "image": "https://i.postimg.cc/MT1ZYZJQ/pot-holder.jpg"
        },
        {
            "img": "refrigerator.jpeg",
            "name": "refrigerator",
            "status": false,
            "price": 20,
            "image": "https://i.postimg.cc/T1GdN8TH/refrigerator.jpg"
        },
        {
            "img": "roasting pan.jpeg",
            "name": "roasting pan",
            "status": false,
            "price": 22,
            "image": "https://i.postimg.cc/bYHNDvTX/roasting-pan.jpg"
        },
        {
            "img": "rolling pin.jpeg",
            "name": "rolling pin",
            "status": false,
            "price": 20,
            "image": "https://i.postimg.cc/yY16FzQD/rolling-pin.jpg"
        },
        {
            "img": "saucepan.jpeg",
            "name": "saucepan",
            "status": false,
            "price": 44,
            "image": "https://i.postimg.cc/VLKfgHpD/saucepan.jpg"
        },
        {
            "img": "scouring pad.jpeg",
            "name": "scouring pad",
            "status": false,
            "price": 41,
            "image": "https://i.postimg.cc/bwdzB9j8/scouring-pad.jpg"
        },
        {
            "img": "steamer.jpeg",
            "name": "steamer",
            "status": false,
            "price": 46,
            "image": "https://i.postimg.cc/VkTYQ0Yt/steamer.jpg"
        },
        {
            "img": "stove.jpeg",
            "name": "stove",
            "status": false,
            "price": 50,
            "image": "https://i.postimg.cc/W3cTtRqb/stove.jpg"
        },
        {
            "img": "teakettle.jpeg",
            "name": "teakettle",
            "status": false,
            "price": 44,
            "image": "https://i.postimg.cc/PqwdtfxR/teakettle.jpg"
        },
        {
            "img": "toaster.jpeg",
            "name": "toaster",
            "status": false,
            "price": 31,
            "image": "https://i.postimg.cc/85dD6yLd/toaster.jpg"
        },
        {
            "img": "blender.jpeg",
            "name": "blender",
            "status": false,
            "price": 46,
            "image": "https://i.postimg.cc/qqjTmzbz/blender.jpg"
        },
        {
            "img": "bottle opener.jpeg",
            "name": "bottle opener",
            "status": false,
            "price": 32,
            "image": "https://i.postimg.cc/90W2tGB6/bottle-opener.jpg"
        },
        {
            "img": "broiler.jpeg",
            "name": "broiler",
            "status": false,
            "price": 36,
            "image": "https://i.postimg.cc/sfcsfNjs/broiler.jpg"
        },
        {
            "img": "burner.jpeg",
            "name": "burner",
            "status": false,
            "price": 24,
            "image": "https://i.postimg.cc/qMv0Nxqn/burner.jpg"
        },
        {
            "img": "cabinet.jpeg",
            "name": "cabinet",
            "status": false,
            "price": 46,
            "image": "https://i.postimg.cc/ncSxB99W/cabinet.jpg"
        },
        {
            "img": "can opener.jpeg",
            "name": "can opener",
            "status": false,
            "price": 46,
            "image": "https://i.postimg.cc/HkJg2WQk/can-opener.jpg"
        }
    ]


    return arr
}

export default InfoFruit