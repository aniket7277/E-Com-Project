import Banner from "./Banner/Banner";
import ProductView from "./ProductView/ProductView";

type ContentSectionProps = {
  products: any[];
};

export default function ContentSection({ products }: ContentSectionProps) {
  return (
    <div className="contentSectionWrapper">
      <Banner />
      {/* ✅ Pass products into ProductView */}
      <ProductView products={products} />
    </div>
  );
}
