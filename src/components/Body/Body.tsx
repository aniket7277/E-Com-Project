import ContentSection from "./ContentSection/ContentSection"
import SidePanel from "./SidePanel/SidePanel"
export default function Body() {
    return(
        <>
        <div className="bodyWrapper">
            <SidePanel/>
            <ContentSection/>
        </div>
        </>
    )
}