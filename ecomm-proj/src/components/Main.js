import { addToCart, removeFromCart, emptyCart } from "../redux/action";
import { useDispatch } from "react-redux";
import { productList } from "../redux/productAction";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Main() {
  const data = useSelector((state) => state.productData);
  console.log("Data in main component from saga", data);
  const dipatch = useDispatch();

  useEffect(() => {
    dipatch(productList());
  }, []);
  return (
    <div className="App">
      <div>
        <button onClick={() => dipatch(emptyCart())}>Empty Cart</button>
      </div>

      <div className="product-container">
        {data.map((item) => (
          <div key={item.id} className="product-item">
            <img src={item.photo} alt="" />
            <div>Name : {item.name}</div>
            <div>Brand : {item.brand}</div>
            <div>Color : {item.color}</div>
            <div>
              <button onClick={() => dipatch(addToCart(item))}>
                Add TO Cart
              </button>
            </div>
            <div>
              <button onClick={() => dipatch(removeFromCart(item.id))}>
                Remove TO Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
