import React, { useState, useEffect } from "react";
// import { Application } from "pixi.js";
// import * as PIXI from "pixi.js";
// import { getCookie } from "../../../../helpers/functionCookies"
// // import CheckMassageAndCommand from "../../../helpers/CheckMessage"
// import RandomInt from "../../../../helpers/randomInt"
// import Sentences1000 from "./1000sentence"
import "./Body.css"
let TimeCount = Date.now()
function Mbody({ socket, message, IDofRoom, ArrIDofAllMemberInRoom }) {
    return <div id="ChessBody">
        <div> <audio id="audioBTN" controls style={{ display: "none" }} src={require("./correct.wav")}></audio></div>
        <div>TEST THU GIAO TIEP CAP TOC</div>
    </div>;
}

export default Mbody

function arrofAnwer_(ArrOfAnwer, AnswerChoose) {
    let Show = ArrOfAnwer.map((e, index) => <div key={index}>{e.SortEN2}</div>)
    return Show
}



// function _CheckMessageAndCommand(message, command, percent) {
//     let arrMessage = _SortMessage(message);
//     let arrCommand = _SortMessage(command).split(" ");

//     let numberOfNull = 0;
//     let numberCountExist = 0;
//     let numberOfArrayLength = arrCommand.length;

//     arrCommand.forEach(e => {
//         if (e === " ") {
//             numberOfNull += 1;
//         } else {
//             if (arrMessage.indexOf(e) > -1) {
//                 numberCountExist += 1;
//             }
//         }
//     })

//     if (numberCountExist / (numberOfArrayLength - numberOfNull) * 100 > percent) {
//         return true
//     }
//     return false

// }

// function _SortMessage(messCheck) {
//     let a = messCheck.split(/[\s,?#!-().]+/)
//     let b = a.toString();
//     return b.split(",").join(" ").toLowerCase()
// }



// function ReturnSentence1(Sentence) {
//     let Res = "";
//     let Arr1 = Sentence.split("");
//     // console.log(Arr1)
//     let ArrRes = []
//     Arr1.forEach(e => {
//         if (e !== " ") {
//             if (RandomInt(0, 3) === 1) {
//                 ArrRes.push("_")
//             } else { ArrRes.push(e) }
//         } else { ArrRes.push(e) }
//     })

//     Res = ArrRes.toString().split(",").join("");
//     // console.log(Res)
//     return Res
// }


// function ReturnSentence2(Sentence) {
//     let Res = "";
//     let Arr1 = Sentence.split("");
//     // console.log(Arr1)
//     let ArrRes = []
//     Arr1.forEach(e => {
//         if (e !== " ") {
//             if (RandomInt(0, 1) === 1) {
//                 ArrRes.push("_")
//             } else { ArrRes.push(e) }
//         } else { ArrRes.push(e) }
//     })

//     Res = ArrRes.toString().split(",").join("");
//     // console.log(Res)
//     return Res
// }
// // console.log(ReturnSentence("How are you?"))
// // console.log(ReturnSentence("How are you?"))

// let arr = Sentences1000();

// arr.forEach((e, index) => {
//     arr[index].SortEN1 = ReturnSentence1(e.EN)
//     arr[index].SortEN2 = ReturnSentence2(e.EN)
// })

// console.log(JSON.stringify(arr))

