function InfoFruit() {
    let arr = [
        {
            "img": "cone.jpeg",
            "name": "cone",
            "status": false,
            "price": 50,
            "image": "https://i.postimg.cc/nLqc4Kmk/cone.jpg"
        },
        {
            "img": "corn.jpeg",
            "name": "corn",
            "status": false,
            "price": 49,
            "image": "https://i.postimg.cc/tRBRN4sL/corn.jpg"
        },
        {
            "img": "crocus.jpeg",
            "name": "crocus",
            "status": false,
            "price": 30,
            "image": "https://i.postimg.cc/VvkfP3VG/crocus.jpg"
        },
        {
            "img": "daffodil.jpeg",
            "name": "daffodil",
            "status": false,
            "price": 21,
            "image": "https://i.postimg.cc/W3jpXD6P/daffodil.jpg"
        },
        {
            "img": "daisy.jpeg",
            "name": "daisy",
            "status": false,
            "price": 28,
            "image": "https://i.postimg.cc/T1NRdt8R/daisy.jpg"
        },
        {
            "img": "dogwood.jpeg",
            "name": "dogwood",
            "status": false,
            "price": 28,
            "image": "https://i.postimg.cc/Fs1rWXc1/dogwood.jpg"
        },
        {
            "img": "elm.jpeg",
            "name": "elm",
            "status": false,
            "price": 38,
            "image": "https://i.postimg.cc/9FSWsgtb/elm.jpg"
        },
        {
            "img": "eucalyptus.jpeg",
            "name": "eucalyptus",
            "status": false,
            "price": 30,
            "image": "https://i.postimg.cc/SKbmxXPz/eucalyptus.jpg"
        },
        {
            "img": "gardenia.jpeg",
            "name": "gardenia",
            "status": false,
            "price": 45,
            "image": "https://i.postimg.cc/BnKq35m0/gardenia.jpg"
        },
        {
            "img": "holly.jpeg",
            "name": "holly",
            "status": false,
            "price": 27,
            "image": "https://i.postimg.cc/76xDSFwH/holly.jpg"
        },
        {
            "img": "house plant.jpeg",
            "name": "house plant",
            "status": false,
            "price": 27,
            "image": "https://i.postimg.cc/HL0dcYGv/house-plant.jpg"
        },
        {
            "img": "hyacinth.jpeg",
            "name": "hyacinth",
            "status": false,
            "price": 30,
            "image": "https://i.postimg.cc/LXNSDx8z/hyacinth.jpg"
        },
        {
            "img": "iris.jpeg",
            "name": "iris",
            "status": false,
            "price": 48,
            "image": "https://i.postimg.cc/tJJjMFs8/iris.jpg"
        },
        {
            "img": "leaf.jpeg",
            "name": "leaf",
            "status": false,
            "price": 44,
            "image": "https://i.postimg.cc/XqPbSXFq/leaf.jpg"
        },
        {
            "img": "lily.jpeg",
            "name": "lily",
            "status": false,
            "price": 20,
            "image": "https://i.postimg.cc/h4Zg7Zwn/lily.jpg"
        },
        {
            "img": "magnolia.jpeg",
            "name": "magnolia",
            "status": false,
            "price": 28,
            "image": "https://i.postimg.cc/tC1bdtQx/magnolia.jpg"
        },
        {
            "img": "maple.jpeg",
            "name": "maple",
            "status": false,
            "price": 48,
            "image": "https://i.postimg.cc/m20smzB6/maple.jpg"
        },
        {
            "img": "marigold.jpg",
            "name": "marigold",
            "status": false,
            "price": 44,
            "image": "https://i.postimg.cc/Jh8WWfyN/marigold.jpg"
        },
        {
            "img": "needle.jpeg",
            "name": "needle",
            "status": false,
            "price": 37,
            "image": "https://i.postimg.cc/CxkVXhKM/needle.jpg"
        },
        {
            "img": "oak.jpeg",
            "name": "oak",
            "status": false,
            "price": 40,
            "image": "https://i.postimg.cc/tTCQsFN7/oak.jpg"
        },
        {
            "img": "oats.jpeg",
            "name": "oats",
            "status": false,
            "price": 28,
            "image": "https://i.postimg.cc/bvRfYmbK/oats.jpg"
        },
        {
            "img": "orchid.jpeg",
            "name": "orchid",
            "status": false,
            "price": 20,
            "image": "https://i.postimg.cc/cH9qw6Fh/orchid.jpg"
        },
        {
            "img": "palm.jpeg",
            "name": "palm",
            "status": false,
            "price": 37,
            "image": "https://i.postimg.cc/cC2Vk2y8/palm.jpg"
        },
        {
            "img": "pansy.jpeg",
            "name": "pansy",
            "status": false,
            "price": 48,
            "image": "https://i.postimg.cc/cCrpmZjS/pansy.jpg"
        },
        {
            "img": "petal.jpeg",
            "name": "petal",
            "status": false,
            "price": 26,
            "image": "https://i.postimg.cc/CM2TKBBL/petal.jpg"
        },
        {
            "img": "petunia.jpeg",
            "name": "petunia",
            "status": false,
            "price": 35,
            "image": "https://i.postimg.cc/65Gs4WnV/petunia.jpg"
        },
        {
            "img": "pine.jpeg",
            "name": "pine",
            "status": false,
            "price": 26,
            "image": "https://i.postimg.cc/MTr4XNGr/pine.jpg"
        },
        {
            "img": "poinsettia.jpeg",
            "name": "poinsettia",
            "status": false,
            "price": 50,
            "image": "https://i.postimg.cc/P5GgmgQg/poinsettia.jpg"
        },
        {
            "img": "poison ivy.jpeg",
            "name": "poison ivy",
            "status": false,
            "price": 31,
            "image": "https://i.postimg.cc/xdnBZL7g/poison-ivy.jpg"
        },
        {
            "img": "poison oak.jpeg",
            "name": "poison oak",
            "status": false,
            "price": 41,
            "image": "https://i.postimg.cc/y8FwnLfk/poison-oak.jpg"
        },
        {
            "img": "poison sumac.jpeg",
            "name": "poison sumac",
            "status": false,
            "price": 33,
            "image": "https://i.postimg.cc/s2mbCvCz/poison-sumac.jpg"
        },
        {
            "img": "poplar.jpeg",
            "name": "poplar",
            "status": false,
            "price": 50,
            "image": "https://i.postimg.cc/LXsw92m1/poplar.jpg"
        },
        {
            "img": "redwood.jpeg",
            "name": "redwood",
            "status": false,
            "price": 37,
            "image": "https://i.postimg.cc/L5YWPDY4/redwood.jpg"
        },
        {
            "img": "rice.jpeg",
            "name": "rice",
            "status": false,
            "price": 48,
            "image": "https://i.postimg.cc/xjBf4FPR/rice.jpg"
        },
        {
            "img": "root.jpeg",
            "name": "root",
            "status": false,
            "price": 49,
            "image": "https://i.postimg.cc/3rkr9H2N/root.jpg"
        },
        {
            "img": "rose.jpeg",
            "name": "rose",
            "status": false,
            "price": 44,
            "image": "https://i.postimg.cc/SRBvf9C6/rose.jpg"
        },
        {
            "img": "sugar cane.jpeg",
            "name": "sugar cane",
            "status": false,
            "price": 23,
            "image": "https://i.postimg.cc/BQDS9cYG/sugar-cane.jpg"
        },
        {
            "img": "sunflower.jpeg",
            "name": "sunflower",
            "status": false,
            "price": 37,
            "image": "https://i.postimg.cc/FH499d8k/sunflower.jpg"
        },
        {
            "img": "thorn.jpeg",
            "name": "thorn",
            "status": false,
            "price": 45,
            "image": "https://i.postimg.cc/xdjnmr00/thorn.jpg"
        },
        {
            "img": "tree.jpeg",
            "name": "tree",
            "status": false,
            "price": 48,
            "image": "https://i.postimg.cc/3xF3WrQS/tree.jpg"
        },
        {
            "img": "trunk.jpeg",
            "name": "trunk",
            "status": false,
            "price": 25,
            "image": "https://i.postimg.cc/NM5tN19S/trunk.jpg"
        },
        {
            "img": "tulip.jpeg",
            "name": "tulip",
            "status": false,
            "price": 26,
            "image": "https://i.postimg.cc/3wL7CLR2/tulip.jpg"
        },
        {
            "img": "twig.jpeg",
            "name": "twig",
            "status": false,
            "price": 49,
            "image": "https://i.postimg.cc/Ss3hHJcs/twig.jpg"
        },
        {
            "img": "vine.jpeg",
            "name": "vine",
            "status": false,
            "price": 43,
            "image": "https://i.postimg.cc/rs4kTM99/vine.jpg"
        },
        {
            "img": "violet.jpeg",
            "name": "violet",
            "status": false,
            "price": 21,
            "image": "https://i.postimg.cc/DyqTYf0v/violet.jpg"
        },
        {
            "img": "wheat.jpeg",
            "name": "wheat",
            "status": false,
            "price": 28,
            "image": "https://i.postimg.cc/jdVTXns3/wheat.jpg"
        },
        {
            "img": "willow.jpeg",
            "name": "willow",
            "status": false,
            "price": 20,
            "image": "https://i.postimg.cc/pV5xzJtn/willow.jpg"
        },
        {
            "img": "zinnia.jpeg",
            "name": "zinnia",
            "status": false,
            "price": 39,
            "image": "https://i.postimg.cc/SKKbsWrR/zinnia.jpg"
        },
        {
            "img": "acorn.jpeg",
            "name": "acorn",
            "status": false,
            "price": 35,
            "image": "https://i.postimg.cc/P5ykT610/acorn.jpg"
        },
        {
            "img": "bark.jpeg",
            "name": "bark",
            "status": false,
            "price": 44,
            "image": "https://i.postimg.cc/VNHQbdGR/bark.jpg"
        },
        {
            "img": "birch.jpeg",
            "name": "birch",
            "status": false,
            "price": 37,
            "image": "https://i.postimg.cc/zBbmw841/birch.jpg"
        },
        {
            "img": "branch.jpeg",
            "name": "branch",
            "status": false,
            "price": 43,
            "image": "https://i.postimg.cc/85q2txVf/branch.jpg"
        },
        {
            "img": "bud.jpeg",
            "name": "bud",
            "status": false,
            "price": 36,
            "image": "https://i.postimg.cc/mkC0qVbX/bud.jpg"
        },
        {
            "img": "bushes.jpeg",
            "name": "bushes",
            "status": false,
            "price": 29,
            "image": "https://i.postimg.cc/SQ9FJQW6/bushes.jpg"
        },
        {
            "img": "buttercup.jpeg",
            "name": "buttercup",
            "status": false,
            "price": 44,
            "image": "https://i.postimg.cc/bw7wSVZr/buttercup.jpg"
        },
        {
            "img": "cactus.jpeg",
            "name": "cactus",
            "status": false,
            "price": 36,
            "image": "https://i.postimg.cc/JzDhnC4S/cactus.jpg"
        }
    ]


    return arr
}

export default InfoFruit