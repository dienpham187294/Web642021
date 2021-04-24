import React, { useState, useEffect } from "react";
import RandomInt from "../../../../helpers/randomInt";
import InfoPeople from "./InfoPeople";
import "./Body.css";
import Number1 from "./insidebody/Number1"
import Number2 from "./insidebody/Number2"
let ArrPeople = [];

function Mbody({ socket, message, setMessage, IDofRoom, ArrIDofAllMemberInRoom, Score }) {
    const [TimeCount, Set_TimeCount] = useState(Date.now());
    const [TimeToCount, SetTimeToCount] = useState(0);
    const [ArrPeopleUse, SetArrPeopleUse] = useState([]);
    const [TimeToAppear, Set_TimeToAppear] = useState(0);
    const [Page, SetPage] = useState(-1);
    const [NumberPage, Set_NumberPage] = useState("Number1");
    useEffect(() => {
        const interval = setInterval(() => {
            SetTimeToCount(Time => Time + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        if (TimeToCount > TimeToAppear && FN_CountMembers(ArrPeople) < 2) {
            Set_TimeToAppear(TimeToCount + RandomInt(6, 20));
            if (Score <= 3) {
                ArrPeople.push(FN_Create_Number1());
                SetArrPeopleUse(ArrPeople);
            }
            else if (Score <= 6) {
                ArrPeople.push(FN_Create_Number2());
                SetArrPeopleUse(ArrPeople);
            }

        }
    }, [TimeToCount, TimeToAppear, Score]);

    return <div id="ChessBody">
        <div><a href={`/?m=giaotiep&p=thu-thap-thong-tin&r=${IDofRoom}`}>Reset</a></div>
        <div> <audio id="audioBTN" controls style={{ display: "none" }} src={require("./correct.wav")}></audio></div>
        {Page !== -1
            ?
            NumberPage === "Number1" ?
                <Number1
                    Score={Score}
                    setMessage={setMessage} Set_TimeCount={Set_TimeCount} message={message} TimeCount={TimeCount}
                    ArrPeopleUse={ArrPeopleUse}
                    Page={Page} socket={socket} IDofRoom={IDofRoom} ArrIDofAllMemberInRoom={ArrIDofAllMemberInRoom} SetPage={SetPage}
                />
                : NumberPage === "Number2" ?
                    <Number2
                        Score={Score}
                        setMessage={setMessage} Set_TimeCount={Set_TimeCount} message={message} TimeCount={TimeCount}
                        ArrPeopleUse={ArrPeopleUse}
                        Page={Page} socket={socket} IDofRoom={IDofRoom} ArrIDofAllMemberInRoom={ArrIDofAllMemberInRoom} SetPage={SetPage}
                    />
                    : ""


            : _ArrofPeople(ArrPeopleUse, SetPage, Set_NumberPage)}
    </div>;
}

export default Mbody

function _ArrofPeople(ArrPeopleUse, SetPage, Set_NumberPage) {
    function SetPageAll(Page, numberPage) {
        SetPage(Page);
        Set_NumberPage(numberPage)
    }

    if (ArrPeopleUse.length > 0) {
        let Show = ArrPeopleUse.map((e, index) =>
            e.status
                ? <div className="People" onClick={() => SetPageAll(index, e.Number)} key={index} >
                    <img alt={index} src={e.image} width="100px" />
                </div >
                : "")
        return Show
    }
    return "";
}






function FN_CountMembers(arrMembers) {
    let arrTemp = []
    if (arrMembers.length === 0) {
        return 0
    }
    arrMembers.forEach(e => {
        if (e.status) {
            arrTemp.push(e)
        };
    });
    return arrTemp.length
}

function FN_Create_Number1() {
    let temp = {};
    let random = RandomInt(0, 99)
    temp.name = InfoPeople()[random].name
    temp.age = InfoPeople()[random].age
    temp.status = InfoPeople()[random].status
    temp.image = InfoPeople()[random].image
    temp.room = InfoPeople()[random].room
    temp.Number = "Number1"
    temp.QandA = [
        {
            "Question": ["What would you like", "What do you want", "How can i help you"],
            "Answer": ["I would like to take room number.", "I want take room number. ", "I booked already, i want to take room number."]
        },
        {
            "Question": ["What is your name", "Can i know your name"],
            "Answer":
                ["My name is " + InfoPeople()[random].name,
                "You can call me " + InfoPeople()[random].name,
                InfoPeople()[random].name]
        },
        {
            "Question": ["How old are you!", "Can i know your age"],
            "Answer":
                ["My age is " + InfoPeople()[random].age,
                InfoPeople()[random].age + "sir."]
        },
    ]
    temp.Check = InfoPeople()[random].room
    temp.Final = "Your room number is " + InfoPeople()[random].room
    return temp
}

let arrRoomandPrice = [
    { "type": "Single room", "price": 100, "number": 1 },
    { "type": "Double room", "price": 140, "number": 2 },
    { "type": "Twin room", "price": 180, "number": 2 },
    { "type": "Triple room", "price": 220, "number": 3 },
    { "type": "Suite", "price": 400, "number": 2 },
]
function FN_Create_Number2() {
    let temp = {};
    let random = RandomInt(0, 99);
    temp.name = InfoPeople()[random].name
    temp.age = InfoPeople()[random].age
    temp.status = InfoPeople()[random].status
    temp.image = InfoPeople()[random].image
    temp.Number = "Number2"
    let randomRoom = RandomInt(0, arrRoomandPrice.length - 1);
    temp.Roomwanttobook = arrRoomandPrice[randomRoom].type
    temp.Numberwanttobook = arrRoomandPrice[randomRoom].number
    temp.QandA = [

        {
            "Question": ["What would you like", "What do you want", "May i help you"],
            "Answer": ["I would like to book a room.", "I need room for tonight.", "Do you have any vacancies?"]
        },
        {
            "Question": ["How many people do you have?"],
            "Answer":
                ["I want a room for " + arrRoomandPrice[randomRoom].number,
                "I need a room for " + arrRoomandPrice[randomRoom].number + " for tonight."]
        },
        {
            "Question": ["What kind of room would you like?", "What sort of room would you like?"],
            "Answer": ["I would like to book a " + arrRoomandPrice[randomRoom].type,
            "I want " + arrRoomandPrice[randomRoom].type
            ]
        },
        {
            "Question": ["What is your name", "Can i know your name"],
            "Answer":
                ["My name is " + InfoPeople()[random].name,
                "You can call me " + InfoPeople()[random].name,
                InfoPeople()[random].name]
        }
        ,
        {
            "Question": ["How old are you"],
            "Answer":
                ["My age is " + InfoPeople()[random].age,
                "I am " + InfoPeople()[random].age,
                InfoPeople()[random].age]
        }
    ]
    temp.Final = "Here you are!"
    return temp
}