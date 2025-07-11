"use client";
import { useState, useEffect, useRef } from "react";
import StatCard from "./components/StatsCard";
import {
  totalOrderIcon,
  totalUserIcon,
  totalProfitIcon,
  dashboardIcon,
  orderManagementIcon,
  customersIcon,
  couponIcon,
  categoriesIcon,
  transactionIcon,
  brandIcon,
  addProductIcon,
  productListIcon,
  logsIcon,
  bellIcon,
} from "./icons/SVGIcon";

export default function Home() {
  // Live stats state
  const [stats, setStats] = useState({
    orders: 1245,
    users: 3542,
    revenue: 124500,
    visitors: 5342,
  });
  // Track previous values for trend
  const prevStats = useRef(stats);
  const [trends, setTrends] = useState({
    orders: undefined,
    users: undefined,
    revenue: undefined,
    visitors: undefined,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => {
        const next = {
          orders: Math.max(1000, prev.orders + Math.floor(Math.random() * 10 - 5)),
          users: Math.max(3000, prev.users + Math.floor(Math.random() * 8 - 4)),
          revenue: Math.max(100000, prev.revenue + Math.floor(Math.random() * 200 - 100)),
          visitors: Math.max(1000, prev.visitors + Math.floor(Math.random() * 20 - 10)),
        };
        setTrends({
          orders: next.orders > prev.orders ? "up" : next.orders < prev.orders ? "down" : undefined,
          users: next.users > prev.users ? "up" : next.users < prev.users ? "down" : undefined,
          revenue: next.revenue > prev.revenue ? "up" : next.revenue < prev.revenue ? "down" : undefined,
          visitors: next.visitors > prev.visitors ? "up" : next.visitors < prev.visitors ? "down" : undefined,
        });
        prevStats.current = prev;
        return next;
      });
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex flex-col items-center justify-start p-8">
      <div className="w-full max-w-5xl">
        <div className="flex flex-col items-center mb-8">
          <span className="mb-2">{dashboardIcon}</span>
          <h1 className="text-4xl font-extrabold text-indigo-700 mb-2 drop-shadow">E-commerce Dashboard</h1>
          <p className="text-lg text-gray-600">Welcome! Here is your system's current status and summary statistics.</p>
        </div>
        {/* Statistic Cards */}
        <div className="flex flex-nowrap gap-6 justify-center mb-16 overflow-x-auto w-full h-44">
          <StatCard title="Total Orders" value={stats.orders} icon={totalOrderIcon} trend={trends.orders} />
          <StatCard title="Total Users" value={stats.users} icon={totalUserIcon} trend={trends.users} />
          <StatCard title="Total Revenue" value={`$${stats.revenue.toLocaleString()}`} icon={totalProfitIcon} trend={trends.revenue} />
          <StatCard title="Daily Page Visitors" value={stats.visitors} icon={totalUserIcon} trend={trends.visitors} />
        </div>
        {/* System Status */}
        <div className="bg-white/80 rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-indigo-600 mb-4 flex items-center gap-2">{bellIcon} System Status</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <StatusItem label="Server" status="Online" icon={dashboardIcon} />
            <StatusItem label="Customer Support" status="Online" icon={customersIcon} />
            <StatusItem label="Seller Support" status="Online" icon={orderManagementIcon} />
            <StatusItem label="Payment Gateway" status="Online" icon={transactionIcon} />
            <StatusItem label="Web API" status="Online" icon={productListIcon} />
            <StatusItem label="Store API" status="Online" icon={brandIcon} />
            <StatusItem label="Login API" status="Online" icon={addProductIcon} />
            <StatusItem label="Internal API" status="Online" icon={logsIcon} />
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusItem({ label, status, icon }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-indigo-100 to-purple-100 shadow">
      <span className="w-6 h-6 flex items-center justify-center">{icon}</span>
      <span className="font-medium text-gray-700 flex-1">{label}</span>
      <span
        className={`text-white px-2 py-1 rounded-md text-sm font-semibold ${
          status === "Online" ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {status}
      </span>
    </div>
  );
}
