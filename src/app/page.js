import Image from "next/image";
import Sidebar from "./Sidebar";

export default function Home() {
  return (
    <div className='flex w-full h-full flex-col gap-4'>
      Server status : <span className='text-green-500'>Online</span>
      Customer support : <span className='text-green-500'>Online</span>
      Seller support : <span className='text-green-500'>Online</span>
      Payment gateway : <span className='text-green-500'>Online</span>
      Web api : <span className='text-green-500'>Online</span>
      store api : <span className='text-green-500'>Online</span>
      page views today: <span className='text-green-500'>100</span>
      Login api : <span className='text-green-500'>Online</span>
      Internal api : <span className='text-green-500'>Online</span>
    </div>
  );
}
