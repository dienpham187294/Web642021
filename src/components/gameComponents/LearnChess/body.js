import React, { useState, useEffect } from "react";
import { Key } from "../../../helpers/Key"
import Sentences1000 from "./1000sentence"
import "./Body.css"
function Mbody({ socket, gamePlayData, message, IDofRoom, ArrIDofAllMemberInRoom }) {
    const [LearnNowData, SetLearnNowData] = useState([])
    const [LearnNowData_Anwer, SetLearnNowData_Anwer] = useState("")
    useEffect(() => {
        socket.on("LearnNow", (data) => {
            // console.log(data);
            SetLearnNowData(data)
        });
    }, [socket])
    useEffect(() => {
        if (_CheckMessageAndCommand(message, LearnNowData_Anwer, 50)[0] && message === "") {
            document.getElementById("audioBTN").play();
        }
    }, [message, LearnNowData_Anwer])
    return <div id="LearnChessBody">
        <div> <audio id="audioBTN" controls style={{ display: "none" }} src={require("./correct.wav")}></audio></div>
        {/* <div>{TimeToCountDown} | {TimeToAnwer} | {Score}</div>
        <div><h5> {Question}</h5></div> */}
        {LearnNowData.length > 0 ? <div id="LearnChessBody_LearnNow">{showLearnNow(SetLearnNowData, LearnNowData, SetLearnNowData_Anwer, LearnNowData_Anwer, socket, IDofRoom)}</div>
            : <div id="LearnChessBody_ArrOfAnwer">{arrofAnwer_(Sentences1000(), IDofRoom, socket, ArrIDofAllMemberInRoom, LearnNow)}</div>}


    </div>;
}

export default Mbody

function arrofAnwer_(arrTotal, IDofRoom, Socket, ArrIDofAllMemberInRoom, LearnNow) {
    let arrShow = []
    for (let i = 0; i < arrTotal.length / 10; i++) {
        let arr = [];
        for (let j = i * 10; j < i * 10 + 10; j++) {
            if (j < arrTotal.length) {
                arr.push(arrTotal[j])
            }
        }
        let Show = arr.map((e, index) => <div key={index} ><p key={index + "1"}>{e.VN}</p><p key={index + "2"}>{e.EN}</p></div >);
        arrShow.push(<p key={Key()} className="border border-danger mt-3" />)
        arrShow.push(<h5 key={Key()}>Level: {i + 1}</h5>)
        if (IDofRoom === Socket.id) {
            arrShow.push(<button className="btn btn-outline-primary" onClick={() => LearnNow(arr, Socket, IDofRoom, ArrIDofAllMemberInRoom)} key={Key()}>Learn Now</button>)
        }
        arrShow.push(<p key={Key()} className="border border-danger mt-3" />)
        arrShow.push(Show)
    }

    return arrShow
}
function LearnNow(arr, socket, IDofRoom, ArrIDofAllMemberInRoom) {
    socket.emit("chess", ["LearnNow", IDofRoom, ArrIDofAllMemberInRoom, arr]);
}

function showLearnNow(SetLearnNowData, LearnNowData, SetLearnNowData_Anwer, LearnNowData_Anwer, socket, IDofRoom) {
    let arrShow = [];
    arrShow.push(<h5>Chọn và đọc to câu tiếng anh!</h5>)
    if (IDofRoom === socket.id) {
        arrShow.push(<button onClick={() => {
            SetLearnNowData([])
        }} className="btn btn-outline-danger">Back</button>)
    }
    arrShow.push(<br />)
    let Show = LearnNowData.map((e, index) => <div style={{ backgroundColor: LearnNowData_Anwer === e.EN ? "yellow" : "transparent" }} onClick={() => { SetLearnNowData_Anwer(e.EN) }} key={index} ><p key={index + "1"}>{e.VN}</p><p key={index + "2"}>{e.EN}</p></div >);
    arrShow.push(Show)
    return arrShow
}
// // function ReturnSentence(Sentence) {
// //     let Res = "";
// //     let Arr1 = Sentence.split("");
// //     // console.log(Arr1)
// //     let ArrRes = []
// //     Arr1.forEach(e => {
// //         if (e !== " ") {
// //             if (RandomInt(0, 1) === 1) {
// //                 ArrRes.push("_")
// //             } else { ArrRes.push(e) }
// //         } else { ArrRes.push(e) }
// //     })

// //     Res = ArrRes.toString().split(",").join("");
// //     // console.log(Res)
// //     return Res
// // }
// console.log(ReturnSentence("How are you?"))


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
