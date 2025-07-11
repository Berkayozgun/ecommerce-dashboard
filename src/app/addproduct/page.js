"use client";
import React, { useState } from "react";

const categories = [
  "Electronics",
  "Clothing",
  "Books",
  "Furniture",
  "Grocery",
  "Sports",
  "Toys",
  "Automobile",
  "Beauty",
  "Health",
  "Jewellery",
  "Pets",
  "Tools",
  "Travel",
  "Watches",
];

export default function Page() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [imageUrl, setImageUrl] = useState("");
  const [status, setStatus] = useState("Active");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    if (!productName.trim() || !price || !stock || !category || !imageUrl.trim()) {
      setError("Please fill in all fields.");
      return;
    }
    if (Number(price) <= 0) {
      setError("Price must be positive.");
      return;
    }
    if (Number(stock) < 0) {
      setError("Stock cannot be negative.");
      return;
    }
    setSuccess(true);
    setProductName("");
    setPrice("");
    setStock("");
    setCategory(categories[0]);
    setImageUrl("");
    setStatus("Active");
  };

  // Helper for floating label on select
  const isCategorySelected = category && category !== "";
  const isStatusSelected = status && status !== "";

  return (
    <div className="max-w-xl mx-auto p-8 bg-white dark:bg-gray-900 rounded-3xl shadow-2xl mt-12 border border-gray-100 dark:border-gray-800 flex flex-col gap-6">
      <h2 className="text-4xl font-extrabold text-indigo-700 dark:text-yellow-300 mb-2 drop-shadow text-center tracking-tight">Add New Product</h2>
      <p className="text-center text-gray-500 dark:text-gray-300 mb-4">Fill in the details below to add a new product to your store.</p>
      <form onSubmit={handleSubmit} className="space-y-7">
        <div className="relative">
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
            className="peer h-12 w-full border-b-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-4 pt-4 text-gray-900 dark:text-gray-100 placeholder-transparent focus:outline-none focus:border-indigo-500 dark:focus:border-yellow-300 rounded-t-md transition"
            placeholder="Product Name"
          />
          <label htmlFor="productName" className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-gray-500 peer-focus:top-1 peer-focus:text-xs peer-focus:text-indigo-600 dark:peer-focus:text-yellow-300 bg-white dark:bg-gray-900 px-1 pointer-events-none">Product Name</label>
        </div>
        <div className="relative flex gap-4">
          <div className="relative w-1/2">
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              min="0"
              step="0.01"
              className="peer h-12 w-full border-b-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-4 pt-4 text-gray-900 dark:text-gray-100 placeholder-transparent focus:outline-none focus:border-indigo-500 dark:focus:border-yellow-300 rounded-t-md transition"
              placeholder="Price"
            />
            <label htmlFor="price" className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-gray-500 peer-focus:top-1 peer-focus:text-xs peer-focus:text-indigo-600 dark:peer-focus:text-yellow-300 bg-white dark:bg-gray-900 px-1 pointer-events-none">Price (₺)</label>
          </div>
          <div className="relative w-1/2">
            <input
              type="number"
              id="stock"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              required
              min="0"
              className="peer h-12 w-full border-b-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-4 pt-4 text-gray-900 dark:text-gray-100 placeholder-transparent focus:outline-none focus:border-indigo-500 dark:focus:border-yellow-300 rounded-t-md transition"
              placeholder="Stock"
            />
            <label htmlFor="stock" className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-gray-500 peer-focus:top-1 peer-focus:text-xs peer-focus:text-indigo-600 dark:peer-focus:text-yellow-300 bg-white dark:bg-gray-900 px-1 pointer-events-none">Stock</label>
          </div>
        </div>
        <div className="relative">
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className={`peer h-12 w-full border-b-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-4 pt-4 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-indigo-500 dark:focus:border-yellow-300 rounded-t-md transition appearance-none ${!isCategorySelected ? 'text-gray-400 dark:text-gray-500' : ''}`}
            onBlur={() => {}}
          >
            <option value="" disabled hidden>Select category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <label
            htmlFor="category"
            className={`absolute left-4 transition-all bg-white dark:bg-gray-900 px-1 pointer-events-none text-gray-500 dark:text-gray-400 text-sm
              ${isCategorySelected ? 'top-1 text-xs text-indigo-600 dark:text-yellow-300' : 'top-4 text-base text-gray-400 dark:text-gray-500'}`}
          >
            Category
          </label>
        </div>
        <div className="relative">
          <input
            type="url"
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
            className="peer h-12 w-full border-b-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-4 pt-4 text-gray-900 dark:text-gray-100 placeholder-transparent focus:outline-none focus:border-indigo-500 dark:focus:border-yellow-300 rounded-t-md transition"
            placeholder="Product Image URL"
          />
          <label htmlFor="imageUrl" className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-gray-500 peer-focus:top-1 peer-focus:text-xs peer-focus:text-indigo-600 dark:peer-focus:text-yellow-300 bg-white dark:bg-gray-900 px-1 pointer-events-none">Product Image (URL)</label>
          {imageUrl && (
            <div className="mt-3 flex justify-center">
              <img src={imageUrl} alt="Preview" className="h-24 w-24 object-cover rounded-lg border shadow bg-white dark:bg-gray-800" onError={e => e.target.style.display='none'} />
            </div>
          )}
        </div>
        <div className="relative">
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
            className={`peer h-12 w-full border-b-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-4 pt-4 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-indigo-500 dark:focus:border-yellow-300 rounded-t-md transition appearance-none ${!isStatusSelected ? 'text-gray-400 dark:text-gray-500' : ''}`}
            onBlur={() => {}}
          >
            <option value="" disabled hidden>Select status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          <label
            htmlFor="status"
            className={`absolute left-4 transition-all bg-white dark:bg-gray-900 px-1 pointer-events-none text-gray-500 dark:text-gray-400 text-sm
              ${isStatusSelected ? 'top-1 text-xs text-indigo-600 dark:text-yellow-300' : 'top-4 text-base text-gray-400 dark:text-gray-500'}`}
          >
            Status
          </label>
        </div>
        {error && <div className="text-red-600 dark:text-red-400 text-sm font-semibold text-center">{error}</div>}
        {success && <div className="text-green-600 dark:text-green-400 text-sm font-semibold text-center">Product added successfully!</div>}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white py-3 px-4 rounded-xl hover:from-indigo-600 hover:to-pink-600 transition duration-300 font-bold text-lg shadow-lg mt-2 tracking-wide"
        >
          <span className="inline-flex items-center gap-2 justify-center">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
            Add Product
          </span>
        </button>
      </form>
    </div>
  );
}
