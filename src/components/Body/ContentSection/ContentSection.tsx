import Banner from "./Banner/Banner"
import FilterSec from "./FilterSec/FilterSec"
export default function ContentSection() {
    return(
        <>
        <div className="contentSectionWrapper">
            <Banner/>
            <FilterSec/>
        </div>
        </>
    )
}