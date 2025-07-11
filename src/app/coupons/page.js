"use client";
import { useState } from "react";
import StatusBadge from "../components/StatusBadge";
import Button from "../components/Button";
import TableRow from "../components/TableRow";
import { useToast } from "../components/ToastContext";

const initialCoupons = [
  {
    couponId: 1,
    couponCode: "SAVE10",
    couponType: "Percentage",
    couponValue: 10,
    couponMinAmount: 50,
    couponMaxAmount: 1000,
    couponStartDate: "2024-04-01",
    couponEndDate: "2024-04-30",
    couponStatus: "Active",
  },
  {
    couponId: 2,
    couponCode: "SAVE20",
    couponType: "Percentage",
    couponValue: 20,
    couponMinAmount: 100,
    couponMaxAmount: 500,
    couponStartDate: "2024-04-01",
    couponEndDate: "2024-04-30",
    couponStatus: "Active",
  },
  {
    couponId: 3,
    couponCode: "SAVE30",
    couponType: "Percentage",
    couponValue: 30,
    couponMinAmount: 150,
    couponMaxAmount: 2000,
    couponStartDate: "2024-04-01",
    couponEndDate: "2024-04-30",
    couponStatus: "Active",
  },
  {
    couponId: 4,
    couponCode: "SAVE40",
    couponType: "Percentage",
    couponValue: 40,
    couponMinAmount: 200,
    couponMaxAmount: 1000,
    couponStartDate: "2024-04-01",
    couponEndDate: "2024-04-30",
    couponStatus: "Active",
  },
  {
    couponId: 5,
    couponCode: "SAVE50",
    couponType: "Percentage",
    couponValue: 50,
    couponMinAmount: 250,
    couponMaxAmount: 1500,
    couponStartDate: "2024-04-01",
    couponEndDate: "2024-04-30",
    couponStatus: "Active",
  },
  {
    couponId: 6,
    couponCode: "FREESHIP",
    couponType: "Free Shipping",
    couponValue: 0,
    couponMinAmount: 30,
    couponMaxAmount: 500,
    couponStartDate: "2024-05-01",
    couponEndDate: "2024-05-31",
    couponStatus: "Active",
  },
  {
    couponId: 7,
    couponCode: "WELCOME15",
    couponType: "Percentage",
    couponValue: 15,
    couponMinAmount: 60,
    couponMaxAmount: 800,
    couponStartDate: "2024-05-10",
    couponEndDate: "2024-06-10",
    couponStatus: "Inactive",
  },
  {
    couponId: 8,
    couponCode: "SPRING25",
    couponType: "Percentage",
    couponValue: 25,
    couponMinAmount: 120,
    couponMaxAmount: 1200,
    couponStartDate: "2024-04-15",
    couponEndDate: "2024-05-15",
    couponStatus: "Active",
  },
  {
    couponId: 9,
    couponCode: "BULK5",
    couponType: "Fixed",
    couponValue: 5,
    couponMinAmount: 20,
    couponMaxAmount: 200,
    couponStartDate: "2024-05-01",
    couponEndDate: "2024-06-01",
    couponStatus: "Inactive",
  },
  {
    couponId: 10,
    couponCode: "SUMMER30",
    couponType: "Percentage",
    couponValue: 30,
    couponMinAmount: 200,
    couponMaxAmount: 1500,
    couponStartDate: "2024-06-01",
    couponEndDate: "2024-06-30",
    couponStatus: "Active",
  },
  {
    couponId: 11,
    couponCode: "VIP50",
    couponType: "Percentage",
    couponValue: 50,
    couponMinAmount: 500,
    couponMaxAmount: 3000,
    couponStartDate: "2024-05-20",
    couponEndDate: "2024-07-01",
    couponStatus: "Inactive",
  },
  {
    couponId: 12,
    couponCode: "FLASH12",
    couponType: "Fixed",
    couponValue: 12,
    couponMinAmount: 80,
    couponMaxAmount: 600,
    couponStartDate: "2024-05-15",
    couponEndDate: "2024-05-20",
    couponStatus: "Active",
  },
  {
    couponId: 13,
    couponCode: "AUTUMN10",
    couponType: "Percentage",
    couponValue: 10,
    couponMinAmount: 40,
    couponMaxAmount: 400,
    couponStartDate: "2024-09-01",
    couponEndDate: "2024-09-30",
    couponStatus: "Inactive",
  },
  {
    couponId: 14,
    couponCode: "STUDENT20",
    couponType: "Percentage",
    couponValue: 20,
    couponMinAmount: 70,
    couponMaxAmount: 700,
    couponStartDate: "2024-05-01",
    couponEndDate: "2024-06-01",
    couponStatus: "Active",
  },
  {
    couponId: 15,
    couponCode: "LOYALTY5",
    couponType: "Fixed",
    couponValue: 5,
    couponMinAmount: 25,
    couponMaxAmount: 250,
    couponStartDate: "2024-05-01",
    couponEndDate: "2024-12-31",
    couponStatus: "Active",
  },
  {
    couponId: 16,
    couponCode: "BLACKFRIDAY",
    couponType: "Percentage",
    couponValue: 40,
    couponMinAmount: 300,
    couponMaxAmount: 2000,
    couponStartDate: "2024-11-25",
    couponEndDate: "2024-11-30",
    couponStatus: "Inactive",
  },
];

