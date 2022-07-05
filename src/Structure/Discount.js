function Discount(){
    return(
         <section className="discount">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 p-0">
                <div className="discount__pic">
                  <img src="assets/img/discount.jpg" alt="" />
                </div>
              </div>
              <div className="col-lg-6 p-0">
                <div className="discount__text">
                  <div className="discount__text__title">
                    <span>Giảm giá</span>
                    <h2>Mùa hè 2022</h2>
                    <h4><span>Sale</span> 50%</h4>
                  </div>
                  <div className="discount__countdown" id="countdown-time">
                    <div className="countdown__item">
                      <span>2</span>
                      <p>Days</p>
                    </div>
                    <div className="countdown__item">
                      <span>18</span>
                      <p>Hour</p>
                    </div>
                    <div className="countdown__item">
                      <span>45</span>
                      <p>Min</p>
                    </div>
                    <div className="countdown__item">
                      <span>05</span>
                      <p>Sec</p>
                    </div>
                  </div>
                  <a href="#">Xem chi tiết</a>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}

export default Discount;