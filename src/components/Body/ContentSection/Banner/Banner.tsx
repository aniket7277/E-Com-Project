import { useState, useEffect } from "react";
import { bannerList } from "./BannerList";

export default function BannerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3s (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === bannerList.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? bannerList.length - 1 : prev - 1
    );
  };

  const { headline, detail, btn, img } = bannerList[currentIndex];

  return (
    <div className="bannerWrapper">
      <div className="BannerLeft">
        <div className="BannerHeadline">
          <h1>{headline}</h1>
        </div>
        <div className="BannerDetails">
          <p>{detail}</p>
        </div>
        <div className="BannerButton">
          <span>{btn}</span>
        </div>

        {/* Navigation buttons */}
        <div style={{ marginTop: "20px" }} className="P-N-Btn">
          <button onClick={handlePrev}>⬅</button>
          <button onClick={handleNext} style={{ marginLeft: "10px" }}>
            ➡
          </button>
        </div>
      </div>

      <div className="BannerRight">
        <img src={img} alt="Banner" />
      </div>
    </div>
  );
}
