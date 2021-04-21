function InfoFruit() {
    let arr = [
        {
            "img": "beef.jpeg",
            "name": "beef",
            "status": false,
            "price": 35,
            "image": "https://i.postimg.cc/vmmmMvs0/beef.jpg"
        },
        {
            "img": "chicken breast.jpeg",
            "name": "chicken breast",
            "status": false,
            "price": 39,
            "image": "https://i.postimg.cc/y6R8VdMC/chicken-breast.jpg"
        },
        {
            "img": "chicken leg.jpeg",
            "name": "chicken leg",
            "status": false,
            "price": 57,
            "image": "https://i.postimg.cc/4xP3rSrK/chicken-leg.jpg"
        },
        {
            "img": "chicken split.jpeg",
            "name": "chicken split",
            "status": false,
            "price": 46,
            "image": "https://i.postimg.cc/RFkC75nY/chicken-split.jpg"
        },
        {
            "img": "chicken thigh.jpeg",
            "name": "chicken thigh",
            "status": false,
            "price": 55,
            "image": "https://i.postimg.cc/xCJTNTqH/chicken-thigh.jpg"
        },
        {
            "img": "chicken.jpeg",
            "name": "chicken",
            "status": false,
            "price": 34,
            "image": "https://i.postimg.cc/6pqspb84/whole-chicken.jpg"
        },
        {
            "img": "chiken wing.jpeg",
            "name": "chiken wing",
            "status": false,
            "price": 36,
            "image": "https://i.postimg.cc/cCfxT9RL/chiken-wing.jpg"
        },
        {
            "img": "clam.jpeg",
            "name": "clam",
            "status": false,
            "price": 40,
            "image": "https://i.postimg.cc/15Z54SSn/clam.jpg"
        },
        {
            "img": "crab.jpeg",
            "name": "crab",
            "status": false,
            "price": 54,
            "image": "https://i.postimg.cc/DydfXNfC/crab.jpg"
        },
        {
            "img": "duck.jpeg",
            "name": "duck",
            "status": false,
            "price": 33,
            "image": "https://i.postimg.cc/fRzzjvJM/duck.jpg"
        },
        {
            "img": "fish filet.jpeg",
            "name": "fish filet",
            "status": false,
            "price": 43,
            "image": "https://i.postimg.cc/Dzm7RyrD/fish-filet.jpg"
        },
        {
            "img": "fish steak.jpeg",
            "name": "fish steak",
            "status": false,
            "price": 43,
            "image": "https://i.postimg.cc/6pM9HGvn/fish-steak.jpg"
        },
        {
            "img": "fish.jpeg",
            "name": "fish",
            "status": false,
            "price": 38,
            "image": "https://i.postimg.cc/ydq2nVv0/whole-fish.jpg"
        },
        {
            "img": "ground beef.jpeg",
            "name": "ground beef",
            "status": false,
            "price": 60,
            "image": "https://i.postimg.cc/W3kTbWfw/ground-beef.jpg"
        },
        {
            "img": "ham.jpeg",
            "name": "ham",
            "status": false,
            "price": 30,
            "image": "https://i.postimg.cc/vT7y51y1/ham.jpg"
        },
        {
            "img": "lobster.jpeg",
            "name": "lobster",
            "status": false,
            "price": 52,
            "image": "https://i.postimg.cc/L5FRqtcK/lobster.jpg"
        },
        {
            "img": "mussel.jpeg",
            "name": "mussel",
            "status": false,
            "price": 42,
            "image": "https://i.postimg.cc/SQckBP9y/mussel.jpg"
        },
        {
            "img": "oyster.jpeg",
            "name": "oyster",
            "status": false,
            "price": 30,
            "image": "https://i.postimg.cc/gkdmmKy3/oyster.jpg"
        },
        {
            "img": "pork chops.jpeg",
            "name": "pork chops",
            "status": false,
            "price": 30,
            "image": "https://i.postimg.cc/Yq3k9m8Z/pork-chops.png"
        },
        {
            "img": "pork lamb.jpeg",
            "name": "pork lamb",
            "status": false,
            "price": 33,
            "image": "https://i.postimg.cc/Sxx4zNvs/pork-lamb.jpg"
        },
        {
            "img": "pork leg.jpeg",
            "name": "pork leg",
            "status": false,
            "price": 43,
            "image": "https://i.postimg.cc/Bn7059rC/pork-leg.jpg"
        },
        {
            "img": "pork roast.jpeg",
            "name": "pork roast",
            "status": false,
            "price": 59,
            "image": "https://i.postimg.cc/wBtd04HY/pork-roast.jpg"
        },
        {
            "img": "pork steak.jpeg",
            "name": "pork steak",
            "status": false,
            "price": 44,
            "image": "https://i.postimg.cc/yNwC5hYg/pork-steak.jpg"
        },
        {
            "img": "pork.jpeg",
            "name": "pork",
            "status": false,
            "price": 45,
            "image": "https://i.postimg.cc/yNwC5hYg/pork-steak.jpg"
        },
        {
            "img": "quarter.jpeg",
            "name": "quarter",
            "status": false,
            "price": 37,
            "image": "https://i.postimg.cc/WzVLp2Zs/quarter.jpg"
        },
        {
            "img": "sausage.jpeg",
            "name": "sausage",
            "status": false,
            "price": 35,
            "image": "https://i.postimg.cc/kGyrBkNK/sausage.jpg"
        },
        {
            "img": "scallop.jpeg",
            "name": "scallop",
            "status": false,
            "price": 49,
            "image": "https://i.postimg.cc/44vRL9Cy/scallop.jpg"
        },
        {
            "img": "shrimp.jpeg",
            "name": "shrimp",
            "status": false,
            "price": 44,
            "image": "https://i.postimg.cc/28zRPSmw/shrimp.jpg"
        },
        {
            "img": "spare ribs.jpeg",
            "name": "spare ribs",
            "status": false,
            "price": 33,
            "image": "https://i.postimg.cc/zX0Z5YG1/spare-ribs.jpg"
        },
        {
            "img": "stewing meat.jpeg",
            "name": "stewing meat",
            "status": false,
            "price": 48,
            "image": "https://i.postimg.cc/W1HBFmZW/stewing-meat.jpg"
        },
        {
            "img": "turkey.jpeg",
            "name": "turkey",
            "status": false,
            "price": 57,
            "image": "https://i.postimg.cc/k5RkxVFn/turkey.jpg"
        },
        {
            "img": "whole chicken.jpeg",
            "name": "whole chicken",
            "status": false,
            "price": 55,
            "image": "https://i.postimg.cc/6pqspb84/whole-chicken.jpg"
        },
        {
            "img": "whole fish.jpeg",
            "name": "whole fish",
            "status": false,
            "price": 49,
            "image": "https://i.postimg.cc/ydq2nVv0/whole-fish.jpg"
        },
        {
            "img": "bacon.jpeg",
            "name": "bacon",
            "status": false,
            "price": 46,
            "image": "https://i.postimg.cc/tThwMLMw/bacon.jpg"
        }
    ]

    return arr
}

export default InfoFruit