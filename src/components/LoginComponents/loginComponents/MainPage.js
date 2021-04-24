import React, { useState, useEffect } from "react"
import { checkCookie, delettCookie, getCookie } from '../../../helpers/functionCookies';
import "./MainPage.css"
function MainPage({ socket, setPageLogin }) {
    const [arrOfUser, SetArrOfUser] = useState([]);
    useEffect(() => {
        if (checkCookie("username")) {
            setTimeout(() => { socket.emit("Login", ["dangkytaikhoan", socket.id]); }, 1000);
        }
        socket.on("getinfodangkytaikhoan", (data) => {
            data.forEach(e => {
                if (e.username === getCookie("username")) {
                    let tempArr = [];
                    tempArr.push(e);
                    SetArrOfUser(tempArr);
                }
            });
        })
    }, [socket])
    function _FnLogout() {
        delettCookie("username");
        setPageLogin(true);
    }

    return (
        <div id="main_Loginmainpage">
            {arrOfUser.length > 0
                ? <div> <h5>Thông tin chi tiết:</h5>
                    <br />
                    <p><b>Tên: </b>{arrOfUser[0].username}</p>
                    <p><b>Số điện thoại: </b>{arrOfUser[0].phone}</p>
                    <p><b>Email: </b>{arrOfUser[0].email}</p>
                    <p><b>Số ngày sử dụng còn lại: </b>{Math.floor((arrOfUser[0].time - Date.now()) / (24 * 60 * 60 * 10)) / 100}  ngày</p>
                    <br />
                </div>
                : "Xin chờ giây lát"}
            <h5>Khóa thực hành tiếng anh miễn phí cho thành viên mới.</h5>
            <a href="/?m=dang-ky-khoa-mien-phi">Đăng ký tại đây!</a>
            <br />
            <br />

            <a href="/?m=gia-han-tai-khoan">
                <input type="button" className="btn btn-outline-primary col-6 mr-2" value="Gia hạn tài khoản" />
            </a>
            <input type="button" className="btn btn-outline-primary" onClick={() => _FnLogout()} value="Đăng xuất" />
            <br />

            <br />
            {getCookie("username") === "0918284482" ? <a href="/?m=admin">Admin</a> : ""}
            <br />
        </div >
    )
}

export default MainPage




