"use client";
import Image from "next/image";

const categories = [
  {
    categoryId: 1,
    categoryName: "Electronics",
    categoryDescription: "Electronics and Gadgets",
    categoryImage: "https://i.pravatar.cc/150?u=Electronics",
    categoryStatus: "Active",
  },
  {
    categoryId: 2,
    categoryName: "Clothing",
    categoryDescription: "Clothing and Accessories",
    categoryImage: "https://i.pravatar.cc/150?u=Clothing",
    categoryStatus: "Active",
  },
  {
    categoryId: 3,
    categoryName: "Books",
    categoryDescription: "Books and Stationary",
    categoryImage: "https://i.pravatar.cc/150?u=Books",
    categoryStatus: "Active",
  },
  {
    categoryId: 4,
    categoryName: "Furniture",
    categoryDescription: "Furniture and Home Decor",
    categoryImage: "https://i.pravatar.cc/150?u=Furniture",
    categoryStatus: "Active",
  },
  {
    categoryId: 5,
    categoryName: "Grocery",
    categoryDescription: "Grocery and Staples",
    categoryImage: "https://i.pravatar.cc/150?u=Grocery",
    categoryStatus: "Active",
  },
  {
    categoryId: 6,
    categoryName: "Sports",
    categoryDescription: "Sports and Fitness",
    categoryImage: "https://i.pravatar.cc/150?u=Sports",
    categoryStatus: "Active",
  },
  {
    categoryId: 7,
    categoryName: "Toys",
    categoryDescription: "Toys and Games",
    categoryImage: "https://i.pravatar.cc/150?u=Toys",
    categoryStatus: "Active",
  },
  {
    categoryId: 8,
    categoryName: "Automobile",
    categoryDescription: "Automobile and Accessories",
    categoryImage: "https://i.pravatar.cc/150?u=Automobile",
    categoryStatus: "Active",
  },
  {
    categoryId: 9,
    categoryName: "Beauty",
    categoryDescription: "Beauty and Personal Care",
    categoryImage: "https://i.pravatar.cc/150?u=Beauty",
    categoryStatus: "Active",
  },
  {
    categoryId: 10,
    categoryName: "Health",
    categoryDescription: "Health and Wellness",
    categoryImage: "https://i.pravatar.cc/150?u=Health",
    categoryStatus: "Active",
  },
  {
    categoryId: 11,
    categoryName: "Jewellery",
    categoryDescription: "Jewellery and Accessories",
    categoryImage: "https://i.pravatar.cc/150?u=Jewellery",
    categoryStatus: "Active",
  },
  {
    categoryId: 12,
    categoryName: "Pets",
    categoryDescription: "Pets and Accessories",
    categoryImage: "https://i.pravatar.cc/150?u=Pets",
    categoryStatus: "Active",
  },
  {
    categoryId: 13,
    categoryName: "Tools",
    categoryDescription: "Tools and Hardware",
    categoryImage: "https://i.pravatar.cc/150?u=Tools",
    categoryStatus: "Active",
  },
  {
    categoryId: 14,
    categoryName: "Travel",
    categoryDescription: "Travel and Luggage",
    categoryImage: "https://i.pravatar.cc/150?u=Travel",
    categoryStatus: "Active",
  },
  {
    categoryId: 15,
    categoryName: "Watches",
    categoryDescription: "Watches and Accessories",
    categoryImage: "https://i.pravatar.cc/150?u=Watches",
  },
];
export default function Page() {
  return (
    <div className='flex w-full flex-col p-4 min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50'>
      <h1 className='text-3xl font-extrabold text-indigo-700 mb-8 drop-shadow'>Categories</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {categories.map((category, index) => (
          <div
            key={index}
            className='flex flex-col items-center bg-white shadow-xl rounded-2xl p-6 transition-transform hover:scale-105 border border-gray-100'
          >
            <Image
              src={category.categoryImage}
              alt={category.categoryName}
              title={category.categoryName}
              width={70}
              height={70}
              className='rounded-full mb-4 border-4 border-indigo-100 shadow'
            />
            <div className='w-full text-center'>
              <div className='font-bold text-lg text-gray-800 mb-1'>{category.categoryName}</div>
              <div className='text-sm text-gray-500 mb-1'>{category.categoryDescription}</div>
              <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-md mt-2
                ${category.categoryStatus === "Active" ? "bg-green-100 text-green-800 border border-green-300" : "bg-gray-100 text-gray-500 border border-gray-300"}
              `}>
                {category.categoryStatus}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
