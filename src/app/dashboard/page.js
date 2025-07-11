"use client";
import { useState, useEffect, useRef } from "react";
import {
  bellIcon,
  totalUserIcon,
  totalProfitIcon,
  totalOrderIcon,
} from "../icons/SVGIcon";
import Avatar from "../components/Avatar";
import Image from "next/image";
import StatsCard from "../components/StatsCard";
const orders = require("../data/orders.json");
const products = require("../data/products.json");
const customers = require("../data/customers.json");

function getMostSoldProduct() {
  let mostSold = products[0];
  products.forEach((product) => {
    if (product.sold > mostSold.sold) {
      mostSold = product;
    }
  });
  return mostSold;
}

function getMostBuyerCustomer() {
  let mostBuyer = customers[0];
  customers.forEach((customer) => {
    if (customer.totalPurchase > mostBuyer.totalPurchase) {
      mostBuyer = customer;
    }
  });
  return mostBuyer;
}

export default function Page() {
  // Canlı istatistikler ve trendler
  const [stats, setStats] = useState({
    users: 3542,
    profit: 123634,
    orders: 1245,
    income: 247268,
    paymentPerCustomer: 35,
  });
  const [trends, setTrends] = useState({
    users: undefined,
    profit: undefined,
    orders: undefined,
    income: undefined,
    paymentPerCustomer: undefined,
  });
  const prevStats = useRef(stats);

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => {
        const next = {
          users: Math.max(3000, prev.users + Math.floor(Math.random() * 8 - 4)),
          profit: Math.max(100000, prev.profit + Math.floor(Math.random() * 2000 - 1000)),
          orders: Math.max(1000, prev.orders + Math.floor(Math.random() * 10 - 5)),
          income: Math.max(200000, prev.income + Math.floor(Math.random() * 4000 - 2000)),
          paymentPerCustomer: Math.max(10, prev.paymentPerCustomer + Math.floor(Math.random() * 2 - 1)),
        };
        setTrends({
          users: next.users > prev.users ? "up" : next.users < prev.users ? "down" : undefined,
          profit: next.profit > prev.profit ? "up" : next.profit < prev.profit ? "down" : undefined,
          orders: next.orders > prev.orders ? "up" : next.orders < prev.orders ? "down" : undefined,
          income: next.income > prev.income ? "up" : next.income < prev.income ? "down" : undefined,
          paymentPerCustomer: next.paymentPerCustomer > prev.paymentPerCustomer ? "up" : next.paymentPerCustomer < prev.paymentPerCustomer ? "down" : undefined,
        });
        prevStats.current = prev;
        return next;
      });
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const mostSold = getMostSoldProduct();
  const mostBuyer = getMostBuyerCustomer();

  return (
    <div className="flex w-full flex-col min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="flex flex-row w-full mt-6 px-8 justify-between items-center">
        <h1 className="text-3xl font-extrabold text-indigo-700 drop-shadow">Dashboard</h1>
        <div className="flex flex-row items-center gap-4">
          <span>{bellIcon}</span>
          <Avatar />
        </div>
      </div>
      {/* Statistic Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center mb-16 mt-10 w-full px-8">
        <StatsCard title="Total Users" value={stats.users} icon={totalUserIcon} trend={trends.users} />
        <StatsCard title="Profit" value={`$${stats.profit.toLocaleString()}`} icon={totalProfitIcon} trend={trends.profit} />
        <StatsCard title="Total Orders" value={stats.orders} icon={totalOrderIcon} trend={trends.orders} />
        <StatsCard title="All Time Income" value={`$${stats.income.toLocaleString()}`} icon={totalOrderIcon} trend={trends.income} />
        <StatsCard title="Payment Per Customer" value={`$${stats.paymentPerCustomer}`} icon={totalOrderIcon} trend={trends.paymentPerCustomer} />
        <StatsCard title="Most Sold Product" value={mostSold.name} icon={totalOrderIcon} />
        <StatsCard title="Most Buyer Customer" value={mostBuyer.name} icon={<Image src={mostBuyer.profile} width={50} height={50} alt="Buyer" className="rounded-xl" />} />
      </div>
    </div>
  );
}
