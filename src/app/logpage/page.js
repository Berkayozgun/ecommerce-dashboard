import Image from "next/image";

const logs = [
  {
    Timestamp: "2024-04-09 10:00",
    User_ID: "1001",
    User_Type: "Customer",
    Action_Type: "Purchase",
    Product_ID: "2001",
    Product_Name: "T-shirt",
    Quantity: 2,
    Unit_Price: 25,
    Total_Price: 50,
    Payment_Method: "Credit Card",
    Payment_Status: "Successful",
  },
  {
    Timestamp: "2024-04-09 10:15",
    User_ID: "1002",
    User_Type: "Customer",
    Action_Type: "Purchase",
    Product_ID: "2003",
    Product_Name: "Jeans",
    Quantity: 1,
    Unit_Price: 80,
    Total_Price: 80,
    Payment_Method: "PayPal",
    Payment_Status: "Successful",
  },
  {
    Timestamp: "2024-04-09 10:30",
    User_ID: "1003",
    User_Type: "Customer",
    Action_Type: "Purchase",
    Product_ID: "2002",
    Product_Name: "Sneakers",
    Quantity: 3,
    Unit_Price: 60,
    Total_Price: 180,
    Payment_Method: "Credit Card",
    Payment_Status: "Successful",
  },
  {
    Timestamp: "2024-04-09 11:00",
    User_ID: "1004",
    User_Type: "Customer",
    Action_Type: "Purchase",
    Product_ID: "2005",
    Product_Name: "Watch",
    Quantity: 1,
    Unit_Price: 50,
    Total_Price: 50,
    Payment_Method: "Credit Card",
    Payment_Status: "Successful",
  },
  {
    Timestamp: "2024-04-09 11:30",
    User_ID: "1005",
    User_Type: "Customer",
    Action_Type: "Purchase",
    Product_ID: "2004",
    Product_Name: "Backpack",
    Quantity: 2,
    Unit_Price: 60,
    Total_Price: 120,
    Payment_Method: "Credit Card",
    Payment_Status: "Successful",
  },
  {
    Timestamp: "2024-04-09 12:00",
    User_ID: "Admin101",
    User_Type: "Administrator",
    Action_Type: "Login",
  },
  {
    Timestamp: "2024-04-09 12:05",
    User_ID: "Admin101",
    User_Type: "Administrator",
    Action_Type: "Logout",
  },
  {
    Timestamp: "2024-04-09 12:30",
    User_ID: "1006",
    User_Type: "Customer",
    Action_Type: "Return",
    Product_ID: "2001",
    Product_Name: "T-shirt",
    Quantity: 1,
    Unit_Price: 25,
    Total_Price: -25,
    Payment_Method: "Credit Card",
    Payment_Status: "Refunded",
  },
  {
    Timestamp: "2024-04-09 12:35",
    User_ID: "Admin102",
    User_Type: "Administrator",
    Action_Type: "Login",
  },
  {
    Timestamp: "2024-04-09 12:40",
    User_ID: "Admin102",
    User_Type: "Administrator",
    Action_Type: "Add Product",
    Product_ID: "2006",
    Product_Name: "Sunglasses",
    Unit_Price: 100,
  },
  {
    Timestamp: "2024-04-09 12:45",
    User_ID: "Admin102",
    User_Type: "Administrator",
    Action_Type: "Delete Product",
    Product_ID: "2003",
    Product_Name: "Jeans",
  },
  {
    Timestamp: "2024-04-09 12:50",
    User_ID: "1007",
    User_Type: "Customer",
    Action_Type: "Purchase",
    Product_ID: "2003",
    Product_Name: "Jeans",
    Quantity: 2,
    Unit_Price: 80,
    Total_Price: 160,
    Payment_Method: "Credit Card",
    Payment_Status: "Successful",
  },
  {
    Timestamp: "2024-04-09 13:00",
    User_ID: "1008",
    User_Type: "Customer",
    Action_Type: "Purchase",
    Product_ID: "2006",
    Product_Name: "Sunglasses",
    Quantity: 1,
    Unit_Price: 100,
    Total_Price: 100,
    Payment_Method: "Credit Card",
    Payment_Status: "Successful",
  },
  {
    Timestamp: "2024-04-09 13:30",
    User_ID: "1009",
    User_Type: "Customer",
    Action_Type: "Purchase",
    Product_ID: "2007",
    Product_Name: "Hat",
    Quantity: 1,
    Unit_Price: 20,
    Total_Price: 20,
    Payment_Method: "Credit Card",
    Payment_Status: "Successful",
  },
  {
    Timestamp: "2024-04-09 14:00",
    User_ID: "Admin103",
    User_Type: "Administrator",
    Action_Type: "Login",
  },
  {
    Timestamp: "2024-04-09 14:05",
    User_ID: "Admin103",
    User_Type: "Administrator",
    Action_Type: "Logout",
  },
  {
    Timestamp: "2024-04-09 14:30",
    User_ID: "1010",
    User_Type: "Customer",
    Action_Type: "Purchase",
    Product_ID: "2008",
    Product_Name: "Shoes",
    Quantity: 1,
    Unit_Price: 70,
    Total_Price: 70,
    Payment_Method: "Credit Card",
    Payment_Status: "Successful",
  },
  {
    Timestamp: "2024-04-09 15:00",
    User_ID: "1011",
    User_Type: "Customer",
    Action_Type: "Purchase",
    Product_ID: "2009",
    Product_Name: "Socks",
    Quantity: 5,
    Unit_Price: 5,
    Total_Price: 25,
    Payment_Method: "Credit Card",
    Payment_Status: "Successful",
  },
  {
    Timestamp: "2024-04-09 15:30",
    User_ID: "1012",
    User_Type: "Customer",
    Action_Type: "Purchase",
    Product_ID: "2010",
    Product_Name: "Belt",
    Quantity: 1,
    Unit_Price: 30,
    Total_Price: 30,
    Payment_Method: "Credit Card",
    Payment_Status: "Successful",
  },
  {
    Timestamp: "2024-04-09 16:00",
    User_ID: "1013",
    User_Type: "Customer",
    Action_Type: "Purchase",
    Product_ID: "2011",
    Product_Name: "Jacket",
    Quantity: 1,
    Unit_Price: 120,
    Total_Price: 120,
    Payment_Method: "Credit Card",
    Payment_Status: "Successful",
  },
  {
    Timestamp: "2024-04-09 16:30",
    User_ID: "1014",
    User_Type: "Customer",
    Action_Type: "Purchase",
    Product_ID: "2012",
    Product_Name: "Coat",
    Quantity: 1,
    Unit_Price: 150,
    Total_Price: 150,
    Payment_Method: "Credit Card",
    Payment_Status: "Successful",
  },
  {
    Timestamp: "2024-04-09 17:00",
    User_ID: "1015",
    User_Type: "Customer",
    Action_Type: "Purchase",
    Product_ID: "2013",
    Product_Name: "Dress",
    Quantity: 1,
    Unit_Price: 50,
    Total_Price: 50,
    Payment_Method: "Credit Card",
    Payment_Status: "Successful",
  },
  {
    Timestamp: "2024-04-09 17:30",
    User_ID: "1016",
    User_Type: "Customer",
    Action_Type: "Purchase",
    Product_ID: "2014",
    Product_Name: "Skirt",
    Quantity: 1,
    Unit_Price: 40,
    Total_Price: 40,
    Payment_Method: "Credit Card",
    Payment_Status: "Successful",
  },
  {
    Timestamp: "2024-04-09 18:00",
    User_ID: "1017",
    User_Type: "Customer",
    Action_Type: "Purchase",
    Product_ID: "2015",
    Product_Name: "Pants",
    Quantity: 1,
    Unit_Price: 70,
    Total_Price: 70,
    Payment_Method: "Credit Card",
    Payment_Status: "Successful",
  },
  {
    Timestamp: "2024-04-09 18:30",
    User_ID: "1018",
    User_Type: "Customer",
    Action_Type: "Purchase",
    Product_ID: "2016",
    Product_Name: "Shorts",
    Quantity: 1,
    Unit_Price: 30,
    Total_Price: 30,
    Payment_Method: "Credit Card",
    Payment_Status: "Successful",
  },
  {
    Timestamp: "2024-04-09 19:00",
    User_ID: "1019",
    User_Type: "Customer",
    Action_Type: "Purchase",
    Product_ID: "2017",
    Product_Name: "Blouse",
    Quantity: 1,
    Unit_Price: 40,
    Total_Price: 40,
    Payment_Method: "Credit Card",
    Payment_Status: "Successful",
  },
  {
    Timestamp: "2024-04-09 19:30",
    User_ID: "1020",
    User_Type: "Customer",
    Action_Type: "Purchase",
    Product_ID: "2018",
    Product_Name: "Shirt",
    Quantity: 1,
    Unit_Price: 50,
    Total_Price: 50,
    Payment_Method: "Credit Card",
    Payment_Status: "Successful",
  },
  {
    Timestamp: "2024-04-09 20:00",
    User_ID: "1021",
    User_Type: "Customer",
    Action_Type: "Purchase",
    Product_ID: "2019",
    Product_Name: "Trousers",
    Quantity: 1,
    Unit_Price: 60,
    Total_Price: 60,
    Payment_Method: "Credit Card",
    Payment_Status: "Successful",
  },
  {
    Timestamp: "2024-04-09 20:30",
    User_ID: "1022",
    User_Type: "Customer",
    Action_Type: "Purchase",
    Product_ID: "2020",
    Product_Name: "Suit",
    Quantity: 1,
    Unit_Price: 200,
    Total_Price: 200,
    Payment_Method: "Credit Card",
    Payment_Status: "Successful",
  },
  {
    Timestamp: "2024-04-09 21:00",
    User_ID: "1023",
    User_Type: "Customer",
    Action_Type: "Purchase",
    Product_ID: "2021",
    Product_Name: "Tie",
    Quantity: 1,
    Unit_Price: 10,
    Total_Price: 10,
    Payment_Method: "Credit Card",
    Payment_Status: "Successful",
  },
  {
    Timestamp: "2024-04-09 21:30",
    User_ID: "1024",
    User_Type: "Customer",
    Action_Type: "Purchase",
    Product_ID: "2022",
    Product_Name: "Scarf",
    Quantity: 1,
    Unit_Price: 15,
    Total_Price: 15,
    Payment_Method: "Credit Card",
    Payment_Status: "Successful",
  },
];

