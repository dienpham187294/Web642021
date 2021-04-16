import React, { useState, useEffect } from "react";
import { checkCookie, setCookie } from '../../../helpers/functionCookies';
import "./LoginPage.css"

let arrInfoDangkytaikhoan = [];
function LoginPage({ socket, setPageLogin }) {
    const [Message_dangnhap, SetMessage_dangnhap] = useState("Nhập số điện thoại và mật khẩu")
    useEffect(() => {
        if (checkCookie("usernameEricpham")) {
            setPageLogin(false)
        } else {
            setTimeout(() => { socket.emit("Login", ["dangkytaikhoan", socket.id]); }, 1000);
            socket.on("getinfodangkytaikhoan", (data) => { arrInfoDangkytaikhoan = data; })
        }
    }, [socket, setPageLogin])
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
                <div style={{ width: "100%" }}>
                    <form className="mt-5 text-center">
                        <div className="form-group">
                            <input
                                type="number"
                                className="form-control"
                                id="ID_login_username" aria-describedby="emailHelp" placeholder="Nhập số điện thoại"
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
            </div>
        </div>
    )
}
export default LoginPage

