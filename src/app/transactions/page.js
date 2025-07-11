"use client";
import { useState } from "react";
import StatusBadge from "../components/StatusBadge";
import Button from "../components/Button";
import ActionButtons from "../components/ActionButtons";
import TableRow from "../components/TableRow";
import { useToast } from "../components/ToastContext";

const initialTransactions = [
  {
    id: 1,
    date: "2024-04-01",
    amount: 100.0,
    type: "Credit Card",
    status: "Completed",
    product: "T-shirt",
    buyer: "John Doe",
    shippingStatus: "Shipped",
    trackingNumber: "ABC123456789",
    notes: "Customer requested express delivery",
  },
  {
    id: 2,
    date: "2024-04-02",
    amount: 50.0,
    type: "PayPal",
    status: "Completed",
    product: "Jeans",
    buyer: "Jane Smith",
    shippingStatus: "In Progress",
    trackingNumber: null,
    notes: "",
  },
  {
    id: 3,
    date: "2024-04-03",
    amount: 75.0,
    type: "Bank Transfer",
    status: "Pending",
    product: "Sneakers",
    buyer: "Bob Johnson",
    shippingStatus: "Not Shipped",
    trackingNumber: null,
    notes: "Waiting for payment confirmation",
  },
  {
    id: 4,
    date: "2024-04-04",
    amount: 200.0,
    type: "Credit Card",
    status: "Completed",
    product: "Jacket",
    buyer: "Alice Brown",
    shippingStatus: "Shipped",
    trackingNumber: "XYZ987654321",
    notes: "",
  },
  {
    id: 5,
    date: "2024-04-05",
    amount: 150.0,
    type: "PayPal",
    status: "Completed",
    product: "Dress",
    buyer: "Eve White",
    shippingStatus: "Shipped",
    trackingNumber: "DEF456123789",
    notes: "",
  },
  {
    id: 6,
    date: "2024-04-06",
    amount: 120.0,
    type: "Credit Card",
    status: "Completed",
    product: "Hat",
    buyer: "Charlie Black",
    shippingStatus: "Shipped",
    trackingNumber: "GHI654321987",
    notes: "",
  },
  {
    id: 7,
    date: "2024-04-07",
    amount: 80.0,
    type: "PayPal",
    status: "Completed",
    product: "Shoes",
    buyer: "David Green",
    shippingStatus: "Shipped",
    trackingNumber: "JKL321987654",
    notes: "",
  },
  {
    id: 8,
    date: "2024-04-08",
    amount: 90.0,
    type: "Credit Card",
    status: "Completed",
    product: "Socks",
    buyer: "Frank Grey",
    shippingStatus: "Shipped",
    trackingNumber: "MNO987654321",
    notes: "",
  },
  {
    id: 9,
    date: "2024-04-09",
    amount: 70.0,
    type: "PayPal",
    status: "Completed",
    product: "Gloves",
    buyer: "George Brown",
    shippingStatus: "Shipped",
    trackingNumber: "PQR654321987",
    notes: "",
  },
  {
    id: 10,
    date: "2024-04-10",
    amount: 110.0,
    type: "Credit Card",
    status: "Completed",
    product: "Scarf",
    buyer: "Helen White",
    shippingStatus: "Shipped",
    trackingNumber: "STU321987654",
    notes: "",
  },
];

export default function Page() {
  const [transactions, setTransactions] = useState(initialTransactions);
  const { showToast } = useToast();

  const handleEdit = (id) => {
    const tx = transactions.find((t) => t.id === id);
    showToast(`Edit transaction #${id} (${tx.product})`, "info");
  };
  const handleDelete = (id) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
    showToast(`Transaction #${id} deleted.`, "warning");
  };
  // Placeholder for loading state
  // const isLoading = false;
  // if (isLoading) return <Skeleton height={48} />;

  return (
    <div className="flex w-full flex-col p-4 min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <h1 className="text-3xl font-extrabold text-indigo-700 dark:text-yellow-300 mb-8 drop-shadow">Transactions</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800 rounded-2xl shadow-2xl bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">ID</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Date</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Amount</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Type</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Status</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Product</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Buyer</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Shipping</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Tracking</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Notes</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <td className="px-4 py-3 whitespace-nowrap">{transaction.id}</td>
                <td className="px-4 py-3 whitespace-nowrap">{transaction.date}</td>
                <td className="px-4 py-3 whitespace-nowrap text-green-700 dark:text-green-200 font-bold">${transaction.amount.toFixed(2)}</td>
                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-500 dark:text-gray-300">{transaction.type}</td>
                <td className="px-4 py-3 whitespace-nowrap"><StatusBadge status={transaction.status} /></td>
                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-200">{transaction.product}</td>
                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-200">{transaction.buyer}</td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <StatusBadge status={transaction.shippingStatus} />
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-500 dark:text-gray-300">{transaction.trackingNumber || '-'}</td>
                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-400 dark:text-gray-200 max-w-xs truncate">{transaction.notes || '-'}</td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <ActionButtons
                    onEdit={() => handleEdit(transaction.id)}
                    onDelete={() => handleDelete(transaction.id)}
                    onDetails={() => showToast(`Details for transaction #${transaction.id}`, "info")}
                  />
                </td>
              </TableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
