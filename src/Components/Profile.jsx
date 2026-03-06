import { memo } from 'react';
import Button from './Button';
import { ArrowBigRight, Mail, PhoneCallIcon, QrCodeIcon, RocketIcon, SaveIcon, ShareIcon } from 'lucide-react';
import Box from './Box';

const Profile = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col md:flex-row p-4 gap-6">
      {/* Main Profile Section */}
      <section className="bg-white shadow-2xl w-full md:w-3/5 max-w-4xl rounded-lg overflow-hidden">

        {/* Cover Image */}
        <img src="/image copy.png" alt="" className="w-full h-[180px] md:h-[230px] object-cover" />

        {/* Profile Section */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 p-5">

          <img
            src="/image copy 2.png"
            alt=""
            className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[119px] md:h-[119px]"
          />

          <div className="flex-1">
            <div className="font-bold text-lg sm:text-xl">Shaik Ahmad Alisha</div>
            <div className="font-light text-gray-800 text-sm sm:text-base">UI/UX designer</div>
            <div className="text-xs sm:text-sm text-gray-500">Visakhapatnam, Andhra Pradesh</div>

            <img src="/image copy 3.png" alt="" className="w-[120px] sm:w-[165px] mt-2" />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full md:w-auto">
            <button className="bg-[#3975FF] w-full sm:w-40 h-10 sm:h-11 rounded-md text-white flex items-center justify-center gap-2 text-sm sm:text-base">
              Get in Touch <ArrowBigRight />
            </button>
            <button className="border-gray-400 w-full sm:w-40 h-10 sm:h-11 rounded-md border-[1px] text-sm sm:text-base">
              Follow
            </button>
          </div>

        </div>

        {/* Company Section */}
        <div className="px-5 pb-5">
          <div className="font-bold pt-3 text-sm sm:text-base">
            CONNECTREE SOFTECH SOLUTIONS PVT LTD
          </div>

          <div className="text-sm sm:text-md font-light mt-2">
            Connectree Softech Solutions Pvt. Ltd. is a company that appears to
            be based in Vishakhapatnam, India, and offers a variety of IT
            services and solutions. They have job openings available and are
            hiring for various positions, according to Jobaaj and LinkedIn.
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 sm:gap-4 mt-6">
            <Button title="Share" logo={ShareIcon} />
            <Button title="QR" logo={QrCodeIcon} />
            <Button title="Send My Card" logo={RocketIcon} />
            <Button title="Save Contact" logo={SaveIcon} />
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-6 sm:gap-8 mt-8 border-b-[1px] border-gray-400 pb-3">
            <a href="" className="font-light text-gray-700 active:text-blue-500 text-sm sm:text-base">Contact</a>
            <a href="" className="font-light text-gray-700 active:text-blue-500 text-sm sm:text-base">Services</a>
            <a href="" className="font-light text-gray-700 active:text-blue-500 text-sm sm:text-base">Products</a>
            <a href="" className="font-light text-gray-700 active:text-blue-500 text-sm sm:text-base">Gallery</a>
          </div>

          {/* Personal Contact */}
          <div className="py-4 sm:py-6">
            <div className="font-medium text-sm sm:text-base">Personal Contact</div>

            <div className="flex gap-2 font-light mt-2 items-center text-sm sm:text-base">
              <PhoneCallIcon className="bg-blue-300 rounded-2xl p-1" size={24} sm={28} />
              9848652785
            </div>

            <div className="flex gap-2 font-light mt-2 items-center text-sm sm:text-base">
              <Mail className="bg-blue-300 rounded-2xl p-1" size={24} sm={28} />
              contact@connectree.co
            </div>
          </div>
        </div>

      </section>

      {/* Secondary Section */}
      <section className="w-full md:w-2/5 px-0 sm:px-4 md:px-10 flex flex-col gap-6">

        {/* Boxes Grid */}
        <div className="grid sm:grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2 items-center justify-center">
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

        {/* Learn More Button */}
        <div className="flex justify-center mt-4 sm:mt-6">
          <button className="bg-[#3975FF] w-full sm:w-40 h-10 sm:h-11 rounded-md text-white flex items-center justify-center gap-2 text-sm sm:text-base">
            Learn More <ArrowBigRight />
          </button>
        </div>

        {/* Khata Tracker Section */}
        <section className="bg-white shadow-2xl rounded-xl p-4 sm:p-5 w-full mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 sm:gap-4">

            <div>
              <div className="text-lg sm:text-2xl font-semibold">
                Simplify Your Business Accounts with Khata Tracker!
              </div>
              <div className="text-gray-500 mt-2 sm:mt-3 text-sm sm:text-base">
                From expenses to income – manage it all with
                <br />
                Khata Tracker.
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end gap-2 sm:gap-3 mt-2 md:mt-0">
              <img
                src="/image copy 8.png"
                alt=""
                className="w-[100px] sm:w-[122px] h-[80px] sm:h-[100px]"
              />
              <button className="w-[150px] sm:w-[180px] bg-[#34A853] text-white h-8 rounded-3xl text-sm sm:text-base">
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