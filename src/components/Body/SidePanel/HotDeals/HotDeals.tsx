import {hotDeals} from "./HotdealList";
export default function HotDeals() {
    return(
        <>
        <div className="hotDealsWrapper">
            <div className="hotDealsTitle">
                <h2>Hot Deals</h2>
            </div>
            <div className="hotDealsList">
                {hotDeals.map((deal)=>{
                    const { id, name, qunatity} = deal;
                    return(
                        <div className="hotDealItem" key={id}>
                            <h3>{name}</h3>
                            <h3>{qunatity}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
        </>
    )
 }