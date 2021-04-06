import React, { useState, useEffect } from "react";
import Cuahangtraicay from "./giaotiepcaptoc/cuahangtraicay/Cuahangtraicay"
import Thuthapthongtin from "./giaotiepcaptoc/thuthapthongtin/Thuthapthongtin"
import CheckLoginAlready from "../../helpers/CheckLoginAlreadyOrNot"
import queryString from "query-string";

function Giaotiep({ socket, UpdatePage }) {
    const [Page, SetPage] = useState("Guild");
    useEffect(() => {
        let parsed = queryString.parse(window.location.search);
        if (typeof (parsed.p) !== "undefined") {
            SetPage(parsed.p)
        } else SetPage("gioithieu")
    }, [UpdatePage])
   
    return (
        <div className="container-fluid text-center">
            <CheckLoginAlready />
            <div>
                {Page === "gioithieu" ? <div>
                    <h3>Học tiếng anh giao tiếp thông qua việc đóng vai vào một trường hợp cụ thể.</h3>
                </div>
                    : Page === "thu-thap-thong-tin" ? <Thuthapthongtin socket={socket} />
                        : Page === "cua-hang-trai-cay" ? <Cuahangtraicay socket={socket} />
                            : ""}
            </div>
        </div>


    )
}
export default Giaotiep