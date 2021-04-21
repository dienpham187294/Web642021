function InfoFruit() {
    let arr = [
        {
            "img": "ballpoint.jpeg",
            "name": "ballpoint",
            "status": false,
            "price": 30,
            "image": "https://i.postimg.cc/GmsX83tn/ballpoint.jpg"
        },
        {
            "img": "bookcase.jpeg",
            "name": "bookcase",
            "status": false,
            "price": 60,
            "image": "https://i.postimg.cc/3wX91L2L/bookcase.jpg"
        },
        {
            "img": "brush.jpeg",
            "name": "brush",
            "status": false,
            "price": 48,
            "image": "https://i.postimg.cc/zXvtNF1B/brush.jpg"
        },
        {
            "img": "bulletin board.jpeg",
            "name": "bulletin board",
            "status": false,
            "price": 44,
            "image": "https://i.postimg.cc/65PHp49h/bulletin-board.jpg"
        },
        {
            "img": "calculator.jpeg",
            "name": "calculator",
            "status": false,
            "price": 40,
            "image": "https://i.postimg.cc/k47spxc7/calculator.jpg"
        },
        {
            "img": "calendar.jpeg",
            "name": "calendar",
            "status": false,
            "price": 58,
            "image": "https://i.postimg.cc/25R24pLb/calendar.jpg"
        },
        {
            "img": "chalk tray.jpeg",
            "name": "chalk tray",
            "status": false,
            "price": 56,
            "image": "https://i.postimg.cc/MTt52vPV/chalk-tray.jpg"
        },
        {
            "img": "chalk.jpg",
            "name": "chalk",
            "status": false,
            "price": 57,
            "image": "https://i.postimg.cc/hGB1X9NV/chalkboard.png"
        },
        {
            "img": "chalkboard.jpeg",
            "name": "chalkboard",
            "status": false,
            "price": 58,
            "image": "https://i.postimg.cc/hGB1X9NV/chalkboard.png"
        },
        {
            "img": "cleaner.jpeg",
            "name": "cleaner",
            "status": false,
            "price": 50,
            "image": "https://i.postimg.cc/d3x93gK0/cleaner.jpg"
        },
        {
            "img": "clock.jpeg",
            "name": "clock",
            "status": false,
            "price": 58,
            "image": "https://i.postimg.cc/44LPWHhT/clock.jpg"
        },
        {
            "img": "computer.jpeg",
            "name": "computer",
            "status": false,
            "price": 60,
            "image": "https://i.postimg.cc/q7xXyNdS/computer.jpg"
        },
        {
            "img": "cubicle.jpeg",
            "name": "cubicle",
            "status": false,
            "price": 54,
            "image": "https://i.postimg.cc/m2PwJZQ1/cubicle.jpg"
        },
        {
            "img": "desk.jpeg",
            "name": "desk",
            "status": false,
            "price": 57,
            "image": "https://i.postimg.cc/YqT3Hc3n/desk.jpg"
        },
        {
            "img": "envelope.jpeg",
            "name": "envelope",
            "status": false,
            "price": 55,
            "image": "https://i.postimg.cc/W1r7p9Y2/envelope.jpg"
        },
        {
            "img": "eraser.jpg",
            "name": "eraser",
            "status": false,
            "price": 48,
            "image": "https://i.postimg.cc/Jn73qRrn/eraser.jpg"
        },
        {
            "img": "file cabinet.jpeg",
            "name": "file cabinet",
            "status": false,
            "price": 54,
            "image": "https://i.postimg.cc/zBdC24vk/file-cabinet.jpg"
        },
        {
            "img": "file clerk.jpeg",
            "name": "file clerk",
            "status": false,
            "price": 53,
            "image": "https://i.postimg.cc/tJYhKDVG/file-clerk.jpg"
        },
        {
            "img": "file folder.jpeg",
            "name": "file folder",
            "status": false,
            "price": 58,
            "image": "https://i.postimg.cc/4yqzstz7/file-folder.jpg"
        },
        {
            "img": "flag.jpeg",
            "name": "flag",
            "status": false,
            "price": 56,
            "image": "https://i.postimg.cc/rFR1gnkS/flag.jpg"
        },
        {
            "img": "glue.jpeg",
            "name": "glue",
            "status": false,
            "price": 47,
            "image": "https://i.postimg.cc/HWh0wGfY/glue.jpg"
        },
        {
            "img": "hall.jpeg",
            "name": "hall",
            "status": false,
            "price": 32,
            "image": "https://i.postimg.cc/g29v7Vz1/hall.jpg"
        },
        {
            "img": "headset.jpeg",
            "name": "headset",
            "status": false,
            "price": 58,
            "image": "https://i.postimg.cc/Xv49jny8/headset.jpg"
        },
        {
            "img": "in-box.jpeg",
            "name": "in-box",
            "status": false,
            "price": 50,
            "image": "https://i.postimg.cc/VkjjPJ5v/in-box.jpg"
        },
        {
            "img": "legal pad.jpeg",
            "name": "legal pad",
            "status": false,
            "price": 33,
            "image": "https://i.postimg.cc/R0dKq27z/legal-pad.jpg"
        },
        {
            "img": "locker.jpeg",
            "name": "locker",
            "status": false,
            "price": 59,
            "image": "https://i.postimg.cc/qR7nKQw6/locker.jpg"
        },
        {
            "img": "loose-leaf paper.jpeg",
            "name": "loose-leaf paper",
            "status": false,
            "price": 57,
            "image": "https://i.postimg.cc/ZRDNx3s7/loose-leaf-paper.jpg"
        },
        {
            "img": "loudspeaker.jpeg",
            "name": "loudspeaker",
            "status": false,
            "price": 47,
            "image": "https://i.postimg.cc/D0JXjZt2/loudspeaker.jpg"
        },
        {
            "img": "manager.jpeg",
            "name": "manager",
            "status": false,
            "price": 47,
            "image": "https://i.postimg.cc/QC2WRD3c/manager.jpg"
        },
        {
            "img": "message pad.jpeg",
            "name": "message pad",
            "status": false,
            "price": 40,
            "image": "https://i.postimg.cc/mZJMcYHh/message-pad.jpg"
        },
        {
            "img": "overhead projector.jpeg",
            "name": "overhead projector",
            "status": false,
            "price": 50,
            "image": "https://i.postimg.cc/JhpHRZ8r/overhead-projector.jpg"
        },
        {
            "img": "paper clips.jpeg",
            "name": "paper clips",
            "status": false,
            "price": 43,
            "image": "https://i.postimg.cc/YqFFQv6R/paper-clips.jpg"
        },
        {
            "img": "pencil sharpener.jpeg",
            "name": "pencil sharpener",
            "status": false,
            "price": 57,
            "image": "https://i.postimg.cc/K8yMfmQ2/pencil-sharpener.jpg"
        },
        {
            "img": "pencil.jpeg",
            "name": "pencil",
            "status": false,
            "price": 44,
            "image": "https://i.postimg.cc/K8yMfmQ2/pencil-sharpener.jpg"
        },
        {
            "img": "photocopier.jpeg",
            "name": "photocopier",
            "status": false,
            "price": 60,
            "image": "https://i.postimg.cc/43fhCwr2/photocopier.jpg"
        },
        {
            "img": "printer.jpeg",
            "name": "printer",
            "status": false,
            "price": 43,
            "image": "https://i.postimg.cc/TwhL112r/printer.jpg"
        },
        {
            "img": "printout.jpeg",
            "name": "printout",
            "status": false,
            "price": 58,
            "image": "https://i.postimg.cc/63S7vKTF/printout.jpg"
        },
        {
            "img": "ring binder.jpeg",
            "name": "ring binder",
            "status": false,
            "price": 58,
            "image": "https://i.postimg.cc/T1DKjsD1/ring-binder.jpg"
        },
        {
            "img": "rolodex.jpeg",
            "name": "rolodex",
            "status": false,
            "price": 56,
            "image": "https://i.postimg.cc/J7GdJCpx/rolodex.jpg"
        },
        {
            "img": "ruler.jpeg",
            "name": "ruler",
            "status": false,
            "price": 56,
            "image": "https://i.postimg.cc/JtCGpQNq/ruler.jpg"
        },
        {
            "img": "secretary.jpeg",
            "name": "secretary",
            "status": false,
            "price": 53,
            "image": "https://i.postimg.cc/Z5hf1B4s/secretary.jpg"
        },
        {
            "img": "spiral-bound.jpeg",
            "name": "spiral-bound",
            "status": false,
            "price": 52,
            "image": "https://i.postimg.cc/vHnqqLF6/spiral-bound.jpg"
        },
        {
            "img": "staple remover.jpeg",
            "name": "staple remover",
            "status": false,
            "price": 30,
            "image": "https://i.postimg.cc/ZY2sxsgS/staple-remover.jpg"
        },
        {
            "img": "stapler.jpeg",
            "name": "stapler",
            "status": false,
            "price": 30,
            "image": "https://i.postimg.cc/g0zg2Cwv/stapler.jpg"
        },
        {
            "img": "switchboard operator.jpeg",
            "name": "switchboard operator",
            "status": false,
            "price": 46,
            "image": "https://i.postimg.cc/XvsQGsFt/switchboard-operator.jpg"
        },
        {
            "img": "switchboard.jpeg",
            "name": "switchboard",
            "status": false,
            "price": 47,
            "image": "https://i.postimg.cc/XvsQGsFt/switchboard-operator.jpg"
        },
        {
            "img": "telephone.jpeg",
            "name": "telephone",
            "status": false,
            "price": 56,
            "image": "https://i.postimg.cc/LXhvzj35/telephone.jpg"
        },
        {
            "img": "text book.jpeg",
            "name": "text book",
            "status": false,
            "price": 42,
            "image": "https://i.postimg.cc/mZz8kNr6/text-book.jpg"
        },
        {
            "img": "thumbtack.jpeg",
            "name": "thumbtack",
            "status": false,
            "price": 47,
            "image": "https://i.postimg.cc/vTVzKMjd/thumbtack.jpg"
        },
        {
            "img": "typewriter.jpeg",
            "name": "typewriter",
            "status": false,
            "price": 41,
            "image": "https://i.postimg.cc/027ndkDY/typewriter.jpg"
        },
        {
            "img": "typing chair.jpeg",
            "name": "typing chair",
            "status": false,
            "price": 53,
            "image": "https://i.postimg.cc/ZYGjdBBY/typing-chair.jpg"
        },
        {
            "img": "typist.jpeg",
            "name": "typist",
            "status": false,
            "price": 31,
            "image": "https://i.postimg.cc/9QVpL6Yv/typist.jpg"
        },
        {
            "img": "word processor.jpeg",
            "name": "word processor",
            "status": false,
            "price": 51,
            "image": "https://i.postimg.cc/qvLGS1mg/word-processor.jpg"
        }
    ]

    return arr
}

export default InfoFruit