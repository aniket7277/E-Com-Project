import bannerImg from "../../../../assets/img/bannerShoes.svg"
export default function Banner() {
    return(
        <>
        <div className="bannerWrapper">
            <div className="BannerLeft">
                <div className="BannerHeadline">
                    <h1>Adidas Men Running Sneakers</h1>
                </div>
                <div className="BannerDetails">
                    <p>Performance and design. Taken right to the edge.</p>
                </div>
                <div className="BannerButton">
                    <span>Shop Now</span>
                </div>
            </div>
            <div className="BannerRight">
                <img src={bannerImg} alt="Banner Image" />
            </div>
        </div>
        </>
    )
}