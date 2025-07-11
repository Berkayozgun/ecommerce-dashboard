"use client";
import { useState } from "react";

const initialCategories = [
  {
    id: 1,
    name: "Electronics",
    description: "Electronics and Gadgets",
    image: "https://i.pravatar.cc/150?u=Electronics",
    status: "Active",
  },
  {
    id: 2,
    name: "Clothing",
    description: "Clothing and Accessories",
    image: "https://i.pravatar.cc/150?u=Clothing",
    status: "Active",
  },
  {
    id: 3,
    name: "Books",
    description: "Books and Stationary",
    image: "https://i.pravatar.cc/150?u=Books",
    status: "Active",
  },
  {
    id: 4,
    name: "Furniture",
    description: "Furniture and Home Decor",
    image: "https://i.pravatar.cc/150?u=Furniture",
    status: "Active",
  },
  {
    id: 5,
    name: "Grocery",
    description: "Grocery and Staples",
    image: "https://i.pravatar.cc/150?u=Grocery",
    status: "Active",
  },
  {
    id: 6,
    name: "Sports",
    description: "Sports and Fitness",
    image: "https://i.pravatar.cc/150?u=Sports",
    status: "Active",
  },
  {
    id: 7,
    name: "Toys",
    description: "Toys and Games",
    image: "https://i.pravatar.cc/150?u=Toys",
    status: "Active",
  },
  {
    id: 8,
    name: "Automobile",
    description: "Automobile and Accessories",
    image: "https://i.pravatar.cc/150?u=Automobile",
    status: "Active",
  },
  {
    id: 9,
    name: "Beauty",
    description: "Beauty and Personal Care",
    image: "https://i.pravatar.cc/150?u=Beauty",
    status: "Active",
  },
  {
    id: 10,
    name: "Health",
    description: "Health and Wellness",
    image: "https://i.pravatar.cc/150?u=Health",
    status: "Active",
  },
  {
    id: 11,
    name: "Jewellery",
    description: "Jewellery and Accessories",
    image: "https://i.pravatar.cc/150?u=Jewellery",
    status: "Active",
  },
  {
    id: 12,
    name: "Pets",
    description: "Pets and Accessories",
    image: "https://i.pravatar.cc/150?u=Pets",
    status: "Active",
  },
  {
    id: 13,
    name: "Tools",
    description: "Tools and Hardware",
    image: "https://i.pravatar.cc/150?u=Tools",
    status: "Active",
  },
  {
    id: 14,
    name: "Travel",
    description: "Travel and Luggage",
    image: "https://i.pravatar.cc/150?u=Travel",
    status: "Active",
  },
  {
    id: 15,
    name: "Watches",
    description: "Watches and Accessories",
    image: "https://i.pravatar.cc/150?u=Watches",
    status: "Inactive",
  },
];

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
  const [categories] = useState(initialCategories);

  return (
    <div className="flex w-full flex-col p-4 min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <h1 className="text-3xl font-extrabold text-indigo-700 dark:text-yellow-300 mb-8 drop-shadow">Categories</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800 rounded-2xl shadow-2xl bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Image</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Name</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Description</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Status</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
            {categories.map((cat) => (
              <tr key={cat.id} className="hover:bg-indigo-50 dark:hover:bg-gray-800 transition">
                <td className="px-4 py-3 whitespace-nowrap">
                  <img src={cat.imageUrl} alt={cat.name} width={40} height={40} className="rounded border shadow" />
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm font-bold text-indigo-700 dark:text-yellow-300">{cat.name}</td>
                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-500 dark:text-gray-300">{cat.description}</td>
                <td className="px-4 py-3 whitespace-nowrap text-xs">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-md border mt-2 transition ${cat.status === "Active" ? "bg-green-100 text-green-800 border-green-300 dark:bg-green-800 dark:text-white dark:border-green-900" : "bg-gray-100 text-gray-500 border-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-900"}`}>{cat.status}</span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex gap-2">
                    <button className="px-2 py-1 text-xs rounded bg-indigo-100 text-indigo-700 font-bold hover:bg-indigo-200 transition dark:bg-indigo-800 dark:text-yellow-300 dark:hover:bg-indigo-900 border border-indigo-200 dark:border-indigo-900">Edit</button>
                    <button className="px-2 py-1 text-xs rounded bg-red-100 text-red-700 font-bold hover:bg-red-200 transition dark:bg-red-800 dark:text-red-200 dark:hover:bg-red-900 border border-red-200 dark:border-red-900">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
