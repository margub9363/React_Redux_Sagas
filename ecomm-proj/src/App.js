import logo from "./logo.svg";
import "./App.css";
import { addToCart } from "./redux/action";
import { useDispatch } from "react-redux";

function App() {
  const dipatch = useDispatch();
  const product = {
    name: "I phone",
    type: "mobile",
    price: "10000",
    color: "red",
  };
  return (
    <div className="App">
      <button onClick={() => dipatch(addToCart(product))}>Add to Cart</button>
    </div>
  );
}

export default App;
