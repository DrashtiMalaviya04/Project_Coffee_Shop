import React from "react";
import CreditCards from "../assets/website/credit-cards.webp";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaPhone,
  FaTelegram,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className=" bg-gradient-to-r from-primary to-primaryDark pt-12 pb-8 text-white">
        <div className=" container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
            {/* company details section */}
            <div className=" space-y-6" data-aos="fade-up">
              <h1 className=" text-3xl font-bold uppercase">Corders Cafe</h1>
              <p className=" text-sm max-w-[300px]">
                It is inhumane, in my opinion, to force people who genuinely
                have a medical need for coffee to wait in line behind people who
                apparently view it as some kind of recreational activity.
              </p>
              <div>
                <p className="flex gap-2 items-center">
                  <FaPhone />
                  +1 (123) 456-7890
                </p>
                <p className=" flex items-center gap-2 mt-2">
                  <FaMapLocation />
                  Ahmdabad, Gujrat
                </p>
              </div>
            </div>
            {/* footer Links section */}
            <div className=" space-y-6 " data-aos="fade-down">
              <div>
                <h1 className=" text-3xl font-bold ">Quick Links</h1>
                <div className=" grid grid-cols-2 gap-3 mt-5">
                  {/* first column section */}
                  <div className="">
                    <ul className=" space-y-2 ">
                      <li>Home</li>
                      <li>About</li>
                      <li>Contact us</li>
                      <li>Privacy Policy</li>
                    </ul>
                  </div>
                  <div>
                    <ul className=" space-y-2 ">
                      <li>Home</li>
                      <li>About</li>
                      <li>Contact us</li>
                      <li>Privacy Policy</li>
                    </ul>
                  </div>
                  {/* second column section */}
                </div>
              </div>
            </div>
            {/* secial Links section */}
            <div className=" space-y-6" data-aos="fade-up">
              <h1 className=" text-3xl font-bold">Follow Us</h1>
              <div className=" flex items-center gap-3">
                <FaFacebook className=" text-3xl hover:scale-105 duration-300" />
                <FaInstagram className=" text-3xl hover:scale-105 duration-300" />
                <FaTelegram className=" text-3xl hover:scale-105 duration-300" />
                <FaGoogle className=" text-3xl hover:scale-105 duration-300" />
              </div>
              <div>
                <h1 className=" text-xl font-semibold ">Payment Methods</h1>
                <img src={CreditCards} alt="" className=" w-[80%] mt-4" />
              </div>
            </div>
          </div>
          {/* copyright section */}
          <p className="text-center mt-8 pt-8 border-t-2">
            Copyright &copy; 2024 Company Name. All right reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
