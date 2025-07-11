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

  // --- ENRICHED DATA ---
  // Orders by status
  const orderStatusCounts = orders.reduce((acc, order) => {
    acc[order.status] = (acc[order.status] || 0) + 1;
    return acc;
  }, {});
  const totalProducts = products.length;
  const outOfStockProducts = 3; // Mock: you can calculate if you have stock info
  const topCategory = (() => {
    const catCount = {};
    products.forEach((p) => {
      catCount[p.category] = (catCount[p.category] || 0) + 1;
    });
    return Object.entries(catCount).sort((a, b) => b[1] - a[1])[0]?.[0] || "-";
  })();
  // New customers (mock: last 30 days)
  const newCustomers = 2; // Mock, as no date info
  // Payment method breakdown (mocked)
  const paymentMethods = [
    { name: "Credit Card", value: 68 },
    { name: "PayPal", value: 22 },
    { name: "Bank Transfer", value: 10 },
  ];
  // Active orders (mock: status = Onaylandı)
  const activeOrders = orderStatusCounts["Onaylandı"] || 0;
  const shippedOrders = orderStatusCounts["Kargoya Verildi"] || 0;

  return (
    <div className="flex w-full flex-col min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="flex flex-row w-full mt-6 px-8 justify-between items-center">
        <h1 className="text-3xl font-extrabold text-indigo-700 dark:text-yellow-300 drop-shadow">Dashboard</h1>
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
        <StatsCard title="Active Orders" value={activeOrders} icon={totalOrderIcon} />
        <StatsCard title="Shipped Orders" value={shippedOrders} icon={totalOrderIcon} />
        <StatsCard title="Total Products" value={totalProducts} icon={totalOrderIcon} />
        <StatsCard title="Out of Stock" value={outOfStockProducts} icon={totalOrderIcon} />
        <StatsCard title="Top Category" value={topCategory} icon={totalOrderIcon} />
        <StatsCard title="New Customers (30d)" value={newCustomers} icon={totalUserIcon} />
      </div>
      {/* Payment Method Breakdown */}
      <div className="w-full max-w-2xl mx-auto mb-16">
        <h2 className="text-xl font-bold text-indigo-700 dark:text-yellow-300 mb-4">Payment Method Breakdown</h2>
        <div className="flex flex-row gap-6 justify-center">
          {paymentMethods.map((pm) => (
            <div key={pm.name} className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-xl shadow p-4 min-w-[120px] border border-gray-100 dark:border-gray-800">
              <span className="text-lg font-bold text-indigo-700 dark:text-yellow-300 mb-1">{pm.name}</span>
              <span className="text-2xl font-extrabold text-pink-500 dark:text-pink-300">{pm.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
