import React from "react";
import "./Gameplay.css";
import Mheader from "./header";
import Mbody from "./body"
import Mfooter from "./footer";
function MonoGameSence({ gamePlayData, socket, message, setMessage, IDofRoom, ArrIDofAllMemberInRoom }) {

    return (
        <div>

            <p className="border border-primary mt-3" />
            <Mbody gamePlayData={gamePlayData} socket={socket} message={message} setMessage={setMessage} IDofRoom={IDofRoom} ArrIDofAllMemberInRoom={ArrIDofAllMemberInRoom} />
            <p className="border border-primary mt-3" />
            <Mheader gamePlayData={gamePlayData} />
            <p className="border border-primary mt-3" />
            <Mfooter />
        </div>
    );
}

export default MonoGameSence;