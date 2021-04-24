function InfoPeople() {
    let arr = [
        {
            "name": "James",
            "age": 30,
            "status": true,
            "img": "man5",
            "room": 1089,
            "image": "https://i.postimg.cc/mgdMdLCP/man5.png"
        },
        {
            "name": "John",
            "age": 22,
            "status": true,
            "img": "man5",
            "room": 1086,
            "image": "https://i.postimg.cc/mgdMdLCP/man5.png"
        },
        {
            "name": "Robert",
            "age": 31,
            "status": true,
            "img": "man2",
            "room": 1057,
            "image": "https://i.postimg.cc/SRWCVcf4/man2.png"
        },
        {
            "name": "Michael",
            "age": 44,
            "status": true,
            "img": "man1",
            "room": 1004,
            "image": "https://i.postimg.cc/d0pCY5Wv/man1.png"
        },
        {
            "name": "William",
            "age": 41,
            "status": true,
            "img": "man4",
            "room": 1098,
            "image": "https://i.postimg.cc/J7JN1WVF/man4.png"
        },
        {
            "name": "David",
            "age": 44,
            "status": true,
            "img": "man4",
            "room": 1002,
            "image": "https://i.postimg.cc/J7JN1WVF/man4.png"
        },
        {
            "name": "Richard",
            "age": 32,
            "status": true,
            "img": "man1",
            "room": 1028,
            "image": "https://i.postimg.cc/d0pCY5Wv/man1.png"
        },
        {
            "name": "Joseph",
            "age": 36,
            "status": true,
            "img": "man2",
            "room": 1024,
            "image": "https://i.postimg.cc/SRWCVcf4/man2.png"
        },
        {
            "name": "Thomas",
            "age": 24,
            "status": true,
            "img": "man1",
            "room": 1057,
            "image": "https://i.postimg.cc/d0pCY5Wv/man1.png"
        },
        {
            "name": "Charles",
            "age": 44,
            "status": true,
            "img": "man4",
            "room": 1016,
            "image": "https://i.postimg.cc/J7JN1WVF/man4.png"
        },
        {
            "name": "Christopher",
            "age": 22,
            "status": true,
            "img": "man5",
            "room": 1044,
            "image": "https://i.postimg.cc/mgdMdLCP/man5.png"
        },
        {
            "name": "Daniel",
            "age": 43,
            "status": true,
            "img": "man2",
            "room": 1000,
            "image": "https://i.postimg.cc/SRWCVcf4/man2.png"
        },
        {
            "name": "Matthew",
            "age": 38,
            "status": true,
            "img": "man2",
            "room": 1015,
            "image": "https://i.postimg.cc/SRWCVcf4/man2.png"
        },
        {
            "name": "Anthony",
            "age": 23,
            "status": true,
            "img": "man1",
            "room": 1077,
            "image": "https://i.postimg.cc/d0pCY5Wv/man1.png"
        },
        {
            "name": "Donald",
            "age": 44,
            "status": true,
            "img": "man3",
            "room": 1046,
            "image": "https://i.postimg.cc/hjmdPVwm/man3.jpg"
        },
        {
            "name": "Mark",
            "age": 23,
            "status": true,
            "img": "man5",
            "room": 1091,
            "image": "https://i.postimg.cc/mgdMdLCP/man5.png"
        },
        {
            "name": "Paul",
            "age": 40,
            "status": true,
            "img": "man2",
            "room": 1017,
            "image": "https://i.postimg.cc/SRWCVcf4/man2.png"
        },
        {
            "name": "Steven",
            "age": 39,
            "status": true,
            "img": "man2",
            "room": 1098,
            "image": "https://i.postimg.cc/SRWCVcf4/man2.png"
        },
        {
            "name": "Andrew",
            "age": 25,
            "status": true,
            "img": "man5",
            "room": 1065,
            "image": "https://i.postimg.cc/mgdMdLCP/man5.png"
        },
        {
            "name": "Kenneth",
            "age": 44,
            "status": true,
            "img": "man3",
            "room": 1049,
            "image": "https://i.postimg.cc/hjmdPVwm/man3.jpg"
        },
        {
            "name": "Joshua",
            "age": 22,
            "status": true,
            "img": "man1",
            "room": 1060,
            "image": "https://i.postimg.cc/d0pCY5Wv/man1.png"
        },
        {
            "name": "Kevin",
            "age": 37,
            "status": true,
            "img": "man3",
            "room": 1035,
            "image": "https://i.postimg.cc/hjmdPVwm/man3.jpg"
        },
        {
            "name": "Brian",
            "age": 40,
            "status": true,
            "img": "man5",
            "room": 1010,
            "image": "https://i.postimg.cc/mgdMdLCP/man5.png"
        },
        {
            "name": "George",
            "age": 48,
            "status": true,
            "img": "man3",
            "room": 1100,
            "image": "https://i.postimg.cc/hjmdPVwm/man3.jpg"
        },
        {
            "name": "Edward",
            "age": 47,
            "status": true,
            "img": "man3",
            "room": 1096,
            "image": "https://i.postimg.cc/hjmdPVwm/man3.jpg"
        },
        {
            "name": "Ronald",
            "age": 39,
            "status": true,
            "img": "man2",
            "room": 1046,
            "image": "https://i.postimg.cc/SRWCVcf4/man2.png"
        },
        {
            "name": "Timothy",
            "age": 39,
            "status": true,
            "img": "man4",
            "room": 1090,
            "image": "https://i.postimg.cc/J7JN1WVF/man4.png"
        },
        {
            "name": "Jason",
            "age": 32,
            "status": true,
            "img": "man3",
            "room": 1005,
            "image": "https://i.postimg.cc/hjmdPVwm/man3.jpg"
        },
        {
            "name": "Jeffrey",
            "age": 44,
            "status": true,
            "img": "man5",
            "room": 1026,
            "image": "https://i.postimg.cc/mgdMdLCP/man5.png"
        },
        {
            "name": "Ryan",
            "age": 33,
            "status": true,
            "img": "man4",
            "room": 1084,
            "image": "https://i.postimg.cc/J7JN1WVF/man4.png"
        },
        {
            "name": "Jacob",
            "age": 45,
            "status": true,
            "img": "man2",
            "room": 1035,
            "image": "https://i.postimg.cc/SRWCVcf4/man2.png"
        },
        {
            "name": "Gary",
            "age": 47,
            "status": true,
            "img": "man4",
            "room": 1045,
            "image": "https://i.postimg.cc/J7JN1WVF/man4.png"
        },
        {
            "name": "Nicholas",
            "age": 37,
            "status": true,
            "img": "man1",
            "room": 1028,
            "image": "https://i.postimg.cc/d0pCY5Wv/man1.png"
        },
        {
            "name": "Eric",
            "age": 32,
            "status": true,
            "img": "man3",
            "room": 1088,
            "image": "https://i.postimg.cc/hjmdPVwm/man3.jpg"
        },
        {
            "name": "Jonathan",
            "age": 28,
            "status": true,
            "img": "man3",
            "room": 1070,
            "image": "https://i.postimg.cc/hjmdPVwm/man3.jpg"
        },
        {
            "name": "Stephen",
            "age": 30,
            "status": true,
            "img": "man2",
            "room": 1047,
            "image": "https://i.postimg.cc/SRWCVcf4/man2.png"
        },
        {
            "name": "Larry",
            "age": 28,
            "status": true,
            "img": "man2",
            "room": 1004,
            "image": "https://i.postimg.cc/SRWCVcf4/man2.png"
        },
        {
            "name": "Justin",
            "age": 35,
            "status": true,
            "img": "man1",
            "room": 1024,
            "image": "https://i.postimg.cc/d0pCY5Wv/man1.png"
        },
        {
            "name": "Scott",
            "age": 30,
            "status": true,
            "img": "man4",
            "room": 1007,
            "image": "https://i.postimg.cc/J7JN1WVF/man4.png"
        },
        {
            "name": "Brandon",
            "age": 24,
            "status": true,
            "img": "man2",
            "room": 1100,
            "image": "https://i.postimg.cc/SRWCVcf4/man2.png"
        },
        {
            "name": "Benjamin",
            "age": 28,
            "status": true,
            "img": "man2",
            "room": 1071,
            "image": "https://i.postimg.cc/SRWCVcf4/man2.png"
        },
        {
            "name": "Samuel",
            "age": 44,
            "status": true,
            "img": "man5",
            "room": 1064,
            "image": "https://i.postimg.cc/mgdMdLCP/man5.png"
        },
        {
            "name": "Frank",
            "age": 50,
            "status": true,
            "img": "man2",
            "room": 1084,
            "image": "https://i.postimg.cc/SRWCVcf4/man2.png"
        },
        {
            "name": "Gregory",
            "age": 28,
            "status": true,
            "img": "man4",
            "room": 1083,
            "image": "https://i.postimg.cc/J7JN1WVF/man4.png"
        },
        {
            "name": "Raymond",
            "age": 30,
            "status": true,
            "img": "man4",
            "room": 1074,
            "image": "https://i.postimg.cc/J7JN1WVF/man4.png"
        },
        {
            "name": "Alexander",
            "age": 43,
            "status": true,
            "img": "man1",
            "room": 1091,
            "image": "https://i.postimg.cc/d0pCY5Wv/man1.png"
        },
        {
            "name": "Patrick",
            "age": 35,
            "status": true,
            "img": "man2",
            "room": 1094,
            "image": "https://i.postimg.cc/SRWCVcf4/man2.png"
        },
        {
            "name": "Jack",
            "age": 27,
            "status": true,
            "img": "man5",
            "room": 1047,
            "image": "https://i.postimg.cc/mgdMdLCP/man5.png"
        },
        {
            "name": "Dennis",
            "age": 46,
            "status": true,
            "img": "man5",
            "room": 1054,
            "image": "https://i.postimg.cc/mgdMdLCP/man5.png"
        },
        {
            "name": "Jerry",
            "age": 44,
            "status": true,
            "img": "man3",
            "room": 1027,
            "image": "https://i.postimg.cc/hjmdPVwm/man3.jpg"
        },
        {
            "name": "Tyler",
            "age": 34,
            "status": true,
            "img": "man4",
            "room": 1076,
            "image": "https://i.postimg.cc/J7JN1WVF/man4.png"
        },
        {
            "name": "Aaron",
            "age": 45,
            "status": true,
            "img": "man4",
            "room": 1055,
            "image": "https://i.postimg.cc/J7JN1WVF/man4.png"
        },
        {
            "name": "Jose",
            "age": 49,
            "status": true,
            "img": "man3",
            "room": 1066,
            "image": "https://i.postimg.cc/hjmdPVwm/man3.jpg"
        },
        {
            "name": "Henry",
            "age": 47,
            "status": true,
            "img": "man2",
            "room": 1077,
            "image": "https://i.postimg.cc/SRWCVcf4/man2.png"
        },
        {
            "name": "Adam",
            "age": 43,
            "status": true,
            "img": "man5",
            "room": 1039,
            "image": "https://i.postimg.cc/mgdMdLCP/man5.png"
        },
        {
            "name": "Douglas",
            "age": 44,
            "status": true,
            "img": "man1",
            "room": 1066,
            "image": "https://i.postimg.cc/d0pCY5Wv/man1.png"
        },
        {
            "name": "Nathan",
            "age": 23,
            "status": true,
            "img": "man4",
            "room": 1050,
            "image": "https://i.postimg.cc/J7JN1WVF/man4.png"
        },
        {
            "name": "Peter",
            "age": 42,
            "status": true,
            "img": "man5",
            "room": 1078,
            "image": "https://i.postimg.cc/mgdMdLCP/man5.png"
        },
        {
            "name": "Zachary",
            "age": 32,
            "status": true,
            "img": "man1",
            "room": 1088,
            "image": "https://i.postimg.cc/d0pCY5Wv/man1.png"
        },
        {
            "name": "Kyle",
            "age": 45,
            "status": true,
            "img": "man1",
            "room": 1038,
            "image": "https://i.postimg.cc/d0pCY5Wv/man1.png"
        },
        {
            "name": "Walter",
            "age": 39,
            "status": true,
            "img": "man2",
            "room": 1001,
            "image": "https://i.postimg.cc/SRWCVcf4/man2.png"
        },
        {
            "name": "Harold",
            "age": 29,
            "status": true,
            "img": "man1",
            "room": 1003,
            "image": "https://i.postimg.cc/d0pCY5Wv/man1.png"
        },
        {
            "name": "Jeremy",
            "age": 48,
            "status": true,
            "img": "man4",
            "room": 1088,
            "image": "https://i.postimg.cc/J7JN1WVF/man4.png"
        },
        {
            "name": "Ethan",
            "age": 27,
            "status": true,
            "img": "man2",
            "room": 1014,
            "image": "https://i.postimg.cc/SRWCVcf4/man2.png"
        },
        {
            "name": "Carl",
            "age": 26,
            "status": true,
            "img": "man5",
            "room": 1061,
            "image": "https://i.postimg.cc/mgdMdLCP/man5.png"
        },
        {
            "name": "Keith",
            "age": 48,
            "status": true,
            "img": "man5",
            "room": 1091,
            "image": "https://i.postimg.cc/mgdMdLCP/man5.png"
        },
        {
            "name": "Roger",
            "age": 26,
            "status": true,
            "img": "man4",
            "room": 1086,
            "image": "https://i.postimg.cc/J7JN1WVF/man4.png"
        },
        {
            "name": "Gerald",
            "age": 41,
            "status": true,
            "img": "man1",
            "room": 1097,
            "image": "https://i.postimg.cc/d0pCY5Wv/man1.png"
        },
        {
            "name": "Christian",
            "age": 39,
            "status": true,
            "img": "man3",
            "room": 1051,
            "image": "https://i.postimg.cc/hjmdPVwm/man3.jpg"
        },
        {
            "name": "Terry",
            "age": 24,
            "status": true,
            "img": "man3",
            "room": 1094,
            "image": "https://i.postimg.cc/hjmdPVwm/man3.jpg"
        },
        {
            "name": "Sean",
            "age": 40,
            "status": true,
            "img": "man2",
            "room": 1012,
            "image": "https://i.postimg.cc/SRWCVcf4/man2.png"
        },
        {
            "name": "Arthur",
            "age": 50,
            "status": true,
            "img": "man2",
            "room": 1079,
            "image": "https://i.postimg.cc/SRWCVcf4/man2.png"
        },
        {
            "name": "Austin",
            "age": 31,
            "status": true,
            "img": "man5",
            "room": 1080,
            "image": "https://i.postimg.cc/mgdMdLCP/man5.png"
        },
        {
            "name": "Noah",
            "age": 24,
            "status": true,
            "img": "man1",
            "room": 1065,
            "image": "https://i.postimg.cc/d0pCY5Wv/man1.png"
        },
        {
            "name": "Lawrence",
            "age": 50,
            "status": true,
            "img": "man4",
            "room": 1038,
            "image": "https://i.postimg.cc/J7JN1WVF/man4.png"
        },
        {
            "name": "Jesse",
            "age": 48,
            "status": true,
            "img": "man5",
            "room": 1005,
            "image": "https://i.postimg.cc/mgdMdLCP/man5.png"
        },
        {
            "name": "Joe",
            "age": 29,
            "status": true,
            "img": "man3",
            "room": 1082,
            "image": "https://i.postimg.cc/hjmdPVwm/man3.jpg"
        },
        {
            "name": "Bryan",
            "age": 39,
            "status": true,
            "img": "man5",
            "room": 1100,
            "image": "https://i.postimg.cc/mgdMdLCP/man5.png"
        },
        {
            "name": "Billy",
            "age": 22,
            "status": true,
            "img": "man4",
            "room": 1003,
            "image": "https://i.postimg.cc/J7JN1WVF/man4.png"
        },
        {
            "name": "Jordan",
            "age": 38,
            "status": true,
            "img": "man1",
            "room": 1058,
            "image": "https://i.postimg.cc/d0pCY5Wv/man1.png"
        },
        {
            "name": "Albert",
            "age": 24,
            "status": true,
            "img": "man4",
            "room": 1089,
            "image": "https://i.postimg.cc/J7JN1WVF/man4.png"
        },
        {
            "name": "Dylan",
            "age": 40,
            "status": true,
            "img": "man5",
            "room": 1083,
            "image": "https://i.postimg.cc/mgdMdLCP/man5.png"
        },
        {
            "name": "Bruce",
            "age": 33,
            "status": true,
            "img": "man1",
            "room": 1002,
            "image": "https://i.postimg.cc/d0pCY5Wv/man1.png"
        },
        {
            "name": "Willie",
            "age": 20,
            "status": true,
            "img": "man3",
            "room": 1069,
            "image": "https://i.postimg.cc/hjmdPVwm/man3.jpg"
        },
        {
            "name": "Gabriel",
            "age": 37,
            "status": true,
            "img": "man2",
            "room": 1012,
            "image": "https://i.postimg.cc/SRWCVcf4/man2.png"
        },
        {
            "name": "Alan",
            "age": 23,
            "status": true,
            "img": "man5",
            "room": 1023,
            "image": "https://i.postimg.cc/mgdMdLCP/man5.png"
        },
        {
            "name": "Juan",
            "age": 29,
            "status": true,
            "img": "man5",
            "room": 1007,
            "image": "https://i.postimg.cc/mgdMdLCP/man5.png"
        },
        {
            "name": "Logan",
            "age": 35,
            "status": true,
            "img": "man4",
            "room": 1003,
            "image": "https://i.postimg.cc/J7JN1WVF/man4.png"
        },
        {
            "name": "Wayne",
            "age": 41,
            "status": true,
            "img": "man1",
            "room": 1019,
            "image": "https://i.postimg.cc/d0pCY5Wv/man1.png"
        },
        {
            "name": "Ralph",
            "age": 46,
            "status": true,
            "img": "man1",
            "room": 1023,
            "image": "https://i.postimg.cc/d0pCY5Wv/man1.png"
        },
        {
            "name": "Roy",
            "age": 26,
            "status": true,
            "img": "man3",
            "room": 1026,
            "image": "https://i.postimg.cc/hjmdPVwm/man3.jpg"
        },
        {
            "name": "Eugene",
            "age": 28,
            "status": true,
            "img": "man3",
            "room": 1092,
            "image": "https://i.postimg.cc/hjmdPVwm/man3.jpg"
        },
        {
            "name": "Randy",
            "age": 29,
            "status": true,
            "img": "man4",
            "room": 1080,
            "image": "https://i.postimg.cc/J7JN1WVF/man4.png"
        },
        {
            "name": "Vincent",
            "age": 47,
            "status": true,
            "img": "man3",
            "room": 1029,
            "image": "https://i.postimg.cc/hjmdPVwm/man3.jpg"
        },
        {
            "name": "Russell",
            "age": 30,
            "status": true,
            "img": "man1",
            "room": 1037,
            "image": "https://i.postimg.cc/d0pCY5Wv/man1.png"
        },
        {
            "name": "Louis",
            "age": 34,
            "status": true,
            "img": "man2",
            "room": 1082,
            "image": "https://i.postimg.cc/SRWCVcf4/man2.png"
        },
        {
            "name": "Philip",
            "age": 37,
            "status": true,
            "img": "man1",
            "room": 1062,
            "image": "https://i.postimg.cc/d0pCY5Wv/man1.png"
        },
        {
            "name": "Bobby",
            "age": 33,
            "status": true,
            "img": "man1",
            "room": 1041,
            "image": "https://i.postimg.cc/d0pCY5Wv/man1.png"
        },
        {
            "name": "Johnny",
            "age": 40,
            "status": true,
            "img": "man3",
            "room": 1007,
            "image": "https://i.postimg.cc/hjmdPVwm/man3.jpg"
        },
        {
            "name": "Bradley",
            "age": 34,
            "status": true,
            "img": "man2",
            "room": 1016,
            "image": "https://i.postimg.cc/SRWCVcf4/man2.png"
        },
        {
            "name": "Mary",
            "age": 30,
            "status": true,
            "img": "women1",
            "room": 1140,
            "image": "https://i.postimg.cc/MGvBNCmd/women1.jpg"
        },
        {
            "name": "Patricia",
            "age": 28,
            "status": true,
            "img": "women4",
            "room": 1140,
            "image": "https://i.postimg.cc/02spjH9y/women4.jpg"
        },
        {
            "name": "Jennifer",
            "age": 28,
            "status": true,
            "img": "women1",
            "room": 1130,
            "image": "https://i.postimg.cc/MGvBNCmd/women1.jpg"
        },
        {
            "name": "Linda",
            "age": 36,
            "status": true,
            "img": "women4",
            "room": 1136,
            "image": "https://i.postimg.cc/02spjH9y/women4.jpg"
        },
        {
            "name": "Elizabeth",
            "age": 28,
            "status": true,
            "img": "women4",
            "room": 1156,
            "image": "https://i.postimg.cc/02spjH9y/women4.jpg"
        },
        {
            "name": "Barbara",
            "age": 37,
            "status": true,
            "img": "women2",
            "room": 1191,
            "image": "https://i.postimg.cc/wMKDhwJF/women2.png"
        },
        {
            "name": "Susan",
            "age": 26,
            "status": true,
            "img": "women2",
            "room": 1105,
            "image": "https://i.postimg.cc/wMKDhwJF/women2.png"
        },
        {
            "name": "Jessica",
            "age": 34,
            "status": true,
            "img": "women5",
            "room": 1165,
            "image": "https://i.postimg.cc/Jz7ZcDDw/women5.jpg"
        },
        {
            "name": "Sarah",
            "age": 20,
            "status": true,
            "img": "women2",
            "room": 1132,
            "image": "https://i.postimg.cc/wMKDhwJF/women2.png"
        },
        {
            "name": "Karen",
            "age": 30,
            "status": true,
            "img": "women5",
            "room": 1148,
            "image": "https://i.postimg.cc/Jz7ZcDDw/women5.jpg"
        },
        {
            "name": "Nancy",
            "age": 33,
            "status": true,
            "img": "women5",
            "room": 1103,
            "image": "https://i.postimg.cc/Jz7ZcDDw/women5.jpg"
        },
        {
            "name": "Lisa",
            "age": 24,
            "status": true,
            "img": "women4",
            "room": 1149,
            "image": "https://i.postimg.cc/02spjH9y/women4.jpg"
        },
        {
            "name": "Margaret",
            "age": 38,
            "status": true,
            "img": "women5",
            "room": 1187,
            "image": "https://i.postimg.cc/Jz7ZcDDw/women5.jpg"
        },
        {
            "name": "Betty",
            "age": 27,
            "status": true,
            "img": "women4",
            "room": 1171,
            "image": "https://i.postimg.cc/02spjH9y/women4.jpg"
        },
        {
            "name": "Sandra",
            "age": 31,
            "status": true,
            "img": "women2",
            "room": 1200,
            "image": "https://i.postimg.cc/wMKDhwJF/women2.png"
        },
        {
            "name": "Ashley",
            "age": 19,
            "status": true,
            "img": "women5",
            "room": 1151,
            "image": "https://i.postimg.cc/Jz7ZcDDw/women5.jpg"
        },
        {
            "name": "Dorothy",
            "age": 26,
            "status": true,
            "img": "women4",
            "room": 1184,
            "image": "https://i.postimg.cc/02spjH9y/women4.jpg"
        },
        {
            "name": "Kimberly",
            "age": 30,
            "status": true,
            "img": "women2",
            "room": 1105,
            "image": "https://i.postimg.cc/wMKDhwJF/women2.png"
        },
        {
            "name": "Emily",
            "age": 22,
            "status": true,
            "img": "women5",
            "room": 1192,
            "image": "https://i.postimg.cc/Jz7ZcDDw/women5.jpg"
        },
        {
            "name": "Donna",
            "age": 20,
            "status": true,
            "img": "women1",
            "room": 1116,
            "image": "https://i.postimg.cc/MGvBNCmd/women1.jpg"
        },
        {
            "name": "Michelle",
            "age": 25,
            "status": true,
            "img": "women5",
            "room": 1164,
            "image": "https://i.postimg.cc/Jz7ZcDDw/women5.jpg"
        },
        {
            "name": "Carol",
            "age": 28,
            "status": true,
            "img": "women4",
            "room": 1157,
            "image": "https://i.postimg.cc/02spjH9y/women4.jpg"
        },
        {
            "name": "Amanda",
            "age": 25,
            "status": true,
            "img": "women1",
            "room": 1129,
            "image": "https://i.postimg.cc/MGvBNCmd/women1.jpg"
        },
        {
            "name": "Melissa",
            "age": 35,
            "status": true,
            "img": "women2",
            "room": 1197,
            "image": "https://i.postimg.cc/wMKDhwJF/women2.png"
        },
        {
            "name": "Deborah",
            "age": 19,
            "status": true,
            "img": "women5",
            "room": 1115,
            "image": "https://i.postimg.cc/Jz7ZcDDw/women5.jpg"
        },
        {
            "name": "Stephanie",
            "age": 19,
            "status": true,
            "img": "women1",
            "room": 1176,
            "image": "https://i.postimg.cc/MGvBNCmd/women1.jpg"
        },
        {
            "name": "Rebecca",
            "age": 27,
            "status": true,
            "img": "women5",
            "room": 1176,
            "image": "https://i.postimg.cc/Jz7ZcDDw/women5.jpg"
        },
        {
            "name": "Laura",
            "age": 32,
            "status": true,
            "img": "women4",
            "room": 1156,
            "image": "https://i.postimg.cc/02spjH9y/women4.jpg"
        },
        {
            "name": "Sharon",
            "age": 30,
            "status": true,
            "img": "women3",
            "room": 1106,
            "image": "https://i.postimg.cc/tCNFxtgt/women3.jpg"
        },
        {
            "name": "Cynthia",
            "age": 21,
            "status": true,
            "img": "women3",
            "room": 1103,
            "image": "https://i.postimg.cc/tCNFxtgt/women3.jpg"
        },
        {
            "name": "Kathleen",
            "age": 23,
            "status": true,
            "img": "women5",
            "room": 1123,
            "image": "https://i.postimg.cc/Jz7ZcDDw/women5.jpg"
        },
        {
            "name": "Amy",
            "age": 40,
            "status": true,
            "img": "women4",
            "room": 1134,
            "image": "https://i.postimg.cc/02spjH9y/women4.jpg"
        },
        {
            "name": "Shirley",
            "age": 26,
            "status": true,
            "img": "women4",
            "room": 1173,
            "image": "https://i.postimg.cc/02spjH9y/women4.jpg"
        },
        {
            "name": "Angela",
            "age": 35,
            "status": true,
            "img": "women1",
            "room": 1103,
            "image": "https://i.postimg.cc/MGvBNCmd/women1.jpg"
        },
        {
            "name": "Helen",
            "age": 20,
            "status": true,
            "img": "women1",
            "room": 1107,
            "image": "https://i.postimg.cc/MGvBNCmd/women1.jpg"
        },
        {
            "name": "Anna",
            "age": 27,
            "status": true,
            "img": "women2",
            "room": 1111,
            "image": "https://i.postimg.cc/wMKDhwJF/women2.png"
        },
        {
            "name": "Brenda",
            "age": 27,
            "status": true,
            "img": "women3",
            "room": 1124,
            "image": "https://i.postimg.cc/tCNFxtgt/women3.jpg"
        },
        {
            "name": "Pamela",
            "age": 30,
            "status": true,
            "img": "women2",
            "room": 1162,
            "image": "https://i.postimg.cc/wMKDhwJF/women2.png"
        },
        {
            "name": "Nicole",
            "age": 40,
            "status": true,
            "img": "women4",
            "room": 1179,
            "image": "https://i.postimg.cc/02spjH9y/women4.jpg"
        },
        {
            "name": "Samantha",
            "age": 32,
            "status": true,
            "img": "women3",
            "room": 1185,
            "image": "https://i.postimg.cc/tCNFxtgt/women3.jpg"
        },
        {
            "name": "Katherine",
            "age": 33,
            "status": true,
            "img": "women1",
            "room": 1148,
            "image": "https://i.postimg.cc/MGvBNCmd/women1.jpg"
        },
        {
            "name": "Emma",
            "age": 33,
            "status": true,
            "img": "women2",
            "room": 1142,
            "image": "https://i.postimg.cc/wMKDhwJF/women2.png"
        },
        {
            "name": "Ruth",
            "age": 29,
            "status": true,
            "img": "women4",
            "room": 1121,
            "image": "https://i.postimg.cc/02spjH9y/women4.jpg"
        },
        {
            "name": "Christine",
            "age": 33,
            "status": true,
            "img": "women4",
            "room": 1156,
            "image": "https://i.postimg.cc/02spjH9y/women4.jpg"
        },
        {
            "name": "Catherine",
            "age": 39,
            "status": true,
            "img": "women5",
            "room": 1199,
            "image": "https://i.postimg.cc/Jz7ZcDDw/women5.jpg"
        },
        {
            "name": "Debra",
            "age": 19,
            "status": true,
            "img": "women3",
            "room": 1183,
            "image": "https://i.postimg.cc/tCNFxtgt/women3.jpg"
        },
        {
            "name": "Rachel",
            "age": 30,
            "status": true,
            "img": "women3",
            "room": 1131,
            "image": "https://i.postimg.cc/tCNFxtgt/women3.jpg"
        },
        {
            "name": "Carolyn",
            "age": 39,
            "status": true,
            "img": "women2",
            "room": 1119,
            "image": "https://i.postimg.cc/wMKDhwJF/women2.png"
        },
        {
            "name": "Janet",
            "age": 34,
            "status": true,
            "img": "women2",
            "room": 1176,
            "image": "https://i.postimg.cc/wMKDhwJF/women2.png"
        },
        {
            "name": "Virginia",
            "age": 31,
            "status": true,
            "img": "women3",
            "room": 1139,
            "image": "https://i.postimg.cc/tCNFxtgt/women3.jpg"
        },
        {
            "name": "Maria",
            "age": 20,
            "status": true,
            "img": "women1",
            "room": 1129,
            "image": "https://i.postimg.cc/MGvBNCmd/women1.jpg"
        },
        {
            "name": "Heather",
            "age": 39,
            "status": true,
            "img": "women5",
            "room": 1167,
            "image": "https://i.postimg.cc/Jz7ZcDDw/women5.jpg"
        },
        {
            "name": "Diane",
            "age": 24,
            "status": true,
            "img": "women2",
            "room": 1114,
            "image": "https://i.postimg.cc/wMKDhwJF/women2.png"
        },
        {
            "name": "Julie",
            "age": 19,
            "status": true,
            "img": "women3",
            "room": 1144,
            "image": "https://i.postimg.cc/tCNFxtgt/women3.jpg"
        },
        {
            "name": "Joyce",
            "age": 22,
            "status": true,
            "img": "women2",
            "room": 1131,
            "image": "https://i.postimg.cc/wMKDhwJF/women2.png"
        },
        {
            "name": "Victoria",
            "age": 30,
            "status": true,
            "img": "women3",
            "room": 1108,
            "image": "https://i.postimg.cc/tCNFxtgt/women3.jpg"
        },
        {
            "name": "Kelly",
            "age": 32,
            "status": true,
            "img": "women2",
            "room": 1168,
            "image": "https://i.postimg.cc/wMKDhwJF/women2.png"
        },
        {
            "name": "Christina",
            "age": 21,
            "status": true,
            "img": "women5",
            "room": 1176,
            "image": "https://i.postimg.cc/Jz7ZcDDw/women5.jpg"
        },
        {
            "name": "Lauren",
            "age": 30,
            "status": true,
            "img": "women1",
            "room": 1157,
            "image": "https://i.postimg.cc/MGvBNCmd/women1.jpg"
        },
        {
            "name": "Joan",
            "age": 35,
            "status": true,
            "img": "women3",
            "room": 1164,
            "image": "https://i.postimg.cc/tCNFxtgt/women3.jpg"
        },
        {
            "name": "Evelyn",
            "age": 24,
            "status": true,
            "img": "women1",
            "room": 1161,
            "image": "https://i.postimg.cc/MGvBNCmd/women1.jpg"
        },
        {
            "name": "Olivia",
            "age": 35,
            "status": true,
            "img": "women3",
            "room": 1135,
            "image": "https://i.postimg.cc/tCNFxtgt/women3.jpg"
        },
        {
            "name": "Judith",
            "age": 34,
            "status": true,
            "img": "women1",
            "room": 1193,
            "image": "https://i.postimg.cc/MGvBNCmd/women1.jpg"
        },
        {
            "name": "Megan",
            "age": 26,
            "status": true,
            "img": "women4",
            "room": 1162,
            "image": "https://i.postimg.cc/02spjH9y/women4.jpg"
        },
        {
            "name": "Cheryl",
            "age": 24,
            "status": true,
            "img": "women3",
            "room": 1159,
            "image": "https://i.postimg.cc/tCNFxtgt/women3.jpg"
        },
        {
            "name": "Martha",
            "age": 32,
            "status": true,
            "img": "women4",
            "room": 1138,
            "image": "https://i.postimg.cc/02spjH9y/women4.jpg"
        },
        {
            "name": "Andrea",
            "age": 37,
            "status": true,
            "img": "women2",
            "room": 1125,
            "image": "https://i.postimg.cc/wMKDhwJF/women2.png"
        },
        {
            "name": "Frances",
            "age": 31,
            "status": true,
            "img": "women3",
            "room": 1146,
            "image": "https://i.postimg.cc/tCNFxtgt/women3.jpg"
        },
        {
            "name": "Hannah",
            "age": 24,
            "status": true,
            "img": "women3",
            "room": 1167,
            "image": "https://i.postimg.cc/tCNFxtgt/women3.jpg"
        },
        {
            "name": "Jacqueline",
            "age": 19,
            "status": true,
            "img": "women1",
            "room": 1182,
            "image": "https://i.postimg.cc/MGvBNCmd/women1.jpg"
        },
        {
            "name": "Ann",
            "age": 23,
            "status": true,
            "img": "women1",
            "room": 1149,
            "image": "https://i.postimg.cc/MGvBNCmd/women1.jpg"
        },
        {
            "name": "Gloria",
            "age": 33,
            "status": true,
            "img": "women5",
            "room": 1188,
            "image": "https://i.postimg.cc/Jz7ZcDDw/women5.jpg"
        },
        {
            "name": "Jean",
            "age": 25,
            "status": true,
            "img": "women5",
            "room": 1196,
            "image": "https://i.postimg.cc/Jz7ZcDDw/women5.jpg"
        },
        {
            "name": "Kathryn",
            "age": 23,
            "status": true,
            "img": "women4",
            "room": 1199,
            "image": "https://i.postimg.cc/02spjH9y/women4.jpg"
        },
        {
            "name": "Alice",
            "age": 37,
            "status": true,
            "img": "women1",
            "room": 1185,
            "image": "https://i.postimg.cc/MGvBNCmd/women1.jpg"
        },
        {
            "name": "Teresa",
            "age": 21,
            "status": true,
            "img": "women3",
            "room": 1138,
            "image": "https://i.postimg.cc/tCNFxtgt/women3.jpg"
        },
        {
            "name": "Sara",
            "age": 35,
            "status": true,
            "img": "women4",
            "room": 1110,
            "image": "https://i.postimg.cc/02spjH9y/women4.jpg"
        },
        {
            "name": "Janice",
            "age": 28,
            "status": true,
            "img": "women3",
            "room": 1181,
            "image": "https://i.postimg.cc/tCNFxtgt/women3.jpg"
        },
        {
            "name": "Doris",
            "age": 24,
            "status": true,
            "img": "women1",
            "room": 1130,
            "image": "https://i.postimg.cc/MGvBNCmd/women1.jpg"
        },
        {
            "name": "Madison",
            "age": 34,
            "status": true,
            "img": "women1",
            "room": 1154,
            "image": "https://i.postimg.cc/MGvBNCmd/women1.jpg"
        },
        {
            "name": "Julia",
            "age": 28,
            "status": true,
            "img": "women2",
            "room": 1110,
            "image": "https://i.postimg.cc/wMKDhwJF/women2.png"
        },
        {
            "name": "Grace",
            "age": 24,
            "status": true,
            "img": "women1",
            "room": 1141,
            "image": "https://i.postimg.cc/MGvBNCmd/women1.jpg"
        },
        {
            "name": "Judy",
            "age": 37,
            "status": true,
            "img": "women4",
            "room": 1109,
            "image": "https://i.postimg.cc/02spjH9y/women4.jpg"
        },
        {
            "name": "Abigail",
            "age": 21,
            "status": true,
            "img": "women1",
            "room": 1196,
            "image": "https://i.postimg.cc/MGvBNCmd/women1.jpg"
        },
        {
            "name": "Marie",
            "age": 19,
            "status": true,
            "img": "women5",
            "room": 1168,
            "image": "https://i.postimg.cc/Jz7ZcDDw/women5.jpg"
        },
        {
            "name": "Denise",
            "age": 39,
            "status": true,
            "img": "women2",
            "room": 1104,
            "image": "https://i.postimg.cc/wMKDhwJF/women2.png"
        },
        {
            "name": "Beverly",
            "age": 22,
            "status": true,
            "img": "women5",
            "room": 1169,
            "image": "https://i.postimg.cc/Jz7ZcDDw/women5.jpg"
        },
        {
            "name": "Amber",
            "age": 39,
            "status": true,
            "img": "women4",
            "room": 1107,
            "image": "https://i.postimg.cc/02spjH9y/women4.jpg"
        },
        {
            "name": "Theresa",
            "age": 20,
            "status": true,
            "img": "women3",
            "room": 1182,
            "image": "https://i.postimg.cc/tCNFxtgt/women3.jpg"
        },
        {
            "name": "Marilyn",
            "age": 39,
            "status": true,
            "img": "women4",
            "room": 1184,
            "image": "https://i.postimg.cc/02spjH9y/women4.jpg"
        },
        {
            "name": "Danielle",
            "age": 40,
            "status": true,
            "img": "women3",
            "room": 1151,
            "image": "https://i.postimg.cc/tCNFxtgt/women3.jpg"
        },
        {
            "name": "Diana",
            "age": 33,
            "status": true,
            "img": "women3",
            "room": 1137,
            "image": "https://i.postimg.cc/tCNFxtgt/women3.jpg"
        },
        {
            "name": "Brittany",
            "age": 27,
            "status": true,
            "img": "women4",
            "room": 1117,
            "image": "https://i.postimg.cc/02spjH9y/women4.jpg"
        },
        {
            "name": "Natalie",
            "age": 19,
            "status": true,
            "img": "women2",
            "room": 1188,
            "image": "https://i.postimg.cc/wMKDhwJF/women2.png"
        },
        {
            "name": "Sophia",
            "age": 38,
            "status": true,
            "img": "women1",
            "room": 1113,
            "image": "https://i.postimg.cc/MGvBNCmd/women1.jpg"
        },
        {
            "name": "Rose",
            "age": 21,
            "status": true,
            "img": "women5",
            "room": 1174,
            "image": "https://i.postimg.cc/Jz7ZcDDw/women5.jpg"
        },
        {
            "name": "Isabella",
            "age": 25,
            "status": true,
            "img": "women1",
            "room": 1111,
            "image": "https://i.postimg.cc/MGvBNCmd/women1.jpg"
        },
        {
            "name": "Alexis",
            "age": 38,
            "status": true,
            "img": "women5",
            "room": 1115,
            "image": "https://i.postimg.cc/Jz7ZcDDw/women5.jpg"
        },
        {
            "name": "Kayla",
            "age": 37,
            "status": true,
            "img": "women5",
            "room": 1111,
            "image": "https://i.postimg.cc/Jz7ZcDDw/women5.jpg"
        },
        {
            "name": "Charlotte",
            "age": 38,
            "status": true,
            "img": "women2",
            "room": 1134,
            "image": "https://i.postimg.cc/wMKDhwJF/women2.png"
        }
    ]

    return arr
}

export default InfoPeople