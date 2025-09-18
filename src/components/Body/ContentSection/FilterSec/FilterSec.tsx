import colView from "../../../../assets/img/columnView.svg";
import listView from "../../../../assets/img/listView.svg";
import React, { useState } from "react";
export default function FilterSec() {
  const [sortOption, setSortOption] = useState("default");
  const [showOption, setShowOption] = useState("default");

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
    console.log("Selected Sort:", e.target.value); 
  };
  const handleShowChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setShowOption(e.target.value);
    console.log("Selected Show:", e.target.value); 
  };
  return (
    <>
      <div className="filterSecWrapper">
        <div className="filterLeft">
          <div className="filterQuantity">
            <p>13 Items</p>
          </div>
          <div className="filterSort">
            <label htmlFor="sort" style={{ marginRight: "8px" }}>
              Sort by 
            </label>
            <select id="sort" value={sortOption} onChange={handleSortChange}>
              <option value="default">Name</option>
              <option value="lowToHigh">Price: Low to High</option>
              <option value="highToLow">Price: High to Low</option>
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>
          <div className="filterShow">
            <label htmlFor="Show" style={{ marginRight: "8px" }}>
              Show 
            </label>
            <select id="sort" value={showOption} onChange={handleShowChange}>
              <option value="default">12</option>
              <option value="24">24</option>
              <option value="36">36</option>
              <option value="48">48</option>
              <option value="60">60</option>
            </select>
          </div>
        </div>
        <div className="filterRight">
            <div className="filterView">
                <img src={colView} alt="Column View" />
                <img src={listView} alt="List View" />
            </div>
        </div>
      </div>
    </>
  );
}
