import Image from "next/image";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";

export default function Home() {
  return (
    <div className='flex w-full flex-row '>
      <Sidebar />
      <Dashboard />
    </div>
  );
}
