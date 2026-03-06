import { memo } from 'react';

const Header = () => {
  return (
    <div>
      <div className='w-full h-24 bg-white flex justify-between items-center px-6 md:px-10'>
        
        <img src="/image.png" alt="" className='w-40 md:w-60' />

        <div className='hidden md:flex gap-6 lg:gap-10'>
          <a href="" className='tracking-wider text-base lg:text-lg'>Home</a>
          <a href="" className='tracking-wider text-base lg:text-lg'>About</a>
          <a href="" className='tracking-wider text-base lg:text-lg'>Free-Listing</a>
          <a href="" className='tracking-wider text-base lg:text-lg'>Business</a>
          <a href="" className='tracking-wider text-base lg:text-lg'>IT</a>
          <a href="" className='tracking-wider text-base lg:text-lg'>Jobs</a>
        </div>

        <button className='bg-[#3B82F6] w-20 md:w-24 h-9 md:h-10 rounded-2xl text-white tracking-wider text-sm md:text-base'>
          Login
        </button>

      </div>
    </div>
  );
};

export default memo(Header);