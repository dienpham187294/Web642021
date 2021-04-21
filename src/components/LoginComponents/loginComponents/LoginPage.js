import React, { useState, useEffect } from "react";
import { checkCookie, setCookie } from '../../../helpers/functionCookies';
import "./LoginPage.css"

let arrInfoDangkytaikhoan = [];
function LoginPage({ socket, setPageLogin }) {
    const [Message_dangnhap, SetMessage_dangnhap] = useState("Nhập số tên đăng nhập và mật khẩu")
    const [ArrInfo_Status, Set_ArrInfo_Status] = useState(false)
    useEffect(() => {
        if (checkCookie("usernameEricpham")) {
            setPageLogin(false)
        } else {
            setTimeout(() => { socket.emit("Login", ["dangkytaikhoan", socket.id]); }, 1000);
        }
        socket.on("getinfodangkytaikhoan", (data) => { arrInfoDangkytaikhoan = data; Set_ArrInfo_Status(true) })
    }, [socket, setPageLogin, Set_ArrInfo_Status])
    function checkLogin() {
        let checkStatus = "Không tồn tại tài khoản này.";
        let arrTouse = [];
        let username = document.getElementById("ID_login_username").value.toString();
        let password = document.getElementById("ID_login_password").value;
        arrInfoDangkytaikhoan.forEach(e => {
            if (e.username.toString() === username) {
                checkStatus = "";
                if (e.password !== password) {
                    checkStatus = "Mật khẩu không đúng."
                } else { arrTouse.push(e) }
            }

        })
        if (checkStatus === "") {
            setPageLogin(false);
            setCookie("usernameEricpham", JSON.stringify(arrTouse), 3)
            setCookie("username", arrTouse[0].name, 3)
        } else { SetMessage_dangnhap(checkStatus) }
    }
    return (
        <div className="row">
            <div className="col-lg-6 md-12 sm-12 text-center">
                <img src={require("./logo 05.png")} alt="logo" width="60%" />
            </div>
            <div className="col-lg-6 md-12 sm-12" id="Main_loginPage">
                {ArrInfo_Status ? <div style={{ width: "100%" }}>
                    <form className="mt-5 text-center">
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                id="ID_login_username" aria-describedby="emailHelp" placeholder="Nhập tên đăng nhập"
                            />

                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" id="ID_login_password" placeholder="Nhập password"
                            />
                        </div>
                        <button
                            onClick={() => checkLogin()}
                            type="button" className="btn btn-primary"
                        >Đăng nhập</button>
                        <small className="form-text text-muted">{Message_dangnhap}</small>
                    </form>
                </div>
                    : <div>
                        "Xin chờ giây lát!"
                        <br/>
                        <a href="/?m=dangnhap" className="btn-get-started scrollto">Bấm vào đây nếu quá lâu.</a>
                    </div>}
            </div>
        </div>
    )
}
export default LoginPage

