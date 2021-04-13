import React, { useState, useEffect } from "react";
import MonoGameSence from './Gameplay';
import MonopolyLobby from './Lobby';
import { setCookie, getCookie } from "../../../../helpers/functionCookies";
import queryString from "query-string";
let TimeToSocketOn = Date.now();
function Lv1Cuahangdophongan({ socket, message, setMessage }) {
    const [sence, setSence] = useState("-"); //First lobby sence is true
    const [room, setRoom] = useState([]);
    const [jionroom, setjionRoom] = useState("");
    const [start, setStart] = useState("");
    const [gamePlayData, setGamePlayData] = useState([]);

    const [IDofRoom, setIDofRoom] = useState("");
    const [ArrIDofAllMemberInRoom, setArrIDofAllMemberInRoom] = useState([]);
    useEffect(() => {
        let parsed = queryString.parse(window.location.search);
        if (typeof (parsed.r) !== "undefined" && getCookie('IdRoom') === parsed.r) {
            setTimeout(() => {
                socket.emit("chess", ["ChangeSocketID", parsed.r, getCookie('username'), socket.id])
            }, 1300);

        };
    }, [socket])


    useEffect(() => {
        socket.on("StartPlay", (data) => {
            setGamePlayData(data);
            setIDofRoom(data[0].id)
            setCookie("IdRoom", data[0].id, 1)
            setSence(data[0].id);
            let arrIDRoomTemp = [];
            data[0].members.forEach(e => {
                if (e.status) { arrIDRoomTemp.push(e.id) }
            });
            setArrIDofAllMemberInRoom(arrIDRoomTemp);
        })
        if (sence === "-") {
            socket.emit("chess", ["get_info"]);
            socket.on("chess", (data) => {
                setRoom(data);
            });
            socket.on("updateRoom", (data) => {
                setRoom(data);
            })
        }    //Listen when in gamePlay
        else {
            if (Date.now() - TimeToSocketOn > 200) {
                socket.on("updateGamePlay", (data) => {
                    setGamePlayData(data);
                })
            }

        }

    }, [sence, socket]);

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

            {
                sence === "-"
                    ? <MonopolyLobby socket={socket} room={room} username={getCookie("username")} setjionRoom={setjionRoom} setStart={setStart} message={message} setMessage={setMessage} />
                    : <MonoGameSence gamePlayData={gamePlayData} setGamePlayData={setGamePlayData} socket={socket} message={message} setMessage={setMessage} IDofRoom={IDofRoom} ArrIDofAllMemberInRoom={ArrIDofAllMemberInRoom} sence={sence} />
            }
        </div >

    );
}

export default Lv1Cuahangdophongan
    ;