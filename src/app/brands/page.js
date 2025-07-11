"use client";
import { useState } from "react";

const initialBrands = [
  {
    id: 1,
    name: "Apple",
    imageUrl: "https://i.imgur.com/3VfZ1rL.png",
    email: "apple@apple.com",
    role: "Admin",
    lastSeen: "2 h ago",
    status: "Active",
  },
  {
    id: 2,
    name: "Google",
    imageUrl: "https://i.imgur.com/8w4z7pL.png",
    email: "google@google.com",
    role: "Editor",
    lastSeen: "2 d ago",
    status: "Active",
  },
  {
    id: 3,
    name: "Microsoft",
    imageUrl: "https://i.imgur.com/7k1dX5V.png",
    email: "microsoft@microsoft.com",
    role: "Viewer",
    lastSeen: "1 w ago",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Facebook",
    imageUrl: "https://i.imgur.com/0b5Z2wD.png",
    email: "facebook@facebook.com",
    role: "Admin",
    lastSeen: "4 w ago",
    status: "Active",
  },
  {
    id: 5,
    name: "Amazon",
    imageUrl: "https://i.imgur.com/3VfZ1rL.png",
    email: "amazon@amazon.com",
    role: "Editor",
    lastSeen: "1 yr ago",
    status: "Inactive",
  },
  {
    id: 6,
    name: "Samsung",
    imageUrl: "https://i.imgur.com/8w4z7pL.png",
    email: "samsung@samsung.com",
    role: "Admin",
    lastSeen: "3 d ago",
    status: "Active",
  },
  {
    id: 7,
    name: "Sony",
    imageUrl: "https://i.imgur.com/7k1dX5V.png",
    email: "sony@sony.com",
    role: "Viewer",
    lastSeen: "2 w ago",
    status: "Inactive",
  },
  {
    id: 8,
    name: "Nike",
    imageUrl: "https://i.imgur.com/0b5Z2wD.png",
    email: "nike@nike.com",
    role: "Editor",
    lastSeen: "5 d ago",
    status: "Active",
  },
  {
    id: 9,
    name: "Adidas",
    imageUrl: "https://i.imgur.com/3VfZ1rL.png",
    email: "adidas@adidas.com",
    role: "Admin",
    lastSeen: "1 mo ago",
    status: "Active",
  },
  {
    id: 10,
    name: "Puma",
    imageUrl: "https://i.imgur.com/8w4z7pL.png",
    email: "puma@puma.com",
    role: "Viewer",
    lastSeen: "2 mo ago",
    status: "Inactive",
  },
  {
    id: 11,
    name: "Zara",
    imageUrl: "https://i.imgur.com/7k1dX5V.png",
    email: "zara@zara.com",
    role: "Editor",
    lastSeen: "6 d ago",
    status: "Active",
  },
  {
    id: 12,
    name: "H&M",
    imageUrl: "https://i.imgur.com/0b5Z2wD.png",
    email: "hm@hm.com",
    role: "Admin",
    lastSeen: "3 w ago",
    status: "Inactive",
  },
  {
    id: 13,
    name: "Tesla",
    imageUrl: "https://i.imgur.com/3VfZ1rL.png",
    email: "tesla@tesla.com",
    role: "Editor",
    lastSeen: "8 h ago",
    status: "Active",
  },
  {
    id: 14,
    name: "BMW",
    imageUrl: "https://i.imgur.com/8w4z7pL.png",
    email: "bmw@bmw.com",
    role: "Viewer",
    lastSeen: "2 mo ago",
    status: "Inactive",
  },
  {
    id: 15,
    name: "Mercedes",
    imageUrl: "https://i.imgur.com/7k1dX5V.png",
    email: "mercedes@mercedes.com",
    role: "Admin",
    lastSeen: "1 d ago",
    status: "Active",
  },
  {
    id: 16,
    name: "Gucci",
    imageUrl: "https://i.imgur.com/0b5Z2wD.png",
    email: "gucci@gucci.com",
    role: "Editor",
    lastSeen: "4 d ago",
    status: "Active",
  },
  {
    id: 17,
    name: "Rolex",
    imageUrl: "https://i.imgur.com/3VfZ1rL.png",
    email: "rolex@rolex.com",
    role: "Viewer",
    lastSeen: "1 yr ago",
    status: "Inactive",
  },
  {
    id: 18,
    name: "IKEA",
    imageUrl: "https://i.imgur.com/8w4z7pL.png",
    email: "ikea@ikea.com",
    role: "Admin",
    lastSeen: "2 h ago",
    status: "Active",
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
  const [brands] = useState(initialBrands);

  return (
    <div className="flex w-full flex-col p-4 min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <h1 className="text-3xl font-extrabold text-indigo-700 dark:text-yellow-300 mb-8 drop-shadow">Brands</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800 rounded-2xl shadow-2xl bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Logo</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Name</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Email</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Role</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Last Seen</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Status</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
            {brands.map((brand) => (
              <tr key={brand.id} className="hover:bg-indigo-50 dark:hover:bg-gray-800 transition">
                <td className="px-4 py-3 whitespace-nowrap">
                  <img src={brand.imageUrl} alt={brand.name} width={40} height={40} className="rounded-full border shadow" />
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm font-bold text-indigo-700 dark:text-yellow-300">{brand.name}</td>
                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-500 dark:text-gray-300">{brand.email}</td>
                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-500 dark:text-gray-300">{brand.role}</td>
                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-400 dark:text-gray-200">{brand.lastSeen}</td>
                <td className="px-4 py-3 whitespace-nowrap text-xs">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-md border mt-2 transition ${brand.status === "Active" ? "bg-green-100 text-green-800 border-green-300 dark:bg-green-800 dark:text-white dark:border-green-900" : "bg-gray-100 text-gray-500 border-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-900"}`}>{brand.status}</span>
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
