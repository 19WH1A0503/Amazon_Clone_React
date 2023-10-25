import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home';
import Header from '../Header';
import Product_details from '../Product_details';
//import SearchBar from '../Search_bar';
import SearchResults from '../SearchResults';
import ProductsList from '../Products_list.js'; 

function Test() {
  return <div>TEST PAGE</div>;
}

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      
        <Route path="/Product_details/:product_id" element={<Product_details />} />
        <Route path="/SearchResults/:search" element={<SearchResults />} />
        <Route
          path="/Products_list/:productIds"
          element={<ProductsList />} 
        />
        <Route path="test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