export default function Page() {
  const [coupons, setCoupons] = useState(initialCoupons);
  const { showToast } = useToast();

  const handleToggle = (id) => {
    setCoupons((prev) =>
      prev.map((coupon) =>
        coupon.couponId === id
          ? {
              ...coupon,
              couponStatus: coupon.couponStatus === "Active" ? "Inactive" : "Active",
            }
          : coupon
      )
    );
    const toggled = coupons.find((c) => c.couponId === id);
    showToast(
      toggled.couponStatus === "Active"
        ? `Coupon ${toggled.couponCode} disabled.`
        : `Coupon ${toggled.couponCode} enabled.`,
      toggled.couponStatus === "Active" ? "warning" : "success"
    );
  };

  // Placeholder for loading state
  // const isLoading = false;
  // if (isLoading) return <Skeleton height={48} />;

  return (
    <div className="flex w-full flex-col p-4 min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <h1 className="text-3xl font-extrabold text-indigo-700 dark:text-yellow-300 mb-8 drop-shadow">Coupons</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800 rounded-2xl shadow-2xl bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Image</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Code</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Type</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Value</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Min/Max</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Start</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">End</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Status</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Active</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
            {coupons.map((coupon) => (
              <TableRow key={coupon.couponId}>
                <td className="px-4 py-3 whitespace-nowrap">
                  {/* Placeholder image, update as needed */}
                  <img src={coupon.imageUrl || "/coupon.svg"} alt={coupon.couponCode} width={40} height={40} className="rounded border shadow bg-white dark:bg-gray-800" />
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm font-bold text-indigo-700 dark:text-yellow-300">{coupon.couponCode}</td>
                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-500 dark:text-gray-300">{coupon.couponType}</td>
                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-500 dark:text-gray-300">{coupon.couponValue}</td>
                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-500 dark:text-gray-300">{coupon.couponMinAmount} / {coupon.couponMaxAmount}</td>
                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-400 dark:text-gray-200">{coupon.couponStartDate}</td>
                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-400 dark:text-gray-200">{coupon.couponEndDate}</td>
                <td className="px-4 py-3 whitespace-nowrap text-xs">
                  <StatusBadge status={coupon.couponStatus} />
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-xs">
                  <Button
                    variant={coupon.couponStatus === "Active" ? "danger" : "success"}
                    size="sm"
                    onClick={() => handleToggle(coupon.couponId)}
                  >
                    {coupon.couponStatus === "Active" ? "Disable" : "Enable"}
                  </Button>
                </td>
              </TableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
