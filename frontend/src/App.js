import "./App.css";
import Home from "./components/Home/Home";
import Dogs from "./components/Dogs/Dogs";
import Cart from "./components/Cart/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { CartContext } from "./contexts/CartContext";
import Navbar from "./components/NavBar/Navbar";
import axios from "axios";
function App() {
  const [allDogs, setAllDogs] = useState([]);
  const [myCart, addToCart] = useState([{}]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    async function getData() {
      const res = await axios.get("/v1/dogs");
      return res;
    }
    getData().then((res) => {
      setAllDogs(res.data);
    });
    getData().catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <CartContext.Provider value={{ myCart, addToCart, total, setTotal }}>
      <Router>
        <Navbar />
        <div className="page-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dogs" element={<Dogs allDogs={allDogs} />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </CartContext.Provider>
  );
}

export default App;
