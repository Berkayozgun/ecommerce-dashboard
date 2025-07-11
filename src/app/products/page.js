"use client";

import { useState } from "react";

const initialProducts = [
  {
    id: 1,
    name: "Apple iPhone 13",
    imageUrl: "https://i.imgur.com/3VfZ1rL.png",
    price: 1000,
    stock: 100,
    category: "Smartphone",
    status: "Active",
  },
  {
    id: 2,
    name: "Samsung Galaxy S21",
    imageUrl: "https://i.imgur.com/8w4z7pL.png",
    price: 900,
    stock: 200,
    category: "Smartphone",
    status: "Active",
  },
  {
    id: 3,
    name: "Xiaomi Mi 11",
    imageUrl: "https://i.imgur.com/7k1dX5V.png",
    price: 800,
    stock: 0,
    category: "Smartphone",
    status: "Inactive",
  },
  {
    id: 4,
    name: "OnePlus 9",
    imageUrl: "https://i.imgur.com/0b5Z2wD.png",
    price: 700,
    stock: 400,
    category: "Smartphone",
    status: "Active",
  },
  {
    id: 5,
    name: "Google Pixel 5",
    imageUrl: "https://i.imgur.com/3VfZ1rL.png",
    price: 600,
    stock: 500,
    category: "Smartphone",
    status: "Active",
  },
  {
    id: 6,
    name: "Sony WH-1000XM4",
    imageUrl: "https://i.imgur.com/0b5Z2wD.png",
    price: 350,
    stock: 50,
    category: "Headphones",
    status: "Active",
  },
  {
    id: 7,
    name: "Apple MacBook Pro 14",
    imageUrl: "https://i.imgur.com/8w4z7pL.png",
    price: 2200,
    stock: 10,
    category: "Laptop",
    status: "Active",
  },
  {
    id: 8,
    name: "Dell XPS 13",
    imageUrl: "https://i.imgur.com/7k1dX5V.png",
    price: 1800,
    stock: 0,
    category: "Laptop",
    status: "Inactive",
  },
  {
    id: 9,
    name: "Nike Air Max 270",
    imageUrl: "https://i.imgur.com/8w4z7pL.png",
    price: 180,
    stock: 75,
    category: "Shoes",
    status: "Active",
  },
  {
    id: 10,
    name: "Adidas Ultraboost",
    imageUrl: "https://i.imgur.com/7k1dX5V.png",
    price: 200,
    stock: 60,
    category: "Shoes",
    status: "Active",
  },
  {
    id: 11,
    name: "Levi's 501 Jeans",
    imageUrl: "https://i.imgur.com/0b5Z2wD.png",
    price: 90,
    stock: 120,
    category: "Clothing",
    status: "Active",
  },
  {
    id: 12,
    name: "Ray-Ban Aviator Sunglasses",
    imageUrl: "https://i.imgur.com/3VfZ1rL.png",
    price: 150,
    stock: 40,
    category: "Accessories",
    status: "Inactive",
  },
  {
    id: 13,
    name: "Apple Watch Series 7",
    imageUrl: "https://i.imgur.com/8w4z7pL.png",
    price: 399,
    stock: 30,
    category: "Electronics",
    status: "Active",
  },
  {
    id: 14,
    name: "Samsung Galaxy Tab S7",
    imageUrl: "https://i.imgur.com/7k1dX5V.png",
    price: 650,
    stock: 25,
    category: "Electronics",
    status: "Active",
  },
  {
    id: 15,
    name: "Kindle Paperwhite",
    imageUrl: "https://i.imgur.com/0b5Z2wD.png",
    price: 130,
    stock: 80,
    category: "Books",
    status: "Active",
  },
  {
    id: 16,
    name: "Dyson V11 Vacuum Cleaner",
    imageUrl: "https://i.imgur.com/3VfZ1rL.png",
    price: 599,
    stock: 15,
    category: "Home",
    status: "Inactive",
  },
  {
    id: 17,
    name: "Instant Pot Duo 7-in-1",
    imageUrl: "https://i.imgur.com/8w4z7pL.png",
    price: 99,
    stock: 50,
    category: "Home",
    status: "Active",
  },
  {
    id: 18,
    name: "Sony PlayStation 5",
    imageUrl: "https://i.imgur.com/7k1dX5V.png",
    price: 499,
    stock: 0,
    category: "Electronics",
    status: "Inactive",
  },
  {
    id: 19,
    name: "Nintendo Switch OLED",
    imageUrl: "https://i.imgur.com/0b5Z2wD.png",
    price: 349,
    stock: 22,
    category: "Electronics",
    status: "Active",
  },
  {
    id: 20,
    name: "Canon EOS M50 Camera",
    imageUrl: "https://i.imgur.com/3VfZ1rL.png",
    price: 579,
    stock: 10,
    category: "Electronics",
    status: "Active",
  },
  {
    id: 21,
    name: "The North Face Backpack",
    imageUrl: "https://i.imgur.com/8w4z7pL.png",
    price: 120,
    stock: 35,
    category: "Accessories",
    status: "Active",
  },
  {
    id: 22,
    name: "Philips Hue Smart Bulb",
    imageUrl: "https://i.imgur.com/7k1dX5V.png",
    price: 40,
    stock: 200,
    category: "Home",
    status: "Active",
  },
  {
    id: 23,
    name: "Amazon Echo Dot (4th Gen)",
    imageUrl: "https://i.imgur.com/0b5Z2wD.png",
    price: 49,
    stock: 150,
    category: "Electronics",
    status: "Active",
  },
  {
    id: 24,
    name: "GoPro HERO10 Black",
    imageUrl: "https://i.imgur.com/3VfZ1rL.png",
    price: 399,
    stock: 18,
    category: "Electronics",
    status: "Active",
  },
  {
    id: 25,
    name: "Bose QuietComfort 45",
    imageUrl: "https://i.imgur.com/8w4z7pL.png",
    price: 329,
    stock: 27,
    category: "Headphones",
    status: "Active",
  },
  {
    id: 26,
    name: "Columbia Winter Jacket",
    imageUrl: "https://i.imgur.com/7k1dX5V.png",
    price: 220,
    stock: 12,
    category: "Clothing",
    status: "Inactive",
  },
  {
    id: 27,
    name: "Apple AirPods Pro",
    imageUrl: "https://i.imgur.com/0b5Z2wD.png",
    price: 249,
    stock: 55,
    category: "Electronics",
    status: "Active",
  },
  {
    id: 28,
    name: "Samsung QLED TV 55\"",
    imageUrl: "https://i.imgur.com/3VfZ1rL.png",
    price: 899,
    stock: 8,
    category: "Electronics",
    status: "Active",
  },
];

