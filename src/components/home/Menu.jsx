// Write all the code here
import MenuCard from "./MenuCard";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

const products = [
  {
    itemNum: 1,
    burgerSrc: burger1,
    price: 200,
    title: "CheeseBurger"
  },
  {
    itemNum: 2,
    burgerSrc: burger2,
    price: 500,
    title: "Bacon Cheese Burger"
  },
  {
    itemNum: 3,
    burgerSrc: burger3,
    price: 1800,
    title: "Original Burger & fries"
  },
]

const Menu = () => {

  const addToCart = (itemNum) => {
    
  };

  return (
    <section id="menu">
      <h1>Menu</h1>

      <div>
        {products.map((product, index) => (
            <MenuCard
              itemNum={product.itemNum}
              burgerSrc={product.burgerSrc}
              price={product.price}
              title={product.title}
              handler={addToCart}
              delay={(index + 1) * 0.15}
            />
        ))}
      </div>
    </section>
  );
};

export default Menu;
