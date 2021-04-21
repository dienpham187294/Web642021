function InfoFruit() {
    let arr = [
        {
            "img": "drum.jpg",
            "name": "drum",
            "status": false,
            "price": 47,
            "image": "https://i.postimg.cc/QdhZ5gfh/drum.jpg"
        },
        {
            "img": "flute.jpg",
            "name": "flute",
            "status": false,
            "price": 29,
            "image": "https://i.postimg.cc/RCJmzZ35/flute.jpg"
        },
        {
            "img": "French horn.jpg",
            "name": "French horn",
            "status": false,
            "price": 21,
            "image": "https://i.postimg.cc/Cx7T4Z2D/French-horn.jpg"
        },
        {
            "img": "guitar.jpg",
            "name": "guitar",
            "status": false,
            "price": 50,
            "image": "https://i.postimg.cc/DyqK8pdx/guitar.jpg"
        },
        {
            "img": "harmonica.jpg",
            "name": "harmonica",
            "status": false,
            "price": 28,
            "image": "https://i.postimg.cc/65sX6xR7/harmonica.jpg"
        },
        {
            "img": "harp.jpg",
            "name": "harp",
            "status": false,
            "price": 23,
            "image": "https://i.postimg.cc/vmmR2YRK/harp.jpg"
        },
        {
            "img": "kettledrum.jpg",
            "name": "kettledrum",
            "status": false,
            "price": 33,
            "image": "https://i.postimg.cc/Dzp9t9nw/kettledrum.jpg"
        },
        {
            "img": "mandolin.jpg",
            "name": "mandolin",
            "status": false,
            "price": 23,
            "image": "https://i.postimg.cc/W3DBj516/mandolin.jpg"
        },
        {
            "img": "oboe.jpg",
            "name": "oboe",
            "status": false,
            "price": 42,
            "image": "https://i.postimg.cc/KzddYtKX/oboe.jpg"
        },
        {
            "img": "organ.jpg",
            "name": "organ",
            "status": false,
            "price": 35,
            "image": "https://i.postimg.cc/J7kf2YgR/organ.jpg"
        },
        {
            "img": "piano.jpg",
            "name": "piano",
            "status": false,
            "price": 23,
            "image": "https://i.postimg.cc/L5LGghfJ/piano.jpg"
        },
        {
            "img": "piccolo.jpg",
            "name": "piccolo",
            "status": false,
            "price": 31,
            "image": "https://i.postimg.cc/kXP03F3K/piccolo.jpg"
        },
        {
            "img": "saxophone.jpg",
            "name": "saxophone",
            "status": false,
            "price": 44,
            "image": "https://i.postimg.cc/7Zmd2FCn/saxophone.jpg"
        },
        {
            "img": "sheet music.jpg",
            "name": "sheet music",
            "status": false,
            "price": 43,
            "image": "https://i.postimg.cc/139b4mzz/sheet-music.jpg"
        },
        {
            "img": "tambourine.jpg",
            "name": "tambourine",
            "status": false,
            "price": 23,
            "image": "https://i.postimg.cc/vmTjL0fF/tambourine.jpg"
        },
        {
            "img": "trombone.jpg",
            "name": "trombone",
            "status": false,
            "price": 30,
            "image": "https://i.postimg.cc/hGYYCV1J/trombone.jpg"
        },
        {
            "img": "trumpet.jpg",
            "name": "trumpet",
            "status": false,
            "price": 48,
            "image": "https://i.postimg.cc/4y6FNqkt/trumpet.jpg"
        },
        {
            "img": "tuba.jpg",
            "name": "tuba",
            "status": false,
            "price": 23,
            "image": "https://i.postimg.cc/3RDczWtt/tuba.jpg"
        },
        {
            "img": "ukulele.jpg",
            "name": "ukulele",
            "status": false,
            "price": 35,
            "image": "https://i.postimg.cc/6qJmKwSt/ukulele.jpg"
        },
        {
            "img": "viola.jpg",
            "name": "viola",
            "status": false,
            "price": 43,
            "image": "https://i.postimg.cc/KcBWNkkz/viola.jpg"
        },
        {
            "img": "violin.jpg",
            "name": "violin",
            "status": false,
            "price": 36,
            "image": "https://i.postimg.cc/02vBHkDC/violin.png"
        },
        {
            "img": "xylophone.jpg",
            "name": "xylophone",
            "status": false,
            "price": 49,
            "image": "https://i.postimg.cc/3xJbYtL4/xylophone.jpg"
        },
        {
            "img": "accordion.jpg",
            "name": "accordion",
            "status": false,
            "price": 21,
            "image": "https://i.postimg.cc/9Q8gMySx/accordion.jpg"
        },
        {
            "img": "banjo.jpg",
            "name": "banjo",
            "status": false,
            "price": 50,
            "image": "https://i.postimg.cc/1t6vJ2zT/banjo.jpg"
        },
        {
            "img": "bass.jpg",
            "name": "bass",
            "status": false,
            "price": 36,
            "image": "https://i.postimg.cc/KY1qgRhm/bassoon.jpg"
        },
        {
            "img": "bassoon.jpg",
            "name": "bassoon",
            "status": false,
            "price": 33,
            "image": "https://i.postimg.cc/KY1qgRhm/bassoon.jpg"
        },
        {
            "img": "bongos.jpg",
            "name": "bongos",
            "status": false,
            "price": 34,
            "image": "https://i.postimg.cc/0NhtGP9D/bongos.jpg"
        },
        {
            "img": "cello.jpg",
            "name": "cello",
            "status": false,
            "price": 32,
            "image": "https://i.postimg.cc/5yVnGgYt/cello.png"
        },
        {
            "img": "clarinet.jpg",
            "name": "clarinet",
            "status": false,
            "price": 42,
            "image": "https://i.postimg.cc/63yXq9YZ/clarinet.jpg"
        },
        {
            "img": "conga.jpg",
            "name": "conga",
            "status": false,
            "price": 49,
            "image": "https://i.postimg.cc/3NGQjtMJ/conga.jpg"
        },
        {
            "img": "cymbals.jpg",
            "name": "cymbals",
            "status": false,
            "price": 43,
            "image": "https://i.postimg.cc/wvZdsSGG/cymbals.jpg"
        }
    ]


    return arr
}

export default InfoFruit