import "./cart.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
function Cart() {
  const { myCart, total, setTotal, addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const handleCheckout = () => {
    setTotal(0);
    addToCart([{}]);
  };
  const handleReturnHome = () => {
    navigate("/dogs");
  };
  return (
    <>
      <section className="cart-container">
        <div className="cart-header">CHECKOUT :</div>
        <div className="cart-items">
          {myCart.slice(1).map((item) => {
            return (
              <div className="cart-item">
                <img className="cart-item-img" src={item.imageUrl} alt="" />
                {item.name}:{item.price}$
              </div>
            );
          })}
          <p>TOTAL:{total}</p>
        </div>
        <button className="cart-checkout" onClick={handleCheckout}>
          DONE
        </button>
        <button className="cart-gohome" onClick={handleReturnHome}>
          RETURN HOME
        </button>
      </section>
    </>
  );
}

export default Cart;
