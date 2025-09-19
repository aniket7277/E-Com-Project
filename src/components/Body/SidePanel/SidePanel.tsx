import Brand from "./Brand/Brand"
import HotDeals from "./HotDeals/HotDeals"
import More from "./More/More"
import Prices from "./Prices/Prices"
import Color from "./Color/Color"
export default function SidePanel() {
    return(
        <>
        <div className="sidePanelWrapper">
            <HotDeals/>
            <Prices/>
            <Color/>
            <Brand/>
            <More/>
        </div>
        </>
    )
}