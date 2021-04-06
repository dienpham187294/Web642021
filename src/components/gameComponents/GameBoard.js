import React, { useState, useEffect } from "react";
import ChessLv1 from "./ChessLv1/ChessLv1"
import ChessLv2 from "./ChessLv2/ChessLv2"
import ChessListenning from "./ChessListenning/ChessListenning"
import LearnChess from "./LearnChess/LearnChess"
import Monopoly from "./monopoly/Monopoly"
import CheckLoginAlready from "../../helpers/CheckLoginAlreadyOrNot"
import queryString from "query-string";

function Reading({ socket, UpdatePage }) {
    const [Page, SetPage] = useState("Guild")
    useEffect(() => {
        let parsed = queryString.parse(window.location.search);
        if (typeof (parsed.p) !== "undefined") {
            SetPage(parsed.p)
        } else SetPage("gioithieu")
    }, [UpdatePage])
    useEffect(() => {

    }, [Page])

    return (
        <div className="container-fluid text-center">
            <CheckLoginAlready />
            <div>
                {Page === "gioithieu" ? <div>
                    <iframe title="1" width="100%" height="500px" src="https://www.youtube.com/embed/J-Bu5UzpigQ" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                    : Page === "3000-tu-vung-voi-hinhanh" ? <Monopoly socket={socket} />
                        : Page === "1000-cau-co-ban-nghi-nho-1" ? <ChessLv1 socket={socket} />
                            : Page === "1000-cau-co-ban-nghi-nho-2" ? <ChessLv2 socket={socket} />
                                : Page === "1000-cau-co-ban-lang-nghe" ? <ChessListenning socket={socket} />
                                    : Page === "1000-cau-co-ban-lam-quen" ? <LearnChess socket={socket} />
                                        : ""}
            </div>
        </div>


    )
}
export default Reading