import { addToCart, removeFromCart, emptyCart } from "../redux/action";
import { useDispatch } from "react-redux";
import { productList } from "../redux/productAction";
import { useSelector } from "react-redux";

function Main() {
  const data = useSelector((state) => state.productData);
  console.log("Data in main component", data);
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
      <div>
        <button onClick={() => dipatch(productList(product))}>
          Get Product List
        </button>
      </div>
    </div>
  );
}

export default Main;
