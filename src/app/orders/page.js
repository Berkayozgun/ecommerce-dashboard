export default function Page() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <div className='flex flex-col items-center justify-center p-4'>
        <h1 className='text-xl font-bold'>Latest Orders</h1>
        <div className='flex flex-row justify-between w-full mt-4'>
          <div className='w-1/12'>Order Date</div>
          <div className='w-1/12'>Order ID</div>
          <div className='w-3/12'>Description</div>
          <div className='w-2/12'>Shop</div>
          <div className='w-2/12'>Customer</div>
          <div className='w-1/12'>Dimensions</div>
          <div className='w-1/12'>Weight</div>
          <div className='w-1/12'>Price</div>
          <div className='w-1/12'>Status</div>
        </div>
      </div>

      <div className='flex flex-col p-4 h-full w-full gap-10 mt-4'>
        <OrderItem
          orderId='123'
          orderDate='2021-01-01'
          description='Sample Description'
          shop='Sample Shop'
          customer='Sample Customer'
          dimensions='Sample Dimensions'
          weight='Sample Weight'
          price='$123.45'
          status='Delivered'
        />
        {/* Add more OrderItem components for additional orders */}
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
    <div className='flex flex-col p-4 bg-white rounded-lg shadow-md w-full'>
      <div className='flex flex-row justify-between'>
        <div className='flex flex-col'>
          <div className='text-lg font-bold'>Order #{orderId}</div>
          <div className='text-sm'>Placed on {orderDate}</div>
        </div>
        <div className='flex flex-col'>
          <div className='text-lg font-bold'>Status</div>
          <div className='text-sm'>{status}</div>
        </div>

        <div className='flex flex-col'>
          <div className='text-lg font-bold'>Total</div>
          <div className='text-sm'>{price}</div>

          <div className='text-lg font-bold'>Payment</div>
          <div className='text-sm'>Paid</div>

          <div className='text-lg font-bold'>Shipping</div>
          <div className='text-sm'>
            {status === "Delivered" ? "Delivered" : "Pending"}
          </div>
        </div>
      </div>
    </div>
  );
}
