import { ProductList } from "./ProductList";
export default function ProductView() {
  const totalStars = 5;
  return (
    <>
      <div className="productViewWrapper">
        {ProductList.map((product) => {
          const { id, name, rating, price, OriginalPrice, discount, image } =
            product;
          return (
            <div className="productCard" key={id}>
                <span className="hotTag">HOT</span>
              <img src={image} alt={name} />
              <div className="productDetails">
                <h3>{name}</h3>
                <div className="productRating">
                  {[...Array(totalStars)].map((_, index) => (
                    <span
                      key={index}
                      style={{
                        fontSize: "18px",
                        color: index < rating ? "#FFD700" : "#ccc", // yellow or gray
                        marginRight: "2px",
                      }}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <div className="productPrice">
                  <span className="currentPrice">${price}</span>
                  <span className="originalPrice">${OriginalPrice}</span>
                  <span className="discount">{discount}% off</span>
                </div>
              </div>
            </div>
          );
        })}
        ;
      </div>
    </>
  );
}
