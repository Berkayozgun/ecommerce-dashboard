"use client";
import React, { useEffect, useState, useRef } from "react";
import {
  risingGreen,
  totalOrderIcon,
  totalUserIcon,
  totalProfitIcon,
} from "../icons/SVGIcon";
import Avatar from "./Avatar";
import Image from "next/image";
import CountUp from "react-countup";

const StatCard = ({ title, value, icon, extraContent, trend }) => {
  // Determine if value is a number or a string with currency
  let displayValue = value;
  let prefix = "";
  let suffix = "";
  let numericValue = value;
  if (typeof value === "string") {
    // Try to extract number and currency symbol
    const match = value.match(/([\$₺€£]?)([\d,\.]+)([\$₺€£%]?)/);
    if (match) {
      prefix = match[1];
      numericValue = parseFloat(match[2].replace(/,/g, ""));
      suffix = match[3];
    }
  }

  // Animation effect for up/down
  const [effect, setEffect] = useState("");
  useEffect(() => {
    if (trend === "up") {
      setEffect("statcard-up");
      const t = setTimeout(() => setEffect(""), 1000);
      return () => clearTimeout(t);
    } else if (trend === "down") {
      setEffect("statcard-down");
      const t = setTimeout(() => setEffect(""), 1000);
      return () => clearTimeout(t);
    } else {
      setEffect("");
    }
  }, [trend, value]);

  // CountUp: animate from 0 on first render, then from previous value
  const prevValue = useRef();
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  let startValue = 0;
  if (hasMounted && typeof numericValue === "number" && typeof prevValue.current === "number") {
    startValue = prevValue.current;
  }
  useEffect(() => {
    if (typeof numericValue === "number") {
      prevValue.current = numericValue;
    }
  }, [numericValue]);

  return (
    <div className={`flex flex-col flex-1 min-w-[220px] max-w-xs shadow-2xl h-36 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800 p-6 justify-between gap-4 transition-all duration-300 ${effect}`}>
      <div className='flex items-center justify-between'>
        <div>
          <p className='text-sm text-gray-500 dark:text-gray-300'>{title}</p>
          <p className='text-2xl font-medium text-gray-900 dark:text-gray-100'>
            {typeof numericValue === "number" ? (
              <>
                {prefix}
                <CountUp start={startValue} end={numericValue} duration={hasMounted ? 0.7 : 1.2} separator="," />
                {suffix}
              </>
            ) : (
              displayValue
            )}
          </p>
        </div>
        <span className='rounded-full'>{icon}</span>
      </div>
      <div className='mt-1 flex gap-1 text-green-600'>
        {risingGreen}
        <p className='flex gap-2 text-xs'>
          <span className='font-medium'> 8.51% </span>
          <span className='text-gray-500 dark:text-gray-300'> Since last week </span>
        </p>
      </div>
      {extraContent && <div>{extraContent}</div>}
    </div>
  );
};

export default StatCard;
