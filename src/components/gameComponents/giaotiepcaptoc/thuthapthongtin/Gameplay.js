import React from "react";
import Mheader from "./header";
import Mbody from "./body"
function MonoGameSence({
    Score, Set_Score,
    gamePlayData, socket, message, setMessage, IDofRoom, ArrIDofAllMemberInRoom }) {

    return (
        <div>

            <p className="border border-primary mt-3" />
            <Mbody gamePlayData={gamePlayData} socket={socket} message={message}
                setMessage={setMessage} IDofRoom={IDofRoom}
                ArrIDofAllMemberInRoom={ArrIDofAllMemberInRoom}
                Score={Score} />
            <p className="border border-primary mt-3" />
            <Mheader gamePlayData={gamePlayData} Set_Score={Set_Score} />
        </div>
    );
}

export default MonoGameSence;