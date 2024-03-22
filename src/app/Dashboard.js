import React from "react";
const orders = require("./data/orders.json");
const products = require("./data/products.json");
const customers = require("./data/customers.json");
import {
  bellIcon,
  totalUserIcon,
  risingGreen,
  totalProfitIcon,
  totalOrderIcon,
} from "./icons/SVGIcon";
import Avatar from "./components/Avatar";

const calculateTotalProfit = () => {
  // randomize the total profit calculation like 123.634 $
  return (Math.random() * 1000).toFixed(3);
};

const calculateTotalSales = () => {
  // randomize the total sales calculation like 123
  return Math.floor(Math.random() * 1000);
};

const calculateAllTimeIncome = () => {
  // randomize the all time income calculation like 123.634 $ but bigger than total profit always
  return (calculateTotalProfit() * 2).toFixed(3);
};

const calculateCustomerCount = () => {
  // randomize the customer count calculation like 123
  return Math.floor(Math.random() * 1000);
};

const calculatePaymentPerCustomer = () => {
  const totalSales = calculateAllTimeIncome();
  const customerCount = calculateCustomerCount();
  return (totalSales / customerCount).toFixed(3);
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
        <div className='flex flex-col w-3/12 shadow-2xl h-36 rounded-lg border border-gray-100 bg-white p-6 justify-between gap-4'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-sm text-gray-500'>Total User</p>

              <p className='text-2xl font-medium text-gray-900'>
                {customerCount}
              </p>
            </div>

            <span className='rounded-full'>{totalUserIcon}</span>
          </div>

          <div className='mt-1 flex gap-1 text-green-600'>
            {risingGreen}
            <p className='flex gap-2 text-xs'>
              <span className='font-medium'> 8.51% </span>

              <span className='text-gray-500'> Since last week </span>
            </p>
          </div>
        </div>

        <div className='flex flex-col w-2/6 shadow-2xl h-36 rounded-lg border border-gray-100 justify-between bg-white p-6'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-sm text-gray-500'>Profit</p>

              <p className='text-2xl font-medium text-gray-900'>
                $ {totalProfit}
              </p>
            </div>

            <span className='rounded-full bg-blue-100 p-3 text-blue-600'>
              {totalProfitIcon}
            </span>
          </div>

          <div className='mt-1 flex gap-1 text-green-600'>
            {risingGreen}

            <p className='flex gap-2 text-xs'>
              <span className='font-medium'> 67.81% </span>

              <span className='text-gray-500'> Since last week </span>
            </p>
          </div>
        </div>

        <div className='flex flex-col w-3/12 shadow-2xl h-36 rounded-lg border border-gray-100 bg-white p-6 justify-between gap-4'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-sm text-gray-500'>Total Order</p>

              <p className='text-2xl font-medium text-gray-900'>{totalSales}</p>
            </div>

            <span className='rounded-full'>{totalOrderIcon}</span>
          </div>

          <div className='mt-1 flex gap-1 text-green-600'>
            {risingGreen}

            <p className='flex gap-2 text-xs'>
              <span className='font-medium'> 8.51% </span>

              <span className='text-gray-500'> Since last week </span>
            </p>
          </div>
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
