import React, { useState, useEffect } from "react";
import { getCookie, checkCookie } from '../helpers/functionCookies'


function Header({ socket }) {
    const [UserStatus, SetUserStatus] = useState("Trial");

    useEffect(() => {
        if (checkCookie("username")) {
            setTimeout(() => { socket.emit("Login", ["dangkytaikhoan", socket.id]); }, 200);
        }
        socket.on("getinfodangkytaikhoan", (data) => {
            data.forEach(e => {
                if (e.username === getCookie("username")) {
                    if (e.status.indexOf("Trial") === -1)
                        SetUserStatus(e.status);
                }
            });
        })
    }, [socket])

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/?m=home" id="ID_home">EricPham</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
                    aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/?m=giaotrinh" id="navbarScrollingDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Thực hành giao tiếp hiệu quả </a>

                            <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                <li><a className="dropdown-item" href="/?m=giaotiep&p=thu-thap-thong-tin">Khách sạn - bài 1 </a>
                                </li>
                                <li><a className="dropdown-item" href="/?m=giaotiep&p=cua-hang-trai-cay-lv1">Cửa hàng trái cây - bài 1</a>
                                </li>
                                <li><a className="dropdown-item" href="/?m=giaotiep&p=cua-hang-rau-tuoi-lv1">Cửa hàng rau tươi - bài 1 </a>
                                </li>
                                <li><a className="dropdown-item" href="/?m=giaotiep&p=cua-hang-thit-tuoi-lv1">Cửa hàng thịt tươi - bài 1 </a>
                                </li>
                                <li><a className={UserStatus === "Trial" ? "dropdown-item disabled" : "dropdown-item"} href="/?m=giaotiep&p=cua-hang-vat-dung-xe-dap-lv1">Cửa hàng vật dụng xe đạp - bài 1 {UserStatus === "Trial" ? <i className="icofont-lock"></i> : ""} </a>
                                </li>
                                <li><a className={UserStatus === "Trial" ? "dropdown-item disabled" : "dropdown-item"} href="/?m=giaotiep&p=cua-hang-vat-dung-gia-dung-lv1">Cửa hàng đồ gia dụng - bài 1 {UserStatus === "Trial" ? <i className="icofont-lock"></i> : ""}</a>
                                </li>
                                <li><a className={UserStatus === "Trial" ? "dropdown-item disabled" : "dropdown-item"} href="/?m=giaotiep&p=cua-hang-van-phong-pham-lv1">Cửa hàng văn phòng phẩm - bài 1 {UserStatus === "Trial" ? <i className="icofont-lock"></i> : ""}</a>
                                </li>
                                <li><a className={UserStatus === "Trial" ? "dropdown-item disabled" : "dropdown-item"} href="/?m=giaotiep&p=cua-hang-do-ngu-lv1">Cửa hàng đồ ngủ - bài 1 {UserStatus === "Trial" ? <i className="icofont-lock"></i> : ""}</a>                     </li>
                                <li><a className={UserStatus === "Trial" ? "dropdown-item disabled" : "dropdown-item"} href="/?m=giaotiep&p=cua-hang-do-tien-ich-lv1">Cửa hàng đồ tiện ích - bài 1 {UserStatus === "Trial" ? <i className="icofont-lock"></i> : ""}</a>                     </li>
                                <li><a className={UserStatus === "Trial" ? "dropdown-item disabled" : "dropdown-item"} href="/?m=giaotiep&p=cua-hang-do-phong-khach-lv1">Cửa hàng cung cấp vật dụng phòng khách - bài 1 {UserStatus === "Trial" ? <i className="icofont-lock"></i> : ""}</a>                     </li>
                                <li><a className={UserStatus === "Trial" ? "dropdown-item disabled" : "dropdown-item"} href="/?m=giaotiep&p=cua-hang-do-phong-bep-lv1">Cửa hàng cung cấp vật dụng phòng bếp - bài 1 {UserStatus === "Trial" ? <i className="icofont-lock"></i> : ""}</a>                     </li>
                                <li><a className={UserStatus === "Trial" ? "dropdown-item disabled" : "dropdown-item"} href="/?m=giaotiep&p=cua-hang-do-phong-an-lv1">Cửa hàng cung cấp vật dụng phòng ăn - bài 1 {UserStatus === "Trial" ? <i className="icofont-lock"></i> : ""}</a>                     </li>
                                <li><a className={UserStatus === "Trial" ? "dropdown-item disabled" : "dropdown-item"} href="/?m=giaotiep&p=cua-hang-do-phong-ngu-lv1">Cửa hàng cung cấp vật dụng phòng ngủ - bài 1 {UserStatus === "Trial" ? <i className="icofont-lock"></i> : ""}</a>                     </li>
                                <li><a className={UserStatus === "Trial" ? "dropdown-item disabled" : "dropdown-item"} href="/?m=giaotiep&p=cua-hang-do-phong-tam-lv1">Cửa hàng cung cấp vật dụng phòng tắm - bài 1 {UserStatus === "Trial" ? <i className="icofont-lock"></i> : ""}</a>                     </li>
                                <li><a className={UserStatus === "Trial" ? "dropdown-item disabled" : "dropdown-item"} href="/?m=giaotiep&p=cua-hang-do-tre-em-lv1">Cửa hàng cung cấp đồ cho trẻ em - bài 1 {UserStatus === "Trial" ? <i className="icofont-lock"></i> : ""}</a>                     </li>
                                <li><a className={UserStatus === "Trial" ? "dropdown-item disabled" : "dropdown-item"} href="/?m=giaotiep&p=cua-hang-hai-san-lv1">Cửa hàng cung cấp hải sản - bài 1 {UserStatus === "Trial" ? <i className="icofont-lock"></i> : ""}</a>                     </li>
                                <li><a className={UserStatus === "Trial" ? "dropdown-item disabled" : "dropdown-item"} href="/?m=giaotiep&p=cua-hang-quan-ao-ngoai-troi-lv1">Cửa hàng cung cấp quần áo ngoài trời - bài 1 {UserStatus === "Trial" ? <i className="icofont-lock"></i> : ""}</a>                     </li>
                                <li><a className={UserStatus === "Trial" ? "dropdown-item disabled" : "dropdown-item"} href="/?m=giaotiep&p=cua-hang-cay-coi-lv1">Cửa hàng bán cây và hoa giống - bài 1 {UserStatus === "Trial" ? <i className="icofont-lock"></i> : ""}</a>                     </li>
                                <li><a className={UserStatus === "Trial" ? "dropdown-item disabled" : "dropdown-item"} href="/?m=giaotiep&p=cua-hang-nhac-cu-lv1">Cửa hàng bán nhạc cụ - bài 1 {UserStatus === "Trial" ? <i className="icofont-lock"></i> : ""}</a>                     </li>
                                <li><a className={UserStatus === "Trial" ? "dropdown-item disabled" : "dropdown-item"} href="/?m=giaotiep&p=cua-hang-do-an-nhanh-lv1">Cửa hàng bán đồ ăn nhanh - bài 1 {UserStatus === "Trial" ? <i className="icofont-lock"></i> : ""}</a>                     </li>
                                <li><a className={UserStatus === "Trial" ? "dropdown-item disabled" : "dropdown-item"} href="/?m=giaotiep&p=cua-hang-chim-canh-lv1">Cửa hàng chim cảnh - bài 1 {UserStatus === "Trial" ? <i className="icofont-lock"></i> : ""}</a>                     </li>
                                <li><a className={UserStatus === "Trial" ? "dropdown-item disabled" : "dropdown-item"} href="/?m=giaotiep&p=sieu-thi-lv1">Siêu thị - bài 1 {UserStatus === "Trial" ? <i className="icofont-lock"></i> : ""}</a>                     </li>
                                <li><a className={UserStatus === "Trial" ? "dropdown-item disabled" : "dropdown-item"} href="/?m=giaotiep&p=cua-hang-vat-dung-trong-nha-lv1">Cửa hàng vật dụng trong nhà - bài 1 {UserStatus === "Trial" ? <i className="icofont-lock"></i> : ""}</a>                     </li>
                                <li><a className={UserStatus === "Trial" ? "dropdown-item disabled" : "dropdown-item"} href="/?m=giaotiep&p=cua-hang-quan-ao-hang-ngay-lv1">Cửa hàng quần áo hàng ngày - bài 1 {UserStatus === "Trial" ? <i className="icofont-lock"></i> : ""}</a>                     </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a className="dropdown-item" href="/?m=giaotiep&p=gioithieu">Giới thiệu phương pháp nhập vai.</a></li>
                            </ul>
                        </li>

                        {/* BeginBlog */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/?m=blog" id="navbarScrollingDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Blog </a>

                            <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">

                                <li><a className="dropdown-item" href="/?m=blog&p=khoa-hoc-mien-phi">Khóa thực hành tiếng anh miễn phí vì cộng đồng.</a>
                                </li>
                                <li><a className="dropdown-item" href="/?m=blog&p=ngon-ngu-gan-lien-muc-dich">Ngôn ngữ gắn liền mục đích là gì?</a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a className="dropdown-item" href="/?m=blog&p=gioi-thieu">Giới thiệu blog của EricPham.</a></li>
                            </ul>
                        </li>
                        {/* End Blog */}
                        {/* BeginTaiNguyenMienPhi */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/?m=tainguyen" id="navbarScrollingDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Tài nguyên miễn phí </a>

                            <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                <li><a className="dropdown-item" href="/?m=dang-ky-khoa-mien-phi">Đăng ký khóa thực hành online miễn phí vì cộng đồng.</a>
                                </li>
                                <li><a className="dropdown-item" href="/?m=tainguyen&p=800-cau-giao-tiep-co-ban">Khóa thực hành 800 câu giao tiếp cơ bản nhất.</a>
                                </li>
                                <li><a className="dropdown-item" href="/?m=tainguyen&p=ngon-ngu-gan-lien-muc-dich">Khóa thực hành từ vựng bằng hình ảnh.</a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a className="dropdown-item" href="/?m=tainguyen&p=gioi-thieu">Giới thiệu tài nguyên miễn phí.</a></li>
                            </ul>
                        </li>
                        {/* EndTaiNguyenMienPhi */}

                    </ul>
                    <form className="d-flex">
                        <a href="/?m=dangnhap" id="ID_login_btn" className="btn btn-outline-success">{checkCookie("username") ? "Thông tin tài khoản" : "Đăng nhập"}</a>
                        <a href="/?m=dang-ky-tai-khoan" className="btn">Đăng ký</a>
                    </form>
                </div>
            </div>
        </nav>
    )
}
export default Header



