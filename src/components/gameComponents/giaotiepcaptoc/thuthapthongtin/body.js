import React, { useState, useEffect } from "react";
import RandomInt from "../../../../helpers/randomInt";
import { getCookie } from "../../../../helpers/functionCookies"
import InfoPeople from "./InfoPeople";
import "./Body.css"
let TimeCount = Date.now();
let ArrPeople = [];
let TimeToAppear = 0;
let MessageSave = ""
function Mbody({ socket, message, setMessage, IDofRoom, ArrIDofAllMemberInRoom }) {
    const [TimeToCount, SetTimeToCount] = useState(0);
    const [ArrPeopleUse, SetArrPeopleUse] = useState([]);
    const [ArrPeopleSearch, SetArrPeopleSearch] = useState([]);
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
                if (_CheckMessageAndCommand(MessageSave, "how old are you", 75) && Date.now() - TimeCount > 300) {
                    TimeCount = Date.now();
                    MessageSave = "";
                    setMessage("-")
                    // let Spell = ArrPeople[num].name.split("").join(" ");
                    let mynameis = "My age is " + ArrPeople[num].age
                    document.getElementById('speech-msg').value = mynameis;
                    document.getElementById("speak").click();

                }
                if (_CheckMessageAndCommand(MessageSave, "hi how are you", 70) && Date.now() - TimeCount > 300) {
                    TimeCount = Date.now();
                    MessageSave = "";
                    setMessage("-")
                    let mynameis = "I'm good! And you?"
                    // Read(mynameis, 1)
                    document.getElementById('speech-msg').value = mynameis;
                    document.getElementById("speak").click();

                }
                if (_CheckMessageAndCommand(MessageSave, "what is your name", 70) && Date.now() - TimeCount > 300) {
                    TimeCount = Date.now();
                    MessageSave = "";
                    setMessage("-")
                    let mynameis = "My name is " + ArrPeople[num].name;
                    // Read(mynameis, 0)
                    document.getElementById('speech-msg').value = mynameis;
                    document.getElementById("speak").click();

                }
                if (_CheckMessageAndCommand(MessageSave, "can you spell your name", 75) && Date.now() - TimeCount > 300) {
                    TimeCount = Date.now();
                    MessageSave = "";
                    setMessage("-")
                    let Spell = ArrPeople[num].name.split("").join(" ");
                    let mynameis = "It is " + Spell
                    document.getElementById('rate').value = 0.7
                    document.getElementById('speech-msg').value = mynameis;
                    document.getElementById("speak").click();
                    document.getElementById('rate').value = 1
                }

            }
        }
    }, [Page, message, setMessage]);
    useEffect(() => {
        if (TimeToCount > TimeToAppear) {
            TimeToAppear += RandomInt(6, 20);
            ArrPeople.push(InfoPeople()[RandomInt(0, 99)]);
            SetArrPeopleUse(ArrPeople);
        }
    }, [TimeToCount]);

    return <div id="ChessBody">
        <div><a href={`/?m=giaotiep&p=thu-thap-thong-tin&r=${IDofRoom}`}>Reset</a></div>
        <div> <audio id="audioBTN" controls style={{ display: "none" }} src={require("./correct.wav")}></audio></div>
        {/* <div>Thu thap thong tin {TimeToCount} </div> */}
        {Page !== -1
            ? <div id="onePersonShow"> <button onClick={() => SetPage(-1)} className="btn btn-outline-primary" style={{ float: "right" }}>Done!</button> {_ArrOnePeople(Page, SetArrPeopleSearch, ArrPeopleSearch, socket, IDofRoom, ArrIDofAllMemberInRoom, SetPage)}</div>
            : _ArrofPeople(ArrPeopleUse, SetPage)}
    </div>;
}

export default Mbody

function _ArrofPeople(ArrPeopleUse, SetPage) {
    if (ArrPeopleUse.length > 0) {
        let Show = ArrPeopleUse.map((e, index) =>
            e.status
                ? <div className="People" onClick={() => SetPage(index)} key={index} >
                    <img alt={index} src={e.image} width="100px" />
                </div >
                : "")
        return Show
    }
    return "";
}
function _ArrOnePeople(Page, SetArrPeopleSearch, ArrPeopleSearch, socket, IDofRoom, ArrIDofAllMemberInRoom, SetPage) {
    if (Page > -1) {
        let Show =
            <div className="row mt-5">
                <div className="col-4">
                    <img alt={ArrPeople[Page].img} src={ArrPeople[Page].image} width="150px" />
                </div>
                <div className="col-5">
                    <h5>Search Tool</h5>
                    <input className="form-control" type="text" placeholder="Enter name" id="nameSearch"
                        onKeyUp={() => SetArrPeopleSearch(Search(document.getElementById("nameSearch").value, document.getElementById("ageSearch").value))} />
                    <input className="form-control" type="number" placeholder="Enter age" id="ageSearch"
                        onKeyUp={() => SetArrPeopleSearch(Search(document.getElementById("nameSearch").value, document.getElementById("ageSearch").value))} />
                    <div id="resSearch">
                        {ShowSearch(ArrPeopleSearch)}
                    </div>
                </div>
                <div className="col-3">
                    <h5>Room</h5>
                    <input className="form-control" type="text" placeholder="Room number." id="number" />
                    <button className="btn btn-outline-primary mt-4"
                        onClick={() => _Submit(document.getElementById("number").value, socket, ArrPeople[Page], IDofRoom, ArrIDofAllMemberInRoom, SetPage)}>
                        Enter
                    </button>
                </div>
            </div>
        return Show
    }
    return "";
}


function _CheckMessageAndCommand(message, command, percent) {
    let arrMessage = _SortMessage(message);
    let arrCommand = _SortMessage(command).split(" ");

    let numberOfNull = 0;
    let numberCountExist = 0;
    let numberOfArrayLength = arrCommand.length;

    arrCommand.forEach(e => {
        if (e === " ") {
            numberOfNull += 1;
        } else {
            if (arrMessage.indexOf(e) > -1) {
                numberCountExist += 1;
            }
        }
    })

    if (numberCountExist / (numberOfArrayLength - numberOfNull) * 100 > percent) {
        return true
    }
    return false

}

function _SortMessage(messCheck) {
    let a = messCheck.split(/[\s,?#!-().]+/)
    let b = a.toString();
    return b.split(",").join(" ").toLowerCase()
}


function Search(name, age) {
    let arrRes = []
    InfoPeople().forEach(e => {
        if ((e.age.toString() === age || age === "") && (name === "" || e.name.toLowerCase().indexOf(name.toLowerCase()) > -1)) {
            arrRes.push(e)
        }
    })
    return arrRes
}

function ShowSearch(ArrSearch) {
    return ArrSearch.map((e, index) => <div key={index}>
        {e.name} | {e.age} | {e.room}
    </div>)
}

function _Submit(number, socket, personuse, IDofRoom, ArrIDofAllMemberInRoom, SetPage) {

    if (number === personuse.room.toString()) {
        socket.emit("chess", ["UpScore", IDofRoom, getCookie("username"), ArrIDofAllMemberInRoom]);
        let mynameis = "Thank you!"
        // Read(mynameis, 1)
        document.getElementById('speech-msg').value = mynameis;
        document.getElementById("speak").click();
        SetPage(-1);
    }
}