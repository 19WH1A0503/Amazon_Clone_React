import React from 'react';
import {useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Products from './Products.json';

function ProductsList({ productIds }) {
  const navigate = useNavigate();
  const { productIds: searchProductIds } = useParams();

  const productIdArray = searchProductIds
    ? searchProductIds.split(',')
    : productIds || Products.map((product) => product.id);

  const filteredProducts = Products.filter((product) =>
    productIdArray.includes(product.id)
  );

  const splitIntoRows = (products, itemsPerRow) => {
    const result = [];
    for (let i = 0; i < products.length; i += itemsPerRow) {
      result.push(products.slice(i, i + itemsPerRow));
    }
    return result;
  };
  
  const productRows = splitIntoRows(filteredProducts, 3);
  
  const [count, setCount] = useState();
  const handleAddToCart = (e) => {
    e.preventDefault();
    setCount(count+1)
    //<Header {setCount}/>
  };

  return (
    <div className="home_rows">
      {productRows.map((row, index) => (
        <div key={index} className="home_row">
          {row.map((product) => (
            <div
              key={product.id}
              className="product"
              onClick={() => navigate(`/Product_details/${product.id}`)}
            >
              <img src={product.image} alt="" />
              <div className="product_info">
                <p>{product.title}</p>
              </div>
              <div className="product_rating">
                {product.rating}
                {Array(product.rating)
                  .fill()
                  .map((_, i) => (
                    <p key={i}>✭</p>
                  ))}
              </div>
              <div className="product_price">
                <p>₹{product.price}</p>
              </div>
              <div className="add_to_cart">
                <button onClick={handleAddToCart}>
                  <p>Add to Cart</p>
                </button>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ProductsList;
