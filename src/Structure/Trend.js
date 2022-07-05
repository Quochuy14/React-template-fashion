const trendProducts = [
    {
        img: "assets/img/trend/ht-1.jpg",
        name: "Chain bucket bag",
        price: "590.000 vnđ",
    },
    {
        img: "assets/img/trend/ht-2.jpg",
        name: "Pendant ear rings",
        price: "590.000 vnđ",
    },
    {
        img: "assets/img/trend/ht-3.jpg",
        name: "Cotton T Shirt",
        price: "590.000 vnđ",
    }
] 

const saleProducts =[
    {
        img: "assets/img/trend/bs-1.jpg",
        name: "Cotton T Shirt",
        price: "390.000 vnđ",
        priceSale: "590.000 vnđ",
    },
    {
        img: "assets/img/trend/bs-2.jpg",
        name: "Zip-pockets pebbled",
        price: "390.000 vnđ",
        priceSale: "590.000 vnđ",
    },
    {
        img: "assets/img/trend/bs-3.jpg",
        name: "Round leather bag",
        price: "390.000 vnđ",
        priceSale: "590.000 vnđ",
    },
]

const accessProduct=[
    {
        img: "assets/img/trend/f-1.jpg",
        name: "Bow wrap skirt",
        price: "590.000 vnđ",
    },
    {
        img: "assets/img/trend/f-2.jpg",
        name: "Metallic earrings legd",
        price: "590.000 vnđ",
    },
    {
        img: "assets/img/trend/f-3.jpg",
        name: "Flap crossbody bag",
        price: "590.000 vnđ",
    }
]

function Trend(){
    return(
        <section className="trend spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="trend__content">
                  <div className="section-title">
                    <h4>Xu hướng mới</h4>
                  </div>
                  {
                    trendProducts.map((product, index) => (
                         <div key={index} className="trend__item">
                            <div className="trend__item__pic">
                                <img src={product.img} alt={product.name} />
                            </div>
                            <div className="trend__item__text">
                                <h5>{product.name}</h5>
                                <div className="rating">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <div className="product__price">{product.price}</div>
                            </div>
                        </div>
                    ))
                  }
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="trend__content">
                  <div className="section-title">
                    <h4>Siêu giảm giá</h4>
                  </div>
                  {
                    saleProducts.map((product, index) => (
                         <div key={index} className="trend__item">
                            <div className="trend__item__pic">
                                <img src={product.img} alt={product.name} />
                            </div>
                            <div className="trend__item__text">
                                <h5>{product.name}</h5>
                                <div className="rating">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <div className="product__price">{product.price}<span>{product.priceSale}</span></div>
                            </div>
                        </div>
                    ))
                  }
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="trend__content">
                  <div className="section-title">
                    <h4>Phụ kiện</h4>
                  </div>
                  {
                    accessProduct.map((product, index) => (
                         <div key={index} className="trend__item">
                            <div className="trend__item__pic">
                                <img src={product.img} alt={product.name} />
                            </div>
                            <div className="trend__item__text">
                                <h5>{product.name}</h5>
                                <div className="rating">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <div className="product__price">{product.price}</div>
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


export default Trend;