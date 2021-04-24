import React, { useState, useEffect } from "react";
import queryString from "query-string";
import Giaotiepcoban800cau from "./TainguyenMienphi/Giaotiep800cau/Giaotiepcoban800cauMainJS"
function TainguyenMienphi({ socket, message, setMessage }) {
    const [Page, SetPage] = useState("gioithieu");
    useEffect(() => {
        let parsed = queryString.parse(window.location.search);
        if (typeof (parsed.p) !== "undefined") {
            SetPage(parsed.p)
        } else SetPage("gioi-thieu")
    }, [])

    return (
        <div className="container-fluid text-center">

            <div>
                {Page === "gioi-thieu" ? <div>
                    <h3>Toàn bộ các tài nguyên trò chơi miễn phí áp dụng công nghệ vào thực hành tiếng anh.</h3>
                </div>
                    : Page === "800-cau-giao-tiep-co-ban" ? <Giaotiepcoban800cau socket={socket} message={message} setMessage={setMessage} />

                        : ""}

            </div>
        </div>


    )
}
export default TainguyenMienphi