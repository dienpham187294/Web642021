import React, { useState, useEffect } from "react";
import Cuahangtraicay from "./giaotiepcaptoc/lv1cuahangtraicay/Cuahangtraicay"
import Lv1Cuahangtraicay from "./giaotiepcaptoc/lv1cuahangrautuoi/lv1cuahangrautuoi"
import Lv1Cuahangthitcay from "./giaotiepcaptoc/lv1cuahangthittuoi/lv1cuahangthittuoi"
import Lv1Cuahangvatdungxedap from "./giaotiepcaptoc/lv1cuahangvatdungxedap/lv1cuahangvatdungxedap"
import Lv1Cuahangdogiadung from "./giaotiepcaptoc/lv1cuahangvandogiadung/lv1MainJS"
import Lv1Cuahangvanphongpham from "./giaotiepcaptoc/lv1cuahangvanphongpham/lv1MainJS"
import Lv1Cuahangdongu from "./giaotiepcaptoc/lv1cuahangdongu/lv1MainJS"
import Lv1Cuahangdotienich from "./giaotiepcaptoc/lv1cuahangdotienich/lv1MainJS"
import Lv1Cuahangdophongkhach from "./giaotiepcaptoc/lv1cuahangphongkhach/lv1MainJS"
import Lv1Cuahangdophongbep from "./giaotiepcaptoc/lv1cuahangdophongbep/lv1MainJS"
import Lv1Cuahangdophongan from "./giaotiepcaptoc/lv1cuahangdophongan/lv1MainJS"
import Lv1Cuahangdophongngu from "./giaotiepcaptoc/lv1cuahangdophongngu/lv1MainJS"
import Lv1Cuahangdophongtam from "./giaotiepcaptoc/lv1cuahangdophongtam/lv1MainJS"
import Lv1Cuahangdotreem from "./giaotiepcaptoc/lv1cuahangdotreem/lv1MainJS"
import Lv1Cuahanghaisan from "./giaotiepcaptoc/lv1cuahanghaisan/lv1MainJS"
import Lv1Cuahangquanaongoaitroi from "./giaotiepcaptoc/lv1cuahangquanaongoaitroi/lv1MainJS"
import Lv1Cuahangcaycoi from "./giaotiepcaptoc/lv1cuahangcaycoi/lv1MainJS"
import Lv1Cuahangnhaccu from "./giaotiepcaptoc/lv1cuahangnhaccu/lv1MainJS"
import Lv1Cuahangdoannhanh from "./giaotiepcaptoc/lv1cuahangdoannhanh/lv1MainJS"
import Lv1Cuahangchimcanh from "./giaotiepcaptoc/lv1cuahangchimcanh/lv1MainJS"
import Lv1Sieuthi from "./giaotiepcaptoc/lv1sieuthi/lv1MainJS"
import Lv1Cuahangvatdungtrongnha from "./giaotiepcaptoc/lv1cuahangvatdungtrongnha/lv1MainJS"
import Lv1Cuahangquanaohangngay from "./giaotiepcaptoc/lv1cuahangquanaohangngay/lv1MainJS"
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
                                                : Page === "cua-hang-do-ngu-lv1" ? <Lv1Cuahangdongu socket={socket} message={message} setMessage={setMessage} />
                                                    : Page === "cua-hang-do-tien-ich-lv1" ? <Lv1Cuahangdotienich socket={socket} message={message} setMessage={setMessage} />
                                                        : Page === "cua-hang-do-phong-khach-lv1" ? <Lv1Cuahangdophongkhach socket={socket} message={message} setMessage={setMessage} />
                                                            : Page === "cua-hang-do-phong-bep-lv1" ? <Lv1Cuahangdophongbep socket={socket} message={message} setMessage={setMessage} />
                                                                : Page === "cua-hang-do-phong-an-lv1" ? <Lv1Cuahangdophongan socket={socket} message={message} setMessage={setMessage} />
                                                                    : Page === "cua-hang-do-phong-ngu-lv1" ? <Lv1Cuahangdophongngu socket={socket} message={message} setMessage={setMessage} />
                                                                        : Page === "cua-hang-do-phong-tam-lv1" ? <Lv1Cuahangdophongtam socket={socket} message={message} setMessage={setMessage} />
                                                                            : Page === "cua-hang-do-tre-em-lv1" ? <Lv1Cuahangdotreem socket={socket} message={message} setMessage={setMessage} />
                                                                                : Page === "cua-hang-hai-san-lv1" ? <Lv1Cuahanghaisan socket={socket} message={message} setMessage={setMessage} />
                                                                                    : Page === "cua-hang-quan-ao-ngoai-troi-lv1" ? <Lv1Cuahangquanaongoaitroi socket={socket} message={message} setMessage={setMessage} />
                                                                                        : Page === "cua-hang-cay-coi-lv1" ? <Lv1Cuahangcaycoi socket={socket} message={message} setMessage={setMessage} />
                                                                                            : Page === "cua-hang-nhac-cu-lv1" ? <Lv1Cuahangnhaccu socket={socket} message={message} setMessage={setMessage} />
                                                                                                : Page === "cua-hang-do-an-nhanh-lv1" ? <Lv1Cuahangdoannhanh socket={socket} message={message} setMessage={setMessage} />
                                                                                                    : Page === "cua-hang-chim-canh-lv1" ? <Lv1Cuahangchimcanh socket={socket} message={message} setMessage={setMessage} />
                                                                                                        : Page === "sieu-thi-lv1" ? <Lv1Sieuthi socket={socket} message={message} setMessage={setMessage} />
                                                                                                            : Page === "cua-hang-vat-dung-trong-nha-lv1" ? <Lv1Cuahangvatdungtrongnha socket={socket} message={message} setMessage={setMessage} />
                                                                                                                : Page === "cua-hang-quan-ao-hang-ngay-lv1" ? <Lv1Cuahangquanaohangngay socket={socket} message={message} setMessage={setMessage} />
                                                                                                                    : ""}

            </div>
        </div>


    )
}
export default Giaotiep