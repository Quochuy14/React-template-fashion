const Banners = [
    {
        title: "Bộ sưu tập",
        content:"Mùa hè bãi biển 2022",
        detail: "Xem chi tiết"
    },
    {
        title: "Bộ sưu tập",
        content:"Mùa thu vàng",
        detail: "Xem chi tiết"
    },
    {
        title: "Bộ sưu tập",
        content:"Mùa đông 2022",
        detail: "Xem chi tiết"
    },
    {
        title: "Bộ sưu tập",
        content:"Sắc xuân ",
        detail: "Xem chi tiết"
    }
]

function Banner(){
    return(
        <section className="banner set-bg" data-setbg="assets/img/banner/banner-1.jpg">
             <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-8 m-auto">
                        <div className="banner__slider owl-carousel">
                            {
                                Banners.map((banner,index) =>(
                                    <div key={index} className="banner__item">
                                        <div className="banner__text">
                                        <span>{banner.title}</span>
                                        <h1>{banner.content}</h1>
                                        <a href="#">{banner.detail}</a>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;