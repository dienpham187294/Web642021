import React, { useState, useEffect } from "react";
import { getCookie } from "../../../../../helpers/functionCookies"
import InfoPeople from "../InfoPeople";
import _CheckMessageAndCommand from "../../../../../helpers/CheckMessage"
import RandomInt from "../../../../../helpers/randomInt";
let MessageSave = ""
function Number2({
    setMessage, Set_TimeCount, message, TimeCount,
    ArrPeopleUse, Page, socket, IDofRoom, ArrIDofAllMemberInRoom, SetPage
}) {
    const [ArrPeopleSearch, SetArrPeopleSearch] = useState([]);
    const [Page_Tool, Set_Page_Tool] = useState("Searchtool");
    useEffect(() => {
        if (Page !== -1) {
            ArrPeopleUse[Page].status = false;
            MessageSave += message;
            if (message !== "" && Date.now() - TimeCount > 300) {
                Set_TimeCount(Date.now());
                console.log(ArrPeopleUse[Page].QandA)
                let CheckAllQuestion = false;
                let MessageToRead = "";


                ArrPeopleUse[Page].QandA.forEach(e => {
                    let checkQuestion = false;

                    e.Question.forEach(ee => {
                        if (_CheckMessageAndCommand(MessageSave, ee, 75)) {
                            checkQuestion = true;
                            CheckAllQuestion = true;
                        }
                    })

                    if (checkQuestion) {
                        let numtemp = RandomInt(0, e.Answer.length - 1);
                        MessageToRead = e.Answer[numtemp];
                    }
                })

                if (CheckAllQuestion) {
                    setMessage("");
                    MessageSave = "";
                    Read(MessageToRead)
                }
            }
        }
    }, [Page, message, setMessage, TimeCount, ArrPeopleUse, Set_TimeCount]);

    function Read(messagetoRead) {
        document.getElementById('speech-msg').value = messagetoRead;
        document.getElementById("speak").click();
    }

    return (<div className="onePersonShow">
        <button onClick={() => SetPage(-1)} className="btn btn-outline-primary" style={{ float: "right" }}>Done!</button>
        <div className="onePersonShow_Main">
            {_ArrOnePeople(
                Page_Tool, Set_Page_Tool,
                ArrPeopleUse, Page, SetArrPeopleSearch, ArrPeopleSearch, socket, IDofRoom, ArrIDofAllMemberInRoom, SetPage)}
        </div>
    </div>)
}

export default Number2


function _ArrOnePeople(
    Page_Tool, Set_Page_Tool,
    ArrPeopleUse, Page, SetArrPeopleSearch, ArrPeopleSearch, socket, IDofRoom, ArrIDofAllMemberInRoom, SetPage
) {
    if (Page > -1) {
        let Show =
            <div className="row mt-5">
                <div className="col-4">
                    <img alt={ArrPeopleUse[Page].img} src={ArrPeopleUse[Page].image} width="150px" />
                </div>
                <div className="col-5">
                    <button className="btn btn-sm btn-outline-primary" onClick={() => { Set_Page_Tool("Searchtool") }}>Search Tool</button>
                    <button className="btn btn-sm btn-outline-primary" onClick={() => { Set_Page_Tool("Pricelist") }}>Price list</button>
                    {Page_Tool === "Searchtool" ?
                        <div>
                            <input className="form-control" type="text" placeholder="Enter name" id="nameSearch"
                                onKeyUp={() => SetArrPeopleSearch(Search(document.getElementById("nameSearch").value, document.getElementById("ageSearch").value))} />
                            <input className="form-control" type="number" placeholder="Enter age" id="ageSearch"
                                onKeyUp={() => SetArrPeopleSearch(Search(document.getElementById("nameSearch").value, document.getElementById("ageSearch").value))} />
                            <div id="resSearch">
                                {ShowSearch(ArrPeopleSearch)}
                            </div>
                        </div>
                        : Page_Tool === "Pricelist" ?
                            <div>"Pricelist"</div>
                            : ""}

                </div>
                <div className="col-3">
                    <h5>Room</h5>
                    <input className="form-control" type="text" placeholder="Room number." id="number" />
                    <button className="btn btn-outline-primary mt-4"
                        onClick={() => _Submit(document.getElementById("number").value, socket, ArrPeopleUse[Page], IDofRoom, ArrIDofAllMemberInRoom, SetPage)}>
                        Enter
                    </button>
                </div>
            </div >
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
        {e.name} | {e.age}
    </div>)
}

function _Submit(number, socket, personuse, IDofRoom, ArrIDofAllMemberInRoom, SetPage) {

    if (number === personuse.room.toString()) {
        socket.emit("chess", ["UpScore", IDofRoom, getCookie("username"), ArrIDofAllMemberInRoom]);
        let MessageToRead = "Thank you!"
        document.getElementById('speech-msg').value = MessageToRead;
        document.getElementById("speak").click();
        SetPage(-1);
    }
}