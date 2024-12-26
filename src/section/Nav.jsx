import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = ({ sidebar, setSidebar }) => {
  return (
    <>
      <nav className=" absolute top-0 left-0 w-full pt-10 text-white z-[9990]">
        <div className=" container">
          <div
            className=" flex justify-between items-center"
            data-aos="fade-up"
          >
            {/* logo section */}
            <h1 className=" text-2xl font-semibold uppercase">
              <span className=" text-primary">Coders</span> Coffee.
            </h1>
            {/* hambuger Menu section */}
            <div>
              <GiHamburgerMenu
                onClick={() => setSidebar(!sidebar)}
                className="text-3xl cursor-pointer"
                data-aos="zoom-in"
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
