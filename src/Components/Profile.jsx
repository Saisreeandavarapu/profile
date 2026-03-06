import { memo } from 'react';
import Button from './Button';
import { ArrowBigRight, Mail, PhoneCallIcon, QrCodeIcon, RocketIcon, SaveIcon, ShareIcon } from 'lucide-react';
import Box from './Box';

const Profile = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex  p-4 ">
      <section className="bg-white shadow-2xl w-full max-w-4xl rounded-lg overflow-hidden">

        
        <img src="/image copy.png" alt="" className="w-full h-[180px] md:h-[230px] object-cover"/>

        {/* Profile Section */}
        <div className="flex flex-col md:flex-row md:items-center gap-6 p-5">

          <img
            src="/image copy 2.png"
            alt=""
            className="w-[100px] h-[100px] md:w-[119px] md:h-[119px]"
          />

          <div className="flex-1">
            <div className="font-bold text-xl">Shaik Ahmad Alisha</div>
            <div className="font-light text-gray-800">UI/UX designer</div>
            <div className="text-sm text-gray-500">
              Visakhapatnam, Andhra Pradesh
            </div>

            <img src="/image copy 3.png" alt="" className="w-[165px] mt-2"/>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button className="bg-[#3975FF] w-full sm:w-40 h-11 rounded-md text-white flex items-center justify-center gap-2">
              Get in Touch <ArrowBigRight/>
            </button>
            <button className="border-gray-400 w-full sm:w-40 h-11 rounded-md border-[1px]">
              Follow
            </button>
          </div>

        </div>

       
        <div className="px-5">
          <div className="font-bold pt-3">
            CONNECTREE SOFTECH SOLUTIONS PVT LTD
          </div>

          <div className="text-md font-light mt-2">
            Connectree Softech Solutions Pvt. Ltd. is a company that appears to
            be based in Vishakhapatnam, India, and offers a variety of IT
            services and solutions. They have job openings available and are
            hiring for various positions, according to Jobaaj and LinkedIn.
          </div>

         
          <div className="flex flex-wrap gap-4 mt-7">
            <Button title="Share" logo={ShareIcon} />
            <Button title="QR" logo={QrCodeIcon} />
            <Button title="Send My Card" logo={RocketIcon} />
            <Button title="Save Contact" logo={SaveIcon} />
          </div>

          
          <div className="flex flex-wrap gap-8 mt-10 border-b-[1px] border-gray-400">
            <a href="" className="font-light text-gray-700 active:text-blue-500 mb-4">
              Contact
            </a>
            <a href="" className="font-light text-gray-700 active:text-blue-500 mb-4">
              Services
            </a>
            <a href="" className="font-light text-gray-700 active:text-blue-500 mb-4">
              Products
            </a>
            <a href="" className="font-light text-gray-700 active:text-blue-500 mb-4">
              Gallery
            </a>
          </div>

          
          <div className="py-6">
            <div className="font-medium">Personal Contact</div>

            <div className="flex gap-2 font-light mt-2 items-center">
              <PhoneCallIcon
                className="bg-blue-300 rounded-2xl p-1"
                size={28}
              />
              9848652785
            </div>

            <div className="flex gap-2 font-light mt-2 items-center">
              <Mail
                className="bg-blue-300 rounded-2xl p-1"
                size={28}
              />
              contact@connectree.co
            </div>
          </div>
        </div>

      </section>
     <section className="px-4 md:px-10">

  
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    <Box
      image="/image copy 4.png"
      title="Find Local Bussinesss"
      description="Find Trusted Local Business Near you Quickly"
    />

    <Box
      image="/image copy 5.png"
      title="IT Market Place: Connect with companies"
      description="Discover top IT Services & products"
    />

    <Box
      image="/image copy 6.png"
      title="Explore Professional Networking"
      description="Connect and Collaborate with professionals to grow"
    />

    <Box
      image="/image copy 7.png"
      title="Offline Business Networking"
      description="Find Trusted Local Business Near you Quickly"
    />
  </div>

  
  <div className="flex justify-center mt-6">
    <button className="bg-[#3975FF] w-full sm:w-40 h-11 rounded-md text-white flex items-center justify-center gap-2">
      Learn More <ArrowBigRight />
    </button>
  </div>

  
  <section className="bg-white shadow-2xl rounded-xl p-5 mt-6 w-full max-w-4xl mx-auto">

    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

      <div>
        <div className="text-2xl">
          Simplify Your Business Accounts with Khata Tracker!
        </div>

        <div className="text-gray-500 mt-3">
          From expenses to income – manage it all with
          <br />
          Khata Tracker.
        </div>
      </div>

      <div className="flex flex-col items-center md:items-end gap-3">
        <img
          src="/image copy 8.png"
          alt=""
          className="w-[122px] h-[100px]"
        />

        <button className="w-[180px] bg-[#34A853] text-white h-8 rounded-3xl">
          Start 7 days free trail
        </button>
      </div>

    </div>

  </section>

</section>
      
    </div>
  );
};

export default memo(Profile);