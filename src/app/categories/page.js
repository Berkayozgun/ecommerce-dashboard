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
    <div className='flex w-full h-full flex-row items-center justify-center'>
      <ul className='flex h-full flex-col w-full mr-10'>
        {categories.map((category, index) => (
          <li
            className='flex w-full h-full flex-row shadow-xl rounded-xl items-center justify-between p-4 m-2'
            key={index}
            style={{ flex: "1" }}
          >
            <div>
              <strong>Category Name:</strong> {category.categoryName}
            </div>
            <div>
              <strong>Description:</strong> {category.categoryDescription}
            </div>
            <div>
              <strong>Status:</strong> {category.categoryStatus}
            </div>
            <div>
              <Image
                src={category.categoryImage}
                alt={category.categoryName}
                title={category.categoryName}
                width='40'
                height='40'
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
