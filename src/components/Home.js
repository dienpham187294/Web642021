import React from "react";


function Home({ SetSrcYoutube }) {
    return (
        <div>
            <section id="hero" className="d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
                            <h1>Trò chơi nhập vai + Công nghệ 4.0</h1>
                            <h2>Thực hành tiếng anh qua trò chơi nhập vai kết hợp công nghệ nhận diện giọng nói.</h2>
                            {/* <h2>Không áp lực! Phát âm và nghe chuẩn 100%!</h2> */}
                            <div className="d-lg-flex">
                                <a href="/?m=dang-ky-tai-khoan" className="btn-get-started scrollto">Đăng ký ngay</a>
                                <u onClick={() => { SetSrcYoutube("https://www.youtube.com/embed/XTaPDVp7fOk") }} rel="noopener noreferrer" className="venobox btn-watch-video" style={{ cursor: "pointer" }} > Xem Video <i className="icofont-play-alt-2"></i></u>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
                            <img src="assets/img/hero-img.png" className="img-fluid animated" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section id="about" className="about">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h3> <i>Không học nhiều, không đam mê!</i></h3>
                        <h2>Vẫn sử dụng tốt tiếng anh!</h2>
                    </div>

                    <div className="row content">
                        <div className="col-lg-6">
                            <p style={{ fontSize: "23px" }}>
                                <i>Tập sử dụng tiếng anh cũng như tập lái xe, việc đi tốt hay không phụ thuộc nhiều vào <b>thời gian thực sự ngồi trên xe</b> để tập luyện
                                    hơn là thời gian ngồi lắng nghe về việc chiếc xe hoạt động như thế nào. </i>
                            </p>


                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0">
                            <ul>
                                <li><i className="ri-check-double-line"></i>Xe là công cụ để di chuyển. Ngôn ngữ là <b>công cụ</b> dùng để truyền đạt thông tin.</li>
                                <li><i className="ri-check-double-line"></i>"Trăm hay không bằng tay quen".</li>
                                {/* <li><i className="ri-check-double-line"></i>Hãy sử dụng .</li> */}
                                {/* <li><i className="ri-check-double-line"></i>“Học với hành phải đi đôi. Học mà không hành thì vô ích".</li> */}
                            </ul>
                            <p style={{ fontSize: "26px", marginTop: "5px", textAlign:"center" }}> <b>"Số giờ thực tế sử dụng"</b> là mấu chốt để thông thạo công cụ. </p>
                            {/* <a href="/#" className="btn-learn-more">Tìm hiểu thêm</a> */}
                        </div>
                    </div>

                </div>
            </section>
            <section id="why-us" className="why-us section-bg">
                <div className="container-fluid" data-aos="fade-up">

                    <div className="row">

                        <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">

                            <div className="content">
                                <h3><strong>"Trò chơi nhập vai" </strong> sử dụng tiếng anh có chủ đích.</h3>
                            </div>

                            <div className="accordion-list">
                                <ul>
                                    <li>
                                        <a data-toggle="collapse" className="collapse" href="#accordion-list-1"><span>01</span> Đi học 90 phút nói được dăm ba câu!  <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                        <div id="accordion-list-1" className="collapse show" data-parent=".accordion-list">
                                            <p>
                                                <b>Không có thời gian thực hành:</b> Một lớp học 6-10 người  + 1 giáo viên. 60-70% thời gian là giáo viên nói. 30% thời gian còn lại chia đều cho học viên. Mỗi bạn sẽ không còn bao nhiều cơ hội thực dùng.
                                             </p>
                                        </div>
                                    </li>

                                    <li>
                                        <a data-toggle="collapse" href="#accordion-list-2" className="collapsed"><span>02</span>Nhàm chán và thiếu mục đích. <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                        <div id="accordion-list-2" className="collapse" data-parent=".accordion-list">
                                            <p>
                                                <b>Thiếu mục đích</b> là việc học mà bản thân cũng không biết học để áp dụng vô chỗ nào, dùng làm gì.</p>
                                            <p> Thiếu mục đích sẽ gây ra <b>nhàm chán</b>, khó duy trì được lâu và quên đi nhanh chóng. </p>
                                            <p>"Mỗi ngày học 5 từ mới. Đến ngày 365, bạn sẽ nhớ được 10 từ là 5 từ của ngày hôm nay và 5 từ học ngày hôm qua." </p>

                                        </div>
                                    </li>

                                    <li>
                                        <a data-toggle="collapse" href="#accordion-list-3" className="collapsed"><span>03</span> Học lan man, thiếu liên kết! <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                        <div id="accordion-list-3" className="collapse" data-parent=".accordion-list">
                                            <p>
                                                <b>Thiếu liên kết</b> là việc học 10 bài là 10 chủ đề, 10 nhóm từ mới, 10 cấu trúc ngữ pháp. Cái trước không bổ trợ, nâng cao cho cái sau. Học bài mới lại quên bài cũ!</p>
                                            <p>Thay vì như chơi thể thao mỗi ngày học một kĩ thuật mới trên <b> cơ sở sử dụng kĩ thuật cũ</b> thì
                                                xem ra giống như học <b>10 môn thể thao khác nhau trong 10 bài</b> hơn. Hệ quả là học <b>10 môn</b> nhưng<b> không chơi được môn nào.</b></p>

                                        </div>
                                    </li>
                                    <li>
                                        <a data-toggle="collapse" href="#accordion-list-4" className="collapsed"><span>04</span> Áp lực phải trả lời những điều mình không thích hoặc không biết! <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                        <div id="accordion-list-4" className="collapse" data-parent=".accordion-list">
                                            <p>
                                                <b>Áp lực tâm lý: </b> khi bị gặn hỏi những điều mình không thích hoặc đơn giản vì không biết nói gì, sợ nói sai trước mặt người khác!
                                            </p>
                                            <p>Áp lực thường gây mệt mỏi và dễ bỏ cuộc, đặc biệt ở người lớn và không có nhiều thời gian.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <a data-toggle="collapse" href="#accordion-list-5" className="collapsed"><span>05</span> Nói không chuẩn! Nghe không được! <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                        <div id="accordion-list-5" className="collapse" data-parent=".accordion-list">
                                            <p>
                                                <b>Nói không chuẩn</b> là tình trạng chung khi học trên giấy là nhiều hơn so với thực hành, rèn luyện. Nói không chuẩn sẽ góp phần làm cho việc nghe trở nên khó khăn hơn.
                    </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img" style={{ backgroundImage: `url("assets/img/why-us.png")` }} data-aos="zoom-in" data-aos-delay="150">&nbsp;</div>
                    </div>

                </div>
            </section>
            <section id="services" className="services section-bg">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Dịch vụ của chúng tôi</h2>
                        <p>
                            Chúng tôi cung cấp ứng dụng thực hành tiếng anh cho cá nhân và tổ chức.
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                            <div className="icon-box">
                                <div className="icon"><i className="icofont-wallet"></i></div>
                                <h4><a href="/?m=dang-ky-tai-khoan">Tài khoản</a></h4>
                                <p>Chỉ với 2.000 VNĐ/ngày.
                                    <br />
                                   Thoải mái sử dụng các công cụ thực hành hiệu quả.
                                </p>
                            </div>
                        </div>

                        <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                            <div className="icon-box">
                                <div className="icon"><i className="icofont-web"></i></div>
                                <h4><a href="/#">Lớp học online</a></h4>
                                <p>Trò chuyện và học hỏi nhiều câu chuyện thú vị hơn từ giáo viên và các học viên.</p>
                            </div>
                        </div>

                        <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
                            <div className="icon-box">
                                <div className="icon"><i className="icofont-learn"></i></div>
                                <h4><a href="/#">Lớp học offline</a></h4>
                                <p>Thực hành với trang thiết bị sẵn sàng, thoải mái.</p>
                            </div>
                        </div>

                        <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
                            <div className="icon-box">
                                <div className="icon"><i className="icofont-world"></i></div>
                                <h4><a href="/#">Gói DN</a></h4>
                                <p>Các gói thực hành chuyên biệt theo yêu cầu cho tổ chức.</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
            {/* Call to action */}
            <section id="cta" className="cta">
                <div className="container" data-aos="zoom-in">

                    <div className="row">
                        <div className="col-lg-9 text-center text-lg-left">
                            <h3>Bắt đầu với 30 ngày miễn phí!</h3>
                            <br />
                            <p> Đăng ký ngay để trải nghiệm thực hành với trò chơi nhập vai ứng dụng công nghệ nhận diện giọng nói.</p>
                        </div>
                        <div className="col-lg-3 cta-btn-container text-center">
                            <a className="cta-btn align-middle" href="/?m=dang-ky-tai-khoan">Đăng ký ngay</a>
                        </div>
                    </div>

                </div>
            </section>
            {/* End Call to action */}

            {/* <!-- ======= Pricing Section ======= --> */}
            <section id="pricing" className="pricing">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Bảng giá dịch vụ</h2>
                        {/* <p>Sau đây là chi tiết bảng giá dịch vụ mà chúng tôi cung cấp</p> */}
                    </div>

                    <div className="row">

                        <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="200">
                            <div className="box featured">
                                <h3>Gia hạn tài khoản</h3>
                                <h4>59.000 <sup>VNĐ</sup><span>/ 30 ngày</span></h4>
                                <ul>
                                    <li><i className="bx bx-check"></i> Toàn bộ kho trò chơi nhập vai</li>
                                    <li><i className="bx bx-check"></i> Toàn bộ video hướng dẫn</li>
                                    <li><i className="bx bx-check"></i> Chơi online cùng mọi người mọi lúc, mọi nơi</li>
                                    <li><i className="bx bx-check"></i> Bảng thống kê kết quả thực hành</li>
                                    <li className="na"><i className="bx bx-x"></i> <span>Hướng dẫn của giáo viên</span></li>
                                    <li className="na"><i className="bx bx-x"></i> <span>Trang thiết bị: Máy tính- Máy lạnh - Nước uống - Chỗ ngồi</span></li>
                                </ul>
                                <a href="/?m=gia-han-tai-khoan" className="buy-btn">Gia hạn</a>
                            </div>
                        </div>

                        <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="300">
                            <div className="box">
                                <h3>Lớp học online</h3>
                                <h4>449.000 <sup>VNĐ</sup><span>8 buổi/ 30 ngày</span></h4>
                                <ul>
                                    <li><i className="bx bx-check"></i> Toàn bộ kho trò chơi nhập vai</li>
                                    <li><i className="bx bx-check"></i> Toàn bộ video hướng dẫn</li>
                                    <li><i className="bx bx-check"></i> Chơi online cùng mọi người mọi lúc, mọi nơi</li>
                                    <li><i className="bx bx-check"></i> Bảng thống kê kết quả thực hành</li>
                                    <li><i className="bx bx-check"></i> Hướng dẫn của giáo viên</li>
                                    <li className="na"><i className="bx bx-x"></i> <span>Trang thiết bị: Máy tính- Máy lạnh - Nước uống - Chỗ ngồi</span></li>
                                </ul>
                                <a href="/#" className="buy-btn">Chưa mở</a>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="300">
                            <div className="box">
                                <h3>Lớp học offline</h3>
                                <h4>899.000 <sup>VNĐ</sup><span>8 buổi/ 30 ngày</span></h4>
                                <ul>
                                    <li><i className="bx bx-check"></i> Toàn bộ kho trò chơi nhập vai</li>
                                    <li><i className="bx bx-check"></i> Toàn bộ video hướng dẫn</li>
                                    <li><i className="bx bx-check"></i> Chơi online cùng mọi người mọi lúc, mọi nơi</li>
                                    <li><i className="bx bx-check"></i> Bảng thống kê kết quả thực hành</li>
                                    <li><i className="bx bx-check"></i> Hướng dẫn của giáo viên</li>
                                    <li><i className="bx bx-check"></i> Trang thiết bị: Máy tính- Máy lạnh - Nước uống - Chỗ ngồi</li>
                                </ul>
                                <a href="/#" className="buy-btn">Chưa mở</a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            {/* <!-- End Pricing Section --> */}
        </div >
    );
}

export default Home;

