import React, { useEffect } from "react";
import { getCookie } from "../../../../helpers/functionCookies";
const e = React.createElement;
function Mheader({ gamePlayData, Set_Score }) {

    useEffect(() => {
        gamePlayData[0].members.forEach(eee => {
            if (eee.status) {
                if (eee.username === getCookie("username")) {
                    Set_Score(eee.score)
                }
            }
        });;
    }, [gamePlayData, Set_Score]);
    function showHeader() {
        let arrPlayers = [];
        if (gamePlayData.length > 0) {
            gamePlayData[0].members.forEach(eee => {
                if (eee.status) {
                    arrPlayers.push(e("div", { key: eee.id, style: { width: "20%", display: "inline-block", borderRadius: "6px", backgroundColor: eee.turn ? "red" : "transparent" } }, [<p key={1 + eee.username}>{eee.username} | Score: {eee.score}</p>]));
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