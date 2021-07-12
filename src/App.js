import React, { useState } from "react";
import "./styles.css";

var beautyProducts = {
  "Facewash": [
    { product: "organic tea tree, BIOTIQUE", rating: "★★★★☆" },
    {product: " brightning vitamin c , THE MOMS.CO ", rating: "★★★★★" },
    {product: "skin perfect facial foam, LOREAL", rating: "★★★★☆" },
    {product: "vitamin c & turmeric facewash, MAMAEARTH ", rating: "★★★☆☆" }
  ],
  "Hair wash": [
    {product: "Onion Black Seed Oil Hair Care Kit, WOW", rating: "★★★★☆" },
    {product: "Protein Absolut Repair Shampoo , LOreal", rating: "★★★★☆" },
    {product: "Keratin Smooth With Argan Oil Shampoo, Tresemme", rating: "★★★☆☆" }
  ],
  "Body wash": [
    {product: "Wanderlust Shower Gel, NYKAA", rating: "★★★★☆" },
    {product: " Naked & Raw Coffee Body Scrub , MCaffeine", rating: "★★★★★" },
    {product: "Sunscreen Gel SPF 40 P+++ , La shield", rating: "★★★★☆" },
    {product: "Firming Gel , inner thigh", rating: "★★★★☆" }
  ]
};

var productKeys = Object.keys(beautyProducts);

export default function App() {
  const [beautyType, setBeautyType] = useState("Facewash");
  const [isActive, setActive] = useState({ active: "Facewash" });
  const [bg, setBg] = useState("");

  function clickHandler(newBeautyType) {
    setBeautyType(newBeautyType);
    setActive({ active: newBeautyType });
  }
  function getBg(index) {
    if (index % 2 === 0) {
      return {
        bg:
          "radial-gradient(33.05% 1230.22% at 50% 50%, rgba(112, 234, 154, 0.4) 0%, rgba(255, 255, 255, 0) 100%), #242625",

        bgclr: "#70EA9A"
      };
    } else {
      return {
        bg:
          "radial-gradient(33.05% 1230.22% at 50% 50%, rgba(174, 128, 34, 0.4) 0%, rgba(255, 255, 255, 0) 100%), #242625",
        bgclr: "#DFB15B"
      };
    }
  }

  return (
    <div className="App">
     
      <h1>Beautifly</h1>
      <p style={{ marginBottom: "30px", fontSize: "14px", fontWeight: "bold" }}>
        beautifly is a products recommendation app which gives you beauty 
        products of diffrent brands.
      </p>
      <div className="beauty-types">
        {productKeys.map(function (product) {
          return (
            <span
              onClick={() => clickHandler(product)}
              className={isActive.active === product ? "active" : ""}
              key={product}
              style={{
                // margin: "30px 20px",
                // backgroundColor: "#E5E7EB",
                padding: "0.5rem 1rem",
                borderRadius: "1rem",
                outline: "none",
                cursor: "pointer",
                margin: "5px"
              }}
            >
              {product}
            </span>
          );
        })}
      </div>
      <div className="flex-div-cover">
        {beautyProducts[beautyType].map(function (type, index) {
          return (
            <div
            className="flex-div"
            key={index}
            style={{ background: getBg(index).bg }}
          >
            <h4
              style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}
            >
              {type.product}
            </h4>
            <p
              style={{
                color: getBg(index).bgclr,
                fontSize: "18px",
                fontWeight: "bold"
              }}
            >
              {type.rating}
            </p>
          </div>
        );
      })}
    </div>
  </div>
);
}