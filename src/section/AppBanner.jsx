import React from "react";
import bannerImg from "../assets/coffee-cover.jpg";
import AppStore from "../assets/website/app_store.png";
import PlayStore from "../assets/website/play_store.png";

const BannerStyle = {
  backgroundImage: `url(${bannerImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100%",
  width: "100%",
};
const AppBanner = () => {
  return (
    <>
      <div className=" container my-14">
        <div
          style={BannerStyle}
          className=" sm:min-h-[500px] sm:flex sm:justify-end sm:items-center rounded-xl"
        >
          <div>
            <div className="space-y-6 max-w-xl mx-auto ">
              <h1
                className=" text-2xl text-center sm:text-4xl font-semibold"
                data-aos="fade-up"
              >
                Download the app
              </h1>
              <p className=" text-center sm:px-0" data-aos="fade-down">
              Behind every successful person is a substantial amount of coffee.
              </p>
            </div>
            {/* image link */}
            <div className=" flex justify-center items-center gap-4">
              <a
                href="#"
                className=" max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                data-aos="fade-right"
              >
                <img src={AppStore} alt="" />
              </a>
              <a
                href="#"
                className=" max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                data-aos="fade-left"
              >
                <img src={PlayStore} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppBanner;
