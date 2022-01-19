import {Link} from "react-router-dom";
import {Search, ShoppingBasket} from "@material-ui/icons";
import {useStateValue} from "../state/StateProvider";
import {signOut} from 'firebase/auth';
import {auth} from "../firebase";
import './Header.css';

const Header = () => {
  const [state, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (state.user) {
      signOut(auth);
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" className="header__logo"/>
      </Link>

      <div className="header__search">
        <input type="text" className="header__search_input"/>
        <Search className="header__search_icon"/>
      </div>

      <div className="header__nav">
        <Link to="/login">
          <div className="header__option" onClick={handleAuthentication}>
            <span className="header__option_line_one">Hello</span>
            <span className="header__option_line_two">{state.user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__option_line_one">Returns</span>
          <span className="header__option_line_two">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__option_line_one">Your</span>
          <span className="header__option_line_two">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__option_basket">
            <ShoppingBasket/>
            <span className="header__option_line_two header__basket_count">
              {state.basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
