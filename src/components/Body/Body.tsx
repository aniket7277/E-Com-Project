import { useState } from "react";
import ContentSection from "./ContentSection/ContentSection";
import SidePanel from "./SidePanel/SidePanel";
import { ProductList } from "./ContentSection/ProductView/ProductList"; // don't forget import

export default function Body() {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedHotDeals, setSelectedHotDeals] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  // 🔎 Filtering
  const filteredProducts = ProductList.filter((product) => {
    const matchesBrand =
      selectedBrands.length === 0 || selectedBrands.includes(product.brand);

    const matchesHotDeal =
      selectedHotDeals.length === 0 || selectedHotDeals.includes(product.brand);

    const matchesColor =
      selectedColors.length === 0 || selectedColors.includes(product.color);

    return matchesBrand && matchesHotDeal && matchesColor;
  });

  return (
    <div className="bodyWrapper">
      <SidePanel
        selectedBrands={selectedBrands}
        onBrandChange={setSelectedBrands}
        selectedHotDeals={selectedHotDeals}
        onHotDealsChange={setSelectedHotDeals}
        selectedColors={selectedColors}
        onColorChange={setSelectedColors}
      />

      {/* ✅ Pass filtered products into ContentSection */}
      <ContentSection products={filteredProducts} />
    </div>
  );
}
