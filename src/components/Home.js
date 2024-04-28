import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./Home.css";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9100/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const groupedProducts = [];
  const itemsPerRow = 3;
  for (let i = 0; i<products.length; i+= itemsPerRow) {
    groupedProducts.push(products.slice(i, i + itemsPerRow));
  }
  return (
    <div>
      <div className="first-layer">
        <h1>Find Your Favourite Anime Characters!</h1>
        <p>my text</p>
      </div>
      <br />
      <div className="second-layer">
        <div className="second-layer-left-item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXYujgMGETU_Jl-MhilQOyEkIBaoRZbfZRtObwOFsM5w&s"
            alt="Image"
          />
        </div>
        <div className="second-layer-right-item">
          <h1>my title right</h1>
          <p>my text right</p>
        </div>
      </div>
      <div className="third-layer">
      <table>
          <tbody>
            {groupedProducts.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((product, columnIndex) => (
                  <td key={columnIndex}>
                    <img
                        src={product.imageURL}
                        alt={`产品 ${rowIndex * itemsPerRow + columnIndex + 1}`}
                        style={{ width: "100%", height: "auto" }}
                      />
                      <p className="product-name" style={{ textAlign: "center", marginTop: "5px"}}>
                        {product.name}
                      </p>
                  </td>
                ))}
                {/* 如果一行不足三个产品，填充空单元格 */}
                {row.length < itemsPerRow && (
                  <td colSpan={itemsPerRow - row.length}></td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
