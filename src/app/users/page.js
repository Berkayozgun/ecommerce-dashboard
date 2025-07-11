"use client";
import { useState } from "react";

const initialUsers = [
  {
    id: 1,
    name: "Admin User",
    email: "admin@ecommerce.com",
    role: "Admin",
    status: "Active",
    profileImage: "https://i.pravatar.cc/150?u=adminuser",
  },
  {
    id: 2,
    name: "Store Manager",
    email: "manager@ecommerce.com",
    role: "Manager",
    status: "Active",
    profileImage: "https://i.pravatar.cc/150?u=manageruser",
  },
  {
    id: 3,
    name: "Support Staff",
    email: "support@ecommerce.com",
    role: "Support",
    status: "Inactive",
    profileImage: "https://i.pravatar.cc/150?u=supportuser",
  },
  {
    id: 4,
    name: "Content Editor",
    email: "editor@ecommerce.com",
    role: "Editor",
    status: "Active",
    profileImage: "https://i.pravatar.cc/150?u=editoruser",
  },
  {
    id: 5,
    name: "Finance Officer",
    email: "finance@ecommerce.com",
    role: "Finance",
    status: "Inactive",
    profileImage: "https://i.pravatar.cc/150?u=financeuser",
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
  const [users] = useState(initialUsers);

  return (
    <div className="flex w-full flex-col p-4 min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <h1 className="text-3xl font-extrabold text-indigo-700 mb-8 drop-shadow">Users</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 rounded-2xl shadow-2xl bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Avatar</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Name</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Email</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Role</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Status</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-indigo-50 transition">
                <td className="px-4 py-3 whitespace-nowrap">
                  <img
                    src={user.profileImage}
                    alt={user.name}
                    width={40}
                    height={40}
                    className="rounded-full border shadow"
                  />
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm font-bold text-indigo-700">{user.name}</td>
                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-500">{user.email}</td>
                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-500">{user.role}</td>
                <td className="px-4 py-3 whitespace-nowrap text-xs">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-md border mt-2 transition ${user.status === "Active" ? "bg-green-100 text-green-800 border-green-300" : "bg-gray-100 text-gray-500 border-gray-300"}`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <ActionButtons />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
