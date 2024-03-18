import React from "react";
import Image from "next/image";
const Sidebar = () => {
  return (
    <div className='flex flex-col border h-full'>
      <div className='flex flex-row items-center justify-center gap-4'>
        <img
          srcset='https://cdn.pixabay.com/photo/2017/01/13/01/22/rocket-1976107_960_720.png 1x, https://cdn.pixabay.com/photo/2017/01/13/01/22/rocket-1976107_1280.png 2x'
          src='https://cdn.pixabay.com/photo/2017/01/13/01/22/rocket-1976107_1280.png'
          alt='Free rocket icon symbol vector'
          title='Download free HD stock image of Rocket Icon'
          width='70'
          height='70'
        />
        <h1>Dash</h1>
        {/* hamburger menu icon*/}
        <img
          src='https://www.svgrepo.com/show/532203/menu-alt-1.svg'
          width='30'
          height='30'
          alt='menu'
        />
      </div>
      <ul className='flex flex-col p-4 gap-4'>
        <div className='text-xs uppercase text-gray-500'>Main Menu</div>
        <li className='flex flex-row items-center gap-2 hover:bg-gray-200'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20px'
            height='20px'
            viewBox='0 0 24 24'
            fill='none'
          >
            <path
              d='M3 12H7.26393C8.02148 12 8.714 12.428 9.05279 13.1056L9.44721 13.8944C9.786 14.572 10.4785 15 11.2361 15H12.9296C13.5983 15 14.2228 14.6658 14.5937 14.1094L15.4063 12.8906C15.7772 12.3342 16.4017 12 17.0704 12H21M3 12V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V12M3 12L5.51334 5.29775C5.80607 4.51715 6.55231 4 7.386 4H16.614C17.4477 4 18.1939 4.51715 18.4867 5.29775L21 12'
              stroke='#000000'
              stroke-width='1.5'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
          <div>Dashboard</div>
        </li>
        <li className='flex flex-row items-center gap-2 hover:bg-gray-200'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='0px'
            height='800px'
            viewBox='0 0 24 24'
            fill='none'
          >
            <path
              d='M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z'
              stroke='#1C274C'
              stroke-width='1.5'
            />
            <path
              d='M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z'
              stroke='#1C274C'
              stroke-width='1.5'
            />
            <path
              d='M2 3L2.26121 3.09184C3.5628 3.54945 4.2136 3.77826 4.58584 4.32298C4.95808 4.86771 4.95808 5.59126 4.95808 7.03836V9.76C4.95808 12.7016 5.02132 13.6723 5.88772 14.5862C6.75412 15.5 8.14857 15.5 10.9375 15.5H12M16.2404 15.5C17.8014 15.5 18.5819 15.5 19.1336 15.0504C19.6853 14.6008 19.8429 13.8364 20.158 12.3075L20.6578 9.88275C21.0049 8.14369 21.1784 7.27417 20.7345 6.69708C20.2906 6.12 18.7738 6.12 17.0888 6.12H11.0235M4.95808 6.12H7'
              stroke='#1C274C'
              stroke-width='1.5'
              stroke-linecap='round'
            />
          </svg>
          <div>Order Management</div>
        </li>
        <li>
          <div>Customers</div>
        </li>
        <li>
          <div>Coupon Code</div>
        </li>
        <li>
          <div>Categories</div>
        </li>
        <li>
          <div>Transaction</div>
        </li>
        <li>
          <div>Brand</div>
        </li>
      </ul>
      <ul className='flex flex-col p-4 gap-4'>
        <div className='text-xs uppercase text-gray-500'>Products</div>
        <li>
          <div>Add Products</div>
        </li>
        <li>
          <div>Product List</div>
        </li>
      </ul>
      <ul className='flex flex-col p-4 gap-4'>
        <div className='text-xs uppercase text-gray-500'>Admin</div>

        <li>
          <div>Manage Admins</div>
        </li>
        <li>
          <div>Admin Roles</div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
