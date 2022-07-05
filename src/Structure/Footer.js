function Footer(){
    return(
        <div className="footer">
            <div className="container">
                <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-7">
                    <div className="footer__about">
                        <div className="footer__logo">
                            <a href="#"><img src="assets/img/logo.png" alt="" /></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-5">
                    <div className="footer__widget">
                        <h6>Cửa hàng</h6>
                        <ul>
                            <li><a href="#">Giới thiệu</a></li>
                            <li><a href="#">Bài viết</a></li>
                            <li><a href="#">Thời trang</a></li>
                            <li><a href="#">FAX</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4">
                    <div className="footer__widget">
                        <h6>Sản phẩm</h6>
                        <ul>
                            <li><a href="#">Thời trang nam</a></li>
                            <li><a href="#">Thời trang nữ</a></li>
                            <li><a href="#">Phụ kiện</a></li>
                            <li><a href="#">Trang sức</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-md-8 col-sm-8">
                    <div className="footer__newslatter">
                        <h6>Phản hồi</h6>
                        <form action="#">
                            <input type="text" placeholder="Email" />
                            <button type="submit" className="site-btn">Gửi</button>
                        </form>
                        <div className="footer__social">
                            <a href="#"><i className="fa fa-facebook"></i></a>
                            <a href="#"><i className="fa fa-twitter"></i></a>
                            <a href="#"><i className="fa fa-youtube-play"></i></a>
                            <a href="#"><i className="fa fa-instagram"></i></a>
                            <a href="#"><i className="fa fa-pinterest"></i></a>
                        </div>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col-lg-12">
                    <div className="footer__copyright__text">
                        <p>
                            Copyright 2022 All rights Quochuy <i className="fa fa-heart" aria-hidden="true"></i>
                        </p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;