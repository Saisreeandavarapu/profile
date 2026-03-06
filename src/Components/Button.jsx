import { memo } from 'react';

const Button = ({ logo: Logo, title }) => {
  return (
    <div>
      <button className='w-48 h-10 border-[1px] border-gray-400 flex items-center justify-center gap-2 px-3 py-1 rounded-md font-medium'>
        <Logo size={18} />
        {title}
      </button>
    </div>
  );
};

export default memo(Button);