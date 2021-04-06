import React, { useEffect } from "react";
const e = React.createElement;
function Mheader({ gamePlayData, setMessageCheck, messageCheck }) {

    useEffect(() => {

    }, [gamePlayData]);
    function showHeader() {
        let arrPlayers = [];
        if (gamePlayData.length > 0) {
            gamePlayData[0].members.forEach(eee => {
                if (eee.status) {
                    arrPlayers.push(e("div", { key: eee.id, style: { width: "20%", display: "inline-block", borderRadius: "6px", backgroundColor: eee.turn ? "red" : "transparent" } }, [<p key={1 + eee.username}>{eee.username}</p>, <p key={2 + eee.username}>Score: {eee.score}</p>, <p key={3 + eee.username}>Level: {eee.level}</p>]))
                }
            });;
        }
        let showHeader = e("div", {}, arrPlayers)
        return showHeader
    }
    return (
        <div>
            {showHeader()}
        </div>
    );
}

export default Mheader;