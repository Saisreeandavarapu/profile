import { memo } from 'react';

const Box = ({ image, title, description }) => {
  return (
    <div>
      <section className='w-60 h-60 bg-white rounded-2xl p-4 flex flex-col items-center text-center m-4 shadow-xl'>
        <img src={image} alt={title} className='w-16 h-16 mb-2' />
        
        <div className='font-medium text-sm'>{title}</div>
        
        <div className='text-gray-400 text-xs'>
          {description}
        </div>

        <button className='w-40 h-8 bg-blue-500 text-white rounded-md mt-3'>
          Explore More
        </button>
      </section>
    </div>
  );
};

export default memo(Box);