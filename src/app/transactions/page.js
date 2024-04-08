"use client";
import React, { useState } from "react";

const TransactionsPage = () => {
  // Örnek bir transactions listesi
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      date: "2024-04-01",
      amount: 100.0,
      type: "Credit Card",
      status: "Completed",
      product: "T-shirt",
      buyer: "John Doe",
      shippingStatus: "Shipped",
      trackingNumber: "ABC123456789",
      notes: "Customer requested express delivery",
    },
    {
      id: 2,
      date: "2024-04-02",
      amount: 50.0,
      type: "PayPal",
      status: "Completed",
      product: "Jeans",
      buyer: "Jane Smith",
      shippingStatus: "In Progress",
      trackingNumber: null,
      notes: "",
    },
    {
      id: 3,
      date: "2024-04-03",
      amount: 75.0,
      type: "Bank Transfer",
      status: "Pending",
      product: "Sneakers",
      buyer: "Bob Johnson",
      shippingStatus: "Not Shipped",
      trackingNumber: null,
      notes: "Waiting for payment confirmation",
    },
    {
      id: 4,
      date: "2024-04-04",
      amount: 200.0,
      type: "Credit Card",
      status: "Completed",
      product: "Jacket",
      buyer: "Alice Brown",
      shippingStatus: "Shipped",
      trackingNumber: "XYZ987654321",
      notes: "",
    },
    {
      id: 5,
      date: "2024-04-05",
      amount: 150.0,
      type: "PayPal",
      status: "Completed",
      product: "Dress",
      buyer: "Eve White",
      shippingStatus: "Shipped",
      trackingNumber: "DEF456123789",
      notes: "",
    },
    {
      id: 6,
      date: "2024-04-06",
      amount: 120.0,
      type: "Credit Card",
      status: "Completed",
      product: "Hat",
      buyer: "Charlie Black",
      shippingStatus: "Shipped",
      trackingNumber: "GHI654321987",
      notes: "",
    },
    {
      id: 7,
      date: "2024-04-07",
      amount: 80.0,
      type: "PayPal",
      status: "Completed",
      product: "Shoes",
      buyer: "David Green",
      shippingStatus: "Shipped",
      trackingNumber: "JKL321987654",
      notes: "",
    },
    {
      id: 8,
      date: "2024-04-08",
      amount: 90.0,
      type: "Credit Card",
      status: "Completed",
      product: "Socks",
      buyer: "Frank Grey",
      shippingStatus: "Shipped",
      trackingNumber: "MNO987654321",
      notes: "",
    },
    {
      id: 9,
      date: "2024-04-09",
      amount: 70.0,
      type: "PayPal",
      status: "Completed",
      product: "Gloves",
      buyer: "George Brown",
      shippingStatus: "Shipped",
      trackingNumber: "PQR654321987",
      notes: "",
    },
    {
      id: 10,
      date: "2024-04-10",
      amount: 110.0,
      type: "Credit Card",
      status: "Completed",
      product: "Scarf",
      buyer: "Helen White",
      shippingStatus: "Shipped",
      trackingNumber: "STU321987654",
      notes: "",
    },
  ]);

  return (
    <div>
      <h1>Transactions</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Status</th>
            <th>Product</th>
            <th>Buyer</th>
            <th>Shipping Status</th>
            <th>Tracking Number</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.date}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.type}</td>
              <td>{transaction.status}</td>
              <td>{transaction.product}</td>
              <td>{transaction.buyer}</td>
              <td>{transaction.shippingStatus}</td>
              <td>{transaction.trackingNumber}</td>
              <td>{transaction.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsPage;
