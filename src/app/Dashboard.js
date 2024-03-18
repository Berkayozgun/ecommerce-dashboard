import React from "react";
const orders = require("./data/orders.json");
const products = require("./data/products.json");
const customers = require("./data/customers.json");

const Dashboard = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full'>
      <h1>Admin Dashboard</h1>
      <br />
      <div className='flex flex-row gap-40 mt-10'>
        <div>
          <h2>Orders</h2>
          <br />
          <div className='flex flex-col gap-4 justify-center'>
            {orders.map((order, index) => (
              <div
                key={index}
                className='flex border flex-col p-4 rounded-3xl justify-center items'
              >
                <p>Order ID: {order.id}</p>
                <p>Customer ID: {order.customerId}</p>
                <br />
                {order.products.map((product, index) => (
                  <div key={index}>
                    <p>Product ID: {product.productId}</p>
                    <p>Quantity: {product.quantity}</p>
                    <br />
                  </div>
                ))}
                <p>Total: {order.totalPrice} </p>
                <p>Status: {order.status}</p>
                <br />
                <br />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2>Products</h2>
          <br />
          <div className='flex flex-col gap-4 justify-center'>
            {products.map((product, index) => (
              <div
                key={index}
                className='flex border flex-col p-4 rounded-3xl justify-center items'
              >
                {" "}
                <p>Product ID: {product.id}</p>
                <p>Name: {product.name}</p>
                <p>Description: {product.description}</p>
                <p>Price: {product.price}</p>
                <p>Category: {product.category}</p>
                <br />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2>Customers</h2>
          <br />
          <div className='flex flex-col gap-4 justify-center'>
            {customers.map((customer, index) => (
              <div
                key={index}
                className='flex border flex-col p-4 rounded-3xl justify-center items'
              >
                {" "}
                <p>Customer ID: {customer.id}</p>
                <p>Name: {customer.name}</p>
                <p>Email: {customer.email}</p>
                <p>Phone: {customer.mobile}</p>
                <p>Address: {customer.address}</p>
                <br />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
