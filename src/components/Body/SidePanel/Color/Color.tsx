import { colorList } from "./ColorList"
export default function Brand() {
    return(
        <>
        <div className="colorWrapper">
            <div className="colorTitle">
                <h2>COLOR</h2>
            </div>
            <div className="colorList">
                {colorList.map((colors)=>{
                    const {id, name, color} = colors;
                    return(
                        <div className="colorItem" key={id} aria-label={name} style={{backgroundColor: color,}}>
                        </div>
                    )
                })}
            </div>
        </div>
        </>
    )
}