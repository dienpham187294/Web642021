import React from "react";


function Home() {
    return (
        <div>
            <section id="hero" className="d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
                            <h1>Công nghệ 4.0</h1>
                            <h2>Ứng dụng công nghệ nhận diện giọng nói vào thực hành anh ngữ với các ưu điểm vượt trội</h2>
                            <div className="d-lg-flex">
                                <a href="#cta" className="btn-get-started scrollto">Đăng ký ngay</a>
                                <a href="https://www.youtube.com/watch?v=XTaPDVp7fOk" rel="noopener noreferrer" target="_blank" className="venobox btn-watch-video" data-vbtype="video" data-autoplay="true"> Xem Video <i className="icofont-play-alt-2"></i></a>
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
                        <h2>Về phương pháp thực hành tiếng anh hiệu quả</h2>
                    </div>

                    <div className="row content">
                        <div className="col-lg-6">
                            <p style={{ fontSize: "25px" }}>
                                <i>"Số lượng <b>thời gian thực hành</b> sẽ quyết định sự hiệu quả của quá trình học và sử dụng tiếng anh".</i>
                            </p>
                            <ul>
                                <li><i className="ri-check-double-line"></i> Tổng thời gian thực hành thực tế.</li>
                                <li><i className="ri-check-double-line"></i> Thực hành lâu dài và có ý nghĩa. </li>
                                <li><i className="ri-check-double-line"></i> Thực hành chuẩn xác về phát âm và lắng nghe.</li>
                            </ul>
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0">
                            <p style={{ fontSize: "20px" }}>
                                <i>Học sử dụng tiếng anh cũng như học lái xe đạp, việc đi tốt hay không phụ thuộc nhiều vào <b>thời gian thực sự ngồi trên xe đạp</b> để tập luyện
                                    hơn là thời gian ngồi lắng nghe về việc chiếc xe đạp hoạt động như thế nào. </i>
                            </p>
                            <a href="/#" className="btn-learn-more">Tìm hiểu thêm</a>
                        </div>
                    </div>

                </div>
            </section>
            <section id="why-us" className="why-us section-bg">
                <div className="container-fluid" data-aos="fade-up">

                    <div className="row">

                        <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">

                            <div className="content">
                                <h3>Lợi thế vượt trội với phương pháp: <br /> <strong>"Trò chơi nhập vai" ứng dụng công nghệ nhận diện giọng nói.</strong></h3>
                                {/* <p style={{ fontSize: "20px" }}>
                                    <b>"Trò chơi nhập vai"</b> là phương pháp độc đáo của Hệ thống thực hành anh ngữ EricPham. <br />
                                    Các học viên sẽ tham gia vào một trò chơi mà ở đó họ sẽ nhập vai một nhân vật với các nhiệm vụ cụ thể.
                                    Học viên sẽ được trải nghiệm giả lập như là mình đang ở trong một môi trường thực tế và cần ứng biến với các cách thức nhất định.
              </p> */}
                            </div>

                            <div className="accordion-list">
                                <ul>
                                    <li>
                                        <a data-toggle="collapse" className="collapse" href="#accordion-list-1"><span>01</span> Nâng cao thời gian thực hành lên 7-10 lần so với các lớp truyền thống <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                        <div id="accordion-list-1" className="collapse show" data-parent=".accordion-list">
                                            <p>
                                                Ở lớp học truyền thông các học viên phải chia sẻ thời gian thực hành với các bạn khác trong lớp, chưa kể phần lớn thơi gian là để nghe giáo viên nói hơn là tự thực hành.
                                                Với phương pháp của chúng tôi, mỗi học viên đều có một máy riêng và chỉ dành khoảng 10% thời lượng để tìm hiểu hoặc nghe giáo viên hướng dẫn cách thực hành.
                                                90% thời gian còn lại là dành cho các học viên thực hành với phương pháp trò chơi nhập vai.
                    </p>
                                        </div>
                                    </li>

                                    <li>
                                        <a data-toggle="collapse" href="#accordion-list-2" className="collapsed"><span>02</span>Tăng cao sự thú vị với hệ thống các trò chơi nhập vai trực tuyến. <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                        <div id="accordion-list-2" className="collapse" data-parent=".accordion-list">
                                            <p>
                                                <b>"Trò chơi nhập vai"</b> là phương pháp độc đáo của Hệ thống thực hành anh ngữ EricPham. <br />
                                    Các học viên sẽ tham gia vào một trò chơi mà ở đó họ sẽ nhập vai một nhân vật với các nhiệm vụ cụ thể.
                                    Học viên sẽ được trải nghiệm giả lập như là mình đang ở trong một môi trường thực tế và cần ứng biến với các cách thức nhất định.<br />
                                                Chơi với nhau qua các trò chơi nhập vai trực tuyến giúp nâng cao tính cạnh tranh và sự thú vị.
                                                Học viên dễ dàng hơn để tiếp cận và duy trì việc thực hành so với các phương án như "tự nói chuyện trước gương","săn tây",...
                    </p>
                                        </div>
                                    </li>

                                    <li>
                                        <a data-toggle="collapse" href="#accordion-list-3" className="collapsed"><span>03</span> Chơi cùng nhau mọi lúc mọi nơi qua hệ thống online <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                        <div id="accordion-list-3" className="collapse" data-parent=".accordion-list">
                                            <p>
                                                Đăng nhập vào hệ thống mọi lúc mọi nơi để cùng chơi với những bạn khác đang trực tuyến hoặc rủ bạn bè, người quen cùng chơi và thi đua.
                    </p>
                                        </div>
                                    </li>
                                    <li>
                                        <a data-toggle="collapse" href="#accordion-list-4" className="collapsed"><span>04</span> Không còn áp lực hỏi bài từ thầy cô giáo <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                        <div id="accordion-list-4" className="collapse" data-parent=".accordion-list">
                                            <p>
                                                Không còn áp lực mỗi khi giáo viên hỏi và phải trả lời.
                                                <br />
                                                Luôn thoải mái, tự do để thực hành theo cách của bạn mà không lo bị ai phán xét hay dò hỏi.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <a data-toggle="collapse" href="#accordion-list-5" className="collapsed"><span>05</span> Nói và nghe tiếng anh chuẩn 100% với công nghệ <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                        <div id="accordion-list-5" className="collapse" data-parent=".accordion-list">
                                            <p>
                                                Áp dụng công nghệ nhận diện giọng nói giúp chuẩn hóa việc phát âm 100%. Các bạn sau khi thành thạo được trò chơi - bằng cách ra lệnh bằng giọng nói - thì yên tâm các bạn đã phát âm khá chính xác rổi nhé.
                    </p>
                                        </div>
                                    </li>
                                    <li>
                                        <a data-toggle="collapse" href="#accordion-list-6" className="collapsed"><span>06</span>Sử dụng được ngay lập tức từ buổi học đầu tiên <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                        <div id="accordion-list-6" className="collapse" data-parent=".accordion-list">
                                            <p>
                                                Với việc thiết kế việc thực hành là các "trò chơi" nên học viên sẽ khá dễ dàng để nắm bắt và thực hành.
                                                Thực tế cho thấy, dường như tất cả mọi người đề có thể hoàn thành trò chơi ngay từ lần đầu tiên.
                                                Tuy nhiên để thật sự thành thạo thì các bạn phải chơi thêm nhiều lần nữa nhé.
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
                                <div className="icon"><i className="bx bxl-dribbble"></i></div>
                                <h4><a href="/#">Tài khoản tự thực hành</a></h4>
                                <p>Chỉ với 2.000 VNĐ/ngày, bạn đã có một tài khoản.
                                    <br />
                                    Tạo phòng chơi và thực hành thôi.
                                </p>
                            </div>
                        </div>

                        <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                            <div className="icon-box">
                                <div className="icon"><i className="bx bx-file"></i></div>
                                <h4><a href="/#">Lớp học online qua internet</a></h4>
                                <p>Nếu bạn muốn được trò chuyện và học hỏi nhiều câu chuyện thú vị hơn từ giáo viện và các học viên khác nhưng lại không có thời gian đến trung tâm. <br />
                                 Hãy đăng ký lớp học online</p>
                            </div>
                        </div>

                        <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
                            <div className="icon-box">
                                <div className="icon"><i className="bx bx-tachometer"></i></div>
                                <h4><a href="/#">Lớp học offline tại trung tâm</a></h4>
                                <p>Bạn cảm thấy muốn được thực hành cùng bạn bè tại môi trường thực tế. Hãy đăng ký lớp học tại trung tâm của chúng tôi.</p>
                            </div>
                        </div>

                        <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
                            <div className="icon-box">
                                <div className="icon"><i className="bx bx-layer"></i></div>
                                <h4><a href="/#">Chia sẻ bản quyền phần mềm cho các tổ chức</a></h4>
                                <p>Chúng tôi luôn sẵn lòng được hợp tác cùng với các tổ chức, trung tâm. Hãy liên hệ với chúng tôi để hợp tác.</p>
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
                            <h3>30 ngày thực hành online miễn phí!</h3>
                            <br />
                            <p> Đăng ký ngay để trải nghiệm thực hành online với trò chơi nhập vai ứng dụng công nghệ nhận diện giọng nói.</p>
                            <p> Hiệu quả tức thì, nghe và nói, ngay buổi học đầu tiên.</p>
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
                        <p>Sau đây là chi tiết bảng giá dịch vụ mà chúng tôi cung cấp</p>
                    </div>

                    <div className="row">

                        {/* <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                            <div className="box">
                                <h3>Miễn phí 30 ngày đầu</h3>
                                <h4>0 <sup>VNĐ</sup><span>/ 30 ngày</span></h4>
                                <ul>
                                    <li><i className="bx bx-check"></i> Toàn bộ kho trò chơi nhập vai</li>
                                    <li><i className="bx bx-check"></i> Toàn bộ video hướng dẫn</li>
                                    <li><i className="bx bx-check"></i> Chơi online cùng mọi người mọi lúc, mọi nơi</li>
                                    <li><i className="bx bx-check"></i> Bảng thống kê</li>
                                    <li className="na"><i className="bx bx-x"></i> <span>Hướng dẫn của giáo viên</span></li>
                                    <li className="na"><i className="bx bx-x"></i> <span>Trang thiết bị - Máy tính</span></li>
                                </ul>
                                <a href="/#" className="buy-btn">Đăng ký</a>
                            </div>
                        </div> */}

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
                                <a href="/#" className="buy-btn">Đăng ký</a>
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
                                <a href="/#" className="buy-btn">Đăng ký</a>
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
                                <a href="/#" className="buy-btn">Đăng ký</a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            {/* <!-- End Pricing Section --> */}
        </div>
    );
}

export default Home;

