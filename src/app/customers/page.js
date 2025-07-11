"use client";
import React from "react";
import faker from "faker";
import Image from "next/image";

const FakeUsersPage = () => {
  // Fake kullanıcı verisi oluşturma fonksiyonu
  const generateFakeUser = () => {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email();
    const phone = faker.phone.phoneNumber();

    // Adresi 20 karakterden fazla olduğunda ... şeklinde kısaltalım
    const address = {
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      country: faker.address.country(),
      zipCode: faker.address.zipCode(),
    };

    const birthDate = faker.date.past(50);
    // https://i.pravatar.cc/{size} adresinden random profil resmi alabiliriz
    const profileImage = `https://i.pravatar.cc/150?u=${firstName}${lastName}`;

    return {
      name: {
        firstname: firstName,
        lastname: lastName,
      },
      email,
      phone,
      address,
      birthDate,
      profileImage,
    };
  };

  // Örnek olarak 20 fake kullanıcı verisi oluşturalım
  const fakeUsers = Array.from({ length: 20 }, generateFakeUser);

  return (
    <div className='flex w-full flex-col p-4 min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50'>
      <h1 className='text-3xl font-extrabold text-indigo-700 mb-8 drop-shadow'>Customers</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {fakeUsers.map((user, index) => (
          <div
            className='flex flex-col items-center bg-white shadow-xl rounded-2xl p-6 transition-transform hover:scale-105 border border-gray-100'
            key={index}
          >
            <Image
              src={user.profileImage}
              alt={user.name.firstname}
              width={70}
              height={70}
              className='rounded-full mb-4 border-4 border-indigo-100 shadow'
            />
            <div className='w-full text-center'>
              <div className='font-bold text-lg text-gray-800 mb-1'>{user.name.firstname} {user.name.lastname}</div>
              <div className='text-sm text-gray-500 mb-1'>{user.email}</div>
              <div className='text-sm text-gray-500 mb-1'>{user.phone}</div>
              <div className='text-xs text-gray-400 mb-1'>
                {Object.values(user.address).join(", ").substring(0, 24)}
                {Object.values(user.address).join(", ").length > 24 && "..."}
                <details>
                  <summary className='cursor-pointer text-indigo-500'>More</summary>
                  <span className='text-gray-600'>{Object.values(user.address).join(", ")}</span>
                </details>
              </div>
              <div className='text-xs text-gray-400'>Birth: {user.birthDate.toDateString()}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FakeUsersPage;