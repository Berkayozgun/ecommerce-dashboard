import Image from "next/image";
const products = [
  {
    name: "Apple Iphone 13",
    imageUrl: "https://i.imgur.com/3VfZ1rL.png",
    price: "1000",
    stock: "100",
  },
  {
    name: "Samsung Galaxy S21",
    imageUrl: "https://i.imgur.com/8w4z7pL.png",
    price: "900",
    stock: "200",
  },
  {
    name: "Xiaomi Mi 11",
    imageUrl: "https://i.imgur.com/7k1dX5V.png",
    price: "800",
    stock: "300",
  },
  {
    name: "OnePlus 9",
    imageUrl: "https://i.imgur.com/0b5Z2wD.png",
    price: "700",
    stock: "400",
  },
  {
    name: "Google Pixel 5",
    imageUrl: "https://i.imgur.com/3VfZ1rL.png",
    price: "600",
    stock: "500",
  },
];

export default function Page() {
  return (
    <div className='flex w-full flex-col p-4'>
      <h1 className='text-2xl font-bold mb-4'>Products</h1>
      <div className='flex flex-wrap justify-center gap-4'>
        {products.map((product) => (
          <div
            key={product.name}
            className='flex flex-col items-center justify-center p-4 shadow-lg rounded-lg w-full sm:w-[48%] md:w-[31%] lg:w-[23%]'
          >
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={100}
              height={100}
            />
            <div className='text-lg font-semibold'>{product.name}</div>
            <div className='text-sm text-gray-500'>{product.price}</div>
            <div className='text-sm text-gray-500'>{product.stock}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
