import React from "react";
import { useParams } from 'react-router-dom';
import Products from "./Products.json";
import "./Product_details.css"; 

function Product_details() {
  const { product_id } = useParams();
  const product = Products.find((p) => p.id == product_id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>

      <div className="details">
         <div className="product_image">
          <img alt={product.title} src={product.image} /> 
         </div>
        <div className="product_description">
          <div className="product__details">
            <p>{product.title}</p> 
          </div>
          <div className="ratings">Ratings:
            {Array(product.rating).fill().map((_, i) => (<p key={i}>★</p>))}
          </div>
          <div className="cost">
           <span> Price:</span>
            <p>₹{product.price}</p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product_details;
