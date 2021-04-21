import React, { useState, useEffect } from "react"
import { checkCookie, delettCookie, getCookie } from '../../../helpers/functionCookies';
import "./MainPage.css"
function MainPage({ socket, setPageLogin }) {
    const [Page_MainPageLogin, SetPage_MainPageLogin] = useState("1");
    const [arrOfUser, SetArrOfUser] = useState([]);
    useEffect(() => {
        if (checkCookie("usernameEricpham")) {
            SetArrOfUser(JSON.parse(getCookie("usernameEricpham")));
            SetPage_MainPageLogin(2);
        }
    }, [])
    function _FnLogout() {
        delettCookie("usernameEricpham");
        delettCookie("username");
        setPageLogin(true);
    }

    return (
        <div id="main_Loginmainpage">
            {Page_MainPageLogin === 2
                ? <div> <h5>Thông tin chi tiết:</h5>
                    <br />
                    <p><b>Tên: </b>{arrOfUser[0].name}</p>
                    <p><b>Số điện thoại: </b>{arrOfUser[0].phone}</p>
                    <p><b>Email: </b>{arrOfUser[0].email}</p>
                    <p><b>Số ngày sử dụng còn lại: </b>{Math.floor((arrOfUser[0].time - Date.now()) / (24 * 60 * 60 * 10)) / 100}  ngày</p>
                    <br /></div>
                : ""}


            <a href="/?m=gia-han-tai-khoan">
                <input type="button" className="btn btn-outline-primary col-6 mr-2" value="Gia hạn tài khoản" />
            </a>

            <br />
            <br />
            <input type="button" className="btn btn-outline-primary" onClick={() => _FnLogout()} value="Đăng xuất" />
            <br /> <br />
            {getCookie("username") === "Văn Điện" ? <a href="/?m=admin">Admin</a> : ""}
            <br />
        </div >
    )
}

export default MainPage




