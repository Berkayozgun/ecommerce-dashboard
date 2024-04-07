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
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <div className='flex flex-col items-center justify-center p-4'>
        <h1 className='text-xl font-bold'>Latest Orders</h1>
      </div>

      <div className='flex flex-col p-4 h-full w-full gap-10 mt-4'>
        <div className='flex flex-row p-4 justify-between bg-white text-gray-500 rounded-lg shadow-md w-full'>
          <div className='text-sm w-1/12'>Order Date</div>
          <div className='text-sm w-1/12'>Order Id</div>

          <div className='text-sm w-2/12'>Description</div>
          <div className='text-sm w-1/12'>Shop</div>

          <div className='text-sm w-1/12'>Customer</div>
          <div className='text-sm w-1/12'>Dimensions</div>

          <div className='text-sm w-1/12'>Weight</div>
          <div className='text-sm w-1/12'>Price</div>

          <div className='text-sm w-1/12 text-center'>Status</div>
        </div>
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
    <div className='flex flex-row p-4 justify-between items-center bg-white rounded-lg shadow-md w-full'>
      <div className='text-sm w-1/12'>{orderDate}</div>
      <div className='text-sm w-1/12'>{orderId}</div>

      <div className='text-sm w-2/12'>{description}</div>
      <div className='text-sm w-1/12'>
        <Image
          src='https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png'
          alt='Amazon'
          className='w-8 h-8'
          width={32}
          height={32}
        />
      </div>

      <div className='text-sm w-1/12'>{customer}</div>
      <div className='text-sm w-1/12'>{dimensions}</div>

      <div className='text-sm w-1/12'>{weight}</div>
      <div className='text-sm w-1/12'>{price}</div>
      {/* if status is pending text-blue, action required-purple, delivered-green*/}
      <div
        className={`text-sm rounded-xl justify-center items-center w-[120px] text-center ${
          status === "Pending"
            ? "text-blue-600 bg-blue-200 "
            : status === "Action Required"
            ? "text-purple-600 bg-purple-200"
            : "text-green-600 bg-green-200"
        }`}
      >
        {status}
      </div>
    </div>
  );
}
