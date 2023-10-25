import React from 'react';
import {useParams} from 'react-router-dom';
import './Header.css';
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import Search_bar from './Search_bar';
import ProductsList from './Products_list';


function Header()
{
  const {count} = useParams();
  
    return(
        <div className="Navbar">
        <div className="header">
            <img className="header_logo" src ="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt ="Amazon logo"/>
            <div className="header_search">
              <div ClassName="header_searchInput"/>
              <Search_bar/>
              </div>
              <div className="header__nav">
              <div className="header_option">
            <span className="header_optionLineOne">Hello Guest</span><br/>
            <span className="header__optionLineTwo">Sign In </span>
          </div>
        

        
          <div className="header_option">
            <span className="header_optionLineOne">Returns</span><br/>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
          
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
        
            </span>
          </div>
        

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        </div>
        </div>

        <div className="header_mini flex">
        <ul class="flex">
          <li></li>
           <li>All</li>
           <li>Fresh</li>
           <li>Amazon mini Tv</li>
           <li>Sell</li>
           <li>Amazon Pay</li>
           <li>Gift cards</li>
           <li>Buy again </li>
           <li>Health, Households& Personal care</li>
           <li>Gift idea</li>
           <li>Coupons</li>
           <li>amazon Basics</li>
           <li>Today's Deals</li>
           <li>Subscribe & Save</li>
           <li>Home Improvement</li>
           <li></li>
           

        </ul>
        </div>


        </div>
    )
}

export default Header;