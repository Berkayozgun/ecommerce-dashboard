"use client";
import Image from "next/image";
const coupons = [
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
];

export default function Page() {
  return (
    <div className='flex w-full flex-col p-4 min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50'>
      <h1 className='text-3xl font-extrabold text-indigo-700 mb-8 drop-shadow'>Coupons</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {coupons.map((coupon) => (
          <div
            key={coupon.couponId}
            className='flex flex-col items-center justify-center p-6 space-y-4 bg-white rounded-2xl shadow-xl hover:scale-105 transition-transform border border-gray-100'
          >
            <div className='flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-2'>
              <Image
                src='https://www.svgrepo.com/show/303229/coupon.svg'
                alt='Coupon'
                width={96}
                height={96}
              />
            </div>
            <div className='flex flex-col items-center justify-center space-y-1 w-full'>
              <p className='text-lg font-bold text-indigo-700'>{coupon.couponCode}</p>
              <p className='text-xs font-medium text-gray-500'>{coupon.couponType} Coupon</p>
              <p className='text-sm font-semibold text-green-600'>Value: {coupon.couponValue}%</p>
              <p className='text-xs text-gray-400'>Min: ${coupon.couponMinAmount} | Max: ${coupon.couponMaxAmount}</p>
              <p className='text-xs text-gray-400'>Start: {coupon.couponStartDate}</p>
              <p className='text-xs text-gray-400'>End: {coupon.couponEndDate}</p>
              <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-md mt-2
                ${coupon.couponStatus === "Active" ? "bg-green-100 text-green-800 border border-green-300" : "bg-gray-100 text-gray-500 border border-gray-300"}
              `}>
                {coupon.couponStatus}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
