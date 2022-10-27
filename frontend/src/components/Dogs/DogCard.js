import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
function DogCart(props) {
  const { name, breed, description, price, imageUrl } = props;
  const [isAdded, setAdded] = useState(false);
  const { total, addToCart, setTotal } = useContext(CartContext);
  const handleClick = () => {
    setAdded(true);
    const newItems = {
      name: name,
      price: price,
      imageUrl: imageUrl,
    };
    addToCart((item) => [...item, newItems]);
    setTotal((total) => (total += Number(price)));
  };
  return (
    <>
      <section className="dogs">
        <div className="dogs-info">
          <p>{name}</p>
          <p>{breed}</p>
        </div>
        <div className="dogs-container">
          <img className="dog-img" src={imageUrl} alt={`picture of dog `} />
        </div>
        <div className="dogs-decs">{description}</div>
        <div className="dogs-price">{price}</div>
        {isAdded ? (
          <button disabled className="dogs-btn-disabled">
            ADDED
          </button>
        ) : (
          <button className="dogs-btn" onClick={handleClick}>
            ADD TO CART
          </button>
        )}
      </section>
    </>
  );
}

export default DogCart;
