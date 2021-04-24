import React, { useState, useEffect } from "react";
import { getCookie } from "../../../../../helpers/functionCookies"
import InfoPeople from "../InfoPeople";
import _CheckMessageAndCommand from "../../../../../helpers/CheckMessage"
let MessageSave = ""
function Number1({
    Score,
    setMessage, Set_TimeCount, message, TimeCount,
    ArrPeopleUse, Page, socket, IDofRoom, ArrIDofAllMemberInRoom, SetPage
}) {
    const [StringToSpeak, Set_StringToSpeak] = useState("");
    const [ArrPeopleSearch, SetArrPeopleSearch] = useState([]);
    useEffect(() => {
        if (StringToSpeak !== "") {
            document.getElementById('speech-msg').value = StringToSpeak;
            document.getElementById("speak").click();
        }
    }, [StringToSpeak]);

    useEffect(() => {
        if (Page !== -1) {
            ArrPeopleUse[Page].status = false;
            MessageSave += message;
            if (message !== "") {

                if (_CheckMessageAndCommand(MessageSave, "how old are you", 75) && Date.now() - TimeCount > 300) {
                    console.log(ArrPeopleUse[Page])
                    Set_TimeCount(Date.now());
                    MessageSave = "";
                    setMessage("-")
                    let mynameis = "My age is " + ArrPeopleUse[Page].age
                    Set_StringToSpeak(mynameis)
                }
                if (_CheckMessageAndCommand(MessageSave, "hi how are you", 70) && Date.now() - TimeCount > 300) {
                    Set_TimeCount(Date.now());
                    MessageSave = "";
                    setMessage("-")
                    let mynameis = "I'm good! And you?"
                    Set_StringToSpeak(mynameis)
                }
                if (_CheckMessageAndCommand(MessageSave, "what is your name", 70) && Date.now() - TimeCount > 300) {
                    Set_TimeCount(Date.now());
                    MessageSave = "";
                    setMessage("-")
                    let mynameis = "My name is " + ArrPeopleUse[Page].name;
                    // Read(mynameis, 0)
                    document.getElementById('speech-msg').value = mynameis;
                    document.getElementById("speak").click();

                }
                if (_CheckMessageAndCommand(MessageSave, "can you spell your name", 75) && Date.now() - TimeCount > 300) {
                    Set_TimeCount(Date.now());
                    MessageSave = "";
                    setMessage("-")
                    let Spell = ArrPeopleUse[Page].name.split("").join(" ");
                    let mynameis = "It is " + Spell;
                    Set_StringToSpeak(mynameis)
                }

            }
        }
    }, [Page, message, setMessage, TimeCount, ArrPeopleUse, Set_StringToSpeak, Set_TimeCount]);




    return (<div className="onePersonShow">
        <button onClick={() => SetPage(-1)} className="btn btn-outline-primary" style={{ float: "right" }}>Done!</button>
        <div className="onePersonShow_Main">{_ArrOnePeople(ArrPeopleUse, Page, SetArrPeopleSearch, ArrPeopleSearch, socket, IDofRoom, ArrIDofAllMemberInRoom, SetPage)}</div>
    </div>)
}

export default Number1


function _ArrOnePeople(ArrPeopleUse, Page, SetArrPeopleSearch, ArrPeopleSearch, socket, IDofRoom, ArrIDofAllMemberInRoom, SetPage) {
    if (Page > -1) {
        let Show =
            <div className="row mt-5">
                <div className="col-4">
                    <img alt={ArrPeopleUse[Page].img} src={ArrPeopleUse[Page].image} width="150px" />
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
                        onClick={() => _Submit(document.getElementById("number").value, socket, ArrPeopleUse[Page], IDofRoom, ArrIDofAllMemberInRoom, SetPage)}>
                        Enter
                    </button>
                </div>
            </div>
        return Show
    }
    return "";
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
        document.getElementById('speech-msg').value = mynameis;
        document.getElementById("speak").click();
        SetPage(-1);
    }
}