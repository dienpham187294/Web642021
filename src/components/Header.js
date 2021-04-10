import React from "react";
import { checkCookie, getCookie } from '../helpers/functionCookies'
function Header() {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/?m=home">EricPham</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
                    aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                        {/* <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/?m=home">Trang chủ</a>
                        </li> */}
                        {/* <li className="nav-item">
                            <a className="nav-link" href="/?m=tuvung">Từ vựng</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/?m=doctruyen">Đọc truyện tranh</a>
                        </li> */}
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/?m=giaotrinh" id="navbarScrollingDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Giáo trình </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                <li><a className="dropdown-item" href="/?m=giaotrinh&p=1000-cau-co-ban-lam-quen">Làm quen 1000 câu giao tiếp
                      cơ bản nhất.</a>
                                </li>
                                <li><a className="dropdown-item" href="/?m=giaotrinh&p=1000-cau-co-ban-nghi-nho-1">Nghi nhớ cấp độ 1 1000 câu
                      giao tiếp cơ bản nhất.</a>
                                </li>
                                <li><a className="dropdown-item" href="/?m=giaotrinh&p=1000-cau-co-ban-nghi-nho-2">Nghi nhớ cấp độ 2 1000 câu
                      giao tiếp cơ bản nhất.</a>
                                </li>
                                <li><a className="dropdown-item" href="/?m=giaotrinh&p=1000-cau-co-ban-lang-nghe">Lắng nghe và lặp lại 1000
                      câu giao tiếp cơ bản nhất.</a>
                                </li>
                                <li><a className="dropdown-item" href="/?m=giaotrinh&p=3000-tu-vung-voi-hinhanh">3000 từ vựng cơ bản với hình
                      ảnh.</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a className="dropdown-item" href="/?m=giaotrinh&p=gioithieu">Giới thiệu.</a></li>
                            </ul>
                        </li> */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/?m=giaotrinh" id="navbarScrollingDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Thực hành giao tiếp hiệu quả </a>

                            <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                <li><a className="dropdown-item" href="/?m=giaotiep&p=thu-thap-thong-tin">Nhập vai tiếp tân khách sạn 1</a>
                                </li>
                                <li><a className="dropdown-item" href="/?m=giaotiep&p=cua-hang-trai-cay-lv1">Nhập vai nhân viên cửa hàng trái cây 1</a>
                                </li>
                                <li><a className="dropdown-item" href="/?m=giaotiep&p=cua-hang-rau-tuoi-lv1">Nhập vai nhân viên cửa hàng rau tươi 1</a>
                                </li>
                                <li><a className="dropdown-item" href="/?m=giaotiep&p=cua-hang-thit-tuoi-lv1">Nhập vai nhân viên cửa hàng thịt tươi 1</a>
                                </li>
                                <li><a className="dropdown-item" href="/?m=giaotiep&p=cua-hang-vat-dung-xe-dap-lv1">Nhập vai nhân viên cửa hàng vật dụng xe đạp 1</a>
                                </li>
                                <li><a className="dropdown-item" href="/?m=giaotiep&p=cua-hang-vat-dung-gia-dung-lv1">Nhập vai nhân viên cửa hàng đồ gia dụng 1</a>
                                </li>
                                <li><a className="dropdown-item" href="/?m=giaotiep&p=cua-hang-van-phong-pham-lv1">Nhập vai nhân viên cửa hàng văn phòng phẩm 1</a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a className="dropdown-item" href="/?m=giaotiep&p=gioithieu">Giới thiệu phương pháp nhập vai.</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <a href="/?m=dangnhap" className="btn btn-outline-success">{checkCookie("username") ? getCookie("username") : "Đăng nhập"}</a>
                    </form>
                </div>
            </div>
        </nav>
    )
}
export default Header



 // <header>
        //     <nav className="navbar navbar-expand-lg navbar-light bg-light">
        //         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        //             <span className="navbar-brand">EricPham</span>
        //             <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        //                 <li className="nav-item active">
        //                     <Link to={"/"}>
        //                         < span className="nav-link">Trang chủ <span className="sr-only">(current)</span></span>
        //                     </Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link to={"/tuvung"}>
        //                         <span className="nav-link">Từ vựng</span>
        //                     </Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link to={"/doctruyen"}>
        //                         <span className="nav-link">Đọc truyện</span>
        //                     </Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link to={"/giaotrinh&p=gioithieu"}>
        //                         <span className="nav-link">Giáo trình</span>
        //                     </Link>
        //                 </li>
        //             </ul>
        //             <form className="form-inline my-2 my-lg-0 ml-5">
        //                 {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" /> */}
        //                 <Link to={"/dangnhap"}>
        //                     <button className="btn btn-outline-success my-2 my-sm-0" type="submit">{checkCookie("username") ? getCookie("username") : "Login"}</button>
        //                 </Link>
        //             </form>
        //         </div>
        //     </nav>
        // </header >

           // <nav className="navbar navbar-expand-lg navbar-light bg-light">
        //     <div className="container-fluid">
        //         <Link to={"/"}>
        //             <i className="navbar-brand" >EricPham</i>
        //         </Link>
        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/#navbarScroll"
        //             aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarScroll">
        //             <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
        //                 <li className="nav-item">
        //                     <Link to={"/"}>
        //                         <i className="nav-link active" aria-current="page" >Trang chủ</i>
        //                     </Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link to={"/doctruyen"}>
        //                         <i className="nav-link" onClick={()=>SetUpdatePage(P=>P+1)} href="/?m=tuvung">Từ vựng</i>
        //                     </Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link to={"/doctruyen"}>
        //                         <i className="nav-link" onClick={()=>SetUpdatePage(P=>P+1)} href="/?m=doctruyen">Đọc truyện tranh</i>
        //                     </Link>
        //                 </li>
        //                 {/* GIAO TRINH SUU TAM */}
        //                 <li className="nav-item dropdown">
        //                     <i className="nav-link dropdown-toggle"  id="navbarScrollingDropdown" role="button"
        //                         data-bs-toggle="dropdown" aria-expanded="false">
        //                         Giáo trình</i>
        //                     <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
        //                         <li>  <Link to={"/giaotrinh&p=1000-cau-co-ban-lam-quen"}>
        //                             <i className="dropdown-item" >Làm quen 1000 câu giao tiếp cơ bản nhất.</i> </Link>
        //                         </li>
        //                         <li>
        //                             <Link to={"/giaotrinh&p=1000-cau-co-ban-nghi-nho-1"}>
        //                                 <i className="dropdown-item" >Nghi nhớ cấp độ 1 1000 câu giao tiếp cơ bản nhất.</i></Link>
        //                         </li>
        //                         <li>
        //                             <Link to={"/giaotrinh&p=1000-cau-co-ban-nghi-nho-2"}>
        //                                 <i className="dropdown-item" >Nghi nhớ cấp độ 2 1000 câu
        //               giao tiếp cơ bản nhất.</i></Link>
        //                         </li>
        //                         <li>
        //                             <Link to={"/giaotrinh&p=1000-cau-co-ban-lang-nghe"}>
        //                                 <i className="dropdown-item" >Lắng nghe và lặp lại 1000
        //               câu giao tiếp cơ bản nhất.</i>
        //                             </Link>
        //                         </li>
        //                         <li>
        //                             <Link to={"/giaotrinh&p=3000-tu-vung-voi-hinhanh"}>
        //                                 <i className="dropdown-item" >3000 từ vựng cơ bản với hình
        //               ảnh.</i> </Link>
        //                         </li>
        //                         <li>
        //                             <hr className="dropdown-divider" />
        //                         </li>
        //                         <li>
        //                             <Link to={"/giaotrinh&p=gioithieu"}>
        //                                 <i className="dropdown-item" >Giới thiệu.</i>
        //                             </Link>
        //                         </li>
        //                     </ul>
        //                 </li>
        //                 {/* GAME GIAO TIEP */}
        //                 <li className="nav-item dropdown">
        //                     <i className="nav-link dropdown-toggle"  id="navbarScrollingDropdown" role="button"
        //                         data-bs-toggle="dropdown" aria-expanded="false">
        //                         Học giao tiếp hiệu quả cấp tốc </i>
        //                     <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
        //                         <li>  <Link to={"/giaotiep&p=thu-thap-thong-tin"}>
        //                             <i className="dropdown-item" >Nhập vai tiếp tân.</i> </Link>
        //                         </li>
        //                         <li>  <Link to={"/giaotiep&p=cua-hang-trai-cay"} >
        //                             <i className="dropdown-item" >Nhập vai chủ cửa hàng trái cây.</i> </Link>
        //                         </li>

        //                         {/* <li>
        //                             <Link to={"/giaotrinh&p=1000-cau-co-ban-nghi-nho-1"}>
        //                                 <i className="dropdown-item" >Nghi nhớ cấp độ 1 1000 câu giao tiếp cơ bản nhất.</i></Link>
        //                         </li>
        //                         <li>
        //                             <Link to={"/giaotrinh&p=1000-cau-co-ban-nghi-nho-2"}>
        //                                 <i className="dropdown-item" >Nghi nhớ cấp độ 2 1000 câu
        //               giao tiếp cơ bản nhất.</i></Link>
        //                         </li>
        //                         <li>
        //                             <Link to={"/giaotrinh&p=1000-cau-co-ban-lang-nghe"}>
        //                                 <i className="dropdown-item" >Lắng nghe và lặp lại 1000
        //               câu giao tiếp cơ bản nhất.</i>
        //                             </Link>
        //                         </li> */}
        //                         {/* <li>
        //                             <Link to={"/giaotrinh&p=3000-tu-vung-voi-hinhanh"}>
        //                                 <i className="dropdown-item" >3000 từ vựng cơ bản với hình
        //               ảnh.</i> </Link>
        //                         </li> */}
        //                         <li>
        //                             <hr className="dropdown-divider" />
        //                         </li>
        //                         <li>
        //                             <Link to={"/giaotiep&p=gioithieu"}>
        //                                 <i className="dropdown-item" >Giới thiệu.</i>
        //                             </Link>
        //                         </li>
        //                     </ul>
        //                 </li>
        //                 {/* GAME GIAO TIEP */}
        //             </ul>
        //             <form className="d-flex">
        //                 <Link to={"/dangnhap"}>
        //                     <i  className="btn btn-outline-success"> </i>
        //                 </Link>
        //             </form>
        //         </div>
        //     </div>
        // </nav>