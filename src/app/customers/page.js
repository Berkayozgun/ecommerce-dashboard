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
    <div className='flex w-full'>
      <ul className='flex flex-col w-full mr-10'>
        {fakeUsers.map((user, index) => (
          <li
            className='flex w-full flex-row shadow-xl rounded-xl items-center justify-between p-4 m-4'
            key={index}
            style={{ flex: "1" }} // Kartların genişliğini tam olarak alması için flex özelliği
          >
            <div>
              <strong>Name:</strong> {user.name.firstname} {user.name.lastname}
            </div>
            <div>
              <strong>Email:</strong> {user.email}
            </div>
            <div>
              <strong>Phone:</strong> {user.phone}
            </div>
            <div>
              <strong>Address:</strong>{" "}
              {/* adresin toplamı 10 karakterden uzun ise ... ile kısalt ve açılabilir bir yapı oluştur*/}
              {Object.values(user.address).join(", ").substring(0, 20)}
              {Object.values(user.address).join(", ").length > 20 && "..."}
              <br />
              {/* adresin tamamını göstermek için açılabilir bir yapı */}
              <details>
                <summary>More</summary>
                {Object.values(user.address).join(", ")}
              </details>
            </div>
            <div>
              <strong>Birth Date:</strong> {user.birthDate.toDateString()}
            </div>
            <div>
              <Image
                src={user.profileImage}
                alt={user.name.firstname}
                width={30}
                height={30}
                className='rounded-full'
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FakeUsersPage;
