"use client";
import { useState } from "react";

const initialOrders = [
  {
    id: 1,
    orderDate: "07 Feb, 2022",
    orderId: "10023456",
    product: {
      name: "Apple MacBook Pro 14",
      imageUrl: "https://i.imgur.com/8w4z7pL.png",
    },
    shop: "Amazon",
    customer: "John Doe",
    dimensions: "32x22x2",
    weight: "1.4 kg",
    price: "$2199.00",
    status: "Delivered",
  },
  {
    id: 2,
    orderDate: "12 Mar, 2022",
    orderId: "10023457",
    product: {
      name: "Sony WH-1000XM4",
      imageUrl: "https://i.imgur.com/0b5Z2wD.png",
    },
    shop: "Amazon",
    customer: "Jane Doe",
    dimensions: "20x18x8",
    weight: "0.25 kg",
    price: "$349.00",
    status: "In Transit",
  },
  {
    id: 3,
    orderDate: "21 Apr, 2022",
    orderId: "10023458",
    product: {
      name: "Google Pixel 5",
      imageUrl: "https://i.imgur.com/3VfZ1rL.png",
    },
    shop: "Amazon",
    customer: "John Doe",
    dimensions: "16x8x2",
    weight: "0.18 kg",
    price: "$599.00",
    status: "Pending",
  },
  {
    id: 4,
    orderDate: "03 May, 2022",
    orderId: "10023459",
    product: {
      name: "Apple iPhone 13",
      imageUrl: "https://i.imgur.com/3VfZ1rL.png",
    },
    shop: "Amazon",
    customer: "Jane Doe",
    dimensions: "15x7x1",
    weight: "0.17 kg",
    price: "$999.00",
    status: "Action Required",
  },
  {
    id: 5,
    orderDate: "15 Jun, 2022",
    orderId: "10023460",
    product: {
      name: "Dell XPS 13",
      imageUrl: "https://i.imgur.com/7k1dX5V.png",
    },
    shop: "Amazon",
    customer: "John Doe",
    dimensions: "30x20x2",
    weight: "1.2 kg",
    price: "$1799.00",
    status: "Delivered",
  },
  {
    id: 6,
    orderDate: "22 Jul, 2022",
    orderId: "10023461",
    product: {
      name: "OnePlus 9",
      imageUrl: "https://i.imgur.com/0b5Z2wD.png",
    },
    shop: "Amazon",
    customer: "Jane Doe",
    dimensions: "16x8x2",
    weight: "0.19 kg",
    price: "$699.00",
    status: "Pending",
  },
  {
    id: 7,
    orderDate: "28 Jul, 2022",
    orderId: "10023462",
    product: {
      name: "Nike Air Max 270",
      imageUrl: "https://i.imgur.com/8w4z7pL.png",
    },
    shop: "Amazon",
    customer: "Emily Johnson",
    dimensions: "34x22x12",
    weight: "0.9 kg",
    price: "$180.00",
    status: "Delivered",
  },
  {
    id: 8,
    orderDate: "02 Aug, 2022",
    orderId: "10023463",
    product: {
      name: "Levi's 501 Jeans",
      imageUrl: "https://i.imgur.com/0b5Z2wD.png",
    },
    shop: "Amazon",
    customer: "Michael Smith",
    dimensions: "30x20x5",
    weight: "0.7 kg",
    price: "$90.00",
    status: "In Transit",
  },
  {
    id: 9,
    orderDate: "10 Aug, 2022",
    orderId: "10023464",
    product: {
      name: "Ray-Ban Aviator Sunglasses",
      imageUrl: "https://i.imgur.com/3VfZ1rL.png",
    },
    shop: "Amazon",
    customer: "Sophia Lee",
    dimensions: "18x8x6",
    weight: "0.2 kg",
    price: "$150.00",
    status: "Pending",
  },
  {
    id: 10,
    orderDate: "15 Aug, 2022",
    orderId: "10023465",
    product: {
      name: "Apple Watch Series 7",
      imageUrl: "https://i.imgur.com/8w4z7pL.png",
    },
    shop: "Amazon",
    customer: "David Brown",
    dimensions: "12x12x8",
    weight: "0.3 kg",
    price: "$399.00",
    status: "Delivered",
  },
  {
    id: 11,
    orderDate: "20 Aug, 2022",
    orderId: "10023466",
    product: {
      name: "Kindle Paperwhite",
      imageUrl: "https://i.imgur.com/0b5Z2wD.png",
    },
    shop: "Amazon",
    customer: "Olivia Wilson",
    dimensions: "16x12x2",
    weight: "0.25 kg",
    price: "$130.00",
    status: "Pending",
  },
  {
    id: 12,
    orderDate: "25 Aug, 2022",
    orderId: "10023467",
    product: {
      name: "Dyson V11 Vacuum Cleaner",
      imageUrl: "https://i.imgur.com/3VfZ1rL.png",
    },
    shop: "Amazon",
    customer: "Emily Johnson",
    dimensions: "60x30x30",
    weight: "3.5 kg",
    price: "$599.00",
    status: "Action Required",
  },
  {
    id: 13,
    orderDate: "01 Sep, 2022",
    orderId: "10023468",
    product: {
      name: "Instant Pot Duo 7-in-1",
      imageUrl: "https://i.imgur.com/8w4z7pL.png",
    },
    shop: "Amazon",
    customer: "Michael Smith",
    dimensions: "35x35x35",
    weight: "4.2 kg",
    price: "$99.00",
    status: "Delivered",
  },
  {
    id: 14,
    orderDate: "05 Sep, 2022",
    orderId: "10023469",
    product: {
      name: "Sony PlayStation 5",
      imageUrl: "https://i.imgur.com/7k1dX5V.png",
    },
    shop: "Amazon",
    customer: "Sophia Lee",
    dimensions: "40x30x10",
    weight: "4.5 kg",
    price: "$499.00",
    status: "In Transit",
  },
  {
    id: 15,
    orderDate: "10 Sep, 2022",
    orderId: "10023470",
    product: {
      name: "Nintendo Switch OLED",
      imageUrl: "https://i.imgur.com/0b5Z2wD.png",
    },
    shop: "Amazon",
    customer: "David Brown",
    dimensions: "25x15x8",
    weight: "0.7 kg",
    price: "$349.00",
    status: "Delivered",
  },
  {
    id: 16,
    orderDate: "15 Sep, 2022",
    orderId: "10023471",
    product: {
      name: "Canon EOS M50 Camera",
      imageUrl: "https://i.imgur.com/3VfZ1rL.png",
    },
    shop: "Amazon",
    customer: "Olivia Wilson",
    dimensions: "18x12x10",
    weight: "0.8 kg",
    price: "$579.00",
    status: "Pending",
  },
  {
    id: 17,
    orderDate: "20 Sep, 2022",
    orderId: "10023472",
    product: {
      name: "The North Face Backpack",
      imageUrl: "https://i.imgur.com/8w4z7pL.png",
    },
    shop: "Amazon",
    customer: "Emily Johnson",
    dimensions: "30x20x10",
    weight: "0.6 kg",
    price: "$120.00",
    status: "Delivered",
  },
  {
    id: 18,
    orderDate: "25 Sep, 2022",
    orderId: "10023473",
    product: {
      name: "Philips Hue Smart Bulb",
      imageUrl: "https://i.imgur.com/7k1dX5V.png",
    },
    shop: "Amazon",
    customer: "Michael Smith",
    dimensions: "10x10x10",
    weight: "0.2 kg",
    price: "$40.00",
    status: "Delivered",
  },
  {
    id: 19,
    orderDate: "30 Sep, 2022",
    orderId: "10023474",
    product: {
      name: "Amazon Echo Dot (4th Gen)",
      imageUrl: "https://i.imgur.com/0b5Z2wD.png",
    },
    shop: "Amazon",
    customer: "Sophia Lee",
    dimensions: "12x12x12",
    weight: "0.4 kg",
    price: "$49.00",
    status: "In Transit",
  },
  {
    id: 20,
    orderDate: "05 Oct, 2022",
    orderId: "10023475",
    product: {
      name: "GoPro HERO10 Black",
      imageUrl: "https://i.imgur.com/3VfZ1rL.png",
    },
    shop: "Amazon",
    customer: "David Brown",
    dimensions: "10x8x6",
    weight: "0.3 kg",
    price: "$399.00",
    status: "Delivered",
  },
];

