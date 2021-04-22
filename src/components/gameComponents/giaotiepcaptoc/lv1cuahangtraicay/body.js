import React, { useState, useEffect } from "react";
import RandomInt from "../../../../helpers/randomInt";
import { getCookie } from "../../../../helpers/functionCookies"
import InfoPeople from "./InfoPeople";
import InfoFruit from "./InfoFruit";
import "./Body.css"
let TimeCount = Date.now();
let ArrPeople = [];
let TimeToAppear = 0;
let MessageSave = ""
function Mbody({ socket, message, setMessage, IDofRoom, ArrIDofAllMemberInRoom }) {
    const [TimeToCount, SetTimeToCount] = useState(0);
    const [ArrPeopleUse, SetArrPeopleUse] = useState([]);
    const [ArrFruitSearch, SetArrFruitSearch] = useState([]);
    const [FruitChooseToBuy, SetFruitChooseToBuy] = useState("");
    const [Page, SetPage] = useState(-1);
    // const [TimeToAppear, SetTimeToAppear] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            SetTimeToCount(Time => Time + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);



    useEffect(() => {
        if (Page !== -1) {
            let num = Page
            ArrPeople[num].status = false;
            MessageSave += message;
            if (message !== "") {
                ArrPeople[num]._FN(message)
                if (_CheckMessageAndCommand(MessageSave, "what would you like", 75) && Date.now() - TimeCount > 300) {
                    TimeCount = Date.now();
                    MessageSave = "";
                    setMessage("-")
                    let mynameis = ""
                    let numToSpeak = Date.now() % 3;
                    if (numToSpeak === 1) {
                        mynameis = "I would like to take some" + ArrPeople[num].FruitName
                    } else if (numToSpeak === 2) { mynameis = "Do you have any " + ArrPeople[num].FruitName } else {
                        mynameis = ArrPeople[num].FruitName + ". Do you have it?"
                    }
                    document.getElementById('speech-msg').value = mynameis;
                    document.getElementById("speak").click();

                }
                if (_CheckMessageAndCommand(MessageSave, "how much do you want", 75) && Date.now() - TimeCount > 300) {
                    TimeCount = Date.now();
                    MessageSave = "";
                    setMessage("-")
                    let mynameis = ""
                    if (Date.now() % 2 === 1) {
                        mynameis = "I will take " + ArrPeople[num].FruitAmount + " Kg.";
                    } else { mynameis = "Give me " + ArrPeople[num].FruitAmount + " Kg." }

                    document.getElementById('speech-msg').value = mynameis;
                    document.getElementById("speak").click();
                }




            }
        }
    }, [Page, message, setMessage]);
    useEffect(() => {
        if (TimeToCount > TimeToAppear) {
            TimeToAppear += RandomInt(6, 20);
            let randomPeople = RandomInt(0, 99);
            let randomFruit = RandomInt(0, InfoFruit().length - 1)

            let object = {}
            object.name = InfoPeople()[randomPeople].name;
            object.age = InfoPeople()[randomPeople].age;
            object.status = InfoPeople()[randomPeople].status;
            object.img = InfoPeople()[randomPeople].image;
            object.FruitName = InfoFruit()[randomFruit].name;
            object.FruitImg = InfoFruit()[randomFruit].image;
            object.FruitPrice = InfoFruit()[randomFruit].price;
            object.FruitAmount = RandomInt(1, 3);
            object._FN = function TestFunction(messagetest) {
                alert(messagetest)
            }
            ArrPeople.push(object);
            SetArrPeopleUse(ArrPeople);
        }
    }, [TimeToCount]);

    return <div id="Lv1Traicay">
        <div><a href={`/?m=giaotiep&p=cua-hang-trai-cay-lv1&r=${IDofRoom}`}>Reset</a></div>
        <div> <audio id="audioBTN" controls style={{ display: "none" }} src={require("./correct.wav")}></audio></div>
        {/* <div>Thu thap thong tin {TimeToCount} </div> */}
        {Page !== -1
            ? <div id="onePersonShow_lv1traicay"> <button onClick={() => SetPage(-1)} className="btn btn-outline-primary" style={{ float: "right" }}>Done!</button> {_ArrOnePeople(Page, SetArrFruitSearch, ArrFruitSearch, socket, IDofRoom, ArrIDofAllMemberInRoom, SetPage, SetFruitChooseToBuy, FruitChooseToBuy)}</div>
            : _ArrofPeople(ArrPeopleUse, SetPage)}
    </div>;
}

export default Mbody

