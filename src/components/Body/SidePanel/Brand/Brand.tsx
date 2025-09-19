import { brandlist } from "./BrandList";

type BrandProps = {
  selectedBrands: string[];
  onBrandChange: (brands: string[]) => void;
};

export default function Brand({ selectedBrands, onBrandChange }: BrandProps) {
  const toggleBrand = (name: string) => {
    if (selectedBrands.includes(name)) {
      onBrandChange(selectedBrands.filter((b) => b !== name));
    } else {
      onBrandChange([...selectedBrands, name]);
    }
  };

  return (
    <div className="brandWrapper">
      <div className="brandTitle">
        <h2>Brand</h2>
      </div>
      <div className="brandList">
        {brandlist.map(({ id, name, qunatity }) => {
          const isSelected = selectedBrands.includes(name);
        return(
          <label key={id} className="brandItem" style={{
                color: isSelected ? "#33A0FF" : "#262626",
                cursor: "pointer",
              }}>
            <input
              type="checkbox"
              checked={selectedBrands.includes(name)}
              onChange={() => toggleBrand(name)}
            />
            <span>{name}</span>
            <span>({qunatity})</span>
          </label>
        );
    })}
      </div>
    </div>
  );
}
