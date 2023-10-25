import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Products from './Products.json';
import ProductsList from './Products_list'; 

function SearchResults() {
  const { search } = useParams();
  const [matchingP, setMatchingP] = useState([]);

  const filterProducts = (query) => {
    const filteredProducts = Products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    return filteredProducts;
  };

  useEffect(() => {
    if (search) {
      const filteredProducts = filterProducts(search);
      setMatchingP(filteredProducts);
    }
  }, [search]);

  const matchingProductIds = matchingP.map((product) => product.id).join(',');

  return (
    <div>
      <h1>Search Results for "{search}"</h1>
      {matchingP.length === 0 ? (
        <p>No matching items found.</p>
      ) : (
        <ProductsList productIds={matchingProductIds} />
      )}
    </div>
  );
}

export default SearchResults;
