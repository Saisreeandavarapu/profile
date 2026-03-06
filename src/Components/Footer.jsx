import { memo } from 'react';

const Footer = () => {
  return (
    <div>
      <div className='pt-40 bg-gray-100'>
      <div className='bg-white w-full h-auto shadow-2xl px-4 sm:px-6 lg:px-10 py-10 '>
        
        <div className='text-[#2CB2E3] text-2xl sm:text-3xl lg:text-5xl font-bold tracking-wider text-center mb-10 leading-snug'>
          <span className='text-black/90'>Connecting</span> Businesses, People & Opportunities
        </div>

        <section className='flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between border-b-[1px] border-t-[1px] border-gray-400 py-10'>

          {/* Logo + Description */}
          <div className='max-w-sm'>
            <img src="/image.png" alt="" className='w-52 sm:w-60 lg:w-72' />

            <div className='text-gray-600 text-base sm:text-lg lg:text-xl mt-5 tracking-wider'>
              Building digital bridges between <br />
              businesses and customers <br />
              through innovative technology <br />
              and trusted connections.
            </div>
          </div>

          {/* Company */}
          <div>
            <div className='text-2xl lg:text-3xl tracking-wider mb-2'>Company</div>
            <div className='text-gray-600 text-base lg:text-xl tracking-wider mb-2'>Home</div>
            <div className='text-gray-600 text-base lg:text-xl tracking-wider mb-2'>About</div>
            <div className='text-gray-600 text-base lg:text-xl tracking-wider mb-2'>Features</div>
            <div className='text-gray-600 text-base lg:text-xl tracking-wider mb-2'>Career</div>
            <div className='text-gray-600 text-base lg:text-xl tracking-wider mb-2'>Contact</div>
          </div>

          {/* Help */}
          <div>
            <div className='text-2xl lg:text-3xl tracking-wider mb-2'>Help</div>
            <div className='text-gray-600 text-base lg:text-xl tracking-wider mb-2'>Customer Support</div>
            <div className='text-gray-600 text-base lg:text-xl tracking-wider mb-2'>Free listing</div>
            <div className='text-gray-600 text-base lg:text-xl tracking-wider mb-2'>Terms & Conditions</div>
            <div className='text-gray-600 text-base lg:text-xl tracking-wider mb-2'>Privacy Policy</div>
            <div className='text-gray-600 text-base lg:text-xl tracking-wider mb-2'>Legal</div>
          </div>

          {/* Features */}
          <div>
            <div className='text-2xl lg:text-3xl tracking-wider mb-2'>Features</div>
            <div className='text-gray-600 text-base lg:text-xl tracking-wider mb-2'>Business Listings</div>
            <div className='text-gray-600 text-base lg:text-xl tracking-wider mb-2'>Digital card generation</div>
            <div className='text-gray-600 text-base lg:text-xl tracking-wider mb-2'>Networking</div>
            <div className='text-gray-600 text-base lg:text-xl tracking-wider mb-2'>Software solutions</div>
            <div className='text-gray-600 text-base lg:text-xl tracking-wider mb-2'>Video platform</div>
          </div>

        </section>

        <div className='text-sm sm:text-base lg:text-xl text-gray-600 text-center mt-10'>
          © 2025 Connectree. All rights reserved.
        </div>

      </div>
      </div>
    </div>
  );
};

export default memo(Footer);