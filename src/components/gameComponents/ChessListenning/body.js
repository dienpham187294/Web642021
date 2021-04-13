import React, { useState, useEffect } from "react";
// import { Application } from "pixi.js";
// import * as PIXI from "pixi.js";
import { getCookie } from "../../../helpers/functionCookies"
// import CheckMassageAndCommand from "../../../helpers/CheckMessage"
import RandomInt from "../../../helpers/randomInt"
import Sentences1000 from "./1000sentence"
import "./Body.css"
let ArrofSentence = [];
let AnwertoSay = "-";
let AllMessageSave = "";
let ArrOfSentenceUse = [];
let ArrOfSentenceNew = [];
let TimeCount = Date.now()
function Mbody({ socket, message, IDofRoom, ArrIDofAllMemberInRoom }) {
    const [Level, SetLevel] = useState(0)
    const [Score, SetScore] = useState(0)
    const [StatusToPlay, SetStatusToPlay] = useState(true)
    const [TimeToCountDown, SetTimeToCountDown] = useState(45)
    const [TimeToAnwer, SetTimeToAnwer] = useState(15)
    // const [ArrOfSentenceUse, SetArrOfSentenceUse] = useState([])
    const [Question, SetQuestion] = useState("")
    const [AnswerCorrect, SetAnswerCorrect] = useState("==")
    const [ArrOfAnwer, SetArrOfAnwer] = useState([])

    useEffect(() => {
        const interval = setInterval(() => {
            SetTimeToCountDown(Time => Time - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        const interval1 = setInterval(() => {
            SetTimeToAnwer(Time => Time - 1);
        }, 1000);
        return () => clearInterval(interval1);
    }, []);

    useEffect(() => {
        ArrofSentence = Sentences1000();
    }, [])

    useEffect(() => {

        if (AnswerCorrect !== "==" && Date.now() - TimeCount > 1000) {
            document.getElementById('speech-msg').value = AnswerCorrect;
            document.getElementById("speak").click();
        }

    }, [AnswerCorrect])
    useEffect(() => {
        if (TimeToAnwer === 0 && StatusToPlay) {
            SetTimeToAnwer(10);



            let ArrTempToUse = [];
            if (RandomInt(0, 2) === 0) {
                ArrTempToUse = ArrOfSentenceUse
            } else { ArrTempToUse = ArrOfSentenceNew }
            let arrTemp = [];
            ArrTempToUse.forEach((e, index) => {
                arrTemp.push(index)
            })
            let arrUse = arrTemp.sort(() => Math.random() - 0.5);
            let Random = RandomInt(0, 3);
            if (ArrTempToUse[arrUse[Random]].VN === Question) {
                let RandomTemp = (Random + 1) % 4;
                Random = RandomTemp;
            }
            SetQuestion(ArrTempToUse[arrUse[Random]].VN)
            SetAnswerCorrect(ArrTempToUse[arrUse[Random]].EN)
            // Read(ArrTempToUse[arrUse[Random]].EN, 0)
            // Read(ArrTempToUse[arrUse[Random]].EN)
            let ArrOfAnwers = [];
            ArrOfAnwers.push(ArrTempToUse[arrUse[Random]])
            // ArrOfAnwers.push(ArrTempToUse[arrUse[0]])
            // ArrOfAnwers.push(ArrTempToUse[arrUse[1]])
            // ArrOfAnwers.push(ArrTempToUse[arrUse[2]])
            // ArrOfAnwers.push(ArrTempToUse[arrUse[3]])
            SetArrOfAnwer(ArrOfAnwers)
        }
    }, [TimeToAnwer, StatusToPlay, Question]);
    useEffect(() => {
        if (TimeToCountDown === 0) {
            SetStatusToPlay(false)
        }
    }, [TimeToCountDown]);
    useEffect(() => {
        if (Score > (Level + 1) * 10 / 2) {
            SetLevel(Level => Level + 1);
            socket.emit("chess", ["UpLevel", IDofRoom, getCookie("username"), ArrIDofAllMemberInRoom]);
        }
    }, [Score, Level, IDofRoom, ArrIDofAllMemberInRoom, socket]);
    useEffect(() => {
        for (let i = Level * 10; i < Level * 10 + 10; i++) {
            ArrOfSentenceUse.push(ArrofSentence[i])
        }
        for (let i = Level * 10; i < Level * 10 + 10; i++) {
            ArrOfSentenceNew[i % 10] = (ArrofSentence[i])
        }
        // console.log(ArrOfSentenceUse)
        // console.log(ArrOfSentenceNew)
        if (Level === 0) {
            let arrTemp = [];
            ArrOfSentenceNew.forEach((e, index) => {
                arrTemp.push(index)
            })
            let arrUse = arrTemp.sort(() => Math.random() - 0.5);
            let Random = RandomInt(0, 3)
            SetQuestion(ArrOfSentenceNew[arrUse[Random]].VN)
            SetAnswerCorrect(ArrOfSentenceNew[arrUse[Random]].EN)
            // Read(ArrOfSentenceNew[arrUse[Random]].EN)
            let ArrOfAnwers = [];
            ArrOfAnwers.push(ArrOfSentenceNew[arrUse[Random]])
            // ArrOfAnwers.push(ArrOfSentenceNew[arrUse[0]])
            // ArrOfAnwers.push(ArrOfSentenceNew[arrUse[1]])
            // ArrOfAnwers.push(ArrOfSentenceNew[arrUse[2]])
            // ArrOfAnwers.push(ArrOfSentenceNew[arrUse[3]])
            SetArrOfAnwer(ArrOfAnwers)

        }
    }, [Level]);

    useEffect(() => {
        AllMessageSave += " " + message;
        // console.log(AllMessageSave)
        if (message === "" && AnswerCorrect !== AnwertoSay && StatusToPlay && _CheckMessageAndCommand(AllMessageSave, AnswerCorrect, 60)) {
            AnwertoSay = AnswerCorrect;
            AllMessageSave = "";
            SetTimeToCountDown(T => T + 10);
            SetScore(S => S + 1);
            socket.emit("chess", ["UpScore", IDofRoom, getCookie("username"), ArrIDofAllMemberInRoom]);
            document.getElementById("audioBTN").play();
            SetTimeToAnwer(15);

            let ArrTempToUse = [];
            if (RandomInt(0, 2) === 0) {
                ArrTempToUse = ArrOfSentenceUse
            } else { ArrTempToUse = ArrOfSentenceNew }
            let arrTemp = [];
            ArrTempToUse.forEach((e, index) => {
                arrTemp.push(index)
            })
            let arrUse = arrTemp.sort(() => Math.random() - 0.5);
            let Random = RandomInt(0, 3)
            if (ArrTempToUse[arrUse[Random]].VN === Question) {
                let RandomTemp = (Random + 1) % 4;
                Random = RandomTemp;
            }
            SetQuestion(ArrTempToUse[arrUse[Random]].VN)
            SetAnswerCorrect(ArrTempToUse[arrUse[Random]].EN)
            // Read(ArrTempToUse[arrUse[Random]].EN, 0)
            let ArrOfAnwers = [];
            ArrOfAnwers.push(ArrTempToUse[arrUse[Random]])
            // ArrOfAnwers.push(ArrTempToUse[arrUse[0]])
            // ArrOfAnwers.push(ArrTempToUse[arrUse[1]])
            // ArrOfAnwers.push(ArrTempToUse[arrUse[2]])
            // ArrOfAnwers.push(ArrTempToUse[arrUse[3]])
            SetArrOfAnwer(ArrOfAnwers)
        }
    }, [message, StatusToPlay, AnswerCorrect, Question, ArrIDofAllMemberInRoom, IDofRoom, socket])

    return <div id="ChessBody">
        <div> <audio id="audioBTN" controls style={{ display: "none" }} src={require("./correct.wav")}></audio></div>
        <div>{TimeToCountDown} | {TimeToAnwer} | {Score}</div>
        {/* <div><h5> {Question}</h5></div> */}
        <div id="ChessBody_ArrOfAnwer">{arrofAnwer_(ArrOfAnwer)}</div>
    </div>;
}

export default Mbody

function arrofAnwer_(ArrOfAnwer, AnswerChoose) {
    let Show = ArrOfAnwer.map((e, index) => <div key={index}>{e.SortEN2}</div>)
    return Show
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

