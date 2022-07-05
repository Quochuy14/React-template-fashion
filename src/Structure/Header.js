const optionHeader = ["Trang chủ", "TT Nam", "TT Nữ", "Xu hướng", "Khuyến mãi", "Liên hệ"]

function Header(){
    return(
          <header className="header">
          <div className="container-fluid">
            <div className="row header__dis">
              <div className="col-xl-2 col-lg-2">
                <div className="header__logo">
                  <a href="#"><img src="assets/img/logo.png" alt="" /></a>
                </div>
              </div>
              <div className="col-xl-7 col-lg-8">
                <nav className="header__menu">
                  <ul >
                    {
                        optionHeader.map((option,index) => ( <li key={index}><a href="#">{option}</a></li>))
                    }
                  </ul>
                </nav>
              </div>
              <div className="col-lg-3">
                <div className="header__right">
                  <div className="header__right__auth">
                    <a href="#">Đăng nhập</a>
                    <a href="#">Đăng ký</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="canvas__open">
              <i className="fa fa-bars"></i>
            </div>
          </div>
        </header>
    )
}

export default Header;
