import React from "react";
import BgImage from "../assets/bg-slate.png";
import BlackCoffee from "../assets/black.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Nav from "../section/Nav";

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};
const Hero = () => {
  const [sidebar, setSidebar] = React.useState(false);
  return (
    <>
      <main style={bgImage}>
        <section className=" relative min-h-[750px] w-full">
          <div className="container">
            {/* Navbar Section */}
            <Nav sidebar={sidebar} setSidebar={setSidebar} />
            {/* Hero Section */}
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px] ">
              {/* text content section */}
              <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
                <h1
                  data-aos="fade-down"
                  className=" text-7xl font-bold leading-tight ml-14 "
                >
                  Blvck Tumber
                </h1>
                <div className="relative" data-aos="fade-up">
                  <div className="relative z-10 space-y-4">
                    <h1 className="text-2xl">Black Lifestyle Lovers,</h1>
                    <p className=" text-sm leading-loose opacity-55">
                      "Life is that thing that begins after coffee. Good
                      morning!" “Coffee is the fuel that makes me start the day
                      with energy and determination.” “A cup of hot coffee is
                      like a caress for the soul, enveloping you with warmth and
                      comfort."
                    </p>
                  </div>
                  <div className="absolute -top-6 -left-10 w-[250px] h-[190px] bg-gray-700/25 "></div>
                </div>
              </div>
              {/* Hero Image section */}
              <div className=" relative">
                <img
                  src={BlackCoffee}
                  alt="blackcoffee"
                  data-aos="zoom-in"
                  className="relative z-40 h-[400px] md:h-[700px] img-shadow"
                />
                {/* orange cricle ring */}
                <div
                  data-aos="fade-up"
                  className=" h-[180px] w-[180px] absolute top-24 -right-16 border-primary border-[20px] rounded-full z-10"
                ></div>
                {/* big text section */}
                <div
                  className=" absolute -top-20 left-[200px] z-[1]"
                  data-aos="fade-left"
                >
                  <h1 className=" text-[140px] scale-150 font-bold text-darkGray/40 leading-none ">
                    Blvck Tumber
                  </h1>
                </div>
              </div>
              {/* third div section */}
              <div className=" hidden lg:block">
                <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
                  <h1 className="opacity-0 text-7xl font-bold leading-tight ml-14 ">
                    Blvck Tumber
                  </h1>
                  <div className="relative" data-aos="fade-up">
                    <div className="relative z-10 space-y-4">
                      <h1 className="text-2xl">Blvck Tumber</h1>
                      <p className=" text-sm leading-loose opacity-55">
                        Coffee hasn’t always received the attention it deserves.
                        In many Western countries especially, the beans were low
                        quality.Drinkers didn’t know or care about how coffee
                        was produced, bought or brewed.
                      </p>
                    </div>
                    <div className="absolute -top-6 -right-10 w-[250px] h-[190px] bg-darkGray/50 "></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* sidebar Menu section */}
          {sidebar && (
            <div
              data-aos="fade-left"
              className=" absolute top-0 right-0 w-[140px] h-full bg-gradient-to-b from-primary/80 to-primaryDark/80 backdrop-blur-sm z-50 "
            >
              <div className=" w-full h-full flex justify-center items-center">
                <div className=" flex flex-col justify-center items-center gap-6 text-white">
                  {/* line */}
                  <div className=" w-[1px] h-[70px] bg-white "></div>
                  {/* social icons */}
                  <div className=" inline-block p-2 rounded-full cursor-pointer border border-white">
                    <FaFacebookF className=" text-2xl" />
                  </div>
                  <div className=" inline-block p-2 rounded-full cursor-pointer border border-white">
                    <FaTwitter className=" text-2xl" />
                  </div>
                  <div className=" inline-block p-2 rounded-full cursor-pointer border border-white">
                    <FaInstagram className=" text-2xl" />
                  </div>
                  <div className=" w-[1px] h-[70px] bg-white "></div>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
    </>
  );
};

export default Hero;
