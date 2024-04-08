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
    <div className='flex w-full flex-row items-center justify-center'>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {coupons.map((coupon) => (
          <div
            key={coupon.couponId}
            className='flex flex-col items-center justify-center p-4 space-y-4 bg-white rounded-lg shadow-lg'
          >
            <div className='flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full'>
              <Image
                src='https://www.svgrepo.com/show/303229/coupon.svg'
                alt='Coupon'
                width={96}
                height={96}
              />
            </div>
            <div className='flex flex-col items-center justify-center space-y-2'>
              <p className='text-lg font-semibold text-gray-800'>
                {coupon.couponCode}
              </p>
              <p className='text-sm font-normal text-gray-600'>
                {coupon.couponType} Coupon
              </p>
              <p className='text-sm font-normal text-gray-600'>
                Value: {coupon.couponValue}%
              </p>
              <p className='text-sm font-normal text-gray-600'>
                Min Amount: ${coupon.couponMinAmount}
              </p>
              <p className='text-sm font-normal text-gray-600'>
                Max Amount: ${coupon.couponMaxAmount}
              </p>
              <p className='text-sm font-normal text-gray-600'>
                Start Date: {coupon.couponStartDate}
              </p>
              <p className='text-sm font-normal text-gray-600'>
                End Date: {coupon.couponEndDate}
              </p>
              <p className='text-sm font-normal text-gray-600'>
                Status: {coupon.couponStatus}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
