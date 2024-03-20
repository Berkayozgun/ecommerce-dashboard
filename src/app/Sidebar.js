import React from "react";
import Image from "next/image";
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
    <div className='flex flex-col border-r-2 w-1/6 h-full'>
      <div className='flex flex-row items-center justify-center gap-4'>
        <Image
          src='https://cdn.pixabay.com/photo/2017/01/13/01/22/rocket-1976107_1280.png'
          alt='Free rocket icon symbol vector'
          title='Download free HD stock image of Rocket Icon'
          width='70'
          height='70'
        />
        <h1>Dash</h1>
        {/* hamburger menu icon*/}
        <Image
          src='https://www.svgrepo.com/show/532203/menu-alt-1.svg'
          width='30'
          height='30'
          alt='menu'
        />
      </div>
      <ul className='flex flex-col p-4 gap-4'>
        <div className='text-xs uppercase text-gray-500'>Main Menu</div>
        <li className='flex flex-row items-center gap-2 hover:bg-gray-200'>
          <div>{dashboardIcon}</div>
          <div>Dashboard</div>
        </li>
        <li className='flex flex-row items-center gap-2 hover:bg-gray-200'>
          {orderManagementIcon}
          <div>Order Management</div>
        </li>
        <li className='flex flex-row items-center gap-2 hover:bg-gray-200'>
          {customersIcon}
          <div>Customers</div>
        </li>
        <li className='flex flex-row items-center gap-2 hover:bg-gray-200'>
          {couponIcon}
          <div>Coupon Code</div>
        </li>
        <li className='flex flex-row items-center gap-2 hover:bg-gray-200'>
          {categoriesIcon}
          <div>Categories</div>
        </li>
        <li className='flex flex-row items-center gap-2 hover:bg-gray-200'>
          {transactionIcon}
          <div>Transaction</div>
        </li>
        <li className='flex flex-row items-center gap-2 hover:bg-gray-200'>
          {brandIcon}
          <div>Brand</div>
        </li>
      </ul>
      <ul className='flex flex-col p-4 gap-4'>
        <div className='text-xs uppercase text-gray-500'>Products</div>
        <li className='flex flex-row items-center gap-2 hover:bg-gray-200'>
          {addProductIcon}
          <div>Add Products</div>
        </li>
        <li className='flex flex-row items-center gap-2 hover:bg-gray-200'>
          {productListIcon}
          <div>Product List</div>
        </li>
      </ul>
      <ul className='flex flex-col p-4 gap-4'>
        <div className='text-xs uppercase text-gray-500'>Admin</div>
        <li className='flex flex-row items-center gap-2 hover:bg-gray-200'>
          {manageAdminIcon}
          <div>Manage Admins</div>
        </li>
        <li className='flex flex-row items-center gap-2 hover:bg-gray-200'>
          {adminRolesIcon}
          <div>Admin Roles</div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
