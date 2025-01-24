import { useAuth } from "../context/GlobalState";
import checkoutImg from "../assets//products//checkoutAd.jpg"
import CheckoutProduct from "./CheckoutProduct.jsx";
import "./Checkout.css";
import Subtotal from "./Subtotal.jsx";

const Checkout = () => {
  const { user, basket } = useAuth();
  console.log("basket is:",basket);

  return (
    <div className="checkout">
      <div className="checkout-left">
        <img className="checkout-ad" src={checkoutImg} />
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout-title">Your shopping Basket</h2>
          {basket.length > 0 ? (
            basket.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))
          ) : (
            <p>
              You have no items in your basket.To buy one or more
              items,click"Add to basket".
            </p>
          )}
        </div>
      </div>
      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;