"use client";
import Image from "next/image";
export default function Page() {
  function generateOrderId() {
    // generate random order id with numbers only
    return Math.floor(Math.random() * 100000000);
  }

  function generateOrderDate() {
    // generate random date like 07 Feb, 2022
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = months[Math.floor(Math.random() * months.length)];
    // if day less than 10, add 0 before it
    let day = Math.floor(Math.random() * 30) + 1;
    if (day < 10) {
      day = `0${day}`;
    }

    const year = Math.floor(Math.random() * 2) + 2021;
    return `${day} ${month}, ${year}`;
  }
  return (
    <div className='flex w-full flex-col p-4 min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50'>
      <h1 className='text-3xl font-extrabold text-indigo-700 mb-8 drop-shadow'>Latest Orders</h1>
      <div className='overflow-x-auto'>
        <div className='min-w-full inline-block align-middle'>
          <div className='overflow-hidden rounded-2xl shadow-2xl bg-white'>
            <table className='min-w-full divide-y divide-gray-200'>
              <thead className='bg-gray-100'>
                <tr>
                  <th scope='col' className='px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider'>Order Date</th>
                  <th scope='col' className='px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider'>Order Id</th>
                  <th scope='col' className='px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider'>Description</th>
                  <th scope='col' className='px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider'>Shop</th>
                  <th scope='col' className='px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider'>Customer</th>
                  <th scope='col' className='px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider'>Dimensions</th>
                  <th scope='col' className='px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider'>Weight</th>
                  <th scope='col' className='px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider'>Price</th>
                  <th scope='col' className='px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider'>Status</th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                <OrderItem
                  orderId={generateOrderId()}
                  orderDate={generateOrderDate()}
                  description='Desktop Computer'
                  shop='Amazon'
                  customer='John Doe'
                  dimensions='20x20x20'
                  weight='1.0 kg'
                  price='$123.45'
                  status='Delivered'
                />
                <OrderItem
                  orderId={generateOrderId()}
                  orderDate={generateOrderDate()}
                  description='Laptop Computer'
                  shop='Amazon'
                  customer='Jane Doe'
                  dimensions='15x15x15'
                  weight='0.5 kg'
                  price='$67.89'
                  status='In Transit'
                />
                <OrderItem
                  orderId={generateOrderId()}
                  orderDate={generateOrderDate()}
                  description='Smartphone'
                  shop='Amazon'
                  customer='John Doe'
                  dimensions='10x10x10'
                  weight='0.2 kg'
                  price='$12.34'
                  status='Pending'
                />

                <OrderItem
                  orderId={generateOrderId()}
                  orderDate={generateOrderDate()}
                  description='Tablet'
                  shop='Amazon'
                  customer='Jane Doe'
                  dimensions='5x5x5'
                  weight='0.1 kg'
                  price='$5.67'
                  status='Pending'
                />

                <OrderItem
                  orderId={generateOrderId()}
                  orderDate={generateOrderDate()}
                  description='Smartwatch'
                  shop='Amazon'
                  customer='John Doe'
                  dimensions='3x3x3'
                  weight='0.05 kg'
                  price='$2.34'
                  status='Pending'
                />

                <OrderItem
                  orderId={generateOrderId()}
                  orderDate={generateOrderDate()}
                  description='Headphones'
                  shop='Amazon'
                  customer='Jane Doe'
                  dimensions='2x2x2'
                  weight='0.03 kg'
                  price='$1.67'
                  status='Action Required'
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function OrderItem({
  orderId,
  orderDate,
  description,
  shop,
  customer,
  dimensions,
  weight,
  price,
  status,
}) {
  return (
    <tr className='bg-white hover:bg-indigo-50 transition'>
      <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>{orderDate}</td>
      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{orderId}</td>
      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{description}</td>
      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
        <Image
          src='https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png'
          alt='Amazon'
          className='w-8 h-8'
          width={32}
          height={32}
        />
      </td>
      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{customer}</td>
      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{dimensions}</td>
      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{weight}</td>
      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{price}</td>
      <td className='px-6 py-4 whitespace-nowrap text-sm'>
        <span
          className={`px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full shadow-md transition
            ${status === "Pending"
              ? "bg-blue-100 text-blue-800 border border-blue-300"
              : status === "Action Required"
              ? "bg-purple-100 text-purple-800 border border-purple-300"
              : status === "In Transit"
              ? "bg-yellow-100 text-yellow-800 border border-yellow-300"
              : "bg-green-100 text-green-800 border border-green-300"}
          `}
        >
          {status}
        </span>
      </td>
    </tr>
  );
}
