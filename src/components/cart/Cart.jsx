import { Link } from "react-router-dom";
import { useState } from "react";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

const CartItem = ({ value, title, img, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>

    <div>
      <button onClick={decrement}>-</button>
      <input type="number" readOnly value={value} />
      <button onClick={increment}>+</button>
    </div>
  </div>
);

const Cart = () => {
  const [cartItemsCount, setCartItemsCount] = useState ({
    1: {
      count: 1,
      price: 200,
    }, //Cheese Burger
    2: {
      count: 1,
      price: 500,
    },//Bacon Cheese Burger
    3: {
      count: 1,
      price: 1800,
    } //Original Burger & fries
  });

  const increment = (itemId) => {
    setCartItemsCount((prevItems) => ({
      ...prevItems,
      [itemId]: {
        ...prevItems[itemId],
        count: prevItems[itemId].count + 1,
      }
    }));
  };

  const decrement = (itemId) => {
    if (cartItemsCount[itemId].count > 0) {
      setCartItemsCount((prevItems) => ({
        ...prevItems,
        [itemId]: {
          ...prevItems[itemId],
          count: prevItems[itemId].count - 1,
        }
      }));
    }
  };

  //calculate the Total
  const subTotal = Object.keys(cartItemsCount).reduce(
    (total, itemId) => 
      total + cartItemsCount[itemId].count * cartItemsCount[itemId].price,
    0
  );

  const tax = subTotal * 0.18;
  const shippingCharges = 200;
  const total = subTotal + tax + shippingCharges;

  return (
    <section className="cart">
      <main>
        <CartItem
          title={"Cheese Burger"}
          img={burger1}
          value={cartItemsCount[1].count}
          increment={() => increment(1)}
          decrement={() => decrement(1)}

        // Add the function for decrementing the order by 1 
       
        />
        <CartItem
          title={"Bacon Cheese Burger"}
          img={burger2}
          value={cartItemsCount[2].count}
          increment={() => increment(2)}
        // Add the function for decrementing the order by 2
          decrement={() => decrement(2)}
        />

        {/* Fill up the code for Cheese Burger similarly */}
        <CartItem
        title={"Original Burger & fries"}
        img={burger3}
        value={cartItemsCount[3].count}
        increment={() => increment(3)}
        decrement={() => decrement(3)}
        />

        <article>
          <div>
            <h4>Sub Total</h4>
            <p>₹{subTotal}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹{tax}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹{shippingCharges}</p>
          </div>{" "}
          <div>
            <h4>Total</h4>
            <p>₹{total}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;
