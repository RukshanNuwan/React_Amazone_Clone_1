import CurrencyFormat from 'react-currency-format';
import {useStateValue} from "../state/StateProvider";
import {getBasketTotal} from "../state/reducer";
import {useNavigate} from 'react-router-dom';
import './Subtotal.css';

const Subtotal = () => {
  const [state, dispatch] = useStateValue();
  const navigate = useNavigate();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({state.basket.length} items):
              <strong> {value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox"/> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(state.basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />

      <button onClick={(e) => navigate('/payment')}>
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Subtotal;
