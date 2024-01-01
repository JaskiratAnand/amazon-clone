import React from "react";
import "./Header.css";
import logo from "./img/logo2.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="{logo}" className="header_logo" />
      </Link>

      <div className="header_search">
        <input type="text" className="header_searchInput"></input>
        <SearchIcon className="header_searchIcon"></SearchIcon>
      </div>

      <div className="header_nav">

        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_OptionLineOne">
              Hello, {user ? user?.email : "Guest"}
            </span>
            <span className="header_OptionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <div className="header_option">
          <span className="header_OptionLineOne">Returns</span>
          <span className="header_OptionLineTwo">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_OptionLineOne">Your</span>
          <span className="header_OptionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon></ShoppingBasketIcon>
            <span className="header_OptionLineTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
        
      </div>
    </div>
  );
}

export default Header;
