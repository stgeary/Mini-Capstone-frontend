/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import axios from "axios";
import { useState } from "react";
export function ProductsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");
  console.log(props);
  axios.filter((product) =>
    product.title.toLowerCase().includes(searchFilter.toLowerCase())
  );
  return (
    <div id="products-index">
      <h2>{props.name}</h2>
      <h1>All products</h1>
      <div className="cards">
        Search filter:{" "}
        <input
          type="text"
          value={searchFilter}
          onChange={(event) => setSearchFilter(event.target.value)}
        />
        {props.products.map((product) => (
          <div key={product.id} className="products card">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <img src={product.image} alt="" />
            <p>${product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <p>Color: {product.color}</p>
            <div className="card-body">
              <button onClick={() => props.onShowProduct(product)}>
                More info
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
