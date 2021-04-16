import React from "react";


function Footer() {
    return (
        <footer id="footer">
            {/* <div className="footer-newsletter">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <h4>Join Our Newsletter</h4>
                            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                            <form action="" method="post">
                                <input type="email" name="email" /><input type="submit" value="Subscribe" />
                            </form>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="footer-top">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-4 col-md-6 footer-contact">
                            <h3>EricPham</h3>
                            <p>
                                27 Thiên Hộ Dương  <br />
                                        TP Hồ Chí Minh <br />
                                            Việt Nam  <br /> <br />
                                <strong>Phone:</strong> +84 918 284482<br />
                                <strong>Email:</strong> dienpham187294@gmail.com<br />
                            </p>
                        </div>

                        {/* <div className="col-lg-4 col-md-6 footer-links">
                            <h4>Chuyển mục nhanh</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i> <a href="/#">Home</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="/#about">About us</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="/#services">Services</a></li>
                            </ul>
                        </div> */}

                        <div className="col-lg-4 col-md-6 footer-links">
                            <h4>Dịch vụ của chúng tôi</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i> <a href="/#">Cung cấp các khóa thực luyện tiếng anh online</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="/#">Hệ thống trung tâm thực hành anh ngữ EricPham</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="/#">Chia sẻ công nghệ với các trung tâm tiếng anh</a></li>
                                {/* <li><i className="bx bx-chevron-right"></i> <a href="/#">Marketing</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="/#">Graphic Design</a></li> */}
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-6 footer-links">
                            <h4>Kênh mạng xã hội</h4>
                            <p>Tìm hiểu thêm và liên lạc với chúng tôi thông qua mạng xã hội.</p>
                            <div className="social-links mt-3">
                                {/* <a href="/#" className="twitter"><i className="bx bxl-twitter"></i></a> */}
                                <a href="/#" className="facebook"><i className="bx bxl-facebook"></i></a>
                                {/* <a href="/#" className="instagram"><i className="bx bxl-instagram"></i></a>
                                <a href="/#" className="google-plus"><i className="bx bxl-skype"></i></a>
                                <a href="/#" className="linkedin"><i className="bx bxl-linkedin"></i></a> */}
                            </div>
                        </div>

                    </div>
                </div>
                <br /> <br /> <br /> <br />
            </div>
        </footer >
    )
}
export default Footer