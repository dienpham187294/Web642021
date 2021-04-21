function InfoFruit() {
    let arr = [
        {
            "img": "electric drill.jpeg",
            "name": "electric drill",
            "status": false,
            "price": 44,
            "image": "https://i.postimg.cc/4xRqv200/electric-drill.jpg"
        },
        {
            "img": "electrical tape.jpeg",
            "name": "electrical tape",
            "status": false,
            "price": 49,
            "image": "https://i.postimg.cc/4N9j9RWt/electrical-tape.jpg"
        },
        {
            "img": "extension lead.jpeg",
            "name": "extension lead",
            "status": false,
            "price": 30,
            "image": "https://i.postimg.cc/q73tfRwq/extension-lead.jpg"
        },
        {
            "img": "glue.jpeg",
            "name": "glue",
            "status": false,
            "price": 43,
            "image": "https://i.postimg.cc/nzfXnJSk/glue.jpg"
        },
        {
            "img": "grounding plug.jpeg",
            "name": "grounding plug",
            "status": false,
            "price": 37,
            "image": "https://i.postimg.cc/0j8rJCsK/grounding-plug.jpg"
        },
        {
            "img": "hacksaw.jpeg",
            "name": "hacksaw",
            "status": false,
            "price": 58,
            "image": "https://i.postimg.cc/MT0vTFh8/hacksaw.jpg"
        },
        {
            "img": "hammer.jpeg",
            "name": "hammer",
            "status": false,
            "price": 43,
            "image": "https://i.postimg.cc/WpndcxGG/hammer.jpg"
        },
        {
            "img": "hatchet.jpeg",
            "name": "hatchet",
            "status": false,
            "price": 32,
            "image": "https://i.postimg.cc/ncSMC7wM/hatchet.jpg"
        },
        {
            "img": "hook.jpeg",
            "name": "hook",
            "status": false,
            "price": 36,
            "image": "https://i.postimg.cc/D0B0Qbvj/hook.jpg"
        },
        {
            "img": "jigsaw.jpeg",
            "name": "jigsaw",
            "status": false,
            "price": 58,
            "image": "https://i.postimg.cc/4NxmfwPr/jigsaw.jpg"
        },
        {
            "img": "mallet.jpeg",
            "name": "mallet",
            "status": false,
            "price": 36,
            "image": "https://i.postimg.cc/htJvxjHs/mallet.jpg"
        },
        {
            "img": "monkey wrench.jpeg",
            "name": "monkey wrench",
            "status": false,
            "price": 53,
            "image": "https://i.postimg.cc/rwvm9TTk/monkey-wrench.jpg"
        },
        {
            "img": "nail.jpeg",
            "name": "nail",
            "status": false,
            "price": 47,
            "image": "https://i.postimg.cc/xdMdxZjb/nail.jpg"
        },
        {
            "img": "nut.jpeg",
            "name": "nut",
            "status": false,
            "price": 45,
            "image": "https://i.postimg.cc/qRrv9GgD/nut.jpg"
        },
        {
            "img": "outlet.jpeg",
            "name": "outlet",
            "status": false,
            "price": 47,
            "image": "https://i.postimg.cc/qRGv0C3J/outlet.jpg"
        },
        {
            "img": "paint.jpeg",
            "name": "paint",
            "status": false,
            "price": 53,
            "image": "https://i.postimg.cc/j2gqn0cB/paintbrush.jpg"
        },
        {
            "img": "paintbrush.jpeg",
            "name": "paintbrush",
            "status": false,
            "price": 49,
            "image": "https://i.postimg.cc/j2gqn0cB/paintbrush.jpg"
        },
        {
            "img": "pan.jpeg",
            "name": "pan",
            "status": false,
            "price": 36,
            "image": "https://i.postimg.cc/3rnxcmh9/pan.jpg"
        },
        {
            "img": "pegboard.jpeg",
            "name": "pegboard",
            "status": false,
            "price": 32,
            "image": "https://i.postimg.cc/FszH5zsv/pegboard.jpg"
        },
        {
            "img": "Phillips screwdriver.jpeg",
            "name": "Phillips screwdriver",
            "status": false,
            "price": 38,
            "image": "https://i.postimg.cc/3JqJKhdv/Phillips-screwdriver.jpg"
        },
        {
            "img": "pliers.jpeg",
            "name": "pliers",
            "status": false,
            "price": 34,
            "image": "https://i.postimg.cc/cL81Czn5/pliers.jpg"
        },
        {
            "img": "power sander.jpeg",
            "name": "power sander",
            "status": false,
            "price": 42,
            "image": "https://i.postimg.cc/s2djhJPf/power-sander.jpg"
        },
        {
            "img": "roller.jpeg",
            "name": "roller",
            "status": false,
            "price": 39,
            "image": "https://i.postimg.cc/QMQXkWSQ/roller.jpg"
        },
        {
            "img": "router.jpeg",
            "name": "router",
            "status": false,
            "price": 55,
            "image": "https://i.postimg.cc/9MccxFNv/router.jpg"
        },
        {
            "img": "sandpaper.jpeg",
            "name": "sandpaper",
            "status": false,
            "price": 33,
            "image": "https://i.postimg.cc/d1nwgPbD/sandpaper.jpg"
        },
        {
            "img": "saw.jpeg",
            "name": "saw",
            "status": false,
            "price": 35,
            "image": "https://i.postimg.cc/rsmMkZTj/saw.jpg"
        },
        {
            "img": "scraper.jpeg",
            "name": "scraper",
            "status": false,
            "price": 32,
            "image": "https://i.postimg.cc/3rS3Bhjc/scraper.jpg"
        },
        {
            "img": "screw.jpeg",
            "name": "screw",
            "status": false,
            "price": 50,
            "image": "https://i.postimg.cc/8cjQ3Fdn/screwdriver.jpg"
        },
        {
            "img": "screwdriver.jpeg",
            "name": "screwdriver",
            "status": false,
            "price": 52,
            "image": "https://i.postimg.cc/8cjQ3Fdn/screwdriver.jpg"
        },
        {
            "img": "tape measure.jpeg",
            "name": "tape measure",
            "status": false,
            "price": 31,
            "image": "https://i.postimg.cc/P5ZhT8gg/tape-measure.jpg"
        },
        {
            "img": "toolbox.jpeg",
            "name": "toolbox",
            "status": false,
            "price": 49,
            "image": "https://i.postimg.cc/pdHvTLxp/toolbox.jpg"
        },
        {
            "img": "vise.jpeg",
            "name": "vise",
            "status": false,
            "price": 37,
            "image": "https://i.postimg.cc/d0jYTctn/vise.jpg"
        },
        {
            "img": "washer.jpeg",
            "name": "washer",
            "status": false,
            "price": 31,
            "image": "https://i.postimg.cc/0Q5qYXzv/washer.jpg"
        },
        {
            "img": "wire.jpeg",
            "name": "wire",
            "status": false,
            "price": 49,
            "image": "https://i.postimg.cc/fLHQB7d9/wire.jpg"
        },
        {
            "img": "wood plane.jpeg",
            "name": "wood plane",
            "status": false,
            "price": 31,
            "image": "https://i.postimg.cc/mZ5G9wBx/wood-plane.jpg"
        },
        {
            "img": "wood.jpeg",
            "name": "wood",
            "status": false,
            "price": 53,
            "image": "https://i.postimg.cc/mZ5G9wBx/wood-plane.jpg"
        },
        {
            "img": "workbench.jpeg",
            "name": "workbench",
            "status": false,
            "price": 43,
            "image": "https://i.postimg.cc/bvpXPVHn/workbench.jpg"
        },
        {
            "img": "wrench.jpeg",
            "name": "wrench",
            "status": false,
            "price": 35,
            "image": "https://i.postimg.cc/13xhC38J/wrench.jpg"
        },
        {
            "img": "bolt.jpeg",
            "name": "bolt",
            "status": false,
            "price": 33,
            "image": "https://i.postimg.cc/g2v9fbRd/bolt.jpg"
        },
        {
            "img": "brace.jpeg",
            "name": "brace",
            "status": false,
            "price": 34,
            "image": "https://i.postimg.cc/NMjW9ynf/brace.jpg"
        },
        {
            "img": "carpenter's rule.jpeg",
            "name": "carpenter's rule",
            "status": false,
            "price": 41
        },
        {
            "img": "C-clamp.jpeg",
            "name": "C-clamp",
            "status": false,
            "price": 49,
            "image": "https://i.postimg.cc/wMtZ2CHC/C-clamp.jpg"
        },
        {
            "img": "circular saw.jpeg",
            "name": "circular saw",
            "status": false,
            "price": 38,
            "image": "https://i.postimg.cc/HnfKh6kV/circular-saw.jpg"
        }
    ]
    return arr
}

export default InfoFruit