function ActionButtons() {
  return (
    <div className="flex gap-2">
      <button className="px-2 py-1 text-xs rounded bg-indigo-100 text-indigo-700 font-bold hover:bg-indigo-200 transition dark:bg-indigo-800 dark:text-yellow-300 dark:hover:bg-indigo-900 border border-indigo-200 dark:border-indigo-900">Edit</button>
      <button className="px-2 py-1 text-xs rounded bg-red-100 text-red-700 font-bold hover:bg-red-200 transition dark:bg-red-800 dark:text-red-200 dark:hover:bg-red-900 border border-red-200 dark:border-red-900">Delete</button>
      <button className="px-2 py-1 text-xs rounded bg-gray-100 text-gray-700 font-bold hover:bg-gray-200 transition dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-900 border border-gray-200 dark:border-gray-900">Details</button>
    </div>
  );
}

export default function Page() {
  const [orders] = useState(initialOrders);

  return (
    <div className="flex w-full flex-col p-4 min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <h1 className="text-3xl font-extrabold text-indigo-700 dark:text-yellow-300 mb-8 drop-shadow">Latest Orders</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800 rounded-2xl shadow-2xl bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Order Date</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Order Id</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Product</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Shop</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Customer</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Dimensions</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Weight</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Price</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Status</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-indigo-50 dark:hover:bg-gray-800 transition">
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">{order.orderDate}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{order.orderId}</td>
                <td className="px-4 py-3 whitespace-nowrap flex items-center gap-2">
                  <img
                    src={order.product.imageUrl}
                    alt={order.product.name}
                    width={32}
                    height={32}
                    className="rounded border shadow"
                  />
                  <span className="text-xs text-gray-700 dark:text-gray-200 font-semibold">{order.product.name}</span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{order.shop}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{order.customer}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{order.dimensions}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{order.weight}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{order.price}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm">
                  <span
                    className={`px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full shadow-md border transition
                      ${order.status === "Pending"
                        ? "bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-800 dark:text-white dark:border-blue-900"
                        : order.status === "Action Required"
                        ? "bg-purple-100 text-purple-800 border-purple-300 dark:bg-purple-800 dark:text-white dark:border-purple-900"
                        : order.status === "In Transit"
                        ? "bg-yellow-100 text-yellow-800 border-yellow-300 dark:bg-yellow-800 dark:text-gray-900 dark:border-yellow-900"
                        : "bg-green-100 text-green-800 border-green-300 dark:bg-green-800 dark:text-white dark:border-green-900"}
                    `}
                  >
                    {order.status}
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
