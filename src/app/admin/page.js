import faker from "faker";
import React from "react";
import Image from "next/image";

const generateAdminData = () => {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const email = faker.internet.email();
  const username = faker.internet.userName();
  const avatar = faker.image.avatar();
  const permissions = ["Yönetici", "Ürün Yönetimi", "Sipariş Yönetimi"]; // Yetki listesi

  return {
    id: faker.datatype.uuid(),
    firstName,
    lastName,
    email,
    username,
    avatar,
    permissions,
  };
};

// Örnek yönetici verileri oluştur
const adminData = Array.from({ length: 10 }, generateAdminData);

export default function Page() {
  return (
    <div className='flex w-full flex-col p-4'>
      <h1 className='text-2xl font-bold mb-4'>Admin List</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {adminData.map((admin) => (
          <div
            key={admin.id}
            className='bg-white shadow-md rounded-md p-4 flex flex-col justify-center items-center'
          >
            <Image
              src={admin.avatar}
              alt={`${admin.firstName} ${admin.lastName}`}
              width={64}
              height={64}
              className='w-16 h-16 rounded-full mb-2'
            />
            <div className='text-center'>
              <h2 className='text-lg font-semibold'>
                {admin.firstName} {admin.lastName}
              </h2>
              <p className='text-sm text-gray-500'>{admin.email}</p>
              <p className='text-sm text-gray-500'>@{admin.username}</p>
              <div className='mt-2'>
                <p className='text-sm font-semibold'>Yetkiler:</p>
                <ul className='list-disc list-inside'>
                  {admin.permissions.map((permission, index) => (
                    <li key={index} className='text-xs text-gray-500'>
                      {permission}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
