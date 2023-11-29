import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";

const MyOrders = () => {
  const arr = [
    {
      i:1,
      order: 123456,
      items: 2, 
      status: 'processing',
      amount: 1000,
      payment:'COD',
    },
    {
      i:2, 
      order: 123457,
      items: 4, 
      status: 'processing',
      amount: 200,
      payment:'COD',
    },
    {
      i:3, 
      order: 123459,
      items: 1, 
      status: 'processing',
      amount: 2500,
      payment:'COD',
    },
    {
      i:4, 
      order: 123460,
      items: 3, 
      status: 'completed',
      amount: 3125,
      payment:'COD',
    }
  ];

  return (
    <section className="tableClass">
      <main>
        <table>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Status</th>
              <th>Item Qty</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {arr.map((arr) => (
              <tr key={arr.i}>
                <td>{arr.order}</td>
                <td>{arr.status}</td>
                <td>{arr.items}</td>
                <td>₹{arr.amount}</td>
                <td>{arr.payment}</td>
                <td>
                <Link to={`/order/${"asdsds"}`}>
                  <AiOutlineEye />
                </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default MyOrders;
