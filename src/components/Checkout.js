import Subtotal from "./Subtotal";
import './Checkout.css';
import CheckoutProduct from "./CheckoutProduct";
import {useStateValue} from "../state/StateProvider";

const Checkout = () => {
  const [state, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt=""
             className="checkout__ad"/>

        <div>
          <h2 className="checkout__title">
            Your Shopping Basket
          </h2>

          {state.basket.map((item, index) => (
            <CheckoutProduct
              key={index}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal/>
      </div>
    </div>
  );
};

export default Checkout;
