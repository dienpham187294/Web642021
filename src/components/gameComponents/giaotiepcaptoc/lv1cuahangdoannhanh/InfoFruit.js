function InfoFruit() {
    let arr = [
        {
            "img": "Jelly.jpg",
            "name": "Jelly",
            "status": false,
            "price": 28,
            "image": "https://i.postimg.cc/4x5hG5Y0/Jelly.jpg"
        },
        {
            "img": "Mashed Potatoes.jpg",
            "name": "Mashed Potatoes",
            "status": false,
            "price": 39,
            "image": "https://i.postimg.cc/TPNLL3qq/Mashed-Potatoes.jpg"
        },
        {
            "img": "Meatballs.jpg",
            "name": "Meatballs",
            "status": false,
            "price": 36,
            "image": "https://i.postimg.cc/9X7R0V4Z/Meatballs.jpg"
        },
        {
            "img": "Mixed Vegetables.jpg",
            "name": "Mixed Vegetables",
            "status": false,
            "price": 22,
            "image": "https://i.postimg.cc/Hs0r029L/Mixed-Vegetables.jpg"
        },
        {
            "img": "Mustard.jpg",
            "name": "Mustard",
            "status": false,
            "price": 41,
            "image": "https://i.postimg.cc/sDCBZ8S8/Mustard.jpg"
        },
        {
            "img": "Pancakes.jpg",
            "name": "Pancakes",
            "status": false,
            "price": 43,
            "image": "https://i.postimg.cc/fRBkpRFn/Pancakes.jpg"
        },
        {
            "img": "Pickle.jpg",
            "name": "Pickle",
            "status": false,
            "price": 33,
            "image": "https://i.postimg.cc/9QWrL7LY/Pickle.jpg"
        },
        {
            "img": "Pizza.jpg",
            "name": "Pizza",
            "status": false,
            "price": 21,
            "image": "https://i.postimg.cc/FKz14Q5f/Pizza.jpg"
        },
        {
            "img": "Pork Chops.jpg",
            "name": "Pork Chops",
            "status": false,
            "price": 34,
            "image": "https://i.postimg.cc/25tyjXr0/Pork-Chops.jpg"
        },
        {
            "img": "Potato Chips.jpg",
            "name": "Potato Chips",
            "status": false,
            "price": 34,
            "image": "https://i.postimg.cc/mDFDPNrB/Potato-Chips.jpg"
        },
        {
            "img": "Roll.jpg",
            "name": "Roll",
            "status": false,
            "price": 38,
            "image": "https://i.postimg.cc/5ydtLYHv/Roll.jpg"
        },
        {
            "img": "Salad Dressing.jpg",
            "name": "Salad Dressing",
            "status": false,
            "price": 32,
            "image": "https://i.postimg.cc/7h3ZVH7R/Salad-Dressing.jpg"
        },
        {
            "img": "Spaghetti.jpg",
            "name": "Spaghetti",
            "status": false,
            "price": 45,
            "image": "https://i.postimg.cc/5NJ0tzWW/Spaghetti.jpg"
        },
        {
            "img": "Steak.jpg",
            "name": "Steak",
            "status": false,
            "price": 22,
            "image": "https://i.postimg.cc/mZCkRwqS/Steak.jpg"
        },
        {
            "img": "Strawberry Shortcake.jpg",
            "name": "Strawberry Shortcake",
            "status": false,
            "price": 20,
            "image": "https://i.postimg.cc/g2k2VP0M/Strawberry-Shortcake.jpg"
        },
        {
            "img": "Sundae.jpg",
            "name": "Sundae",
            "status": false,
            "price": 21,
            "image": "https://i.postimg.cc/x1xTgFJ9/Sundae.jpg"
        },
        {
            "img": "syrup.jpeg",
            "name": "syrup",
            "status": false,
            "price": 35,
            "image": "https://i.postimg.cc/Wb74q4sF/syrup.jpg"
        },
        {
            "img": "Taco.jpg",
            "name": "Taco",
            "status": false,
            "price": 23,
            "image": "https://i.postimg.cc/0Nz54dDD/Taco.jpg"
        },
        {
            "img": "Toast.jpg",
            "name": "Toast",
            "status": false,
            "price": 24,
            "image": "https://i.postimg.cc/1t6mmmWz/Toast.jpg"
        },
        {
            "img": "Tossed Salad.jpg",
            "name": "Tossed Salad",
            "status": false,
            "price": 30,
            "image": "https://i.postimg.cc/fb1WQtfF/Tossed-Salad.jpg"
        },
        {
            "img": "Bacon.jpg",
            "name": "Bacon",
            "status": false,
            "price": 21,
            "image": "https://i.postimg.cc/zvFqhdYZ/Bacon.jpg"
        },
        {
            "img": "Baked Beans.jpg",
            "name": "Baked Beans",
            "status": false,
            "price": 32,
            "image": "https://i.postimg.cc/xjvfBdJx/Baked-Beans.jpg"
        },
        {
            "img": "Baked Potato.jpg",
            "name": "Baked Potato",
            "status": false,
            "price": 24,
            "image": "https://i.postimg.cc/NfQstwRg/Baked-Potato.jpg"
        },
        {
            "img": "Beef Stew.jpg",
            "name": "Beef Stew",
            "status": false,
            "price": 49,
            "image": "https://i.postimg.cc/LsgRD4FV/Beef-Stew.png"
        },
        {
            "img": "Biscuit.jpg",
            "name": "Biscuit",
            "status": false,
            "price": 38,
            "image": "https://i.postimg.cc/fT5wTgvY/Biscuit.jpg"
        },
        {
            "img": "Bun.jpg",
            "name": "Bun",
            "status": false,
            "price": 44,
            "image": "https://i.postimg.cc/13jsDn2t/Bun.jpg"
        },
        {
            "img": "Butter.jpg",
            "name": "Butter",
            "status": false,
            "price": 32,
            "image": "https://i.postimg.cc/Gm2bBJMV/Butter.jpg"
        },
        {
            "img": "Coffee.jpg",
            "name": "Coffee",
            "status": false,
            "price": 49,
            "image": "https://i.postimg.cc/PqXrMnr3/Coffee.jpg"
        },
        {
            "img": "Cookie.jpg",
            "name": "Cookie",
            "status": false,
            "price": 30,
            "image": "https://i.postimg.cc/7LKPst5x/Cookie.jpg"
        },
        {
            "img": "Egg Roll.jpg",
            "name": "Egg Roll",
            "status": false,
            "price": 37,
            "image": "https://i.postimg.cc/xC7fYkGh/Egg-Roll.jpg"
        },
        {
            "img": "Egg.jpg",
            "name": "Egg",
            "status": false,
            "price": 41,
            "image": "https://i.postimg.cc/xC7fYkGh/Egg-Roll.jpg"
        },
        {
            "img": "French-Fries.jpg",
            "name": "French-Fries",
            "status": false,
            "price": 24,
            "image": "https://i.postimg.cc/dQbCjDM5/French-Fries.png"
        },
        {
            "img": "Fried Chicken.jpg",
            "name": "Fried Chicken",
            "status": false,
            "price": 50,
            "image": "https://i.postimg.cc/447tcV0K/Fried-Chicken.jpg"
        },
        {
            "img": "hamburger.jpeg",
            "name": "hamburger",
            "status": false,
            "price": 36,
            "image": "https://i.postimg.cc/Dm37JtMc/hamburger.jpg"
        },
        {
            "img": "Hot Dog.jpg",
            "name": "Hot Dog",
            "status": false,
            "price": 48,
            "image": "https://i.postimg.cc/HnypLpBx/Hot-Dog.jpg"
        },
        {
            "img": "Ice Cream Cone.jpg",
            "name": "Ice Cream Cone",
            "status": false,
            "price": 41,
            "image": "https://i.postimg.cc/cLZ8PjLY/Ice-Cream-Cone.jpg"
        }
    ]


    return arr
}

export default InfoFruit