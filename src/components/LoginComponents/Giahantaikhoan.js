import React from "react";
import './Dangkytaikhoan.css';
function Giahantaikhoan() {

    return (
        <div id="ID_Main_Giahantaikhoan">
            <h5>Giá gia hạn tài khoản là 59.000 VNĐ/Tháng</h5>
            <br />
            Để gia hạn tài khoản các bạn vui lòng chuyển khoản vào:
            <br />
            Số tài khoản:
            <h4>0441000737314</h4>
            Chủ tài khoản: Phạm Văn Điện - VCB CN Tân Bình
            <br />
            Hoặc chuyển khoản vào ví điện tử momo theo số điện thoại:
            <h4>0918284482</h4>
            <img alt="chuyentien" src={require("./yeucauchuyentienmomo.jpg")} width="50%" />
            <br />
            Chủ tài khoản: Phạm Văn Điện
            <br />
            Cú pháp để chuyển khoản là:
            <h4>[Tên tài khoản] Gia han tai khoan.</h4>
            Ví dụ: username01 Gia han tai khoan
            <br />
            Sau đó hãy nhắn tin vào Page của EricPham theo cú pháp như trên.
            <br />  <br />
            <a rel="noopener noreferrer" href="https://www.facebook.com/Tr%C3%B2-ch%C6%A1i-th%E1%BB%B1c-h%C3%A0nh-ti%E1%BA%BFng-anh-_-EricPham-106237278271751" target="_blank">Page Facebook - Click vào đây</a>
        </div>
    );
}

export default Giahantaikhoan;

