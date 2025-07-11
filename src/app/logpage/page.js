"use client"
import { useState } from "react";

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
  const [userType, setUserType] = useState("");
  const [actionType, setActionType] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const [search, setSearch] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  // Log tipi için ikon ve renk seçimi
  const getIcon = (action) => {
    switch (action) {
      case "Purchase":
        return <span className="text-green-500">🛒</span>;
      case "Return":
        return <span className="text-yellow-500">↩️</span>;
      case "Login":
        return <span className="text-blue-500">🔑</span>;
      case "Logout":
        return <span className="text-gray-400">🚪</span>;
      case "Add Product":
        return <span className="text-indigo-500">➕</span>;
      case "Delete Product":
        return <span className="text-red-500">🗑️</span>;
      default:
        return <span className="text-gray-400">•</span>;
    }
  };

  // Log satırı için özet cümle
  const getSummary = (log) => {
    if (log.Action_Type === "Purchase") {
      return (
        <span>
          <span className="font-bold text-indigo-700">User {log.User_ID}</span> purchased <span className="font-bold text-green-700">{log.Quantity}x {log.Product_Name}</span> for <span className="font-bold text-green-700">${log.Total_Price}</span> [{log.Payment_Method}]
        </span>
      );
    }
    if (log.Action_Type === "Return") {
      return (
        <span>
          <span className="font-bold text-indigo-700">User {log.User_ID}</span> returned <span className="font-bold text-yellow-700">{log.Quantity}x {log.Product_Name}</span> [Refunded <span className="font-bold text-red-700">${Math.abs(log.Total_Price)}</span>]
        </span>
      );
    }
    if (log.Action_Type === "Login") {
      return (
        <span><span className="font-bold text-indigo-700">{log.User_ID}</span> logged in</span>
      );
    }
    if (log.Action_Type === "Logout") {
      return (
        <span><span className="font-bold text-indigo-700">{log.User_ID}</span> logged out</span>
      );
    }
    if (log.Action_Type === "Add Product") {
      return (
        <span><span className="font-bold text-indigo-700">{log.User_ID}</span> added product <span className="font-bold text-indigo-700">{log.Product_Name}</span> (${log.Unit_Price})</span>
      );
    }
    if (log.Action_Type === "Delete Product") {
      return (
        <span><span className="font-bold text-indigo-700">{log.User_ID}</span> deleted product <span className="font-bold text-red-700">{log.Product_Name}</span></span>
      );
    }
    return <span>{log.Action_Type}</span>;
  };

  // Filtrelenmiş loglar
  const filteredLogs = logs.filter((log) => {
    if (userType && log.User_Type !== userType) return false;
    if (actionType && log.Action_Type !== actionType) return false;
    if (paymentStatus && log.Payment_Status !== paymentStatus) return false;
    if (search) {
      const s = search.toLowerCase();
      if (!(
        (log.User_ID && log.User_ID.toLowerCase().includes(s)) ||
        (log.Product_Name && log.Product_Name.toLowerCase().includes(s)) ||
        (log.Action_Type && log.Action_Type.toLowerCase().includes(s))
      )) return false;
    }
    if (dateFrom && log.Timestamp < dateFrom) return false;
    if (dateTo && log.Timestamp > dateTo) return false;
    return true;
  });

  // Unique values for dropdowns
  const userTypes = Array.from(new Set(logs.map(l => l.User_Type).filter(Boolean)));
  const actionTypes = Array.from(new Set(logs.map(l => l.Action_Type).filter(Boolean)));
  const paymentStatuses = Array.from(new Set(logs.map(l => l.Payment_Status).filter(Boolean)));

  return (
    <div className="flex w-full flex-col p-4 min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <h1 className="text-3xl font-extrabold text-indigo-700 dark:text-yellow-300 mb-8 drop-shadow">Logs</h1>
      {/* Filtre Paneli */}
      <div className="flex flex-wrap gap-4 mb-6 items-end bg-white/80 dark:bg-gray-900/80 rounded-xl p-4 shadow border border-gray-100 dark:border-gray-800">
        <div>
          <label className="block text-xs font-bold text-gray-500 dark:text-gray-300 mb-1">User Type</label>
          <select value={userType} onChange={e => setUserType(e.target.value)} className="border rounded px-2 py-1 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-200 dark:border-gray-700">
            <option value="">All</option>
            {userTypes.map(type => <option key={type} value={type}>{type}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-500 dark:text-gray-300 mb-1">Action Type</label>
          <select value={actionType} onChange={e => setActionType(e.target.value)} className="border rounded px-2 py-1 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-200 dark:border-gray-700">
            <option value="">All</option>
            {actionTypes.map(type => <option key={type} value={type}>{type}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-500 dark:text-gray-300 mb-1">Payment Status</label>
          <select value={paymentStatus} onChange={e => setPaymentStatus(e.target.value)} className="border rounded px-2 py-1 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-200 dark:border-gray-700">
            <option value="">All</option>
            {paymentStatuses.map(status => <option key={status} value={status}>{status}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-500 dark:text-gray-300 mb-1">Date From</label>
          <input type="datetime-local" value={dateFrom} onChange={e => setDateFrom(e.target.value)} className="border rounded px-2 py-1 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-200 dark:border-gray-700" />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-500 dark:text-gray-300 mb-1">Date To</label>
          <input type="datetime-local" value={dateTo} onChange={e => setDateTo(e.target.value)} className="border rounded px-2 py-1 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-200 dark:border-gray-700" />
        </div>
        <div className="flex-1 min-w-[180px]">
          <label className="block text-xs font-bold text-gray-500 dark:text-gray-300 mb-1">Search</label>
          <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="User, product, action..." className="border rounded px-2 py-1 text-sm w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-200 dark:border-gray-700" />
        </div>
        <button onClick={() => { setUserType(""); setActionType(""); setPaymentStatus(""); setDateFrom(""); setDateTo(""); setSearch(""); }} className="ml-auto px-3 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs font-bold border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition">Reset</button>
      </div>
      <div className="overflow-x-auto">
        <div className="rounded-2xl shadow-2xl bg-white dark:bg-gray-900">
          <div className="sticky top-0 z-10 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-3 flex items-center gap-4">
            <span className="text-xs font-mono text-gray-400 dark:text-gray-500 tracking-widest">TIMESTAMP</span>
            <span className="text-xs font-mono text-gray-400 dark:text-gray-500 tracking-widest">LOG</span>
            <span className="text-xs font-mono text-gray-400 dark:text-gray-500 tracking-widest ml-auto">STATUS</span>
          </div>
          <ul className="divide-y divide-gray-100 dark:divide-gray-800 font-mono text-[13px]">
            {filteredLogs.length === 0 ? (
              <li className="px-6 py-8 text-center text-gray-400 dark:text-gray-600">No logs found.</li>
            ) : (
              filteredLogs.map((log, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 px-6 py-2 hover:bg-indigo-50 dark:hover:bg-gray-800 transition group border-l-4 border-transparent hover:border-indigo-400 dark:hover:border-yellow-300"
                >
                  <span className="w-32 text-xs text-gray-500 dark:text-gray-300 tabular-nums select-all">
                    {log.Timestamp}
                  </span>
                  <span className="w-6 flex-shrink-0 flex items-center justify-center text-lg">
                    {getIcon(log.Action_Type)}
                  </span>
                  <span className="flex-1 text-gray-800 dark:text-gray-100 group-hover:text-indigo-700 dark:group-hover:text-yellow-300">
                    {getSummary(log)}
                  </span>
                  <span className="ml-auto">
                    {log.Payment_Status ? (
                      <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-md border mt-2 transition
                        ${log.Payment_Status === "Successful"
                          ? "bg-green-100 text-green-800 border-green-300 dark:bg-green-900 dark:text-green-200 dark:border-green-700"
                          : log.Payment_Status === "Refunded"
                          ? "bg-red-100 text-red-800 border-red-300 dark:bg-red-900 dark:text-red-200 dark:border-red-700"
                          : log.Payment_Status === "Pending"
                          ? "bg-yellow-100 text-yellow-800 border-yellow-300 dark:bg-yellow-900 dark:text-yellow-200 dark:border-yellow-700"
                          : "bg-gray-100 text-gray-500 border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700"}
                      `}>
                        {log.Payment_Status}
                      </span>
                    ) : (
                      <span className="text-gray-300 dark:text-gray-700">-</span>
                    )}
                  </span>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
