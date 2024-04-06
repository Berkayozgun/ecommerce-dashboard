import React from "react";
import {
  risingGreen,
  totalOrderIcon,
  totalUserIcon,
  totalProfitIcon,
} from "../icons/SVGIcon";
import Avatar from "./Avatar";
import Image from "next/image";

const StatCard = ({ title, value, icon, extraContent }) => {
  return (
    <div className='flex flex-col w-3/12 shadow-2xl h-36 rounded-2xl border border-gray-100 bg-white p-6 justify-between gap-4'>
      <div className='flex items-center justify-between'>
        <div>
          <p className='text-sm text-gray-500'>{title}</p>
          <p className='text-2xl font-medium text-gray-900'>{value}</p>
        </div>
        <span className='rounded-full'>{icon}</span>
      </div>
      <div className='mt-1 flex gap-1 text-green-600'>
        {risingGreen}
        <p className='flex gap-2 text-xs'>
          <span className='font-medium'> 8.51% </span>
          <span className='text-gray-500'> Since last week </span>
        </p>
      </div>
      {extraContent && <div>{extraContent}</div>}
    </div>
  );
};

export default StatCard;
