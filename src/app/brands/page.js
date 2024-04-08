import Image from "next/image";
const brands = [
  {
    name: "Apple",
    imageUrl: "https://i.imgur.com/3VfZ1rL.png",
    email: "apple@apple.com",
    role: "Admin",
    lastSeen: "2 h ago",
    lastSeenDateTime: "2024-04-01T10:24:00",
  },
  {
    name: "Google",
    imageUrl: "https://i.imgur.com/8w4z7pL.png",
    email: "google@google.com",
    role: "Editor",
    lastSeen: "2 d ago",
    lastSeenDateTime: "2024-03-30T10:24:00",
  },
  {
    name: "Microsoft",
    imageUrl: "https://i.imgur.com/7k1dX5V.png",
    email: "microsoft@microsoft.com",
    role: "Viewer",
    lastSeen: "1 w ago",
    lastSeenDateTime: "2024-03-24T10:24:00",
  },
  {
    name: "Facebook",
    imageUrl: "https://i.imgur.com/0b5Z2wD.png",
    email: "facebook@facebook.com",
    role: "Admin",
    lastSeen: "4 w ago",
    lastSeenDateTime: "2024-03-01T10:24:00",
  },
  {
    name: "Amazon",
    imageUrl: "https://i.imgur.com/3VfZ1rL.png",
    email: "amazon@amazon.com",
    role: "Editor",
    lastSeen: "1 yr ago",
    lastSeenDateTime: "2023-04-01T10:24:00",
  },
];

export default function Page() {
  return (
    <div className='flex w-full flex-row items-center justify-center'>
      {brands.map((brand) => (
        <div
          key={brand.name}
          className='flex flex-col items-center justify-center p-4'
        >
          <Image
            src={brand.imageUrl}
            alt={brand.name}
            width={100}
            height={100}
          />
          <div className='text-lg font-semibold'>{brand.name}</div>
          <div className='text-sm text-gray-500'>{brand.email}</div>
          <div className='text-sm text-gray-500'>{brand.role}</div>
          <div className='text-sm text-gray-500'>
            Last Online :{brand.lastSeen}
          </div>
        </div>
      ))}
    </div>
  );
}
