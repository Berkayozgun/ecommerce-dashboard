const orders = require("../data/orders.json");
const products = require("../data/products.json");
const customers = require("../data/customers.json");
import {
  bellIcon,
  totalUserIcon,
  risingGreen,
  totalProfitIcon,
  totalOrderIcon,
} from "../icons/SVGIcon";
import Avatar from "../components/Avatar";
import Image from "next/Image";
import StatsCard from "../components/StatsCard";

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

export default function Page() {
  const totalProfit = calculateTotalProfit();
  const totalSales = calculateTotalSales();
  const allTimeIncome = calculateAllTimeIncome();
  const paymentPerCustomer = calculatePaymentPerCustomer();
  const customerCount = calculateCustomerCount();
  return (
    <div className='flex w-full flex-row '>
      <div className='flex flex-col p-4 h-full w-full '>
        <div className='flex flex-row w-full mt-2 justify-between'>
          <h1 className='flex font-bold'>Dashboard</h1>
          <div className='flex flex-row justify-evenly items-center w-1/12'>
            <div>{bellIcon}</div>
            <Avatar />
          </div>
        </div>

        <div className='flex flex-row flex-wrap h-full w-full gap-10 mt-10'>
          {/* Kartlar */}
          <StatsCard
            title='Total User'
            value={customerCount}
            icon={totalUserIcon}
          />
          <StatsCard
            title='Profit'
            value={`$ ${totalProfit}`}
            icon={totalProfitIcon}
          />
          <StatsCard
            title='Total Order'
            value={totalSales}
            icon={totalOrderIcon}
          />
          <StatsCard
            title='All Time Income'
            value={`$ ${allTimeIncome}`}
            icon={totalOrderIcon}
          />
          <StatsCard
            title='Payment Per Customer'
            value={`$ ${paymentPerCustomer}`}
            icon={totalOrderIcon}
          />
          <StatsCard
            title='Most Sold Product'
            value={mostSoldProduct().name}
            icon={totalOrderIcon}
          />
          <StatsCard
            title='Most Buyer Customer'
            value={mostBuyerCustomer().name}
            icon={
              <Image
                src={mostBuyerCustomer().profile}
                width={50}
                height={50}
                alt='Buyer'
                className='rounded-xl'
              />
            }
          />
        </div>
      </div>
    </div>
  );
}
