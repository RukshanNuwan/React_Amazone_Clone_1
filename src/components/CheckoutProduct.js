import './CheckoutProduct.css';
import {useStateValue} from "../state/StateProvider";

const CheckoutProduct = ({id, image, title, price, rating, hideButton}) => {
  const [state, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      payload: id
    });
  };

  return (
    <div className="checkoutProduct">
      <img src={image} alt={title} className="checkoutProduct__image"/>

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>

        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct__rating">
          {Array(rating).fill().map((_, i) => ( // create a new array (size = 5 & value = null)
            <p key={i}>⭐</p>
          ))}
        </div>

        {!hideButton && (
          <button onClick={removeFromBasket}>
            Remove from Basket
          </button>
        )}
      </div>
    </div>
  );
};

export default CheckoutProduct;
