"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
// Doğru import: src/app/components/DarkModeToggle
import DarkModeToggle from "./components/DarkModeToggle";
import {
  dashboardIcon,
  orderManagementIcon,
  customersIcon,
  couponIcon,
  categoriesIcon,
  transactionIcon,
  brandIcon,
  addProductIcon,
  productListIcon,
  manageAdminIcon,
  logsIcon,
} from "./icons/SVGIcon";

const navLinks = [
  { href: "/dashboard", label: "Dashboard", icon: dashboardIcon },
  { href: "/orders", label: "Order Management", icon: orderManagementIcon },
  { href: "/customers", label: "Customers", icon: customersIcon },
  { href: "/coupons", label: "Coupon Codes", icon: couponIcon },
  { href: "/categories", label: "Categories", icon: categoriesIcon },
  { href: "/transactions", label: "Transaction", icon: transactionIcon },
  { href: "/brands", label: "Brand", icon: brandIcon },
];
const productLinks = [
  { href: "/addproduct", label: "Add Product", icon: addProductIcon },
  { href: "/products", label: "Product List", icon: productListIcon },
];
const adminLinks = [
  { href: "/admin", label: "Manage Admins", icon: manageAdminIcon },
  { href: "/logpage", label: "Logs", icon: logsIcon },
];

const Sidebar = () => {
  return (
    <aside className="sticky top-0 h-screen flex flex-col bg-gradient-to-b from-white via-indigo-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 w-64 p-4 shadow-2xl border-r border-gray-100 dark:border-gray-800 z-30 text-gray-900 dark:text-gray-100">
      <div className="flex flex-col items-center mb-8 gap-2">
        <Image
          src="https://cdn.pixabay.com/photo/2017/01/13/01/22/rocket-1976107_1280.png"
          alt="Rocket Icon"
          width={56}
          height={56}
          className="rounded-xl shadow dark:invert"
        />
        <Link href="/" className="mt-2 text-2xl font-extrabold text-indigo-700 dark:text-yellow-300 tracking-tight drop-shadow hover:text-pink-500 transition">Dashboard</Link>
      </div>
      <nav className="flex-1 flex flex-col gap-6">
        <div>
          <div className="text-xs uppercase text-gray-400 dark:text-gray-300 font-bold mb-2 px-2 tracking-widest">Main Menu</div>
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="flex items-center gap-3 px-3 py-2 rounded-lg font-medium text-gray-700 dark:text-gray-100 hover:bg-indigo-100 dark:hover:bg-gray-800 hover:text-indigo-700 dark:hover:text-yellow-300 focus:bg-indigo-200 focus:text-indigo-900 transition group">
                  <span className="w-6 h-6 flex items-center justify-center text-gray-700 dark:text-gray-100">{link.icon}</span>
                  <span className="truncate">{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase text-gray-400 dark:text-gray-300 font-bold mb-2 px-2 tracking-widest">Products</div>
          <ul className="flex flex-col gap-1">
            {productLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="flex items-center gap-3 px-3 py-2 rounded-lg font-medium text-gray-700 dark:text-gray-100 hover:bg-indigo-100 dark:hover:bg-gray-800 hover:text-indigo-700 dark:hover:text-yellow-300 focus:bg-indigo-200 focus:text-indigo-900 transition group">
                  <span className="w-6 h-6 flex items-center justify-center text-gray-700 dark:text-gray-100">{link.icon}</span>
                  <span className="truncate">{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase text-gray-400 dark:text-gray-300 font-bold mb-2 px-2 tracking-widest">Admin</div>
          <ul className="flex flex-col gap-1">
            {adminLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="flex items-center gap-3 px-3 py-2 rounded-lg font-medium text-gray-700 dark:text-gray-100 hover:bg-indigo-100 dark:hover:bg-gray-800 hover:text-indigo-700 dark:hover:text-yellow-300 focus:bg-indigo-200 focus:text-indigo-900 transition group">
                  <span className="w-6 h-6 flex items-center justify-center text-gray-700 dark:text-gray-100">{link.icon}</span>
                  <span className="truncate">{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className="mt-auto flex justify-center pt-4">
        <DarkModeToggle />
      </div>
    </aside>
  );
};

export default Sidebar;
