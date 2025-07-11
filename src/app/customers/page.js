"use client";
import { useState } from "react";

const initialCustomers = [
  {
    id: 1,
    name: "Emily Johnson",
    email: "emily.johnson@example.com",
    phone: "+1 555-123-4567",
    address: "123 Main St, New York, NY, USA",
    birthDate: "1988-04-12",
    profileImage: "https://i.pravatar.cc/150?u=emilyjohnson",
    status: "Active",
  },
  {
    id: 2,
    name: "Michael Smith",
    email: "michael.smith@example.com",
    phone: "+1 555-987-6543",
    address: "456 Oak Ave, Los Angeles, CA, USA",
    birthDate: "1992-09-23",
    profileImage: "https://i.pravatar.cc/150?u=michaelsmith",
    status: "Inactive",
  },
  {
    id: 3,
    name: "Sophia Lee",
    email: "sophia.lee@example.com",
    phone: "+1 555-555-7890",
    address: "789 Pine Rd, Chicago, IL, USA",
    birthDate: "1985-01-30",
    profileImage: "https://i.pravatar.cc/150?u=sophialee",
    status: "Active",
  },
  {
    id: 4,
    name: "David Brown",
    email: "david.brown@example.com",
    phone: "+1 555-222-3333",
    address: "321 Maple St, Houston, TX, USA",
    birthDate: "1979-07-15",
    profileImage: "https://i.pravatar.cc/150?u=davidbrown",
    status: "Active",
  },
  {
    id: 5,
    name: "Olivia Wilson",
    email: "olivia.wilson@example.com",
    phone: "+1 555-444-5555",
    address: "654 Cedar Ave, Miami, FL, USA",
    birthDate: "1995-11-05",
    profileImage: "https://i.pravatar.cc/150?u=oliviawilson",
    status: "Inactive",
  },
  {
    id: 6,
    name: "Lucas Martin",
    email: "lucas.martin@example.com",
    phone: "+44 20 7946 0958",
    address: "12 King St, London, UK",
    birthDate: "1983-03-18",
    profileImage: "https://i.pravatar.cc/150?u=lucasmartin",
    status: "Active",
  },
  {
    id: 7,
    name: "Emma Garcia",
    email: "emma.garcia@example.com",
    phone: "+34 91 123 4567",
    address: "Calle Mayor 10, Madrid, Spain",
    birthDate: "1990-06-22",
    profileImage: "https://i.pravatar.cc/150?u=emmagarcia",
    status: "Active",
  },
  {
    id: 8,
    name: "Noah Kim",
    email: "noah.kim@example.com",
    phone: "+82 2-123-4567",
    address: "101 Gangnam-daero, Seoul, South Korea",
    birthDate: "1987-12-01",
    profileImage: "https://i.pravatar.cc/150?u=noahkim",
    status: "Inactive",
  },
  {
    id: 9,
    name: "Isabella Rossi",
    email: "isabella.rossi@example.com",
    phone: "+39 06 1234 5678",
    address: "Via Roma 22, Rome, Italy",
    birthDate: "1993-08-14",
    profileImage: "https://i.pravatar.cc/150?u=isabellarossi",
    status: "Active",
  },
  {
    id: 10,
    name: "Ethan Wang",
    email: "ethan.wang@example.com",
    phone: "+86 10 1234 5678",
    address: "88 Chang'an Ave, Beijing, China",
    birthDate: "1981-02-27",
    profileImage: "https://i.pravatar.cc/150?u=ethanwang",
    status: "Active",
  },
  {
    id: 11,
    name: "Mia Dubois",
    email: "mia.dubois@example.com",
    phone: "+33 1 23 45 67 89",
    address: "5 Rue de Rivoli, Paris, France",
    birthDate: "1996-10-09",
    profileImage: "https://i.pravatar.cc/150?u=miadubois",
    status: "Inactive",
  },
  {
    id: 12,
    name: "William Müller",
    email: "william.muller@example.com",
    phone: "+49 30 123456",
    address: "Alexanderplatz 1, Berlin, Germany",
    birthDate: "1984-05-19",
    profileImage: "https://i.pravatar.cc/150?u=williammuller",
    status: "Active",
  },
  {
    id: 13,
    name: "Charlotte Novak",
    email: "charlotte.novak@example.com",
    phone: "+420 123 456 789",
    address: "Václavské náměstí 3, Prague, Czechia",
    birthDate: "1991-07-28",
    profileImage: "https://i.pravatar.cc/150?u=charlottenovak",
    status: "Active",
  },
  {
    id: 14,
    name: "James O'Connor",
    email: "james.oconnor@example.com",
    phone: "+353 1 234 5678",
    address: "15 St. Stephen's Green, Dublin, Ireland",
    birthDate: "1980-11-11",
    profileImage: "https://i.pravatar.cc/150?u=jamesoconnor",
    status: "Inactive",
  },
  {
    id: 15,
    name: "Amelia Svensson",
    email: "amelia.svensson@example.com",
    phone: "+46 8 123 456",
    address: "Drottninggatan 20, Stockholm, Sweden",
    birthDate: "1989-09-17",
    profileImage: "https://i.pravatar.cc/150?u=ameliasvensson",
    status: "Active",
  },
  {
    id: 16,
    name: "Benjamin Lee",
    email: "benjamin.lee@example.com",
    phone: "+61 2 1234 5678",
    address: "200 George St, Sydney, Australia",
    birthDate: "1986-03-05",
    profileImage: "https://i.pravatar.cc/150?u=benjaminlee",
    status: "Active",
  },
  {
    id: 17,
    name: "Grace Patel",
    email: "grace.patel@example.com",
    phone: "+91 22 1234 5678",
    address: "Bandra West, Mumbai, India",
    birthDate: "1994-12-21",
    profileImage: "https://i.pravatar.cc/150?u=gracepatel",
    status: "Inactive",
  },
  {
    id: 18,
    name: "Jack Wilson",
    email: "jack.wilson@example.com",
    phone: "+1 555-888-9999",
    address: "789 Elm St, Boston, MA, USA",
    birthDate: "1982-06-30",
    profileImage: "https://i.pravatar.cc/150?u=jackwilson",
    status: "Active",
  },
  {
    id: 19,
    name: "Hannah Kim",
    email: "hannah.kim@example.com",
    phone: "+82 2-987-6543",
    address: "202 Itaewon-ro, Seoul, South Korea",
    birthDate: "1997-01-18",
    profileImage: "https://i.pravatar.cc/150?u=hannahkim",
    status: "Active",
  },
  {
    id: 20,
    name: "Liam Murphy",
    email: "liam.murphy@example.com",
    phone: "+353 1 876 5432",
    address: "8 O'Connell St, Dublin, Ireland",
    birthDate: "1985-08-25",
    profileImage: "https://i.pravatar.cc/150?u=liammurphy",
    status: "Inactive",
  },
  {
    id: 21,
    name: "Zeynep Yıldız",
    email: "zeynep.yildiz@example.com",
    phone: "+90 212 555 1234",
    address: "Beyoğlu, İstanbul, Türkiye",
    birthDate: "1992-04-10",
    profileImage: "https://i.pravatar.cc/150?u=zeynepyildiz",
    status: "Active",
  },
  {
    id: 22,
    name: "Ahmet Demir",
    email: "ahmet.demir@example.com",
    phone: "+90 312 555 5678",
    address: "Çankaya, Ankara, Türkiye",
    birthDate: "1988-12-03",
    profileImage: "https://i.pravatar.cc/150?u=ahmetdemir",
    status: "Inactive",
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
  const [customers] = useState(initialCustomers);

  return (
    <div className="flex w-full flex-col p-4 min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <h1 className="text-3xl font-extrabold text-indigo-700 dark:text-yellow-300 mb-8 drop-shadow">Customers</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800 rounded-2xl shadow-2xl bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Avatar</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Name</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Email</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Phone</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Address</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Birth Date</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Status</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
            {customers.map((customer) => (
              <tr key={customer.id} className="hover:bg-indigo-50 dark:hover:bg-gray-800 transition">
                <td className="px-4 py-3 whitespace-nowrap">
                  <img
                    src={customer.profileImage}
                    alt={customer.name}
                    width={40}
                    height={40}
                    className="rounded-full border shadow"
                  />
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm font-bold text-indigo-700 dark:text-yellow-300">{customer.name}</td>
                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-500 dark:text-gray-300">{customer.email}</td>
                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-500 dark:text-gray-300">{customer.phone}</td>
                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-500 dark:text-gray-300 max-w-xs truncate">{customer.address}</td>
                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-400 dark:text-gray-200">{new Date(customer.birthDate).toLocaleDateString()}</td>
                <td className="px-4 py-3 whitespace-nowrap text-xs">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-md border mt-2 transition ${customer.status === "Active" ? "bg-green-100 text-green-800 border-green-300 dark:bg-green-800 dark:text-white dark:border-green-900" : "bg-gray-100 text-gray-500 border-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-900"}`}>
                    {customer.status}
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