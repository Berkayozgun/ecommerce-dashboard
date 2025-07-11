"use client";

import faker from "faker";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import StatusBadge from "../components/StatusBadge";
import ActionButtons from "../components/ActionButtons";
import TableRow from "../components/TableRow";

const generateAdminData = () => {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const email = faker.internet.email();
  const username = faker.internet.userName();
  const avatar = faker.image.avatar();
  const permissions = faker.random.arrayElements([
    "Dashboard",
    "Product Management",
    "Order Management",
    "User Management",
    "Brand Management",
    "Category Management",
    "Coupon Management",
    "Analytics",
    "Settings",
  ], faker.datatype.number({ min: 2, max: 4 }));
  const status = faker.random.arrayElement(["Active", "Inactive"]);
  const lastSeen = faker.date.recent(30);
  return {
    id: faker.datatype.uuid(),
    firstName,
    lastName,
    email,
    username,
    avatar,
    permissions,
    status,
    lastSeen,
  };
};

export default function Page() {
  const [adminData, setAdminData] = useState([]);
  const [avatarUrls, setAvatarUrls] = useState([]);

  useEffect(() => {
    const data = Array.from({ length: 12 }, generateAdminData);
    setAdminData(data);
    setAvatarUrls(data.map(a => a.avatar));
  }, []);

  const handleImgError = (idx) => {
    setAvatarUrls(prev => {
      const updated = [...prev];
      updated[idx] = 'https://i.pravatar.cc/150?u=defaultadmin';
      return updated;
    });
  };

  return (
    <div className="flex w-full flex-col p-4 min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <h1 className="text-3xl font-extrabold text-indigo-700 dark:text-yellow-300 mb-8 drop-shadow">Admins</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800 rounded-2xl shadow-2xl bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Avatar</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Name</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Email</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Username</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Permissions</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Status</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Last Seen</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
            {adminData.map((admin, idx) => (
              <TableRow key={admin.id}>
                <td className="px-4 py-3 whitespace-nowrap">
                  <img
                    src={avatarUrls[idx]}
                    alt={`${admin.firstName} ${admin.lastName}`}
                    width={40}
                    height={40}
                    className="rounded-full border shadow bg-white dark:bg-gray-800"
                    onError={() => handleImgError(idx)}
                  />
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm font-bold text-indigo-700 dark:text-yellow-300">{admin.firstName} {admin.lastName}</td>
                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-500 dark:text-gray-300">{admin.email}</td>
                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-500 dark:text-gray-300">@{admin.username}</td>
                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-500 dark:text-gray-300">
                  <ul className="list-disc list-inside">
                    {admin.permissions.map((perm, idx2) => (
                      <li key={idx2}>{perm}</li>
                    ))}
                  </ul>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-xs">
                  <StatusBadge status={admin.status} />
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-400 dark:text-gray-200">{admin.lastSeen.toLocaleDateString()}</td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <ActionButtons />
                </td>
              </TableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
