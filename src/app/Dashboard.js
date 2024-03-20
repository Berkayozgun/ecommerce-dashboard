import React from "react";
const orders = require("./data/orders.json");
const products = require("./data/products.json");
const customers = require("./data/customers.json");
import { bellIcon } from "./icons/SVGIcon";
import Avatar from "./components/Avatar";

const calculateTotalProfit = () => {
  let totalSales = 0;
  orders.forEach((order) => {
    totalSales += order.totalPrice;
  });
  const profit = totalSales * 0.123; // Toplam satışın %10'u kar olarak kabul edildi.
  return profit;
};

const calculateTotalSales = () => {
  return orders.length;
};

const calculateAllTimeIncome = () => {
  let totalSales = 0;
  orders.forEach((order) => {
    totalSales += order.totalPrice;
  });
  return totalSales;
};

const calculateCustomerCount = () => {
  return customers.length;
};

const calculatePaymentPerCustomer = () => {
  const totalSales = calculateAllTimeIncome();
  const customerCount = calculateCustomerCount();
  return totalSales / customerCount;
};

const mostSoldProduct = () => {
  let mostSold = products[0];
  products.forEach((product) => {
    if (product.sold > mostSold.sold) {
      mostSold = product;
    }
  });
  return mostSold;
};

const mostBuyerCustomer = () => {
  let mostBuyer = customers[0];
  customers.forEach((customer) => {
    if (customer.totalPurchase > mostBuyer.totalPurchase) {
      mostBuyer = customer;
    }
  });
  return mostBuyer;
};

const Dashboard = () => {
  const totalProfit = calculateTotalProfit();
  const totalSales = calculateTotalSales();
  const allTimeIncome = calculateAllTimeIncome();
  const paymentPerCustomer = calculatePaymentPerCustomer();
  const customerCount = calculateCustomerCount();

  return (
    <div className='flex flex-col p-4 h-full w-full '>
      <div className='flex flex-row w-full mt-2 justify-between'>
        <h1 className='flex font-bold'>Dashboard</h1>
        <div className='flex flex-row justify-evenly items-center w-1/12'>
          <div>{bellIcon}</div>
          <Avatar />
        </div>
      </div>
      <div className='flex flex-row flex-wrap h-full w-full gap-10 mt-10'>
        <div className='flex justify-center items-center shadow-2xl border rounded-xl p-4 h-20'>
          Total Profit :{" "}
          <span
            className='
          text-4xl font-bold text-green-500'
          >
            {" "}
            $ {totalProfit}
          </span>
        </div>
        <div className='flex justify-center items-center shadow-2xl border rounded-xl p-4 h-20'>
          Total Sales :{" "}
          <span
            className='
          text-4xl font-bold text-blue-500'
          >
            {" "}
            {totalSales}
          </span>
        </div>
        <div className='flex justify-center items-center shadow-2xl border rounded-xl p-4 h-20'>
          All Time Income :{" "}
          <span
            className='
          text-4xl font-bold text-yellow-500'
          >
            {" "}
            $ {allTimeIncome}
          </span>
        </div>
        <div className='flex justify-center items-center shadow-2xl border rounded-xl p-4 h-20'>
          Payment Per Customer :{" "}
          <span
            className='
          text-4xl font-bold text-red-500'
          >
            {" "}
            $ {paymentPerCustomer}
          </span>
        </div>
        <div className='flex justify-center items-center shadow-2xl border rounded-xl p-4 h-20'>
          Customer Count :{" "}
          <span
            className='
          text-4xl font-bold text-purple-500'
          >
            {" "}
            {customerCount}
          </span>
        </div>

        <div className='flex justify-center items-center shadow-2xl border rounded-xl p-4 h-20'>
          Most Sold Product :{" "}
          <span
            className='
          text-4xl font-bold text-purple-500'
          >
            {" "}
            {mostSoldProduct().name}
          </span>
        </div>
        <div className='flex justify-center items-center shadow-2xl border rounded-xl p-4 h-20'>
          Most Buyer Customer :{" "}
          <span
            className='
          text-4xl font-bold text-purple-500'
          >
            {" "}
            {mostBuyerCustomer().name}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
