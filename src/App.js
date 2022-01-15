import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header/>

        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>

        <Routes>
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
