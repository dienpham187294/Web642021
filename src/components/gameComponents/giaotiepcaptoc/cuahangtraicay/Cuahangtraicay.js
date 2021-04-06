import React, { useState, useEffect } from "react";
import MonoGameSence from './Gameplay';
import MonopolyLobby from './Lobby';
import { Dictaphone } from '../../../../helpers/RegChess';
import { getCookie } from "../../../../helpers/functionCookies";
import CheckMassageAndCommand from "../../../../helpers/CheckMessage"

function Cuahangtraicay
({ socket }) {
    const [message, setMessage] = useState('Message first');
    const [messageCheck, setMessageCheck] = useState(".");
    const [sence, setSence] = useState(true); //First lobby sence is true
    const [room, setRoom] = useState([]);
    const [jionroom, setjionRoom] = useState("");
    const [start, setStart] = useState("");
    const [gamePlayData, setGamePlayData] = useState([]);

    const [IDofRoom, setIDofRoom] = useState("");
    const [ArrIDofAllMemberInRoom, setArrIDofAllMemberInRoom] = useState([]);
    useEffect(() => {

        if (sence) {
            socket.emit("chess", ["get_info"]);
            socket.on("chess", (data) => {
                setRoom(data);
            });
            socket.on("updateRoom", (data) => {
                setRoom(data);
            })
            socket.on("StartPlay", (data) => {
                setSence(false);
                setGamePlayData(data);
                setIDofRoom(data[0].id)
                let arrIDRoomTemp = [];
                data[0].members.forEach(e => {
                    if (e.status) { arrIDRoomTemp.push(e.id) }
                });
                setArrIDofAllMemberInRoom(arrIDRoomTemp)
            })
        }    //Listen when in gamePlay
        else {
            // socket.on("StartPlay", (data) => {
            //     setGamePlayData(data);
            // })
            socket.on("updateGamePlay", (data) => {
                setGamePlayData(data);
            })
        }

    }, [sence, socket]);


    useEffect(() => {
        let arr = CheckMassageAndCommand(message, messageCheck, 75)
        // if (arr[0] && messageCheck === "create a room") {

        //     socket.emit("chess", ["createRoom", socket.id, getCookie("username")])
        // }
        if (arr[0]) {
            setMessageCheck(".");
            socket.emit("saveFile", ["saveFileNew", getCookie("username"), arr[1], arr[2]]);
        }
    }, [message, messageCheck, socket, setSence]);
    useEffect(() => {
        if (jionroom.length > 3) {
            socket.emit("chess", ["jionRoom", socket.id, getCookie("username"), jionroom])
        }
    }, [jionroom, socket]);
    useEffect(() => {
        if (start.length > 3) {
            socket.emit("chess", ["start", socket.id, getCookie("username"), start])
        }
    }, [start, socket]);



    return (
        <div>
            <Dictaphone setMessage={setMessage} messageCheck={messageCheck} socket={socket} />
            {sence
                ? <MonopolyLobby socket={socket} room={room} username={getCookie("username")} setjionRoom={setjionRoom} setStart={setStart} setMessageCheck={setMessageCheck} messageCheck={messageCheck} />
                : <MonoGameSence gamePlayData={gamePlayData} setGamePlayData={setGamePlayData} setMessageCheck={setMessageCheck} messageCheck={messageCheck} socket={socket} message={message} IDofRoom={IDofRoom} ArrIDofAllMemberInRoom={ArrIDofAllMemberInRoom} />
            }
        </div>

    );
}

export default Cuahangtraicay
;