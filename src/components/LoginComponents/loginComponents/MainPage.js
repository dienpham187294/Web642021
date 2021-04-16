import React, { useState, useEffect } from "react"
import { delettCookie, getCookie } from '../../../helpers/functionCookies';
import "./MainPage.css"
let arrOfUser = []
function MainPage({ socket, setPageLogin }) {
    const [Page_MainPageLogin, SetPage_MainPageLogin] = useState("1");
    useEffect(() => {
        arrOfUser = JSON.parse(getCookie("usernameEricpham"));
        SetPage_MainPageLogin(2);
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
            <form className="form-row">
                <input type="text" className="form-control col-6" placeholder="Nhập mã code" />
                <input type="button" className="btn btn-outline-primary col-2 ml-2" value="Nhập mã" />
            </form>

            <br />
            <input type="button" className="btn btn-outline-primary" onClick={() => _FnLogout()} value="Đăng xuất" />
            <br />
            <br />
            {/* <input className="btn btn-outline-primary" value="Xem thống kê kết quả" /> */}
        </div >
    )
}

export default MainPage




