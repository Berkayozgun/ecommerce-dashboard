import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  dashboardIcon,
  orderManagementIcon,
  customersIcon,
  couponIcon,
  categoriesIcon,
  transactionIcon,
  brandIcon,
  addProductIcon,
  productListIcon,
  manageAdminIcon,
  adminRolesIcon,
} from "./icons/SVGIcon";

const Sidebar = () => {
  return (
    <div class='flex flex-col rounded-xl bg-white text-gray-700 h-full w-3/12 p-4 shadow-xl shadow-blue-gray-900/5'>
      <div className='flex flex-row items-center justify-center gap-4'>
        <Image
          src='https://cdn.pixabay.com/photo/2017/01/13/01/22/rocket-1976107_1280.png'
          alt='Free rocket icon symbol vector'
          title='Download free HD stock image of Rocket Icon'
          width='70'
          height='70'
        />
        <h1>Dashboard</h1>
      </div>
      <ul className='flex flex-col p-4 '>
        <Link href='/'>
          <div className='text-xs uppercase text-gray-500'>Main Menu</div>
        </Link>
        <Link href='/dashboard'>
          <div
            role='button'
            tabindex='0'
            className='flex items-center w-full p-3 gap-x-2 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none'
          >
            <div>{dashboardIcon}</div>
            <div>Dashboard</div>
          </div>
        </Link>
        <Link href='/orders'>
          <div
            role='button'
            tabindex='0'
            className='flex items-center w-full p-3 gap-x-2 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none'
          >
            {" "}
            {orderManagementIcon}
            <div>Order Management</div>
          </div>
        </Link>
        <Link href='/customers'>
          <div
            role='button'
            tabindex='0'
            className='flex items-center w-full p-3 gap-x-2 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none'
          >
            {" "}
            {customersIcon}
            <div>Customers</div>
          </div>
        </Link>
        <Link href='./coupons'>
          <div
            role='button'
            tabindex='0'
            className='flex items-center w-full p-3 gap-x-2 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none'
          >
            {" "}
            {couponIcon}
            <div>Coupon Code</div>
          </div>
        </Link>
        <Link href='./categories'>
          <div
            role='button'
            tabindex='0'
            className='flex items-center w-full p-3 gap-x-2 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none'
          >
            {" "}
            {categoriesIcon}
            <div>Categories</div>
          </div>
        </Link>
        <Link href='./transactions'>
          <div
            role='button'
            tabindex='0'
            className='flex items-center w-full p-3 gap-x-2 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none'
          >
            {" "}
            {transactionIcon}
            <div>Transaction</div>
          </div>
        </Link>
        <Link href='./brands'>
          <div
            role='button'
            tabindex='0'
            className='flex items-center w-full p-3 gap-x-2 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none'
          >
            {" "}
            {brandIcon}
            <div>Brand</div>
          </div>
        </Link>
      </ul>
      <ul className='flex flex-col p-4'>
        <Link href='./addproduct'>
          <div className='text-xs uppercase text-gray-500'>Products</div>
          <div
            role='button'
            tabindex='0'
            className='flex items-center w-full p-3 gap-x-2 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none'
          >
            {" "}
            {addProductIcon}
            <div>Add Products</div>
          </div>
        </Link>
        <Link href='/products'>
          <div
            role='button'
            tabindex='0'
            className='flex items-center w-full p-3 gap-x-2 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none'
          >
            {" "}
            {productListIcon}
            <div>Product List</div>
          </div>
        </Link>
      </ul>

      <ul className='flex flex-col p-4 '>
        <Link href='./admin'>
          <div className='text-xs uppercase text-gray-500'>Admin</div>
          <div
            role='button'
            tabindex='0'
            className='flex items-center w-full p-3 gap-x-2 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none'
          >
            {" "}
            {manageAdminIcon}
            <div>Manage Admins</div>
          </div>
        </Link>
        <Link href='./adminroles'>
          <div
            role='button'
            tabindex='0'
            className='flex items-center w-full p-3 gap-x-2 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none'
          >
            {" "}
            {adminRolesIcon}
            <div>Admin Roles</div>
          </div>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
