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
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
