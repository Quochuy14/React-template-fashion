const Products = [
    {
        icon: "fa fa-car",
        title:"Free Shipping",
        decre:"Tất cả sản phẩm"
    },
    {
        icon: "fa fa-money",
        title:"Hoàn 100% số tiền",
        decre:"Nếu sản phẩm kém chất lượng"
    },
    {
        icon: "fa fa-support",
        title:"Hỗ trợ online 24/7",
        decre:"Hỗ trợ tận tâm"
    },
    {
        icon: "fa fa-headphones",
        title:"Thanh toán an toàn",
        decre:"100% bảo mật thanh toán"
    }
]
function Services(){
    return(
        <section className="services spad">
            <div className="container">
                <div className="row">
                    {
                        Products.map((product, index) => (
                             <div key={index} className="col-lg-3 col-md-4 col-sm-6">
                                <div className="services__item">
                                    <i className={product.icon}></i>
                                    <h6>{product.title}</h6>
                                    <p>{product.decre}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Services;