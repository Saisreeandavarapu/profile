import { memo } from 'react';

const Header = () => {
  return (
    <div>
     <div className='w-full h-24 bg-white flex justify-between items-center p-10 '>
        <img src="/image.png" alt="" className='w-60' />
        <div className='flex gap-10'>
            <a href="" className='tracking-wider text-lg'>Home</a>
            <a href="" className='tracking-wider text-lg'>About</a>
            <a href="" className='tracking-wider text-lg'>Free-Listing</a>
            <a href="" className='tracking-wider text-lg'>Business</a>
            <a href="" className='tracking-wider text-lg'>IT</a>
            <a href="" className='tracking-wider text-lg'>Jobs</a>
        </div>
        <button className='bg-[#3B82F6] w-24 h-10 rounded-2xl text-white tracking-wider'>Login</button>
     </div>
    </div>
  );
};

export default memo(Header);