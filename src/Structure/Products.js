const Products = [
    {
        labelNew: "Mới nhất",
        labelSockout: null,
        img: "assets/img/product/product-1.jpg",
        name: "Blazer buutons tweed",
        priceCurent: "590.000 vnđ",
        priceSale: "690.000 vnđ"
    },
    {
        labelNew: null,
        labelSockout: null,
        img: "assets/img/product/product-2.jpg",
        name: "Flowy striped skirt",
        priceCurent: "490.000 vnđ",
        priceSale: null
    },
    {
        labelNew: null,
        labelSockout: "Hết hàng",
        img: "assets/img/product/product-3.jpg",
        name: "Cotton T-Shirt",
        priceCurent: "590.000 vnđ",
        priceSale: null
    },
    {
        labelNew: null,
        labelSockout: null,
        img: "assets/img/product/product-4.jpg",
        name: "Slim striped pocket",
        priceCurent: "590.000 vnđ",
        priceSale: null
    },
    {
        labelNew: null,
        labelSockout: "Hết hàng",
        img: "assets/img/product/product-5.jpg",
        name: "Fit micro corduroy",
        priceCurent: "590.000 vnđ",
        priceSale: null
    },
    {
        labelNew: null,
        labelSockout: null,
        img: "assets/img/product/product-6.jpg",
        name: "Tropical Kimono shirt",
        priceCurent: "490.000 vnđ",
        priceSale: null
    },
    {
        labelNew: null,
        labelSockout: null,
        img: "assets/img/product/product-7.jpg",
        name: "Contrasting sung lasses",
        priceCurent: "590.000 vnđ",
        priceSale: "750.000 vnđ"
    },
    {
        labelNew: null,
        labelSockout: null,
        img: "assets/img/product/product-8.jpg",
        name: "Water resistant backpack",
        priceCurent: "490.000 vnđ",
        priceSale: null
    }
]

function Product(){
    return(
        <section className="product spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4">
                        <div className="section-title">
                        <h4>Sản phẩm mới</h4>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-8">
                    </div>
                </div>
                <div className="row property__gallery">
                    {
                        Products.map((product, index) => (
                            <div key={index} className="col-lg-3 col-md-4 col-sm-6 mix">
                                <div className="product__item">
                                    <div className="product__item__pic set-bg" data-setbg={product.img}>
                                        {product.labelNew!=null ? <div className="label new">{product.labelNew}</div> : <div></div>}
                                        {product.labelSockout!=null ? <div className="label stockout">{product.labelSockout}</div> : <div></div>}
                                        <ul className="product__hover">
                                            <li><a href={product.img} className="image-popup"><span className="arrow_expand"></span></a></li>
                                            <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                                            <li><a href="#"><span className="icon_bag_alt"></span></a></li>
                                        </ul>
                                    </div>
                                    <div className="product__item__text">
                                        <h5><a href="#">{product.name}</a></h5>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="product__price">{product.priceCurent}<span>{product.priceSale}</span></div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Product;