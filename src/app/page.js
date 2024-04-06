import Image from "next/image";
import Sidebar from "./Sidebar";

export default function Home() {
  return (
    <div className='flex flex-col gap-8 items-center justify-center h-full w-full'>
      <div className='text-center'>
        <h1 className='text-3xl font-bold mb-4'>System Status</h1>
        <div className='flex flex-wrap flex-col gap-8'>
          <StatusItem label='Server Staus' status='Online' />
          <StatusItem label='Customer Support' status='Online' />
          <StatusItem label='Seller Support' status='Online' />
          <StatusItem label='Payment Gateway' status='Online' />
          <StatusItem label='Web API' status='Online' />
          <StatusItem label='Store API' status='Online' />
          <StatusItem label='Daily Page Visitor' status='5342' />
          <StatusItem label='Login API' status='Online' />
          <StatusItem label='Internal  API' status='Online' />
        </div>
      </div>
    </div>
  );
}

function StatusItem({ label, status }) {
  return (
    <div className='flex justify-between items-center'>
      <span>{label} :</span>
      <span
        className={`text-${typeof status === "string" ? "green" : "gray"}-500`}
      >
        {status}
      </span>
    </div>
  );
}
