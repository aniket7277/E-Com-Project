import { useState, useEffect } from "react";

type ProductViewProps = {
  products: any[];
};

export default function ProductView({ products }: ProductViewProps) {
  const totalStars = 5;
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  // recalc pages when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [products]);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  return (
    <>
      <div className="productViewWrapper">
        {currentProducts.map(
          ({ id, name, rating, price, OriginalPrice, discount, image, hot }) => (
            <div className="productCard" key={id}>
              {hot === "true" && <span className="hotTag">HOT</span>}
              <img src={image} alt={name} />
              <div className="productDetails">
                <h3>{name}</h3>

                {/* Rating stars */}
                <div className="productRating">
                  {[...Array(totalStars)].map((_, index) => (
                    <span
                      key={index}
                      style={{
                        fontSize: "18px",
                        color: index < rating ? "#FFD700" : "#ccc",
                        marginRight: "2px",
                      }}
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Prices */}
                <div className="productPrice">
                  <span className="currentPrice">${price}</span>
                  <span className="originalPrice">${OriginalPrice}</span>
                  <span className="discount">{discount}% off</span>
                </div>
              </div>
            </div>
          )
        )}
      </div>

      {/* Pagination */}
      <div className="productPagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            style={{
              backgroundColor: currentPage === index + 1 ? "#40bfff" : "#f6f7f8",
              color: currentPage === index + 1 ? "#fff" : "#000",
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
}
