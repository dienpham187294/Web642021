import React, { useState, useEffect } from "react";
import Cuahangtraicay from "./giaotiepcaptoc/lv1cuahangtraicay/Cuahangtraicay"
import Lv1Cuahangtraicay from "./giaotiepcaptoc/lv1cuahangrautuoi/lv1cuahangrautuoi"
import Lv1Cuahangthitcay from "./giaotiepcaptoc/lv1cuahangthittuoi/lv1cuahangthittuoi"
import Lv1Cuahangvatdungxedap from "./giaotiepcaptoc/lv1cuahangvatdungxedap/lv1cuahangvatdungxedap"
import Lv1Cuahangdogiadung from "./giaotiepcaptoc/lv1cuahangvandogiadung/lv1MainJS"
import Lv1Cuahangvanphongpham from "./giaotiepcaptoc/lv1cuahangvanphongpham/lv1MainJS"

import Thuthapthongtin from "./giaotiepcaptoc/thuthapthongtin/Thuthapthongtin"
import CheckLoginAlready from "../../helpers/CheckLoginAlreadyOrNot"
import queryString from "query-string";

function Giaotiep({ socket, message, setMessage }) {
    const [Page, SetPage] = useState("gioithieu");
    useEffect(() => {
        let parsed = queryString.parse(window.location.search);
        if (typeof (parsed.p) !== "undefined") {
            SetPage(parsed.p)
        } else SetPage("gioithieu")
    }, [])

    return (
        <div className="container-fluid text-center">
            <CheckLoginAlready />
            <div>
                {Page === "gioithieu" ? <div>
                    <h3>Học tiếng anh giao tiếp thông qua việc đóng vai vào một trường hợp cụ thể.</h3>
                </div>
                    : Page === "thu-thap-thong-tin" ? <Thuthapthongtin socket={socket} message={message} setMessage={setMessage} />
                        : Page === "cua-hang-trai-cay-lv1" ? <Cuahangtraicay socket={socket} message={message} setMessage={setMessage} />
                            : Page === "cua-hang-rau-tuoi-lv1" ? <Lv1Cuahangtraicay socket={socket} message={message} setMessage={setMessage} />
                                : Page === "cua-hang-thit-tuoi-lv1" ? <Lv1Cuahangthitcay socket={socket} message={message} setMessage={setMessage} />
                                    : Page === "cua-hang-vat-dung-xe-dap-lv1" ? <Lv1Cuahangvatdungxedap socket={socket} message={message} setMessage={setMessage} />
                                        : Page === "cua-hang-vat-dung-gia-dung-lv1" ? <Lv1Cuahangdogiadung socket={socket} message={message} setMessage={setMessage} />
                                            : Page === "cua-hang-van-phong-pham-lv1" ? <Lv1Cuahangvanphongpham socket={socket} message={message} setMessage={setMessage} />
                                                : ""}

            </div>
        </div>


    )
}
export default Giaotiep