function _ArrofPeople(ArrPeopleUse, SetPage) {
    if (ArrPeopleUse.length > 0) {
        let Show = ArrPeopleUse.map((e, index) =>
            e.status
                ? <div className="People" onClick={() => SetPage(index)} key={index} >
                    <img key={index} alt={e.name} src={e.img} width="100px" />
                </div >
                : "")
        return Show
    }
    return "";
}
function _ArrOnePeople(Page, SetArrFruitSearch, ArrFruitSearch, socket, IDofRoom, ArrIDofAllMemberInRoom, SetPage, SetFruitChooseToBuy, FruitChooseToBuy) {
    if (Page > -1) {
        let Show =
            <div className="row mt-5">
                <div className="col-2">
                    <img alt={ArrPeople[Page].img} src={ArrPeople[Page].img} width="150px" />
                </div>
                <div className="col-4">
                    <h5>Search Tool</h5>
                    <input className="form-control" type="text" placeholder="Enter name" id="nameSearch" onKeyUp={() => SetArrFruitSearch(Search(document.getElementById("nameSearch").value))} />
                    {/* <input className="form-control" type="numberAmount" placeholder="Enter age" id="ageSearch"
                        onKeyUp={() => SetArrFruitSearch(Search(document.getElementById("nameSearch").value, document.getElementById("ageSearch").value))} /> */}
                    <div id="resSearch">
                        {ShowSearch(ArrFruitSearch, SetFruitChooseToBuy)}
                    </div>
                </div>
                <div className="col-6">
                    <h5>Receipt</h5>
                    {FruitChooseToBuy !== "" ?
                        <img key={FruitChooseToBuy} alt={FruitChooseToBuy} src={FruitChooseToBuy} width="50px" /> : ""}
                    <input className="form-control" type="number" placeholder="Amount" id="numberAmount1" />
                    <input className="form-control" type="number" placeholder="Price $" id="numberPrice" />
                    <button className="btn btn-outline-primary mt-4"
                        onClick={() => _Submit(document.getElementById("numberPrice").value, document.getElementById("numberAmount1").value, socket, ArrPeople[Page], IDofRoom, ArrIDofAllMemberInRoom, SetPage)}>
                        Enter
                    </button>
                </div>
            </div >
        return Show
    }
    return "";
}


function _CheckMessageAndCommand(message, command, percent) {
    let arrMessage = _SortMessage(message);
    let arrCommand = _SortMessage(command).split(" ");

    let numberAmountOfNull = 0;
    let numberAmountCountExist = 0;
    let numberAmountOfArrayLength = arrCommand.length;

    arrCommand.forEach(e => {
        if (e === " ") {
            numberAmountOfNull += 1;
        } else {
            if (arrMessage.indexOf(e) > -1) {
                numberAmountCountExist += 1;
            }
        }
    })

    if (numberAmountCountExist / (numberAmountOfArrayLength - numberAmountOfNull) * 100 > percent) {
        return true
    }
    return false

}

function _SortMessage(messCheck) {
    let a = messCheck.split(/[\s,?#!-().]+/)
    let b = a.toString();
    return b.split(",").join(" ").toLowerCase()
}


function Search(name) {
    let arrRes = []
    InfoFruit().forEach(e => {
        if (e.name.toLowerCase().indexOf(name.toLowerCase()) > -1) {
            arrRes.push(e)
        }
    })
    return arrRes
}

function ShowSearch(ArrSearch, SetFruitChooseToBuy) {
    return ArrSearch.map((e, index) => <div key={index}>
        {e.name} | {e.price} $ |   <img key={index} alt={e.name} src={e.image} width="50px" /> <button className="btn btn-sm btn-outline-primary" onClick={() => SetFruitChooseToBuy(e.image)}>Choose</button>
    </div>)
}

function _Submit(numberAmount, numberPrice, socket, OnePersonData, IDofRoom, ArrIDofAllMemberInRoom, SetPage) {
    if (document.getElementById("numberAmount1").value === OnePersonData.FruitAmount.toString() && document.getElementById("numberPrice").value === OnePersonData.FruitPrice.toString()) {
        socket.emit("chess", ["UpScore", IDofRoom, getCookie("username"), ArrIDofAllMemberInRoom]);
        let mynameis = ""
        if (Date.now() % 2 === 1) { mynameis = "Thank's. See you soon!" } else { mynameis = "Thank you." }
        // Read(mynameis, 1)
        document.getElementById('speech-msg').value = mynameis;
        document.getElementById("speak").click();
        SetPage(-1);
    }
}
