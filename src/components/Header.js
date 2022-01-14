import {Search, ShoppingBasket} from "@material-ui/icons";
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" className="header__logo"/>

      <div className="header__search">
        <input type="text" className="header__search_input"/>
        <Search className="header__search_icon"/>
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__option_line_one">Hello user</span>
          <span className="header__option_line_two">Sign In</span>
        </div>

        <div className="header__option">
          <span className="header__option_line_one">Returns</span>
          <span className="header__option_line_two">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__option_line_one">Your</span>
          <span className="header__option_line_two">Prime</span>
        </div>

        <div className="header__option_basket">
          <ShoppingBasket/>
          <span className="header__option_line_two header__basket_count">
            0
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
