import Banner from "./Banner/Banner"
import FilterSec from "./FilterSec/FilterSec"
import ProductView from "./ProductView/ProductView"
export default function ContentSection() {
    return(
        <>
        <div className="contentSectionWrapper">
            <Banner/>
            <FilterSec/>
            <ProductView/>
        </div>
        </>
    )
}