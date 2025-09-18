import Brand from "./Brand/Brand"
import HotDeals from "./HotDeals/HotDeals"
import Prices from "./Prices/Prices"
export default function SidePanel() {
    return(
        <>
        <div className="sidePanelWrapper">
            <HotDeals/>
            <Prices/>
            <Brand/>
        </div>
        </>
    )
}