const allCategories = [
  ...Array.from(new Set(initialProducts.map((p) => p.category))),
];
const allStatuses = ["Active", "Inactive"];

function ActionButtons() {
  return (
    <div className="flex gap-2">
      <button className="px-2 py-1 text-xs rounded bg-indigo-100 text-indigo-700 font-bold hover:bg-indigo-200 transition">Edit</button>
      <button className="px-2 py-1 text-xs rounded bg-red-100 text-red-700 font-bold hover:bg-red-200 transition">Delete</button>
      <button className="px-2 py-1 text-xs rounded bg-gray-100 text-gray-700 font-bold hover:bg-gray-200 transition">Details</button>
    </div>
  );
}

export default function Page() {
  const [products] = useState(initialProducts);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minStock, setMinStock] = useState("");
  const [maxStock, setMaxStock] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = categoryFilter ? product.category === categoryFilter : true;
    const matchesStatus = statusFilter ? product.status === statusFilter : true;
    const matchesMinPrice = minPrice !== "" ? product.price >= Number(minPrice) : true;
    const matchesMaxPrice = maxPrice !== "" ? product.price <= Number(maxPrice) : true;
    const matchesMinStock = minStock !== "" ? product.stock >= Number(minStock) : true;
    const matchesMaxStock = maxStock !== "" ? product.stock <= Number(maxStock) : true;
    return (
      matchesSearch &&
      matchesCategory &&
      matchesStatus &&
      matchesMinPrice &&
      matchesMaxPrice &&
      matchesMinStock &&
      matchesMaxStock
    );
  });

  return (
    <div className="flex w-full flex-col p-4 min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <h1 className="text-3xl font-extrabold text-indigo-700 dark:text-yellow-300 mb-8 drop-shadow">Products</h1>
      <div className="flex flex-col md:flex-row md:items-end gap-4 mb-6 w-full max-w-6xl flex-wrap">
        <div className="flex-1 min-w-[200px]">
          <label htmlFor="search" className="block text-xs font-bold text-gray-600 dark:text-gray-300 mb-1">Search</label>
          <input
            id="search"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by product name..."
            className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-gray-800 dark:text-gray-100"
          />
        </div>
        <div className="min-w-[160px]">
          <label htmlFor="categoryFilter" className="block text-xs font-bold text-gray-600 dark:text-gray-300 mb-1">Category</label>
          <select
            id="categoryFilter"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-gray-800 dark:text-gray-100"
          >
            <option value="">All</option>
            {allCategories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div className="min-w-[120px]">
          <label htmlFor="statusFilter" className="block text-xs font-bold text-gray-600 dark:text-gray-300 mb-1">Status</label>
          <select
            id="statusFilter"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-gray-800 dark:text-gray-100"
          >
            <option value="">All</option>
            {allStatuses.map((status) => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col min-w-[180px]">
          <label className="block text-xs font-bold text-gray-600 dark:text-gray-300 mb-1">Price Range</label>
          <div className="flex gap-2">
            <input
              type="number"
              min="0"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              placeholder="Min"
              className="w-1/2 px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-gray-800 dark:text-gray-100"
            />
            <input
              type="number"
              min="0"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              placeholder="Max"
              className="w-1/2 px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-gray-800 dark:text-gray-100"
            />
          </div>
        </div>
        <div className="flex flex-col min-w-[180px]">
          <label className="block text-xs font-bold text-gray-600 dark:text-gray-300 mb-1">Stock Range</label>
          <div className="flex gap-2">
            <input
              type="number"
              min="0"
              value={minStock}
              onChange={(e) => setMinStock(e.target.value)}
              placeholder="Min"
              className="w-1/2 px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-gray-800 dark:text-gray-100"
            />
            <input
              type="number"
              min="0"
              value={maxStock}
              onChange={(e) => setMaxStock(e.target.value)}
              placeholder="Max"
              className="w-1/2 px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-gray-800 dark:text-gray-100"
            />
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800 rounded-2xl shadow-2xl bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Image</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Name</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Category</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Price</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Stock</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Status</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
            {filteredProducts.length === 0 ? (
              <tr>
                <td colSpan={7} className="text-center py-8 text-gray-400 dark:text-gray-500 text-lg">No products found.</td>
              </tr>
            ) : (
              filteredProducts.map((product) => (
                <tr key={product.id} className="hover:bg-indigo-50 dark:hover:bg-gray-800 transition">
                  <td className="px-4 py-3 whitespace-nowrap">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      width={48}
                      height={48}
                      className="rounded-lg border shadow dark:bg-gray-800"
                    />
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-bold text-indigo-700 dark:text-yellow-300">{product.name}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-500 dark:text-gray-300">{product.category}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-green-600 dark:text-green-400 font-semibold">${product.price}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-xs">
                    <span className={`px-2 py-1 rounded-full text-xs font-bold shadow border transition ${product.stock > 0 ? "bg-green-100 text-green-800 border-green-300 dark:bg-green-900 dark:text-green-200 dark:border-green-700" : "bg-red-100 text-red-800 border-red-300 dark:bg-red-900 dark:text-red-200 dark:border-red-700"}`}>
                      {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-xs">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-md border mt-2 transition ${product.status === "Active" ? "bg-green-100 text-green-800 border-green-300 dark:bg-green-900 dark:text-green-200 dark:border-green-700" : "bg-gray-100 text-gray-500 border-gray-300 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700"}`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <ActionButtons />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
