const leftCategories =[
    {
        img: "assets/img/categories/category-1.jpg",
        title: "Thời trang Nữ",
        decr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel orci massa. Donec sollicitudin sapien ac velit dictum tincidunt.",
        href: "Xem chi tiết"
    }
]


const rightCategories =[
    {
        img: "assets/img/categories/category-2.jpg",
        item: "358 items",
        title: "Thời trang Nam",
        href: "Xem chi tiết"
    },
    {
        img: "assets/img/categories/category-3.jpg",
        item: "273 items",
        title: "Phụ kiện",
        href: "Xem chi tiết"
    },
    {
        img: "assets/img/categories/category-4.jpg",
        item: "159 items",
        title: "Chăm sóc sắc đẹp",
        href: "Xem chi tiết"
    },
    {
        img: "assets/img/categories/category-5.jpg",
        item: "792 items",
        title: "Thời trang mùa hè",
        href: "Xem chi tiết"
    }
]


function Category(){
    return(
        <section className="categories">
            <div className="container-fluid">
                <div className="row">
                    {
                        leftCategories.map((category, index) => (
                            <div key={index} className="col-lg-6 p-0">
                                <div className="categories__item categories__large__item set-bg" data-setbg={category.img}>
                                    <div className="categories__text">
                                        <h1>{category.title}</h1>
                                        <p>{category.decr}</p>
                                        <a href="#">{category.href}</a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                <div className="col-lg-6">
                    <div className="row">
                        {
                            rightCategories.map((category, index) => (
                                <div key={index} className="col-lg-6 col-md-6 col-sm-6 p-0">
                                    <div className="categories__item set-bg" data-setbg={category.img}>
                                        <div className="categories__text">
                                            <h4>{category.title}</h4>
                                            <p>{category.item}</p>
                                            <a href="#">{category.href}</a>
                                        </div>
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

export default Category;