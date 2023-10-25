import React from "react";
import "./Home.css";
import Product_list from "./Products_list";

function Home() {


  return (
    <div className="home">
      <div className="home__container">
      
      <img className="home__image" 
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Lepton/5reasons_3000x1200._CB629776043_.jpg" 
          alt=""/>
          <div className="home_rows">
             <Product_list/> 
          </div>
        
      </div>
    </div>
  );
}

export default Home;
