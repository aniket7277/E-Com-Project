import { brandlist } from "./BrandList"
export default function Brand() {
    return(
        <>
        <div className="brandWrapper">
            <div className="brandTitle">
                <h2>Brand</h2>
            </div>
            <div className="brandList">
                {brandlist.map((brand)=>{
                    const {id, name, qunatity} = brand;
                    return(
                        <div className="brandItem" key={id}>
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