export default function Page() {
  return (
    <div className='flex w-full h-full flex-row items-center justify-center'>
      <div className='w-full h-full p-20'>
        <h1 className='text-3xl font-bold mb-4'>Logs</h1>
        <div className='overflow-x-auto'>
          <table className='w-full border-collapse border border-gray-300'>
            <thead>
              <tr className='bg-gray-100'>
                <th className='border border-gray-300 px-4 py-2'>Timestamp</th>
                <th className='border border-gray-300 px-4 py-2'>User ID</th>
                <th className='border border-gray-300 px-4 py-2'>User Type</th>
                <th className='border border-gray-300 px-4 py-2'>
                  Action Type
                </th>
                <th className='border border-gray-300 px-4 py-2'>Product ID</th>
                <th className='border border-gray-300 px-4 py-2'>
                  Product Name
                </th>
                <th className='border border-gray-300 px-4 py-2'>Quantity</th>
                <th className='border border-gray-300 px-4 py-2'>Unit Price</th>
                <th className='border border-gray-300 px-4 py-2'>
                  Total Price
                </th>
                <th className='border border-gray-300 px-4 py-2'>
                  Payment Method
                </th>
                <th className='border border-gray-300 px-4 py-2'>
                  Payment Status
                </th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log, index) => (
                <tr key={index} className='text-center'>
                  <td className='border border-gray-300 px-4 py-2'>
                    {log.Timestamp}
                  </td>
                  <td className='border border-gray-300 px-4 py-2'>
                    {log.User_ID}
                  </td>
                  <td className='border border-gray-300 px-4 py-2'>
                    {log.User_Type}
                  </td>
                  <td className='border border-gray-300 px-4 py-2'>
                    {log.Action_Type}
                  </td>
                  <td className='border border-gray-300 px-4 py-2'>
                    {log.Product_ID}
                  </td>
                  <td className='border border-gray-300 px-4 py-2'>
                    {log.Product_Name}
                  </td>
                  <td className='border border-gray-300 px-4 py-2'>
                    {log.Quantity}
                  </td>
                  <td className='border border-gray-300 px-4 py-2'>
                    {log.Unit_Price}
                  </td>
                  <td className='border border-gray-300 px-4 py-2'>
                    {log.Total_Price}
                  </td>
                  <td className='border border-gray-300 px-4 py-2'>
                    {log.Payment_Method}
                  </td>
                  <td className='border border-gray-300 px-4 py-2'>
                    {log.Payment_Status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
