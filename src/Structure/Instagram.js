const Links = [
    {
        img: "assets/img/instagram/insta-1.jpg",
        nameShop: "quochuy14" 
    },
    {
        img: "assets/img/instagram/insta-2.jpg",
        nameShop: "quochuy14"
    },
    {
        img: "assets/img/instagram/insta-3.jpg",
        nameShop: "quochuy14" 
    },
    {
        img: "assets/img/instagram/insta-4.jpg",
        nameShop: "quochuy14"
    },
    {
        img: "assets/img/instagram/insta-5.jpg",
        nameShop: "quochuy14" 
    },
    {
        img: "assets/img/instagram/insta-6.jpg",
        nameShop: "quochuy14"
    },
] 

function Instagram(){
    return(
        <div className="instagram">
            <div className="container-fluid">
                <div className="row">
                    {
                        Links.map((link, index)=> (
                            <div key={index} className="col-lg-2 col-md-4 col-sm-4 p-0">
                                <div className="instagram__item set-bg" data-setbg={link.img}>
                                    <div className="instagram__text">
                                        <i className="fa fa-instagram"></i>
                                        <a href="#">{link.nameShop}</a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Instagram;