import '../../styles/orderDetails.scss';

const OrderDetails = () => {
  return (
    <section className='orderDetails'>
        <main>
            <h1>ORDER DETAILS</h1>
            <div>
                <h1>Shipping</h1>
                <p>Address xxx</p>
            </div>
            <div>
                <h1>Contact</h1>
                <p>Name Stuart Holm</p>
                <p>Phone 3124 123 123</p>
            </div>
            <div>
                <h1>Status</h1>
                <p>Order Status Processing</p>
                <p>Placed at 22-11-2023, 12:32</p>
                <p>Delivered at 22-11-2023, 13:00</p>
            </div>
            <div>
                <h1>Payment</h1>
                <p>Payment Method cod</p>
                <p>Payment Reference #123456 </p>
            </div>
            <div>
                <h1>Amount</h1>
                <p>Items total ₹2500</p>
                <p>Shipping Charges ₹200</p>
                <p>Tax ₹450</p>
                <p>Total Amount ₹3150</p>
            </div>
            <article>
            <h1>ORDERED ITEMS</h1>
            <div>
                <h4>Cheese Burger</h4>
                <p>1 x 200</p>
            </div>
            <div>
                <h4>Bacon Cheese Burger</h4>
                <p>1 x 500</p>
            </div>
            <div>
                <h4>Original Burger & fries</h4>
                <p>1 x 1800</p>
            </div>
            <div>
                <h4><b>Sub Total</b></h4>
                <p><b>₹2500</b></p>
            </div>
        </article>
        </main>
    </section>
  )
}

export default OrderDetails;
