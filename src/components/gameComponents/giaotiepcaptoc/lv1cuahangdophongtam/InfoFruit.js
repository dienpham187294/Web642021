function InfoFruit() {
    let arr = [
        {
            "img": "bath mat.jpeg",
            "name": "bath mat",
            "status": false,
            "price": 37,
            "image": "https://i.postimg.cc/yYyBdr77/bath-mat.png"
        },
        {
            "img": "bath towel.jpeg",
            "name": "bath towel",
            "status": false,
            "price": 23,
            "image": "https://i.postimg.cc/3Ngh2tpC/bath-towel.jpg"
        },
        {
            "img": "bathtub.jpeg",
            "name": "bathtub",
            "status": false,
            "price": 45,
            "image": "https://i.postimg.cc/wMKHtCtj/bathtub.jpg"
        },
        {
            "img": "cold water faucet.jpeg",
            "name": "cold water faucet",
            "status": false,
            "price": 39,
            "image": "https://i.postimg.cc/SNhkmpFZ/cold-water-faucet.jpg"
        },
        {
            "img": "curtain rings.jpeg",
            "name": "curtain rings",
            "status": false,
            "price": 40,
            "image": "https://i.postimg.cc/XNFnMYhG/curtain-rings.jpg"
        },
        {
            "img": "curtain rod.jpeg",
            "name": "curtain rod",
            "status": false,
            "price": 35,
            "image": "https://i.postimg.cc/htCB8zJw/curtain-rod.jpg"
        },
        {
            "img": "drain.jpeg",
            "name": "drain",
            "status": false,
            "price": 32,
            "image": "https://i.postimg.cc/tgYHBqWg/drain.jpg"
        },
        {
            "img": "hairdryer.jpeg",
            "name": "hairdryer",
            "status": false,
            "price": 23,
            "image": "https://i.postimg.cc/FHbvYCm9/hairdryer.jpg"
        },
        {
            "img": "hamper.jpeg",
            "name": "hamper",
            "status": false,
            "price": 37,
            "image": "https://i.postimg.cc/k4GPhnS4/hamper.jpg"
        },
        {
            "img": "hand towel.jpeg",
            "name": "hand towel",
            "status": false,
            "price": 50,
            "image": "https://i.postimg.cc/nL0tksCg/hand-towel.jpg"
        },
        {
            "img": "hot water faucet.jpeg",
            "name": "hot water faucet",
            "status": false,
            "price": 50,
            "image": "https://i.postimg.cc/rp8kxGF5/hot-water-faucet.jpg"
        },
        {
            "img": "medicine chest.jpeg",
            "name": "medicine chest",
            "status": false,
            "price": 50,
            "image": "https://i.postimg.cc/ZRQtG1PL/medicine-chest.jpg"
        },
        {
            "img": "nailbrush.jpeg",
            "name": "nailbrush",
            "status": false,
            "price": 29,
            "image": "https://i.postimg.cc/YjKc9YsG/nailbrush.jpg"
        },
        {
            "img": "scale.jpeg",
            "name": "scale",
            "status": false,
            "price": 28,
            "image": "https://i.postimg.cc/Gtswdqqn/scale.jpg"
        },
        {
            "img": "shampoo.jpeg",
            "name": "shampoo",
            "status": false,
            "price": 39,
            "image": "https://i.postimg.cc/59ZjvGcv/shampoo.jpg"
        },
        {
            "img": "shower cap.jpeg",
            "name": "shower cap",
            "status": false,
            "price": 20,
            "image": "https://i.postimg.cc/Qx1Cqbsz/shower-cap.jpg"
        },
        {
            "img": "shower curtain.jpeg",
            "name": "shower curtain",
            "status": false,
            "price": 22,
            "image": "https://i.postimg.cc/kMVB2CHq/shower-curtain.jpg"
        },
        {
            "img": "showerhead.jpeg",
            "name": "showerhead",
            "status": false,
            "price": 20,
            "image": "https://i.postimg.cc/4xGd29xx/showerhead.jpg"
        },
        {
            "img": "sink.jpeg",
            "name": "sink",
            "status": false,
            "price": 44,
            "image": "https://i.postimg.cc/mgSrvgPN/sink.jpg"
        },
        {
            "img": "soap dish.jpeg",
            "name": "soap dish",
            "status": false,
            "price": 41,
            "image": "https://i.postimg.cc/MGPpG3bn/soap-dish.jpg"
        },
        {
            "img": "soap.jpeg",
            "name": "soap",
            "status": false,
            "price": 46,
            "image": "https://i.postimg.cc/MGPpG3bn/soap-dish.jpg"
        },
        {
            "img": "sponge.jpeg",
            "name": "sponge",
            "status": false,
            "price": 50,
            "image": "https://i.postimg.cc/tT8R31cy/sponge.jpg"
        },
        {
            "img": "stopper.jpeg",
            "name": "stopper",
            "status": false,
            "price": 44,
            "image": "https://i.postimg.cc/tRV4X51g/stopper.jpg"
        },
        {
            "img": "title.jpeg",
            "name": "title",
            "status": false,
            "price": 31,
            "image": "https://i.postimg.cc/fyXzBz4d/title.jpg"
        },
        {
            "img": "toilet brush.jpeg",
            "name": "toilet brush",
            "status": false,
            "price": 46,
            "image": "https://i.postimg.cc/zXZX3gWF/toilet-brush.jpg"
        },
        {
            "img": "toilet paper.jpeg",
            "name": "toilet paper",
            "status": false,
            "price": 32,
            "image": "https://i.postimg.cc/xCXTNGtt/toilet-paper.jpg"
        },
        {
            "img": "toilet.jpeg",
            "name": "toilet",
            "status": false,
            "price": 36,
            "image": "https://i.postimg.cc/xCXTNGtt/toilet-paper.jpg"
        },
        {
            "img": "toothbrush.jpeg",
            "name": "toothbrush",
            "status": false,
            "price": 24,
            "image": "https://i.postimg.cc/MptWs3L9/toothbrush.jpg"
        },
        {
            "img": "toothpaste.jpeg",
            "name": "toothpaste",
            "status": false,
            "price": 46,
            "image": "https://i.postimg.cc/wj9qQYwt/toothpaste.jpg"
        },
        {
            "img": "towel rail.jpeg",
            "name": "towel rail",
            "status": false,
            "price": 46,
            "image": "https://i.postimg.cc/d1ZwVsVf/towel-rail.jpg"
        },
        {
            "img": "washcloth.jpeg",
            "name": "washcloth",
            "status": false,
            "price": 46,
            "image": "https://i.postimg.cc/tgT98tQp/washcloth.jpg"
        },
        {
            "img": "wastepaper basket.jpeg",
            "name": "wastepaper basket",
            "status": false,
            "price": 46,
            "image": "https://i.postimg.cc/Jh2R8DMJ/wastepaper-basket.jpg"
        }
    ]


    return arr
}

export default InfoFruit