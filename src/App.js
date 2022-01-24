import {useEffect} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import './App.css';
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from "./firebase";
import {useStateValue} from "./state/StateProvider";
import Payment from "./components/Payment";
import Orders from "./components/Orders";
import {loadStripe} from "@stripe/stripe-js";
import {Elements, useElements, useStripe} from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51KKMZCCDOmd2n0ecyQKHLxcqRVzLErCLXeAN9x5DAIIz80c77D1Qv7bzeC4IYFbZ4yNS4doPPUHckLjdaEIJp0hD00H2tx6VVP');

const App = () => {
  const [state, dispatch] = useStateValue();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // user was logged in
        dispatch({
          type: 'SET_USER',
          payload: user
        });
      } else {
        dispatch({
          type: 'SET_USER',
          payload: null
        });
        // user was logged out
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <Header/>

        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/orders" element={<Orders/>}/>
          <Route path="/payment" element={(
            <Elements stripe={promise}>
              <Payment/>
            </Elements>
          )}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
