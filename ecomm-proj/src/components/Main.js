import { addToCart, removeFromCart, emptyCart } from "../redux/action";
import { useDispatch } from "react-redux";

function Main() {
  const dipatch = useDispatch();
  const product = {
    name: "I phone",
    type: "mobile",
    price: "10000",
    color: "red",
  };
  return (
    <div className="App">
      <div>
        <button onClick={() => dipatch(addToCart(product))}>Add to Cart</button>
      </div>
      <div>
        <button onClick={() => dipatch(removeFromCart(product.name))}>
          Remove from Cart
        </button>
      </div>
      <div>
        <button onClick={() => dipatch(emptyCart(product))}>Empty Cart</button>
      </div>
    </div>
  );
}

export default Main;
