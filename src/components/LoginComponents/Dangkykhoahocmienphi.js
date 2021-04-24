import React, { useState, useEffect } from "react";
import { checkCookie, getCookie } from "../../helpers/functionCookies";
import './Dangkytaikhoan.css';
let timeGap = Date.now();
function Dangkykhoahocmienphi({ socket }) {
    const [Page_DangkykhoahocMienphi, SetPage_DangkykhoahocMienphi] = useState(1);
    const [Data_LichHoc, SetData_LichHoc] = useState([]);
    const [LichHocPick, SetLichHocPick] = useState("");
    useEffect(() => {
        if (checkCookie("username")) {
            SetPage_DangkykhoahocMienphi(2);
        }
    }, []);
    useEffect(() => {
        setTimeout(() => {
            socket.emit("Login", ["DangkyLichHocInfo", socket.id])
        }, 500)
        socket.on("DangkyLichHocInfo", (data) => {
            SetData_LichHoc(data);
        })
    }, [socket]);
    function FN_PickClass() {
        if (Date.now() - timeGap > 500 && LichHocPick !== "") {
            timeGap = Date.now();
            socket.emit("Login", ["DangKyLopHoc_Pickclass", LichHocPick, getCookie("username"), socket.id])
        }
        socket.on("DangKyLopHoc_Pickclass", data => {
            SetPage_DangkykhoahocMienphi(3);
            socket.emit("admin", ["codangkykhoahocmienphi"])
        })
    }
    return (
        <div id="ID_Main_Dangkykhoahocmienphi">
            <h5>Đăng ký khóa thực hành tiếng anh miễn phí!</h5>
            {Page_DangkykhoahocMienphi === 1 ?
                <div>
                    <h5>Bước 1</h5>
                    <a href="/?m=dangnhap">
                        <input type="button" className="btn btn-outline-primary col-6 mr-2" value="Đăng nhập" />
                    </a>
                    <a href="/?m=dang-ky-tai-khoan">
                        <input type="button" className="btn btn-outline-primary col-6 mr-2" value="Đăng ký" />
                    </a>
                </div>
                : Page_DangkykhoahocMienphi === 2 ?
                    <div>
                        <h3>Chọn lịch học!</h3>
                        <br />
                        {FN_LichHoc(Data_LichHoc, SetLichHocPick, LichHocPick)}
                        <br />
                        <input className="btn btn-outline-primary mt-1" type="button" value="Chọn" onClick={() => FN_PickClass()} />
                    </div>
                    : Page_DangkykhoahocMienphi === 3 ?
                        <div>
                            <br />  <br />  <br />  <br />

                            <h2>Bạn đã đăng ký thành công.</h2>
                            Chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất.
                            <br />  <br />  <br />  <br />
                        </div>
                        : ""}
            <br />
                Lưu ý: đây là khóa thực hành online thông qua trò chơi nhập vai ứng dụng công nghệ nhận diện giọng nói.
                Các bạn cần có: <b> Máy tính bàn, laptop hoặc máy tính bảng chạy hệ điều hành Window hoặc Android </b>để sử dụng.

            <br />
            Khi đủ số lượng đăng ký tối thiểu <b>5 người cho một lớp</b> chúng tôi sẽ liên hệ với bạn qua <b> số điện thoại hoặc email</b> để thông báo lịch học. Xin cảm ơn.
            <br />
            Nếu có thắc mắc hoặc cần được trợ giúp, liên hệ với chúng tôi!
            <br />
            <a rel="noopener noreferrer" href="https://www.facebook.com/Tr%C3%B2-ch%C6%A1i-th%E1%BB%B1c-h%C3%A0nh-ti%E1%BA%BFng-anh-_-EricPham-106237278271751" target="_blank">Page Facebook - Click vào đây</a>
        </div>
    );
}

export default Dangkykhoahocmienphi;


function FN_LichHoc(Data_LichHoc, SetLichHocPick, LichHocPick) {
    if (Data_LichHoc.length === 0) {
        return "Chờ trong giây lát."
    }
    return <table className="table">
        <thead>
            <td>Mã lớp học</td>
            <td>Trạng thái</td>
            <td>Thời gian</td>
        </thead>
        <tbody>{Data_LichHoc.map((e, index) => e.status !== "inactive" ?
            <tr key={index} onClick={() => SetLichHocPick(e.name)}
                style={{ backgroundColor: LichHocPick === e.name ? "yellow" : "transparent" }}>
                <td>{e.name}</td>
                <td>{e.status}</td>
                <td>{e.time}</td>

            </tr> : "")}</tbody> </table>
}


