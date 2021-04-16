import React, { useEffect, useState } from "react"
import { delettCookie } from "../../helpers/functionCookies";
import './Dangkytaikhoan.css';
let arrInfoDangkytaikhoan = [];
function Dangkytaikhoan({ socket }) {
    const [PhoneMessage, SetPhoneMessage] = useState("Hãy nhập số điện thoại bạn đang dùng để có thể nhận mã code gia hạn!");
    const [AllCheckMessage, SetAllCheckMessage] = useState("Vui lòng nhập đầy đủ thông tin!");
    const [StatusDangkyDisable, SetStatusDangkyDisable] = useState(true);
    const [PhoneNumber, SetPhoneNumber] = useState();
    const [Name, SetName] = useState("");
    const [Email, SetEmail] = useState("");
    const [Password, SetPassword] = useState("");
    const [Ip, SetIp] = useState("");
    useEffect(() => {
        delettCookie("usernameEricpham");
        delettCookie("username");
        setTimeout(() => { document.getElementById("getdiachiip").click(); }, 1000)
    }, [])
    useEffect(() => {
        setTimeout(() => { socket.emit("Login", ["dangkytaikhoan", socket.id]); }, 1000);
        socket.on("getinfodangkytaikhoan", (data) => { arrInfoDangkytaikhoan = data; })
    }, [socket])
    function _fn_checkPhoneNumber() {
        if (document.getElementById("ID_phonenumber").value !== "null") {
            let phonenumber = document.getElementById("ID_phonenumber").value;
            if (phonenumber.length > 11 || phonenumber.length < 10) {
                SetPhoneMessage("Số phone không hợp lệ");
            } else {
                let messagePhone = "Số điện thoại có thể sử dụng được!";
                arrInfoDangkytaikhoan.forEach(e => {
                    if (e.username === phonenumber.toString()) {
                        messagePhone = "Số điện thoại đã được sử dụng. Vui lòng nhập số điện thoại khác."
                    }
                })
                SetPhoneMessage(messagePhone);
                SetPhoneNumber(document.getElementById("ID_phonenumber").value);
                SetIp(document.getElementById("ID_IP").value)
            }
        } else {
            SetPhoneMessage("Vui lòng nhập số điện thoại đang sử dụng!");
        }
    }
    function _fn_checkAllInfomation() {
        if (PhoneMessage === "Số điện thoại có thể sử dụng được!") {
            let messageCheckAll = "";

            if (document.getElementById("ID_email").value.length < 6) {
                messageCheckAll += " Vui lòng nhập tên tối thiểu 6 ký tự."
            } else { SetEmail(document.getElementById("ID_email").value) }

            if (document.getElementById("ID_name").value.length < 6) {
                messageCheckAll += " Vui lòng nhập email."
            } else { SetName(document.getElementById("ID_name").value) }

            if (document.getElementById("ID_passwordlan1").value.length < 6) {
                messageCheckAll += " Vui lòng nhập password tối thiểu 6 kí tự."
            }
            if (document.getElementById("ID_passwordlan1").value !== document.getElementById("ID_passwordlan2").value) {
                messageCheckAll += " Password nhập lần 2 không đồng nhất."
            } else { SetPassword(document.getElementById("ID_passwordlan1").value) }

            if (messageCheckAll === "") {
                SetAllCheckMessage("Tài khoản hợp lệ!")
                SetStatusDangkyDisable(false)
            } else {
                SetAllCheckMessage(messageCheckAll)
            }
        } else {
            SetAllCheckMessage("Vui lòng kiểm tra số điện thoại đang sử dụng!")
        }
    }
    function _FN_Dangkyngay() {
        socket.emit("Login", ["DangkyInfoSubmit", PhoneNumber, Name, Email, Password, Ip]);
        document.getElementById("ID_login_btn").click();
    }
    return (
        <div id="main_dangkytaikhoan">
            {StatusDangkyDisable
                ? <div>
                    <form className="mt-6 text-center">
                        <div className="form-group">
                            <input
                                type="number"
                                className="form-control"
                                id="ID_phonenumber" aria-describedby="emailHelp" placeholder="Nhập số điện thoại đang sử dụng để nhận mã code."
                            // onChange={() => setUsernameCheck(document.getElementById("ID_phonenumber").value)}
                            />
                            <input onClick={() => _fn_checkPhoneNumber()} type="button" className="btn btn-sm btn-outline-primary mt-1" value="Kiểm tra" />
                            <small id="emailHelp" className="form-text text-muted">{PhoneMessage}</small>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" id="ID_email" placeholder="Nhập email"
                            // onChange={() => setPassWordCheck(document.getElementById("exampleInputPassword1").value)}
                            />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" id="ID_name" placeholder="Nhập tên của bạn"
                            // onChange={() => setPassWordCheck(document.getElementById("exampleInputPassword1").value)}
                            />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" id="ID_passwordlan1" placeholder="Nhập password lần 1"
                            // onChange={() => setPassWordCheck(document.getElementById("exampleInputPassword1").value)}
                            />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" id="ID_passwordlan2" placeholder="Nhập lại password lần 2"
                            // onChange={() => setPassWordCheck(document.getElementById("exampleInputPassword1").value)}
                            />
                        </div>
                        <input type="button" onClick={() => _fn_checkAllInfomation()} className="btn btn-sm btn-outline-primary mt-1" value="Kiểm tra" />
                        <small className="form-text text-muted">{AllCheckMessage}</small>
                        <br /><br />
                        {/* <button disabled={StatusDangkyDisable} type="button" className="btn btn-primary">Đăng ký</button> */}

                        <div style={{ display: "none" }} className="form-group">
                            <input type="text" className="form-control" id="ID_IP" placeholder="Địa chỉ Ip"
                            // onChange={() => setPassWordCheck(document.getElementById("exampleInputPassword1").value)}
                            />
                        </div>
                    </form>
                </div>
                : <div>
                    <p><b>Số điện thoại: </b> {PhoneNumber} </p>
                    <p><b>Tên: </b> {Name} </p>
                    <p><b>Email: </b> {Email} </p>
                    <p><b>Thời gian sử dụng: </b> 5 ngày.</p>
                    <br />
                    <p><b>Thêm 25 ngày trải nghiệm miễn phí: </b>
                        <br />
                    Hệ thống sẽ gửi qua SMS qua số điện thoại bạn đã đăng ký một mã code.
                    Nhập mã code trong mục thông tin chi tiết để nhận thêm 25 ngày sử dụng sản phẩm miễn phí.</p>
                    <br /> <br />
                    <button onClick={() => _FN_Dangkyngay()} type="button" className="btn btn-primary">Đăng ký</button>
                    <br /> <br />
                    <button onClick={() => SetAllCheckMessage(true)} type="button" className="btn btn-primary">Trở lại bảng thông tin</button>
                </div>}
        </div>
    )
}

export default Dangkytaikhoan

