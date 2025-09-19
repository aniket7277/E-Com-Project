import React, { useState } from "react";
import { Range } from "react-range";

export default function Prices() {
  const [values, setValues] = useState([13.99, 25.99]);
  return (
    <>
      <div className="pricesWrapper">
        <div className="pricesTitle">
          <h2>Prices</h2>
        </div>
        <div className="priceRange">
          <h3>Ranger :</h3>
          <h3>
            {" "}
            ${values[0].toFixed(2)} - ${values[1].toFixed(2)}
          </h3>
        </div>
        <div className="priceSlider">
          <Range
          values={values}
          step={0.5}
          min={0}
          max={50}
          onChange={(vals) => setValues(vals)}
          renderTrack={({ props, children }) => {
            const min = 0;
            const max = 50;
            const percent1 = ((values[0] - min) / (max - min)) * 100;
            const percent2 = ((values[1] - min) / (max - min)) * 100;

            return (
              <div
                {...props}
                style={{
                  height: "6px",
                  width: "100%",
                  borderRadius: "4px",
                  background: `linear-gradient(
                    to right,
                    #ddd ${percent1}%,
                    #007bff ${percent1}%,
                    #007bff ${percent2}%,
                    #ddd ${percent2}%
                  )`,
                }}
              >
                {children}
              </div>
            );
          }}
          renderThumb={({ props }) => (
            <div
              {...props}
              style={{
                height: "18px",
                width: "18px",
                borderRadius: "50%",
                backgroundColor: "#007bff",
                border: "2px solid white",
                boxShadow: "0 0 4px rgba(0,0,0,0.3)",
              }}
            />
          )}
        />
        </div>
      </div>
    </>
  );
}
